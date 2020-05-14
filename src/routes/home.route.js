const { HomeController } = require("../controllers");
const { Router } = require("express");
const router = Router();

router.get("", HomeController.index);

module.exports = router;
