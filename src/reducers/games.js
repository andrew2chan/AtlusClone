import {createSlice} from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        value: []
    },
    reducers: {
        updateGames: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateGames } = gamesSlice.actions;

export default gamesSlice.reducer;