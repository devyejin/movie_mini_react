import React from "react";
import { useSelector } from "react-redux";

export default function MyProfileLayout() {
  // 사용자 정보를 가져오고, 뿌려주기
  const { user } = useSelector((state) => state.auth);
  useSelector((state) => console.log(state)); //어떻게 뽑아낼지 모르겠다면, 상위 객체를 찍어보자
  const movieBookmarks = useSelector((state) => state.movieBookmark);
  //데이터가 안나오던 이유가, 딕셔너리 구조인데 map으로 인덱스처럼 돌려서

  return (
    <>
      <div>
        <div>{user.name}</div>
        <div>{user.id}</div>
      </div>
      {/* 찜한 영화 목록 보여주가 */}
      <h3>찜꽁한 영화!</h3>
      {/* Object라서 List로 변환 후 map으로 돌려야 함 어렵다!*/}
      {Object.entries(movieBookmarks).map((movie) => {
        const movieId = movie[0];
        const { title, posterURL } = movie[1]; //details가 담긴 객체
        return (
          <>
            <div key={movieId}>
              <div>{title}</div>
              <img src={posterURL} alt="" />
            </div>
          </>
        );
      })}
    </>
  );
}
