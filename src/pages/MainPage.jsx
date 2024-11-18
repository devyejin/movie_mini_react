import React, { useEffect, useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import MovieSection from '../components/movie/MovieSection';
import movieApi from '../api/movieApi';
import { addMovieGenres } from '../store/slices/movieGenreSlice';
import { useDispatch, useSelector } from 'react-redux'; //store reducer 사용, store 데이터 읽기

//MovieSection 나중으로...
//MainPage는 여러개의 MovieSection 구성
export default function MainPage() {
  const dispatch = useDispatch();
  // const genresCode = useSelector((state) => state.movieGenres); //store에 장르 코드 꺼내기
  // const [nowPlayings, setNowPlayings] = useState();

  const movieCategories = useSelector((state) => state.movieCategories); // store에서 상태 가져오기
  console.log(movieCategories);

  //useEffect는 콜 백 함수 받음 (장르별은 추후로...)
  // useEffect(() => {
  //   // 장르 code를 가져오기
  //   async function getGenreCode() {
  //     const data = await movieApi.getMoviesGenreKey();
  //     console.log(data);

  //     //가져온 데이터를 store에 저장
  //     dispatch(addMovieGenres(data));
  //   }
  //   getGenreCode(); //데이터 무한으로 가져오는거 useEffect를 안써서! (수정하기)
  // }, []);

  //now_Playing 데이터 데려오기 (MovieSection에서 하는게 맞는것같음)
  // useEffect(async () => {
  //   async function getNowPlayingMovie() {
  //     const data = await movieApi.getNowPlayingMovies();
  //     const sampleData = data.slice(0, 5);
  //     console.log(sampleData);
  //     setNowPlayings(sampleData);
  //   }
  //   getNowPlayingMovie();
  // }, []);

  //데이터 꺼내기

  //@TODO store로 옮기기

  return (
    <>
      {console.log(movieCategories)}
      {movieCategories.map((category) => {
        const { name, path } = category;
        return (
          <MovieSection path={path} key={name}>
            {name}
          </MovieSection>
        );
      })}
    </>
  );
}
