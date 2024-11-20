import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieGenreSlice";

const initialState = {
  // 테스트용 데이터
  // 탐색 기준 데이터가 무엇인지
  // 어떻게 저장하는게 속도가 빠를지는 더미데이터를 많이 밀어넣고 해야함
  // 데이터 저장 형식은 내가 정하기 나름 ( + 제약을 reducers 로 줌)
};

const movieBookMarkSlice = createSlice({
  name: "movieBookMark",
  initialState,
  reducers: {
    addMovieBookMark: (state, action) => {
      // console.log(action.payload);
      const { id, details } = action.payload; //데이터 형식의 자유도가 높다보니 고민이됨 제약사항을 걸지 않아도 될까 하는 생각이 들었음
      state[id] = details;
    },
  },
});

export const { addMovieBookMark } = movieBookMarkSlice.actions;
export default movieBookMarkSlice.reducer;

// {
//   "323" : {title : 'aadasd', imgURL : 'HTTP~~~~'},
//   "343 "
// }
