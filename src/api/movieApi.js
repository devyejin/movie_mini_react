import api from "./axios";
// @Todo : 예외처리

const movieApi = {
  //특정 장르, 평점순으로 가져오기
  getGenreMovies: async (genreId) => {
    const response = await api.get(
      `/3/discover/movie?with_genres=${genreId}&sort_by=vote_average_date.desc`
    );
    return response.data;
  },

  //GET : 특정 장르 영화
  getMoviesByCategories: async (category) => {
    const response = await api.get(`/3/movie/${category}`);
    return response.data.results;
  },

  //GET : 특정 영화 리뷰
  getMovieReviewById: async (movieId) => {
    const response = await api.get(`/3/movie/${movieId}/reviews`);
    return response.data.results;
  },

  //GET : 영화 디테일
  getMovieById: async (movieId) => {
    const response = await api.get(`/3/movie/${movieId}`);
    return response.data;
  },

  //
  fetchMoviesByQuery: async (query) => {
    const response = await api.get(`/3/search/movie`, {
      params: {
        query,
      },
    });
    return response.data.results;
  },
};

export default movieApi;
