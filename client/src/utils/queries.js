import { gql } from "@apollo/client";

export const QUERY_ALL_BOOKS = gql`
{
    books {
        _id
        name
        author {
            _id
            firstName
        }
    }
}
`;

export const QUERY_ALL_CHARACTERS = gql`
{
    characters {
        _id
        firstName
        lastName
        sex
        yearsLived
        role
        nameMeaning
        married
        image
        father {
            _id
            firstName
        }
        mother {
            _id
            firstName
        }
        spouse {
            _id
            firstName
        }
        children {
            _id
            firstName
        }
        brother {
            _id
            firstName
        }
        sister {
            _id
            firstName
        }
        otherNames
        book {
            _id
            name
            author
        }
        fullName
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
            firstName
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
                firstName
            }
        }
    }
}
`;