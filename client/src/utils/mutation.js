import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation addBook($name: String!, $author: String) {
    addBook(name: $name, author: $author) {
      book {
        _id
        name
        author
      }
    }
  }
`;
