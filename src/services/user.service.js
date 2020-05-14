const BaseService = require("./base.service");
const { verifyEntity } = require("../helpers");
const { UserRepository } = require("../repositories");

let _userRepository = null;

class UserService extends BaseService {
  constructor(UserRepository) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUserByName(username) {
    verifyEntity(username, {
      status: 400,
      message: "The entity has not been sent",
    });

    const user = await _userRepository.getUserByName(username);

    verifyEntity(user, {
      status: 404,
      message: "The user not found",
    });

    return user;
  }
}

module.exports = new UserService(UserRepository);
