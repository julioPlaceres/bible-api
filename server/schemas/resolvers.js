const { Book,
  Character,
  Event,
  Material,
  Place,
  River
} = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    },
    book: async (parent, { id }) => {
      return await Book.findById({ id });
    },
    characters: async () => {
      return await Character.find({});
    },
    character: async (parent, { id }) => {
      return await Character.findById({ id });
    },
    events: async () => {
      return await Event.find({});
    },
    event: async (parent, { id }) => {
      return await Event.findById({ id });
    },
    materials: async () => {
      return await Material.find({});
    },
    material: async (parent, { id }) => {
      return await Material.findById({ id });
    },
    places: async () => {
      return await Place.find({});
    },
    place: async (parent, { id }) => {
      return await Place.findById({ id });
    },
    rivers: async () => {
      return await River.find({});
    },
    river: async (parent, { id }) => {
      return await River.findById({ id });
    },
  },

  Mutation: {
    addBook: async ({ name, author }) => {
      const book = await Book.create({ name, author });
      return { book };
    },
    addCharacter: async ({ firstName, lastName, sex, yearsLived,
      role, nameMeaning, married, image, father, mother, spouse, children,
      brother, sister, otherNames, book }) => {
      const character = await Character.create({
        firstName, lastName, sex, yearsLived,
        role, nameMeaning, married, image, father, mother, spouse,
        children, brother, sister, otherNames, book
      });
      return { character };
    }
  },
};

module.exports = resolvers;
