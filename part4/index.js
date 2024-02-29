/** @format */

//The contents of the index.js file used for starting the application gets simplified as follows:
const app = require("./app"); // the actual Express application
const config = require("./utils/config");
const logger = require("./utils/logger");

app.listen(config.PORT, () => {
  logger.Information(`Server running on port ${config.PORT}`);
});

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
