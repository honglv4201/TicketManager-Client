import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      //   state.start = data.start;
    },
  },
});
