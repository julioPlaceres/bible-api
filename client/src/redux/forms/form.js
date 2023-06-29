import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        formData: {}
    },
    reducers: {
        setForm: (state, action) => {
            state.formData = action.payload
        },
    },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
