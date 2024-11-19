import React from "react";

export default function LoginPage() {

  //로그인 클릭시, 로그인 아닐땐 로그아웃으로
  function handleLoginClick() {
    
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
