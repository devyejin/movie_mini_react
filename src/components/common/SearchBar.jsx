import React, { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); //검색어 상태 관리
  const [isExpanded, setIsExpanded] = useState(false); //검색창 확장 상태 관리
  const [searchMovies, setSearchMovies] = useState([]);

  //검색어 입력창에 변화가 발생하면 검색창 확장
  const handleChange = (event) => {
    const query = event.target.value.trim();
    // console.log(query);
    if (query) {
      setSearchQuery(query);
      setIsExpanded(true); //검색창 확장
      console.log(isExpanded);
    } else {
      setIsExpanded(false);
    }
  };

  //검색어가 변경될 때 마다 데이터를 fetch
  useEffect(() => {
    // console.log(searchQuery);
    if (!searchQuery.trim()) return;

    const fetchSearchResults = async () => {
      try {
        const data = await movieApi.fetchMoviesByQuery(searchQuery);
        // console.log(data);
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="검색하는용도"
          // className={commonButtonClass}
          onChange={handleChange}
          value={searchQuery}
          onFocus={() => setIsExpanded(true)}
        />
        {/* Input창 확장 */}
        {isExpanded ? (
          //검색창 확장
          <div className="search-results">
            확장되는 창 확인
            <ul>
              {searchMovies.map((movie) => {
                const { title } = movie;
                return <li>{title}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
