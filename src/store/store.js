import { configureStore } from "@reduxjs/toolkit";
import movieGenreReducer from "./slices/movieGenreSlice";
import movieCategoriesReducer from "./slices/movieCategoriesSlice";
import authReducer from "./slices/authSlice";

//slice들 등록
const store = configureStore({
  reducer: {
    movieGenres: movieGenreReducer,
    movieCategories: movieCategoriesReducer,
    auth: authReducer,
  },
});

export default store;
