/** @format */

const mongoose = require("mongoose");
const personsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3, // Minimum length of 3 characters for the name
  },
  number: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Custom validator function to check phone number format
        return /^\d{2,3}-\d{7,}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Please use the format XX-XXXXXXX or XXX-XXXXXXX.`,
    },
  },
});

module.exports = mongoose.model("Person", personsSchema);
