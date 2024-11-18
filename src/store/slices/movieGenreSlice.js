import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const movieGenreSlice = createSlice({
  name: 'movieGenres',
  initialState,
  reducers: {
    addMovieGenres: (state, action) => {
      console.log(action.payload.genres);
      //기존값에 덮어씌워줘야 함
      state.push(action.payload.genres); //return 하면 immur Error발생 (리덕스 레듀서는 return을 허용하지 않음  )
    },
  },
});

export const { addMovieGenres } = movieGenreSlice.actions;
export default movieGenreSlice.reducer;
