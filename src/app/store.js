import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
