const { Book } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    },
    book: async (parent, { name }) => {
      return await Book.findOne({ name });
    },
  },

  Mutation: {
    addBook: async (parent, { name, author }) => {
      const book = await Book.create({ name, author });
      return { book };
    },
  },
};

module.exports = resolvers;
