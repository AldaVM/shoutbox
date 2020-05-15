const { AuthService } = require("../services");

let _authService = null;

class AuthController {
  constructor(AuthService) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createdUser = await _authService.signUp(body);
    return res.status(201).json({
      status: 201,
      message: "New user created",
      createdUser,
    });
  }

  async signIn(req, res) {
    const { body } = req;
    const creds = await _authService.signIn(body);
    return res.json({
      status: 200,
      message: "Send creds user",
      creds,
    });
  }
}

module.exports = new AuthController(AuthService);
