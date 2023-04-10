import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    name: "",
    author: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { setName, setAuthor } = bookSlice.actions;
export default bookSlice.reducer;
