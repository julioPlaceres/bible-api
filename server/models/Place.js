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
  location: [
    {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
  ],
  image: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  book: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const Place = model("place", placeSchema);

module.exports = Place;
