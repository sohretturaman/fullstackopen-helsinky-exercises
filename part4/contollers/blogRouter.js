/** @format */

const router = require("express").Router();
const Blog = require("../models/blog");
const { Information } = require("../utils/logger");
const ObjectId = require("mongoose").Types.ObjectId; // got object id  to check for id format from request
const { createCrudFuncs } = require("../serivces/index");
const BlogsCrud = createCrudFuncs(Blog);
const User = require("../models/user");

router.get("/", async (req, res) => {
  /*   BlogsCrud.getAll().then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send({ error: "no data found" });
    }
  }); */

  //const blogs = await BlogsCrud.getAll({}); // use async instead of promises

  try {
    const blogs = await Blog.find({}).populate("user", "username name _id");
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
/* 
router.post("/", async (req, res) => {
  const body = req.body;
  const user = await User.findById(body.user);
  console.log("user in post request", user);

  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    likes: req.body.likes,
    url: req.body.url,
    user: req.body.user,
  });

  // Check if title or url is missing
  if (!blog.title || !blog.url) {
    return res.status(400).json({ error: "Title or URL is missing" }); // Respond with 400 Bad Request
  }

  // Save the blog to the database
  const savedNote = await blog.save();
  user.blogs = user.blogs.concat(savedNote._id);
  await user.save();
  res.status(201).json(savedNote); // Respond with 201 Created
}); */

router.delete("/:id", async (req, res) => {
  //Implemented functionality for deleting a single blog post , used  async/await.
  const blogs = await Blog.find({});
  console.log("operation returned the following blogs", blogs);

  const response = await blogs[0].deleteOne();
  console.log("the first note is removed", response); // use async instead of promises
});

router.put("/api/blogs/:id", async (req, res) => {
  //Implemented functionality for updating the information of an individual blog post.

  try {
    const response = await Blog.updateOne(
      { _id: req.params.id },
      {
        $set: {
          likes: req.body.likes,
          author: req.body.author,
          url: req.body.url,
        },
        $currentDate: { lastModified: true },
      }
    );

    if (response) {
      res.send(200); // updated successfully
    }
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }
  const user = await User.findById(decodedToken.id);
  console.log("user in post request", user);
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    likes: req.body.likes,
    url: req.body.url,
    user: req.body.user,
  });

  if (!blog.title || !blog.url) {
    return res.status(400).json({ error: "Title or URL is missing" });
  }

  const savedNote = await blog.save();
  user.blogs = user.blogs.concat(savedNote._id);
  await user.save();
  res.status(201).json(savedNote);
});

module.exports = router;
