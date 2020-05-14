const startServer = require("./src/startup");
const { MONGO_URI } = require("./src/config");
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => startServer())
  .catch(console.error);
