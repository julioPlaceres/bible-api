const { Book } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    },
    book: async (parent, { bookName }) => {
      return await Book.findOne({ bookName });
    },
  },

  Mutation: {
    addBook: async (parent, { bookName, bookAuthor }) => {
      const book = await Book.create({ bookName, bookAuthor });
      return { book };
    },
  },
};

module.exports = resolvers;
