import { createSlice } from "@reduxjs/toolkit";
import { argentBankApi } from "../../api/ArgentBank";

//etat initial
const initialState = {
  token: null,
  isAuthentificated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthentificated = false;
      state.status = "idle";
      state.error = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(argentBankApi.endpoints.login.matchPending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addMatcher(
        argentBankApi.endpoints.login.matchFulfilled,
        (state, action) => {
          state.token = action.payload.token;
          state.isAuthentificated = true;
          state.status = "succeeded";
          state.error = action.error.message;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => !!state.auth.token;
export const selectAuthStatus = (state) => state.auth.statut;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
