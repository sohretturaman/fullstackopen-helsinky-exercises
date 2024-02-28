/** @format */

var data = require("../data");
const router = require("express").Router();

var requestTimeList = [];
router.get("/", (req, res) => {
  const requestTime = new Date();
  requestTimeList.push(requestTime);
  res.json({
    data: data,
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = data.find((person) => person.id === id);
  if (person) {
    res.status(200).json({
      message: "person successfully found",
    });
  } else {
    res.status(404).send("person not found");
  }
});

router.post("/", (req, res) => {
  const newId = Math.floor(Math.random() * 100);
  const newItem = { id: newId, name: req.body.name, number: req.body.number };

  console.log("new item data ", newItem);
  if (!newItem.name || !newItem.number) {
    return res.status(400).send("Missing name or number");
  }

  const isExist = data.find((person) => person.name === newItem.name);

  if (isExist) {
    return res.status(409).send("Name already exists in the phonebook");
  }

  data.push(newItem); // Push the new item to the data array
  res
    .status(201)
    .json({ message: "Person added successfully", person: newItem });
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
