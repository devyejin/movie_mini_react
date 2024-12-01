import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import movieApi from "../../api/movieApi";
import MovieCard from "../../components/movie/MovieCard";

//1차코드) 1page 데이터만 호출
export default function MovieSearchResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [searchMovies, setSearchMovies] = useState([]);

  //페이지 로딩 후 API 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieApi.fetchMoviesByQuery(query);
        console.log(data);
        setSearchMovies(data); // 데이터 정상 저장됨
      } catch (error) {
        console.error(error);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]); //query가 바뀔 때 마다 API 요청

  //검색 결과 랜더링

  const baseURL = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <ul className="movie-list">
      {searchMovies.map((movie) => {
        const { id, poster_path, release_date, title } = movie;

        const posterURL = baseURL + poster_path;
        const release_year = release_date.split("-")[0];

        return (
          <li key={id}>
            <MovieCard id={id} img={posterURL} release_year={release_year}>
              {title}
            </MovieCard>
          </li>
        );
      })}
    </ul>
  );
}
