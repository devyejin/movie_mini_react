import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch(); //reducer 함수를 사용할 때 이용
  const navigate = useNavigate();
  //로그인 클릭시, 로그인 아닐땐 로그아웃으로
  function handleLoginClick() {
    dispatch(login());
    navigate("/");
  }

  return (
    <form>
      <label htmlFor="username"></label>
      <input
        type="id"
        id="username"
        name="username"
        class="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name="password"
        class="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <input type="submit" value="로그인" onClick={handleLoginClick}></input>
    </form>
  );
}
