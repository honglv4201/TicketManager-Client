import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils";

const user = JSON.parse(localStorage.getItem("ticket-user"));

const initState = {
  user: user ? user._user : null,
  isLoading: false,
  isErr: false,
  isSuccess: false,
  msg: "",
};

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    const url = `${apiUrl}/signup`;
    const response = await axios.post(url, userData);
    console.log("hongdata", userData);
    console.log("hongdata1", response);
    if (response.data) {
      localStorage.setItem("ticket-user", JSON.stringify(response.data));
    }

    return response.data || response.response;
  } catch (error) {
    console.log("error when register: ", error);
    return error.message;
  }
});
export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    console.log(userData);
    const url = `${apiUrl}/signin`;
    const response = await axios.post(url, userData);
    if (response.data) {
      localStorage.setItem("ticket-user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    reset: (state) => {
      state.isErr = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.msg = "";
    },
    logOut: (state) => {
      state.user = null;
      state.isErr = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.msg = "";
      localStorage.removeItem("ticket-user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload || null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isErr = false;
        state.msg = action.payload;
        state.user = "dd";
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErr = false;
        state.user = action.payload;
      });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
