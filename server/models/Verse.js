const { Schema, model } = require("mongoose");

const verseSchema = new Schema({
  verseNumber: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Verse = model("Verse", verseSchema);

module.exports = Verse;
