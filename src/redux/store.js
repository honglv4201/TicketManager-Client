import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

import routeSlice from "../slices/routeSlice";

const store = configureStore({
  reducer: {
    routehaha: routeSlice.reducer,
    routeAuth: authSlice,
  },
});

export default store;
