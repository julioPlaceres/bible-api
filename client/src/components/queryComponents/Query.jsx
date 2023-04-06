import { useQuery } from "@apollo/client";
import { QUERY_ALL_BOOKS, QUERY_ALL_CHARACTERS } from "../../utils/queries";
import "./Query.css";

const jsonBody = (jsonObject, loading) => {
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <code>
                        <pre>
                            {JSON.stringify(jsonObject, null, "\t")}
                        </pre>
                    </code>
                </>
            )}
        </>
    );
}

export const GetAllBooks = () => {
    const { loading, data } = useQuery(QUERY_ALL_BOOKS);
    const books = data?.books || [];

    return jsonBody(books, loading);
}

export const GetAllCharacters = () => {
    const { loading, data } = useQuery(QUERY_ALL_CHARACTERS);
    const characters = data?.characters || [];

    return jsonBody(characters, loading);
}