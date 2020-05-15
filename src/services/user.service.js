const BaseService = require("./base.service");
const { verifyEntity, encryptPassword } = require("../helpers");
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

    return user;
  }

  async create(entity) {
    verifyEntity(entity, {
      status: 400,
      message: "The entity has not been sent",
    });

    const { username, password, email } = entity;

    const user = {
      username,
      email,
      password: encryptPassword(password),
    };

    return await this.respository.create(user);
  }
}

module.exports = new UserService(UserRepository);
