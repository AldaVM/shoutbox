const { CommentController } = require("../controllers");
const { catchAsync } = require("../middlewares");
const { Router } = require("express");
const router = Router();

router.get("/", catchAsync(CommentController.getAll));
router.get("/:idComment", catchAsync(CommentController.get));
router.post("/", catchAsync(CommentController.create));
router.put("/:idComment", catchAsync(CommentController.update));
router.delete("/:idComment", catchAsync(CommentController.delete));

module.exports = router;
