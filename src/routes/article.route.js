const { ArticleController } = require("../controllers");
const { catchAsync, authVerify } = require("../middlewares");
const { Router } = require("express");
const router = Router();

router.get("", catchAsync(ArticleController.getAll));
router.get("/:idArticle", catchAsync(ArticleController.get));
router.get(
  "/user/:idAuthor",
  [authVerify],
  catchAsync(ArticleController.getUserArticles)
);
router.post("/", [authVerify], catchAsync(ArticleController.create));
router.post(
  "/comment/:idArticle",
  [authVerify],
  catchAsync(ArticleController.addNewComment)
);
router.put("/:idArticle", [authVerify], catchAsync(ArticleController.update));
router.delete(
  "/:idArticle",
  [authVerify],
  catchAsync(ArticleController.delete)
);

module.exports = router;
