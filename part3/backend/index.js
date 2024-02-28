/** @format */
require("dotenv").config(); // to use password from .env file
var data = require("./data");
const express = require("express");
const requestLogger = require("./logger");
const cors = require("cors");
const mongoose = require("mongoose");
const ErrorMiddleware = require("./ErrorMiddleware");

const app = express();

app.use(cors());
app.use(requestLogger); //use middleware

app.use(express.json());

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

app.use(ErrorMiddleware); // should be under all routes and database intialization

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
