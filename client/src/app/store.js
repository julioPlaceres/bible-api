import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/forms/book";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
