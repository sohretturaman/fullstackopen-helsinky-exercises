/** @format */
require("dotenv").config(); // to use password from .env file

const router = require("express").Router();
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@phonebookapp.bsyflke.mongodb.net/?retryWrites=true&w=majority&appName=phonebookapp`;

mongoose.connect(uri);
const Person = require("../mongo");

router.get("/", (req, res) => {
  Person.find().then((result) => {
    // got data from  mongodb database!!
    console.log("persons is found in database", result);

    res.send(result);
  });
});

router.get("/:name", (req, res) => {
  const reqName = req.params.name;
  Person.find({ name: reqName }).then((result) => {
    console.log("result", result);
  });
  /*  
  if (person) {
    res.status(200).json({
      message: "person successfully found",
    });
  } else {
    res.status(404).send("person not found");
  } */
});

router.post("/", (req, res) => {
  const newItem = { name: req.body.name, number: req.body.number };

  console.log("new item data in post request ", newItem);

  Person.create(newItem)
    .then((result) => {
      console.log("result in post request", result);
      res
        .status(201)
        .json({ message: "Person added successfully", person: newItem });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/:id", (req, res) => {
  const reqId = Number(req.params.id);

  const person = data.find((person) => person.id === reqId);
  if (person) {
    data = data.filter((person) => person.id !== reqId);
    res.status(200).json({
      message: "person is successfully deleted",
      person: person,
    });
  } else {
    res.status(404).send("person not found");
  }
});

module.exports = router; //!!dont forget to export
