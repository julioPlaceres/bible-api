const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
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

const Place = model("place", placeSchema);

module.exports = Place;
