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
      const key = "isLoggedIn";

      try {
        storage = window["localStorage"]; //문자열로 접근해야 함
        storage.setItem(key, newState.isAuthenticated);
      } catch (error) {
        console.error("auth storage login error ", error);
      }

      return newState; //새로운 state를 반환해줘야 함!
    },

    logout: (state, action) => {
      const newState = { ...state, isAuthenticated: false }; //immer 라이브러리(redux내부에서) 덕분에 . 으로 바로 변경 가능
      let storage;
      const key = "isLoggedIn";

      try {
        storage = window["localStorage"];
        storage.removeItem(key);
      } catch (error) {
        console.error("auth storage logout error ", error);
      }

      return newState;
    },

    updateAuthState: (state, action) => {
      const newState = action.payload;
      console.log(newState);
      state.isAuthenticated = newState; //immer 라이브러리 덕에 새로운 객체로 교체하지 않아도 됨
    },
  },
});
//reducer는 export해 줘야 외부에서 사용(setter)

export const { login, logout, updateAuthState } = authSlice.actions;
export default authSlice.reducer;
