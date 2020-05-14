const BaseRepository = require("./base.repository");
const { UserModel } = require("../models");

let _userModel = null;

class UserRepository extends BaseRepository {
  constructor(UserModel) {
    super(UserModel);
    _userModel = UserModel;
  }

  async getUserByName(username) {
    return await _userModel.findOne({ username });
  }
}

module.exports = new UserRepository(UserModel);
