const { Router } = require("express");
const {
  HomeRoute,
  UserRoute,
  ArticleRoute,
  CommentRoute,
  AuthRoute,
} = require("./index.route");
const router = Router();

router.use("/home", HomeRoute);
router.use("/user", UserRoute);
router.use("/article", ArticleRoute);
router.use("/comment", CommentRoute);
router.use("/auth", AuthRoute);

module.exports = router;
