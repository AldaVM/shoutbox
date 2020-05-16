const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes/");
const { genericError, routeNoFound } = require("../middlewares");
const app = express();

//Config
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Config development
if (process.env.NODE_ENV !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

//Routes
app.use("/v1/api", routes);

//Middleware
app.use(routeNoFound);
app.use(genericError);

module.exports = app;
