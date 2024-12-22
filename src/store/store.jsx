import { configureStore } from '@reduxjs/toolkit';
import movieDbReducer from './movieDbSlice';

export const store = configureStore({
	reducer: {
        movieDbData: movieDbReducer
    },
});
