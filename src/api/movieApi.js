import api from "./axios";
// @Todo : 예외처리

//메인화면에서 각 장르별 영화 5개씩 출력
//https://api.themoviedb.org/3/discover/movie 장르, 최신 개봉일로 필터걸어서 가져오기
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const movieApi = {
  //장르 CODE 가져오기
  getMoviesGenreKey: async () => {
    const respoonse = await api.get(
      "/3/genre/movie/list?&language=ko=KR?&" + API_KEY
    );
    return respoonse.data;
  },

  //특정 장르, 평점순으로 가져오기
  getGenreMovies: async (genreId) => {
    const response = await api.get(
      `/3/discover/movie?with_genres=${genreId}&sort_by=vote_average_date.desc?&language=ko=KR?&` +
        API_KEY
    );
    return response.data;
  },

  getSpecificMovies: async (specific) => {
    const response = await api.get(
      `/3/movie/${specific}?&language=ko=KR?&` + API_KEY
    );
    return response.data.results;
  },

  getMovieDetails: async (movieId) => {
    const response = await api.get(
      `/3/movie/${movieId}/reviews?&language=ko=KR?&` + API_KEY
    );
    return response.data.results;
  },

  getMovie: async (movieId) => {
    const response = await api.get(`/3/movie/${movieId}?` + API_KEY);
    return response.data;
  },
};

export default movieApi;
