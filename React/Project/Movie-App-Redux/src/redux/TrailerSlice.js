// src/redux/TrailerSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk for fetching the trailer
export const fetchTrailer = createAsyncThunk(
  "trailer/fetchTrailer",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0fa9d94b072b5c497f3a9720acb86bc2`
      );
      const data = await response.json();

      // Find the first YouTube trailer
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      if (trailer) {
        return `https://www.youtube.com/embed/${trailer.key}`;
      } else {
        return null; // Return null if no trailer is found
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the slice
const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailerUrl: "",
    loading: false,
    error: null,
  },
  reducers: {
    clearTrailer: (state) => {
      state.trailerUrl = "";
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.loading = false;
        state.trailerUrl = action.payload;
      })
      .addCase(fetchTrailer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearTrailer } = trailerSlice.actions;

export default trailerSlice;
