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
        sex
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
        brother {
            _id
            name
        }
        sister {
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
        title
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