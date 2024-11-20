import { configureStore } from "@reduxjs/toolkit";
import movieGenreReducer from "./slices/movieGenreSlice";
import movieCategoriesReducer from "./slices/movieCategoriesSlice";
import authReducer from "./slices/authSlice";
import movieBookMarkReduce from "./slices/movieBookmarkSlice";

//slice들 등록
const store = configureStore({
  reducer: {
    movieGenres: movieGenreReducer,
    movieCategories: movieCategoriesReducer,
    auth: authReducer,
    movieBookmark: movieBookMarkReduce,
  },
});

export default store;
