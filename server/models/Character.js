const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
  },
  sex: {
    type: String,
    required: true,
    trim: true,
  },
  yearsLived: {
    type: Number,
    required: false,
  },
  role: {
    type: String,
    required: false,
    trim: true,
  },
  nameMeaning: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  married: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: {
    type: String,
    required: false,
    trim: true,
  },
  father: {
    type: Schema.Types.ObjectId,
    ref: "Character",
  },
  mother: {
    type: Schema.Types.ObjectId,
    ref: "Character",
  },
  spouse: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  brother: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  sister: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  otherNames: [
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

  fullName: String,
});

characterSchema.methods.setFullName = function () {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};

const Character = model("Character", characterSchema);

module.exports = Character;
