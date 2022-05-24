import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const user = JSON.parse(localStorage.getItem("ticket-user"));

const initState = {
  user: user ? user._user : null,
  isLoading: false,
  isErr: false,
  isSuccess: false,
  msg: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
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
      const msg = error.response.data.error || error.response.data.message;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const url = `${apiUrl}/signin`;
      const response = await axios.post(url, userData);
      if (response.data) {
        localStorage.setItem("ticket-user", JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      console.log("fail", error);
      const msg = error.response.data.error || error.response.data.message;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

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
        state.isErr = true;
        state.msg = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErr = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isErr = true;
        state.msg = action.payload;
      });
  },
});
export const { logOut, reset } = authSlice.actions;
export default authSlice.reducer;
