import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import citySlice from "../slices/citySlice";
import filterTicketSlice from "../slices/filterTicketSlice";

import routeSlice from "../slices/routeSlice";
import seatBookingSlice from "../slices/seatBookingSlice";
import tripSlice from "../slices/tripSlice";
import userTicketSlice from "../slices/userTicketSlice";

const store = configureStore({
  reducer: {
    routehaha: routeSlice.reducer,
    routeAuth: authSlice,
    trip: tripSlice,
    filter: filterTicketSlice,
    seatChoosing: seatBookingSlice,
    city: citySlice,
    userTicket: userTicketSlice,
  },
});

export default store;
