/** @format */

const router = require("express").Router();
const Blog = require("../models/blog");
const { Information } = require("../utils/logger");
const ObjectId = require("mongoose").Types.ObjectId; // got object id  to check for id format from request
const { createCrudFuncs } = require("../serivces/index");
const BlogsCrud = createCrudFuncs(Blog);

router.get("/", (req, res) => {
  BlogsCrud.getAll().then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send({ error: "no data found" });
    }
  });
});

router.get("/:id", (req, res, next) => {
  if (ObjectId.isValid(req.params.id) == false) {
    res.status(400).json({
      error: "given id object is not valid",
    });
  } else {
    BlogsCrud.getById(req.params.id)
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({
            error: `no record exist with ${req.body}`,
          });
        }
      })
      .catch((err) => {
        console.log("an err occured on get by id request", err);
        next(err);
      });
  }
});

router.post("/", (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    likes: req.body.likes,
    url: req.body.url,
  });

  blog.save().then((result) => {
    Information("data saved to mongodb");
    res.status(201).json(result);
  });
});

module.exports = router;
