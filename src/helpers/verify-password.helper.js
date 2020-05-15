const { compare } = require("bcryptjs");

module.exports = async (password, userPassword) => {
  const verify = await compare(password, userPassword);

  return verify;
};
