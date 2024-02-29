/** @format */

const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const blogsRouter = require("./contollers/blogRouter");

const connectDB = require("./utils/db");

const Blog = require("./models/blog");

logger.Information("connecting to", config.MONGODB_URI);

app.get("/api/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).send({ error: "could not find data" });
    });
});

connectDB(); //connect to mongodb

app.use(cors());
app.use(express.json());
app.use(middleware.requestMiddleware);

app.use("/api/blogs", blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app; //exported app to listen the port on index.js
