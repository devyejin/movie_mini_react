import React from "react";
import MenuLink from "./MenuLink";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // store에서 가져오기
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const commonButtonClass =
    " text-black px-4 py-2 rounded hover:bg-blue-600 shadow";

  return (
    <header className="flex flex-row items-center space-x-4">
      <MenuLink path={"/"} className={commonButtonClass}>
        {"메인페이지"}
      </MenuLink>

      <MenuLink path={"/my"} className={commonButtonClass}>
        {"마이페이지"}
      </MenuLink>

      <MenuLink path={"/movies"} className={commonButtonClass}>
        {"영화 상세페이지"}
      </MenuLink>

      {/* isAuthenticated가 false이면 로그인 페이지 버튼 보여주기 */}
      {!isAuthenticated && (
        <MenuLink path={"/auth/login"} className={commonButtonClass}>
          {"로그인 페이지"}
        </MenuLink>
      )}
      {isAuthenticated && (
        <button
          className={commonButtonClass}
          onClick={() => {
            dispatcher(logout());
            navigate("/");
          }}
        >
          {"로그아웃"}
        </button>
      )}
      <input
        type="text"
        placeholder="검색하는용도"
        className={commonButtonClass}
      />
    </header>
  );
}
