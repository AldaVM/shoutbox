const { AuthController } = require("../controllers");
const { catchAsync } = require("../middlewares");
const { Router } = require("express");
const router = Router();

router.post("/signup", catchAsync(AuthController.signUp));
router.post("/signin", catchAsync(AuthController.signIn));

module.exports = router;
