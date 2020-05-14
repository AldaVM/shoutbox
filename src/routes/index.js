const { Router } = require("express");
const { HomeRoute } = require("./index.route");
const router = Router();

router.use("/home", HomeRoute);

module.exports = router;
