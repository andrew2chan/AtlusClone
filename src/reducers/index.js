import newsReducer from './news';
import gamesReducer from './games';
import jobsReducer from './jobs';
import shopReducer from './shop';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        news: newsReducer,
        games: gamesReducer,
        jobs: jobsReducer,
        shop: shopReducer
    }
})