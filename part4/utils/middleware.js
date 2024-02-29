/** @format */

const { ErrorInfo, Information } = require("./logger");

//request logger infor comes form request not

const requestMiddleware = (req, res, next) => {
  Information("post adress", req.post);
  Information("request path", req.path);
  Information("request type", req.type);
  Information("request body", req.body);
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "endpoint is not found" });
  //sent response, no need next
};

const badRequest = (req, res) => {
  res.status(404).send({ error: "bad request " });
};

const errorHandler = (error, request, response, next) => {
  ErrorInfo(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = {
  requestMiddleware,
  unknownEndpoint,
  badRequest,
  errorHandler,
};
