const config = require("../config");
const app = require("./app");

function startServer() {
  app.listen(app.get("port"));
  console.log(`${config.APPLICATION_NAME} running in port ${app.get("port")}`);
}

module.exports = startServer;
