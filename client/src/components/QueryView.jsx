import { useQuery } from "@apollo/client";
import { QUERY_ALL_BOOKS } from "../utils/queries";

const GetAllBooks = () => {
  const { loading, data } = useQuery(QUERY_ALL_BOOKS);
  const books = data?.books || [];

  return (
    <div>
      <h1>List of Books</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {books.map((item) => {
            return <li key={item.name}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default GetAllBooks;
