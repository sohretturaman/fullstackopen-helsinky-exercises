/** @format */

module.exports = (err, req, res, next) => {
  if (err.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (err.name === "ValidationError") {
    return response.status(400).json({ error: err.message });
  } else {
    res
      .status(err.statusCode)
      .json({ errorCode: err.statusCode, error: err.message });
  }

  next(err);
};
