import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieGenreSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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
      //store에 저장
      const { id, details } = action.payload; //데이터 형식의 자유도가 높다보니 고민이됨 제약사항을 걸지 않아도 될까 하는 생각이 들었음
      state[id] = details;

      //localStorage(redix-persist)
      
    },
    //state는 store 현 상태
    removeMovieBookMark: (state, action) => {
      //해당 key 값을 찾아서 제거
      const id = action.payload;
      console.log(id);
      delete state[id]; // .id로 삭제해서 안됨, key니까 []로 접근해야 함
    },
  },
});

export const { addMovieBookMark, removeMovieBookMark } =
  movieBookMarkSlice.actions;
export default movieBookMarkSlice.reducer;
