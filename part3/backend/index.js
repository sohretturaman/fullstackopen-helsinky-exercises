/** @format */
require("dotenv").config(); // to use password from .env file
var data = require("./data");
const express = require("express");
const requestLogger = require("./logger");
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

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // Bad request (e.g., malformed JSON)
    console.error("400 Bad Request:", err.message);
    res.status(400).json({ error: "Bad Request 400" });
  } else if (err.status === 404) {
    res.status(404).json({ error: "The person is not Found 404" });
  } else {
    // Internal server error
    console.error("500 Internal Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error 500" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
