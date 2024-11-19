import React from "react";
import { useNavigate } from "react-router-dom";

// main 화면에서 영화 포스터, 제목 보여줄 때 사용할 컴포넌트
// MovieCard를 클릭하면, 영화 상세 페이지로 이동
export default function MovieCard({
  children,
  img,
  id,
  overview,
  vote_average,
}) {
  const navigate = useNavigate();
  console.log(id);

  function handleMovieClick() {
    navigate(`/movie/${id}`);
  }
  return (
    <>
      <li key={id} onClick={handleMovieClick}>
        <div>
          <img src={img}></img>
          <h6>{children}</h6>
          <span>{overview}</span>
          <span>{vote_average}</span>
        </div>
      </li>
    </>
  );
}
