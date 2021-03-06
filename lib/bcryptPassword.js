const bcrypt = require("bcryptjs");

module.exports = {
  createHash(password) {
    return new Promise(async (resolve, reject) => {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      resolve(hash);
      reject(new Error("Error creating hash"));
    });
  },
  checkPassword(password, hashedPassword) {
    return new Promise(async (resolve, reject) => {
      let isMatch = await bcrypt.compare(password, hashedPassword);
      resolve(isMatch);
      reject(new Error("Error matching password"));
    });
  }
};
