const { UserService } = require("../services");

let _userService = null;

class UserController {
  constructor(UserService) {
    _userService = UserService;
  }

  async getAll(req, res) {
    const users = await _userService.getAll();

    res.json({
      status: 200,
      message: "List users",
      users,
    });
  }

  async get(req, res) {
    const { idUser } = req.params;
    const user = await _userService.get(idUser);

    res.json({
      status: 200,
      message: "One user",
      user,
    });
  }

  async getUserByName(req, res) {
    const { userName } = req.params;

    const user = await _userService.getUserByName(userName);

    res.json({
      status: 200,
      message: "Get user by username",
      user,
    });
  }

  async create(req, res) {
    const { body } = req;

    const user = await _userService.create(body);

    res.status(201).json({
      status: 201,
      message: "New user created",
      user,
    });
  }

  async update(req, res) {
    const { idUser } = req.params;
    const { body } = req;

    const updatedUser = await _userService.update(idUser, body);

    res.json({
      status: 200,
      message: "User updated",
      updatedUser,
    });
  }

  async delete(req, res) {
    const { idUser } = req.params;

    const deleted = await _userService.delete(idUser);

    res.json({
      status: 200,
      message: "User deleted",
      deleted: deleted,
    });
  }
}

module.exports = new UserController(UserService);
