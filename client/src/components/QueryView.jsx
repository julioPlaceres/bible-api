import { useQuery } from "@apollo/client";
import { QUERY_ALL_BOOKS } from "../utils/queries";

const GetAllBooks = () => {

    const { loading, data } = useQuery(QUERY_ALL_BOOKS);


    return (
        <div>
            <h1>List of Books</h1>
        </div>
    );
}

export default GetAllBooks;
