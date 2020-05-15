const { generationToken, verifyEntity, verifyPassword } = require("../helpers");
const UserService = require("./user.service");
let _userService = null;

class AuthService {
  constructor(UserService) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;

    const userExist = await _userService.getUserByName(username);

    verifyEntity(!userExist, { status: 401, message: "User already exists" });

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;
    const userExist = await _userService.getUserByName(username);

    verifyEntity(userExist, { status: 401, message: "User not exists" });

    const verify = await verifyPassword(password, userExist.password);

    verifyEntity(verify, { status: 401, message: "password incorrect" });

    const userToEncode = {
      username: userExist.username,
      id: userExist._id,
    };

    const token = generationToken(userToEncode);

    return {
      token,
      user: userExist,
    };
  }
}

module.exports = new AuthService(UserService);
