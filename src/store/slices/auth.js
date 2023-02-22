import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isAuthorized: false,
  },
  reducers: {
    signup: (state, action) => {
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
    checkType: (state, action) => {
      state.isAuthorized = action.payload.access;
    },
  },
});

export const { signup, login, logout, checkType } = authSlice.actions;

export default authSlice.reducer;
