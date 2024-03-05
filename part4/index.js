/** @format */

const mongoose = require("mongoose");
const supertest = require("supertest");

const app = require("./app");

const api = supertest(app); // use supertest

// ...

//The contents of the index.js file used for starting the application gets simplified as follows:

/* const config = require("./utils/config");
const logger = require("./utils/logger");

app.listen(config.PORT, () => {
  logger.Information(`Server running on port ${config.PORT}`);
}); */

// "type": "module", ADD ON PACKAGE JSON TO CHANGE İMPORT STYLE

/**
 * mongoose
  .connect(config.MONGODB_URI)
  .then((res) => {
    logger.Information("connected to mongo db ");
  })
  .catch((err) => {
    logger.ErrorInfo("cannot connect to monto db", err);
  });
 */
