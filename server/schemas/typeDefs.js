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
    yearsLived: String
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
    characters: [Character]
    events: [Event]
    materials: [Material]
    places: [Place]
    rivers: [River]
    
    book(_id: ID!): Book
    character(_id: ID!): Character
    event(_id: ID!): Event
    material(_id: ID!): Material
    place(_id: ID!): Place
    river(_id: ID!): River 
  }

  type Mutation {
    addBook(name: String!, author: String): Book
    addCharacter(firstName: String!, lastName: String, sex: String!, 
      yearsLived: Int, role: String, nameMeaning: String, married: Boolean, 
      otherNames:[String]): Character
  }
`;

module.exports = typeDefs;
