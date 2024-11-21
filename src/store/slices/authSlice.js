import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieGenreSlice";

const initialState = {
  isAuthenticated: false,
  user: {
    name: "yejin",
    id: "yejin@naver.com",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //리듀서는 함수다!

    login: (state, action) => {
      // state.isAuthenticated = true; // 직접 state를 변경하면 React에서 상태 감지 불가, 버그 가능성 존재
      const newState = { ...state, isAuthenticated: true };

      let storage;

      try {
        storage = window["localStorage"]; //문자열로 접근해야 함
        const x = "isLoggedIn";
        storage.setItem(newState.isAuthenticated);
      } catch (error) {
        console.error("auth storage error ", error);
      }

      return newState; //새로운 state를 반환해줘야 함!
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});
//reducer는 export해 줘야 외부에서 사용(setter)

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
