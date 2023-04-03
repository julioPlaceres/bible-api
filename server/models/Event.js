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
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  location: [
    {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
  ],
  book: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
