/** @format */

const mongosee = require("mongoose");

const noteSchema = new mongosee.Schema({
  content: String,
  important: Boolean,
});

module.exports = mongosee.model("Note", noteSchema);
