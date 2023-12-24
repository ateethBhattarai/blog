const jwt = require("jsonwebtoken");

const setUser = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY);
};

module.exports = { setUser };
