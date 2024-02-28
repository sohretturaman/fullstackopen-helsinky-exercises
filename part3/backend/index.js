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

const insertData = async () => {
  //  await Person.deleteMany({}); To delete all data , it must me async , it returns a promise val

  try {
    // Check if there is any data already in the database
    const existingDataCount = await Person.countDocuments();

    // If there is no existing data, insert the initial data
    if (existingDataCount === 0) {
      await Person.insertMany(data);
      console.log("Initial data inserted successfully.");
    } else {
      console.log("Data already exists in the database. Skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

insertData();

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
