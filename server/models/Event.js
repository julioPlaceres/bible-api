const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  dateTime: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  characters: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  book: {
    type: String,
    required: true,
    trim: true,
  },
  chapter: {
    type: String,
    required: true,
    trim: true,
  },
  verse: {
    type: String,
    required: true,
    trim: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
