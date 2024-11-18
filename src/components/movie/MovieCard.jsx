import React from 'react';

// main 화면에서 영화 포스터, 제목 보여줄 때 사용할 컴포넌트
export default function MovieCard({ children, img, id }) {
  console.log(img);
  return (
    <>
      <div key={id}>
        <img src={img}></img>
        <h6>{children}</h6>
      </div>
    </>
  );
}
