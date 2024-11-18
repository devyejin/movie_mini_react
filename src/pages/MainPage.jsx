import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import GenreSection from '../components/movie/GenreSection';

//MainPage는 여러개의 GenreSection으로 구성
export default function MainPage() {
  return (
    <>
      <GenreSection></GenreSection>
      {/* <GenreSection></GenreSection>
      <GenreSection></GenreSection> */}
    </>
  );
}
