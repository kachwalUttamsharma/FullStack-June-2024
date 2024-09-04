import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default cartSlice;
