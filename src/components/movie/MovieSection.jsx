import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MenuLink from "../common/MenuLink";
import movieApi from "../../api/movieApi";

export default function MovieSection({ children, path }) {
  // console.log(path);
  //각 컴포넌트별로 useState는 독립적으로 사용됨
  const [sampleMovies, setSampleMovies] = useState();

  //데이터를 여기서 fetch
  useEffect(() => {
    async function getSpecificMovies(path) {
      const data = await movieApi.getSpecificMovies(path);
      // console.log(data);
      //data 5개 자르기
      const sampleData = data.slice(0, 5);
      setSampleMovies(sampleData);
    }
    getSpecificMovies(path);
  }, []);

  return (
    <>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h3>{children}</h3>
        <MenuLink path={`/movie/${path}`}>{"더보기..."}</MenuLink>
        <ul className="flex flex-row flex-wrap justify-between gap-5">
          {sampleMovies?.map((movie) => {
            const { poster_path, title, id } = movie;
            const baseURL = import.meta.env.VITE_IMG_BASE_URL;
            return (
              <MovieCard id={id} img={baseURL + poster_path}>
                {title}
              </MovieCard>
            );
          })}
        </ul>
      </div>
    </>
  );
}
