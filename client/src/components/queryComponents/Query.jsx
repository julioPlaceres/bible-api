import { useQuery } from "@apollo/client";
import {
  QUERY_ALL_BOOKS,
  QUERY_ALL_CHARACTERS,
  QUERY_ALL_EVENTS,
  QUERY_ALL_MATERIALS,
  QUERY_ALL_PLACES,
  QUERY_ALL_RIVERS,
} from "../../utils/queries";
import "./Query.css";

const jsonBody = (jsonObject, loading) => {
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <code>
            <pre>{JSON.stringify(jsonObject, null, "\t")}</pre>
          </code>
        </>
      )}
    </>
  );
};

export const GetAllBooks = () => {
  const { loading, data } = useQuery(QUERY_ALL_BOOKS);
  const books = data?.books || [];

  return jsonBody(books, loading);
};

export const GetAllCharacters = () => {
  const { loading, data } = useQuery(QUERY_ALL_CHARACTERS);
  const characters = data?.characters || [];

  return jsonBody(characters, loading);
};

export const GetAllEvents = () => {
  const { loading, data } = useQuery(QUERY_ALL_EVENTS);
  const events = data?.events || [];

  return jsonBody(events, loading);
};

export const GetAllMaterials = () => {
  const { loading, data } = useQuery(QUERY_ALL_MATERIALS);
  const materials = data?.materials || [];

  return jsonBody(materials, loading);
};

export const GetAllPlaces = () => {
  const { loading, data } = useQuery(QUERY_ALL_PLACES);
  const places = data?.places || [];

  return jsonBody(places, loading);
};

export const GetAllRivers = () => {
  const { loading, data } = useQuery(QUERY_ALL_RIVERS);
  const rivers = data?.rivers || [];

  return jsonBody(rivers, loading);
};
