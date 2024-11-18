import { configureStore } from '@reduxjs/toolkit';
import movieGenreReducer from './slices/movieGenreSlice';
import movieCategoriesReducer from './slices/movieCategoriesSlice';

//slice들 등록
const store = configureStore({
  reducer: {
    movieGenres: movieGenreReducer,
    movieCategories: movieCategoriesReducer,
  },
});

export default store;
