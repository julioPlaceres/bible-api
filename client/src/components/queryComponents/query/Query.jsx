import { useQuery } from "@apollo/client";
import { QUERY_ALL_BOOKS, QUERY_ALL_CHARACTERS } from "../../../utils/queries";
import "./Query.css";

export const GetAllBooks = () => {
    const { loading, data } = useQuery(QUERY_ALL_BOOKS);
    const books = data?.books || [];

    if (!loading) {
        console.log(books);
    }

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {books.map((item) => {
                        return (
                            <div key={item._id}>
                                <div>{item.name}</div>
                            </div>
                        )
                    })}
                </>
            )}
        </>
    );
}

export const GetAllCharacters = () => {
    const { loading, data } = useQuery(QUERY_ALL_CHARACTERS);
    const characters = data?.characters || [];

    if (!loading) {
        console.log(characters);
    }

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {characters.map((item) => {
                        return (
                            <div key={item._id}>
                                <div>{item.name}</div>
                            </div>
                        )
                    })}
                </>
            )}
        </>
    );
}