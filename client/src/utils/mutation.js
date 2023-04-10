import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation addBook($name: String!, $author: ID) {
    addBook(name: $name, author: $author) {
      book {
        _id
        name
        author {
          _id
          name
        }
      }
    }
  }
`;
