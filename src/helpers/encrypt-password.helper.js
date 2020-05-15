const { hashSync, genSaltSync } = require("bcryptjs");

module.exports = (password) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};
