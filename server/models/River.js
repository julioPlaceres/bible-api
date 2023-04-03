const { Schema, model } = require("mongoose");

const riverSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  location: {
    type: String,
    required: false,
    trim: true,
  },
});

const River = model("River", riverSchema);

module.exports = River;
