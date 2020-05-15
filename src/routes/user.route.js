const { UserController } = require("../controllers");
const { catchAsync } = require("../middlewares");
const { Router } = require("express");
const router = Router();

router.get("/", catchAsync(UserController.getAll));
router.get("/:idUser", catchAsync(UserController.get));
router.get("/:userName/username", catchAsync(UserController.getUserByName));
router.put("/:idUser", catchAsync(UserController.update));
router.delete("/:idUser", catchAsync(UserController.delete));

module.exports = router;
