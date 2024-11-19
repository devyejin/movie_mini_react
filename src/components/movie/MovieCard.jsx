import React from "react";

// main 화면에서 영화 포스터, 제목 보여줄 때 사용할 컴포넌트
// MovieCard를 클릭하면, 영화 상세 페이지로 이동
export default function MovieCard({ children, img, id }) {
  console.log(id);
  return (
    <>
      <li>
        <div key={id}>
          <img src={img}></img>
          <h6>{children}</h6>
        </div>
      </li>
    </>
  );
}
