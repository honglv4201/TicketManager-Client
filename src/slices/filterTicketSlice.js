import { createSlice } from "@reduxjs/toolkit";

const initState = {
  start: "everywhere",
  end: "everywhere",
  date: "everytime",
  filter: {},
};

const filterTicketSlice = createSlice({
  name: "filter",
  initialState: initState,
  reducers: {
    updateFiter: (state, action) => {
      state.start = action.payload.start || "everywhere";
      state.end = action.payload.end;
      state.date = action.payload.date;
    },
  },
});
export const { updateFiter } = filterTicketSlice.actions;

export default filterTicketSlice.reducer;
