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
      state.isAuthenticated = true;
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});
//reducer는 export해 줘야 외부에서 사용(setter)

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
