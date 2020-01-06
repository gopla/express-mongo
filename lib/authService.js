const jwt = require("jsonwebtoken");

module.exports = {
  authUser(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined;
    if (token) {
      jwt.verify(token, "inisecret", (err, payload) => {
        if (err) throw err;
        req.user = payload;
        next();
      });
    } else {
      res.sendStatus(403);
    }
  }
};
