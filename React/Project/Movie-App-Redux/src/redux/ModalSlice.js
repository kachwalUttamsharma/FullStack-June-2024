import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    selectedMovie: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.selectedMovie = action.payload;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.selectedMovie = null;
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice;
