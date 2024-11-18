import React from 'react';
import MovieCard from '../components/movie/MovieCard';

//Movie Detail에서는 영화 상세정보를 보여준다.
//영화 이미지, 제목, 평점, 후기
export default function MovieDetail() {
  return (
    <>
      <MovieCard></MovieCard>
      <div>리뷰들 뿌리기</div>
    </>
  );
}
