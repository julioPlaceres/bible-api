const { Schema, model } = require("mongoose");

const materialSchema = new Schema({
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
  source: [
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

const Material = model("material", materialSchema);

module.exports = Material;
