import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
};

// export const fetchProducts = () => {
//   return async function fetchProductThunk(dispatch) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(res?.data));
//       dispatch(setStatus(STATUSES.SUCCESS));
//     } catch (error) {
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// };

export const fetchProducts = createAsyncThunk("products", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res?.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUSES.LOADING,
  },
  //   reducers: {
  //     setProducts(state, action) {
  //       state.data = action.payload;
  //     },
  //     setStatus(state, action) {
  //       state.status = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// const { setStatus, setProducts } = productSlice.actions;
export default productSlice;
