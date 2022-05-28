import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "idie",
  currentWagon: 0,
  wagon: [
    {
      type: "",
      seat: [],
    },
  ],
};

const seatBookingSlice = createSlice({
  name: "seatBooking",
  initialState: initState,
  reducers: {
    addSeat: (state, action) => {
      if (state.wagon[state.currentWagon].seat.includes(action.payload))
        state.wagon[state.currentWagon].seat = state.wagon[
          state.currentWagon
        ].seat.filter((item) => item !== action.payload);
      else
        state.wagon[state.currentWagon].seat = [
          ...state.wagon[state.currentWagon].seat,
          action.payload,
        ];
    },
    removeSeat: (state, action) => {
      state.wagon[action.payload.wagon].seat = state.wagon[
        action.payload.wagon
      ].seat.filter((item) => item !== action.payload.seat);
    },
    checkSeat: (state, action) => {
      if (state.wagon[state.currentWagon].seat?.includes(action.payload))
        return true;
      return false;
    },
    setCurrentWagon: (state, action) => {
      state.currentWagon = action.payload;
    },
    setInitWagon: (state, action) => {
      state.wagon = [];
      let sum = action.payload - 1;
      while (sum > 0 && state.wagon.length < action.payload) {
        state.wagon.push({
          type:
            sum % 3 === 0
              ? "ngoi-mem-dieu-hoa"
              : sum % 3 === 1
              ? "nam-khoang-6"
              : "nam-khoang-4",
          seat: [],
        });
        sum -= 1;
      }
    },
  },
});

export const { addSeat, checkSeat, setCurrentWagon, setInitWagon, removeSeat } =
  seatBookingSlice.actions;
export default seatBookingSlice.reducer;
