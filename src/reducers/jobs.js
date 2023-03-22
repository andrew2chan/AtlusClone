import {createSlice} from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        value: []
    },
    reducers: {
        updateJobs: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updateJobs} = jobSlice.actions;

export default jobSlice.reducer;