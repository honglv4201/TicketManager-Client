import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

import routeSlice from "../slices/routeSlice";
import tripSlice from "../slices/tripSlice";

const store = configureStore({
  reducer: {
    routehaha: routeSlice.reducer,
    routeAuth: authSlice,
    trip: tripSlice,
  },
});

export default store;
