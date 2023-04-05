import { useQuery } from "@apollo/client";
import Select from "./Select";
import Button from "./Button";
import { QUERY_ALL_BOOKS } from "../utils/queries";
import "./QueryView.css";

const GetAllBooks = () => {
  const { loading, data } = useQuery(QUERY_ALL_BOOKS);
  const books = data?.books || [];
  const queryNames = ["QUERY_ALL_BOOKS", "QUERY_ALL_CHARACTERS"];
  const handleSearch = () => { };

  return (
    <div className="qv-col">
      <div className="qv-row qv-select-cont">
        <Select
          id="methodId"
          label="Select a Method"
          name="methodSelect"
          values={queryNames}
          onChange={handleSearch}
        />
        <Button label="Search" onClick={handleSearch} />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <p>
          {books.map((item) => {
            return (
              <>
                <p>{item.name}</p> <br />
              </>
            )
          })}
        </p>
      )}
    </div>
  );
};

export default GetAllBooks;
