import { useQuery } from "@apollo/client";
import { QUERY_ALL_CHARACTERS, QUERY_ALL_BOOKS } from "../../../utils/queries";

export const GetAllCharacters = () => {
  const { loading, data } = useQuery(QUERY_ALL_CHARACTERS);
  const characters = data?.characters || [];
  let charactersData = [];

  if (!loading) {
    characters.map((people) => {
      charactersData.push({ value: people._id, label: people.name });
    });
  }

  return charactersData;
};

export const GetAllBooks = () => {
  const { loading, data } = useQuery(QUERY_ALL_BOOKS);
  const books = data?.books || [];
  let booksData = [];

  if (!loading) {
    books.forEach((book) => {
      booksData.push({ value: book._id, label: book.name });
    });
  }

  return booksData;
};
