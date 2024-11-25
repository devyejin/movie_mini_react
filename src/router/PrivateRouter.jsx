import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const navigate = useNavigate();
  //권한 체크 (util로 분리하기)
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    // return <Navigate to=/auth></Navigate>

    useEffect(() => {
      console.log(isAuthenticated);
      navigate("/auth/login");
    });
    return null;
  }
  // 권한이 있으면 어떻게 자식으로 보내지?
  return children;
}

//jsx를 return하는 경우는 hook으로 안하는게 맞음
//구조: component > router 로 잡는게 좋을수도 있음