import { createSlice } from "@reduxjs/toolkit";

const initState = {
  seat: [],
};

const seatBookingSlice = createSlice({
  name: "seatBooking",
  initialState: initState,
  reducers: {
    addSeat: (state, action) => {
      if (state.seat.includes(action.payload))
        state.seat = state.seat.filter((item) => item !== action.payload);
      else state.seat = [...state.seat, action.payload];
    },
    checkSeat: (state, action) => {
      if (state.seat.includes(action.payload)) return true;
      return false;
    },
  },
});

export const { addSeat, checkSeat } = seatBookingSlice.actions;
export default seatBookingSlice.reducer;
