import { useQuery } from "@apollo/client";
import {
  QUERY_ALL_CHARACTERS,
  QUERY_ALL_BOOKS,
  QUERY_ALL_EVENTS,
  QUERY_ALL_MATERIALS,
  QUERY_ALL_PLACES,
  QUERY_ALL_RIVERS,
} from "../../../utils/queries";

export const GetAllCharacters = () => {
  const { loading, data } = useQuery(QUERY_ALL_CHARACTERS);
  const characters = data?.characters || [];
  let charactersData = [];

  if (!loading) {
    characters.forEach((character) => {
      charactersData.push({ value: character._id, label: character.name });
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

export const GetAllEvents = () => {
  const { loading, data } = useQuery(QUERY_ALL_EVENTS);
  const events = data?.events || [];
  let eventsData = [];

  if (!loading) {
    events.forEach((event) => {
      eventsData.push({ value: event._id, label: event.name });
    });
  }

  return eventsData;
};

export const GetAllMaterials = () => {
  const { loading, data } = useQuery(QUERY_ALL_MATERIALS);
  const materials = data?.materials || [];
  let materialsData = [];

  if (!loading) {
    materials.forEach((material) => {
      materialsData.push({ value: material._id, label: material.name });
    });
  }

  return materialsData;
};

export const GetAllPlaces = () => {
  const { loading, data } = useQuery(QUERY_ALL_PLACES);
  const places = data?.places || [];
  let placesData = [];

  if (!loading) {
    places.forEach((place) => {
      placesData.push({ value: place._id, label: place.name });
    });
  }

  return placesData;
};

export const GetAllRivers = () => {
  const { loading, data } = useQuery(QUERY_ALL_RIVERS);
  const rivers = data?.rivers || [];
  let riversData = [];

  if (!loading) {
    rivers.forEach((river) => {
      riversData.push({ value: river._id, label: river.name });
    });
  }

  return riversData;
};
