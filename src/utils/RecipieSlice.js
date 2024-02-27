import { createSlice } from "@reduxjs/toolkit";

const RecipieSlice = createSlice({
    name: "recipies",
    initialState: {
        recipieData: [],
    },
    reducers: {
        addData: (state, action) => {
            state.recipieData = action.payload
        }
    }
})

export const { addData } = RecipieSlice.actions;
export default RecipieSlice.reducer