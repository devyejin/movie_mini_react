import React from "react";
import { useSelector } from "react-redux";
import MovieSection from "../../components/movie/MovieSection";

export default function MovieSamplePage() {
  const movieCategories = useSelector((state) => state.movieCategories); // store에서 상태 가져오기
  // console.log(movieCategories);

  return (
    <>
      <div className="main-container">
        {/* {console.log(movieCategories)} */}
        {movieCategories.map((category) => {
          const { name, path } = category;
          return (
            <MovieSection path={path} key={name}>
              {name}
            </MovieSection>
          );
        })}
      </div>
    </>
  );
}
