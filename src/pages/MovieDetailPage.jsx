import React, { useState, useEffect } from "react";
import MovieCard from "../components/movie/MovieCard";
import movieApi from "../api/movieApi";
import { useParams } from "react-router-dom";

//Movie Detail에서는 영화 상세정보를 보여준다.
// https://api.themoviedb.org/3/movie/1084736/reviews?api_key=7597ee9dc2d7ad0cf75f546eb381f3be
//영화 이미지, 제목, 평점, 후기
export default function MovieDetailPage() {
  //막히면 큰 것을 봐라.
  const { id } = useParams(); // {id: '238'}
  console.log(id);

  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    //영화 정보 가져오기
    async function getMovie() {
      const movie = await movieApi.getMovie(id);
      setMovie(movie);
    }
    getMovie();

    //리뷰가져오기
    async function getMovieDetails() {
      const reviews = await movieApi.getMovieDetails(id);
      // console.log(reviews);
      setReviews(reviews);
    }
    getMovieDetails();
  }, []);

  const { title, overview, vote_average, poster_path } = movie;
  const baseURL = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <MovieCard
        img={baseURL + poster_path}
        overview={overview}
        vote_average={vote_average}
      >
        {title}
      </MovieCard>
      {reviews?.map((review) => {
        const { author, content, created_at } = review;
        return (
          <>
            <h4>{author}</h4>
            <h6>{created_at}</h6>
            <span>{content}</span>
          </>
        );
      })}
    </>
  );
}
