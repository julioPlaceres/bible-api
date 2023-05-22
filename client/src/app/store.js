import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/forms/book";
import characterReducer from "../redux/forms/characters";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    character: characterReducer,
  },
});
