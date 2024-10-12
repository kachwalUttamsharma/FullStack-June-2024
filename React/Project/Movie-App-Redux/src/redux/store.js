import { configureStore } from "@reduxjs/toolkit";
import PaginationSlice from "./PaginationSlice";
import MoviesSlice from "./MovieSlice";
import ModalSlice from "./ModalSlice";
import trailerSlice from "./TrailerSlice";
import WatchListSlice from "./WatchListSlice";

const store = configureStore({
  reducer: {
    PaginationSlice: PaginationSlice.reducer,
    MoviesSlice: MoviesSlice.reducer,
    ModalSlice: ModalSlice.reducer,
    TrailerSlice: trailerSlice.reducer,
    WatchListSlice: WatchListSlice.reducer,
  },
});
export default store;
