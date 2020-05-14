const config = require("../config");
const app = require("./app");

function startServer() {
  app.listen(app.get("port"));
  console.log(
    `${config.APPLICATION_NAME} corriendo en el puerto ${app.get("port")}`
  );
}

module.exports = startServer;
