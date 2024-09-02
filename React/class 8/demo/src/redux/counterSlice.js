import { createSlice } from "@reduxjs/toolkit";

// replacement for usestate
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export default counterSlice;

// [counterSlice, reducers] = useState("initialState")

// default value
// variable
// set update function
