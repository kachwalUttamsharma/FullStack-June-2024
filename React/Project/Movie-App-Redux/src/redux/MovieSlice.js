import { createSlice } from "@reduxjs/toolkit";

export const fetchMiddleWare = (params) => {
  return async function (dispatch) {
    console.log(params);
    try {
      dispatch(movieLoading(true));
      const resp = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1"
      );
      const moviesObj = await resp.json();
      dispatch(movieData(moviesObj.results));
    } catch (err) {
      dispatch(movieError());
    } finally {
      dispatch(movieLoading(false));
    }
  };
};

const MoviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    movies: null,
    error: false,
    loading: true,
  },
  reducers: {
    movieLoading: (state, action) => {
      state.error = false;
      state.loading = action.payload;
    },
    movieError: (state) => {
      state.error = true;
      state.loading = false;
    },
    movieData: (state, action) => {
      state.loading = false;
      state.error = false;
      state.movies = action.payload;
    },
  },
});

const { movieData, movieError, movieLoading } = MoviesSlice.actions;
export default MoviesSlice;
