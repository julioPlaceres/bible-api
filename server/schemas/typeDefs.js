const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    name: String
    author: String
  }

  type Character {
    _id: ID
    firstName: String
    lastName: String
    sex: String
    yearsLived: Int
    role: String
    nameMeaning: [String]
    married: Boolean
    image: [String]
    father: Character
    mother: Character
    spouse: [Character]
    children: [Character]
    brother: [Character]
    sister: [Character]
    otherNames: [String]
    book: [Book]
    fullName: String
  }

  type Event {
    _id: ID
    title: String
    dateTime: String
    description: String
    image: [String]
    characters: [Character]
    location: [Place]
    book: [Book]
  }

  type Material {
    _id: ID
    name: String
    description: String
    source: [Place]
    image: [String]
    book: [Book]
  }

  type Place {
    _id: ID
    name: String
    description: String
    location: [Place]
    image: [String]
    book: [Book]
  }

  type River {
    _id: ID
    name: String
    description: String
    location: [Place]
    image: [String]
    book: [Book]
  }

  type Query {
    books: [Book]
    book(bookName: String!): Book
  }

  type Mutation {
    addBook(bookName: String!, bookAuthor: String!): Book
  }
`;

module.exports = typeDefs;
