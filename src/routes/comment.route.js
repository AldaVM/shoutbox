const { CommentController } = require("../controllers");
const { catchAsync, authVerify } = require("../middlewares");
const { Router } = require("express");
const router = Router();

router.get("/:idComment", catchAsync(CommentController.get));
router.post("/", [authVerify], catchAsync(CommentController.create));
router.put("/:idComment", [authVerify], catchAsync(CommentController.update));
router.delete(
  "/:idComment",
  [authVerify],
  catchAsync(CommentController.delete)
);

module.exports = router;
