const jwt = require("jsonwebtoken");

module.exports = {
  signJWT(payload) {
    return new Promise(async (resolve, reject) => {
      const token = await jwt.sign({ data: payload }, "inisecret", {
        expiresIn: "1d"
      });
      resolve(token);
      reject(new Error("cannot sign token"));
    });
  }
};
