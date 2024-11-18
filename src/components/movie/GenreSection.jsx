import React from 'react';
import MovieCard from './MovieCard';
import MenuLink from '../common/MenuLink';

//GenreSection은 Genere에 대한 헤더랑, MovieCard컴포넌트로 구성
//프로토타입으로 우선 Card3개라 설정

//메뉴링크의 경우, 해당 링크 경로로 이동
export default function GenreSection() {
  return (
    <>
      <div>
        <h3>액션</h3>
        <MenuLink path={'movie/action'}>{'더보기'}</MenuLink>
        <div className="flex flex-row-reverse">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
}
