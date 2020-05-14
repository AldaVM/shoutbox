const { ArticleController } = require("../controllers");
const { catchAsync } = require("../middlewares");
const { Router } = require("express");
const router = Router();

router.get("/", catchAsync(ArticleController.getAll));
router.get("/:idArticle", catchAsync(ArticleController.get));
router.get("/user/:idAuthor/", catchAsync(ArticleController.getUserArticles));
router.post("/", catchAsync(ArticleController.create));
router.put("/:idArticle", catchAsync(ArticleController.update));
router.delete("/:idArticle", catchAsync(ArticleController.delete));

module.exports = router;
