const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    bookName: String
    bookAuthor: String
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
