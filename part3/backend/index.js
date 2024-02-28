/** @format */

var data = require("./data");
const express = require("express");
const requestLogger = require("./logger");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(requestLogger); //use middleware
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

app.use(morgan("tiny"));

const uri =
  "mongodb+srv://meryemsohret:Trusthim00.@fullstack.emnetky.mongodb.net/?retryWrites=true&w=majority&appName=fullstack";

mongoose.connect(uri);
const Person = require("./mongo");

const init = () => {
  Person.create({
    name: "Alya",
    number: "13648946546",
  });
};
init();

/* app.get("/", (req, res) => {
  res.json(data);
}); */

var requestTimeList = [];
app.get("/api/persons", (req, res) => {
  const requestTime = new Date();
  requestTimeList.push(requestTime);
  res.json({
    data: data,
  });
});

app.get("/api/persons/:id", (req, res) => {
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

app.post("/api/persons", (req, res) => {
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

app.delete("/api/persons/:id", (req, res) => {
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

app.get("/info", (req, res) => {
  const length = data.length;
  console.log("request time list", requestTimeList);

  res.json({
    message: `Phonebook has info for ${length} people`,
    requestTimeList: requestTimeList,
  });
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
/* 
GOT DATA FROM APİ WİTH HTTP SERVER
http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    //res.write("<h1>Hello World</h1>");
    res.end();
  })
  .listen(3001, () => {
    console.log("server is running on port 3001");
  });


  EDİTTED MORGAN 
  const EdittedMorgan = morgan(function (tokens, req, res) {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  }
});

//app.use(EdittedMorgan);
 */
