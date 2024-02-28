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

router.get("/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((result) => {
      if (result) {
        response.send(result);
      } else {
        response.status(404).end(); //end request
      }
    })
    .catch((error) => {
      console.log(error);
      next(error);
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

router.post("/", (req, res, next) => {
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
      next(error);
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  Person.findByIdAndDelete(id)
    .then((deletedPerson) => {
      if (deletedPerson) {
        res.json({
          message: "Person successfully deleted",
          person: deletedPerson,
        });
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    })
    .catch((error) => next(error));
});

module.exports = router; //!!dont forget to export
