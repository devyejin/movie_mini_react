import React, { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); //검색어 상태 관리
  const [isExpanded, setIsExpanded] = useState(false); //검색창 확장 상태 관리
  const [searchMovies, setSearchMovies] = useState([]);

  const dispatcher = useDispatch();

  const navigate = useNavigate();

  //데이터 정제할 메서드

  //검색어 입력창에 변화가 발생하면 검색창 확장
  const handleChange = (event) => {
    const query = event.target.value.trimStart();

    setSearchQuery(query); //state

    if (query) {
      setIsExpanded(true); //검색창 확장
    
    } else {
      setIsExpanded(false);
    }
  };

  function getMovieReleasYear(release_year) {
    // console.log(release_year.split("-")[0]);
    // return release_year.split("-")[0];
  }

  //검색어가 변경될 때 마다 데이터를 fetch
  useEffect(() => {
    // console.log(searchQuery);
    if (!searchQuery.trim()) return;

    const fetchSearchResults = async () => {
      try {
        const data = await movieApi.fetchMoviesByQuery(searchQuery);
        // console.log(data);
        // 여기서 state에 set하지 않고 메서드에서 처리
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  //엔터, 버튼으로 submit 제출시
  const handleSubmit = (event) => {
    event.preventDefault(); //submit 기본 이벤트 방지

    setIsExpanded(false);

    if (!searchQuery.trim().length) {
      alert("검색어를 입력하세요.");
      return;
    }

    if (searchQuery.trim()) {
      navigate(`/movie/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); //input창 비우기
    }
  };

  const handleClick = (id) => {
    setIsExpanded(false);
    navigate(`/movie/detail/${id}`);
  };

  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="search"
            placeholder="검색하는용도"
            autoComplete="on"
            // className={commonButtonClass}
            onChange={handleChange}
            value={searchQuery}
            onFocus={() => setIsExpanded(true)}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      {/* Input창 확장 */}

      {isExpanded ? (
        //검색창 확장
        <div
          className="search-results"
          onMouseLeave={() => setIsExpanded(false)}
        >
          <ul>
            {searchMovies.map((movie) => {
              //데이터 정제하는 작업은 별도의 함수로 분리(추후)
              const { title, id, release_date } = movie;
              const year = release_date.split("-")[0];

              return (
                <li key={id} onClick={() => handleClick(id)}>
                  {title} ({year})
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}
