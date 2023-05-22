import { gql } from "@apollo/client";

export const QUERY_ALL_BOOKS = gql`
  query getBooks {
    books {
      _id
      name
      author {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_CHARACTERS = gql`
  query getCharacters {
    characters {
      _id
      name
      gender
      yearsLived
      role
      nameMeaning
      married
      image
      father {
        _id
        name
      }
      mother {
        _id
        name
      }
      spouse {
        _id
        name
      }
      children {
        _id
        name
      }
      siblings {
        _id
        name
      }
      otherNames
      book {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  {
    events {
      _id
      name
      dateTime
      description
      image
      characters {
        _id
        name
      }
      location {
        _id
        name
      }
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

export const QUERY_ALL_MATERIALS = gql`
  {
    materials {
      _id
      name
      description
      source {
        _id
        name
      }
      image
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

export const QUERY_ALL_PLACES = gql`
  {
    places {
      _id
      name
      description
      location {
        _id
        name
      }
      image
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

export const QUERY_ALL_RIVERS = gql`
  {
    rivers {
      _id
      name
      description
      location {
        _id
        name
      }
      image
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
