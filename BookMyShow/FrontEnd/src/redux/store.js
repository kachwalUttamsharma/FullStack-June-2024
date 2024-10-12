import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loaderSlice";
import usersReducer from "./userSlice";

const store = configureStore({
  reducer: {
    loader: loadersReducer,
    user: usersReducer,
  },
});

export default store;
