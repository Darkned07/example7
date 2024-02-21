import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  errors: null,
  isPending: false,
  isAuthReady: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    errors: (state, { payload }) => {
      state.errors = payload;
    },
    isPending: (state, { payload }) => {
      state.isPending = payload;
    },
    isAuthReady: (state) => {
      state.isAuthReady = true;
    },
  },
});

export default authSlice.reducer;
export const { login, errors, isPending, isAuthReady } = authSlice.actions;
