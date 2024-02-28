/** @format */
require("dotenv").config(); // to use password from .env file
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

const personsRouter = require("./routes/PersonsRoute");
app.use("/api/persons", personsRouter);

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@phonebookapp.bsyflke.mongodb.net/?retryWrites=true&w=majority&appName=phonebookapp`;

mongoose.connect(uri);
const Person = require("./mongo");
const Note = require("./models/noteModel");

const init = () => {
  Note.create({
    title: "new note title",
    content: "new note content ",
  });
  Person.create({
    name: "Alya",
    number: "13648946546",
  });
};
init();

/* app.get("/", (req, res) => {
  res.json(data);
}); */

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
