const { Router } = require("express");
const {
  HomeRoute,
  UserRoute,
  ArticleRoute,
  CommentRoute,
} = require("./index.route");
const router = Router();

router.use("/home", HomeRoute);
router.use("/user", UserRoute);
router.use("/article", ArticleRoute);
router.use("/comment", CommentRoute);

module.exports = router;
