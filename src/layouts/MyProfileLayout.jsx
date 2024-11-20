import React from "react";
import { useSelector } from "react-redux";

export default function MyProfileLayout() {
  // 사용자 정보를 가져오고, 뿌려주기
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div>{user.name}</div>
      <div>{user.id}</div>
      <div></div>
    </>
  );
}
