import { useQuery } from "@apollo/client";
import { QUERY_ALL_CHARACTERS } from "../../../utils/queries";

export const GetAllCharacters = () => {
    const { loading, data } = useQuery(QUERY_ALL_CHARACTERS);
    const characters = data?.characters || [];
    let charactersData = [];

    if (!loading) {
        characters.map((people) => {
            charactersData.push({ value: people._id, label: people.name });
        })
    };

    return charactersData;
};