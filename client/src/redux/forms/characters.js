import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    name: "",
    gender: "",
    yearsLived: 0,
    role: "",
    nameMeaning: "",
    married: false,
    image: null,
    father: "",
    mother: "",
    spouse: [""],
    children: [""],
    siblins: [""],
    otherNames: [""],
    bookName: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setYearsLived: (state, action) => {
      state.yearsLived = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setNameMeaning: (state, action) => {
      state.nameMeaning = action.payload;
    },
    setMarried: (state, action) => {
      state.married = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setFather: (state, action) => {
      state.father = action.payload;
    },
    setMother: (state, action) => {
      state.mother = action.payload;
    },
    setSpouse: (state, action) => {
      state.spouse = action.payload;
    },
    setChildren: (state, action) => {
      state.children = action.payload;
    },
    setSiblins: (state, action) => {
      state.siblins = action.payload;
    },
    setOtherNames: (state, action) => {
      state.otherNames = action.payload;
    },
    setBookName: (state, action) => {
      state.bookName = action.payload;
    },
  },
});

export const {
  setName,
  setGender,
  setYearsLived,
  setRole,
  setNameMeaning,
  setMarried,
  setImage,
  setFather,
  setMother,
  setSpouse,
  setChildren,
  setSiblins,
  setOtherNames,
  setBookName,
} = characterSlice.actions;
export default characterSlice.reducer;
