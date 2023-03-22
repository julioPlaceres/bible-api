const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  bookAuthor: {
    type: String,
    required: true,
    trim: true,
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
