import React, { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  // store에서 가져오기
  const { isAuthenticated } = useSelector((state) => state.auth);
  // console.log(isAuthenticated);
  const dispatcher = useDispatch();

  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false); //검색창 확장 상태
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //submit 기본 이벤트 방지

    if (!searchQuery.trim().length) {
      alert("검색어를 입력하세요.");
      return;
    }

    if (searchQuery.trim()) {
      navigate(`/movie/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); //input창 비우기
    }
  };

  const commonButtonClass =
    " text-black px-4 py-2 rounded hover:bg-blue-600 shadow";

  return (
    // <header className="flex flex-row items-center space-x-4 sticky"></header>
    <header className="header">
      <div className="top-row">
        <MenuLink path={"/"} className={commonButtonClass}>
          {"메인페이지"}
        </MenuLink>
        {isAuthenticated && (
          <MenuLink path={"/my"} className={commonButtonClass}>
            {"마이페이지"}
          </MenuLink>
        )}
        <MenuLink path={"/movie/top_rated"} className={commonButtonClass}>
          {"Top Rated"}
        </MenuLink>
        <MenuLink path={"/movie/popular"} className={commonButtonClass}>
          {"Popular"}
        </MenuLink>
        <MenuLink path={"/movie/now_playing"} className={commonButtonClass}>
          {"Now Playing"}
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
        {/* 
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="검색하는용도"
            className={commonButtonClass}
            onChange={handleChange}
            value={searchQuery}
          />
          <button type="submit">검색</button>
        </form> */}
        <SearchBar></SearchBar>
      </div>
    </header>
  );
}
