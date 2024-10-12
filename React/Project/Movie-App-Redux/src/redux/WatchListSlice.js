import { createSlice } from "@reduxjs/toolkit";

const WatchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: [],
    genreList: ["All Genre"],
    currGenre: "All Genre",
    search: "",
  },
  reducers: {
    setWatchList(state, action) {
      state.watchList = action.payload;
    },
    addToWatchList(state, action) {
      state.watchList.push(action.payload);
    },
    removeFromWatchList(state, action) {
      state.watchList = state.watchList.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setGenreList(state, action) {
      state.genreList = action.payload;
    },
    setCurrGenre(state, action) {
      state.currGenre = action.payload;
    },
    sortWatchListByRating(state, action) {
      state.watchList = state.watchList
        .slice()
        .sort((a, b) =>
          action.payload === "asc"
            ? a.vote_average - b.vote_average
            : b.vote_average - a.vote_average
        );
    },
  },
});

export const {
  setWatchList,
  addToWatchList,
  removeFromWatchList,
  setSearch,
  setGenreList,
  setCurrGenre,
  sortWatchListByRating,
} = WatchListSlice.actions;

export default WatchListSlice;
