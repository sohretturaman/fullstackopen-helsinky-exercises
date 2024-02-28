/** @format */

const mongoose = require("mongoose");

const personsSchema = new mongoose.Schema({
  name: String,
  number: String,
});

module.exports = mongoose.model("persons", personsSchema);
