const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "abhary", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;