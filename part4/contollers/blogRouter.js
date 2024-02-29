/** @format */

const router = require("express").Router();

const Blog = require("../models/blog");
const mongoose = require("mongoose");
const { Information } = require("../utils/logger");

router.get("/", (req, res) => {
  res.send("welcome to blogs page ");
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
