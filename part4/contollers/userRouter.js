/** @format */

const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { username, password, name, blogs } = req.body;
  console.log("blogs in userRouter", blogs);
  if (!username || !password || !name) {
    return res
      .status(400)
      .json({ error: "Username, password, and name are required" });
  }
  if (username.lengths < 3 || password.length < 3 || name.length < 3) {
    return res.status(400).json({
      error: "Username, password, and name are not invaild try agin ",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      name,
      blogs,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: "Bad Request " });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({}).populate("blogs"); // get all blogs of user , populate it
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = userRouter;
