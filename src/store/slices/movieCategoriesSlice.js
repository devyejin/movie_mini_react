import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Top rated",
    path: "top_rated",
  },
  {
    name: "Popular",
    path: "popular",
  },
  {
    name: "Now Playing",
    path: "now_playing",
  },
];

// const initialState = {
//   category : [],
//   likedMovie : {}
// }

const movieCategoriesSlice = createSlice({
  name: "movieCategories",
  initialState,
  reducers: {},
});

export default movieCategoriesSlice.reducer;
//createSlice 시, state(상태)와 reducers(상태 변경 로직)를 바탕으로 리듀서 함수가 만들어짐
//즉, 해당 리듀서 함수를 export한다
//(state, action) => newState 와 같은 형태
