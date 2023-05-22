import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    name: "",
    dateTime: "",
    description: "",
    image: null,
    characters: [""],
    location: "",
    bookName: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDateTime: (state, action) => {
      state.dateTime = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBookName: (state, action) => {
      state.bookName = action.payload;
    },
  },
});

export const {
  setName,
  setDateTime,
  setDescription,
  setImage,
  setCharacters,
  setLocation,
  setBookName,
} = eventSlice.actions;
export default eventSlice.reducer;
