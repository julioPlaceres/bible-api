import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/forms/book";
import characterReducer from "../redux/forms/characters";
import eventReducer from "../redux/forms/event";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    character: characterReducer,
    event: eventReducer,
  },
});
