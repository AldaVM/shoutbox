const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.json({
      status: 400,
      message: "Token has not been sent",
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.json({
        status: 401,
        message: "Token is invalid",
      });
    }

    req.user = decodedToken.user;
    next();
  });
};
