import { configureStore } from "@reduxjs/toolkit";
import movieGenreReducer from "./slices/movieGenreSlice";
import movieCategoriesReducer from "./slices/movieCategoriesSlice";
import authReducer from "./slices/authSlice";
import movieBookMarkReduce from "./slices/movieBookmarkSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage에 저장
import { combineReducers } from "@reduxjs/toolkit";
/**
 * @TODO redux-persist 설정 분리, 분리했다가 에러나서 우선은 합침
 */

//slice들 등록
// const store = configureStore({
//   reducer: {
//     movieGenres: movieGenreReducer,
//     movieCategories: movieCategoriesReducer,
//     auth: authReducer,
//     movieBookmark: movieBookMarkReduce,
//   },
// });

const rootReducer = combineReducers({
  movieGenres: movieGenreReducer,
  movieCategories: movieCategoriesReducer,
  auth: authReducer,
  movieBookmark: movieBookMarkReduce,
});

//persist configure
const persistConfig = {
  key: "root",
  storage, //localStorage사용
};

//persisted reducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store 생성
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//persistr 생성
const persistor = persistStore(store);

export { store, persistor }; // export deefault로 내보내면 하나밖에 못보냄
