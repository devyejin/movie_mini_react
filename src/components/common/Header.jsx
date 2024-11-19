import React from "react";
import MenuLink from "./MenuLink";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";

export default function Header() {
  // store에서 가져오기
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatcher = useDispatch();

  return (
    <header>
      <div>
        <MenuLink path={"/"}>{"메인페이지"}</MenuLink>
      </div>
      <div>
        <MenuLink path={"/my"}>{"마이페이지"}</MenuLink>
      </div>
      <div>
        <MenuLink path={"/movies"}>{"영화 상세페이지"}</MenuLink>
      </div>
      {/* isAuthenticated가 false이면 로그인 페이지 버튼 보여주기 */}
      {!isAuthenticated && (
        <div>
          <MenuLink path={"/auth/login"}>{"로그인 페이지"}</MenuLink>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <button
            onClick={() => {
              dispatcher(logout());
            }}
          >
            {"로그아웃"}
          </button>
        </div>
      )}
      <input type="text" placeholder="검색하는용도" />
    </header>
  );
}
