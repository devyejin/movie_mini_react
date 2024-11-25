import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/movieApi";
import MovieCard from "../../components/movie/MovieCard";

export default function MovieListPage() {
  // 카테고리별로 다른 데이터를 출력
  // http://localhost:5173/popular
  // 카테고리에서 분류를 뽑아내고, 데이터를 찾아내고, 출력
  const { category } = useParams();
  console.log(category);
  //useState에 데이터 저장
  const [movies, setMovies] = useState([]);

  //콜백함수!!!!!!
  //데이터가 변경됐을 수도 있으니까 다시 불러오고 뿌리기
  useEffect(() => {
    async function getMovieLists(category) {
      const data = await movieApi.getMoviesByCategories(category);
      // console.log(data);
      setMovies(data);
    }
    getMovieLists(category);
  }, []);

  return (
    <>
      {movies?.map((movie) => {
        const { poster_path, title, id } = movie;
        const baseURL = import.meta.env.VITE_IMG_BASE_URL;

        return (
          <ul>
            <MovieCard id={id} img={baseURL + poster_path}>
              {title}
            </MovieCard>
          </ul>
        );
      })}
    </>
  );
}
