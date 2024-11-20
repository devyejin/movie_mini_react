import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movie/MovieCard";
import movieApi from "../../api/movieApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieBookMark,
  removeMovieBookMark,
} from "../../store/slices/movieBookmarkSlice";

//Movie Detail에서는 영화 상세정보를 보여준다.
// https://api.themoviedb.org/3/movie/1084736/reviews?api_key=7597ee9dc2d7ad0cf75f546eb381f3be
//영화 이미지, 제목, 평점, 후기
export default function MovieDetailPage() {
  //막히면 큰 것을 봐라.
  const { id } = useParams(); // {id: '238'}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookmarks = useSelector((state) => state.movieBookmark); //이건 변화 반영됨
  console.log(bookmarks);
  const { isAuthenticated } = useSelector((state) => state.auth);

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

  const { title, overview, vote_average, poster_path } = movie; // 데이터 무결성 생각하면 movie에 있는 id값을 다시 뽑는게 맞는것같은데 params랑 겹침
  const baseURL = import.meta.env.VITE_IMG_BASE_URL;
  const posterURL = baseURL + poster_path;

  //북마크에 있는 영화인지 확인 후, 맞다면 빨간 하트
  const isBookmarked = Object.keys(bookmarks).includes(id);
  console.log(isBookmarked);

  //찜을 한다면, bookmarkSlice에 title, poster를 저장
  function handleOnClickBookMark() {
    //로그인 한 경우에만 저장가능하도록
    //로그인 안 한 경우 -> 로그인 페이지로 이동시킨다.

    if (!isAuthenticated) {
      alert("로그인 후 사용 가능한 기능입니다.");
      navigate("/auth/login");
    }

    // console.log(isBookmarked);
    //북마크에 저장된 영화라면 빼기
    if (isBookmarked) {
      //key값을 보낸다 -> store에서 해당 key값을 제거한다.
      dispatch(removeMovieBookMark(id));
    }

    //북마크에 저장된 영화가 아닌데 -> 하트를 클릭 -> 북마크 store에 추가
    if (!isBookmarked) {
      dispatch(
        addMovieBookMark({
          id: id,
          details: { title, posterURL }, // 단축 프로퍼티
        })
      );
    }
  }

  return (
    <>
      <MovieCard
        img={posterURL}
        overview={overview}
        vote_average={vote_average}
        id={id}
      >
        {title}
      </MovieCard>
      {/* 찜을 하면 마이페이지에 영화를 넣어라 -> store 리덕스 persistence 이용해서 저장해줘야 쿠키나 세션 아이디 저장 가능*/}
      {/* 찜인 상태에서는 빨간 하트, 아닌 경우에는 흰색 하트 */}
      <button
        style={{ width: 200, height: 60, fontSize: 60 }}
        onClick={handleOnClickBookMark}
      >
        {" "}
        {isAuthenticated ? (isBookmarked ? "❤️" : "🤍") : "🤍"}
      </button>
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

// store = {
//           '363' : { title : '니모를 찾아서' , content : '블라블라', score : '9' },
//           '696' : { title : '니모를 찾아서2' , content : '블라블라22', score : '8'},
//         }
