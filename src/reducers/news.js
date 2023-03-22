import {createSlice} from '@reduxjs/toolkit';

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        value: []
    },
    reducers: {
        updateNews: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateNews } = newsSlice.actions;

export default newsSlice.reducer;