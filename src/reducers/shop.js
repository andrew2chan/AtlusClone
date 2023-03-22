import {createSlice} from '@reduxjs/toolkit';

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value: []
    },
    reducers: {
        updateShop: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateShop } = shopSlice.actions;

export default shopSlice.reducer;