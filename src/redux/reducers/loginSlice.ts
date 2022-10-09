import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "../../utils/constants";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginState {
  loading: "IDLE" | "PENDING" | "FULFILLED" | "REJECTED";
  error: unknown;
  user: IUser | null;
}

interface Credentials {
  email: string;
  password: string;
}

const initialState = {
  loading: "IDLE",
  error: null,
  user: null,
} as LoginState;

const namespace = "login";

export const loginUser = createAsyncThunk(
  `${namespace}/loginUser`,
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      // Make http request via axios/fetch
      const response = await fetch("auth/login");
      return response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: `${namespace}`,
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
      // Clear local storage
    },
    resetLoginError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = HTTP_STATUS.PENDING;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser, logout, resetLoginError } = loginSlice.actions;

export default loginSlice.reducer;
