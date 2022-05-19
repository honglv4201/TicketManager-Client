import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "../slices/routeSlice";

const store = configureStore({
  reducer: {
    routehaha: routeSlice.reducer,
  },
});

export default store;
