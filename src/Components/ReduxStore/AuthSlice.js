import { createSlice } from "@reduxjs/toolkit";
import { handleSignUp } from "./AuthSliceThunk";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSignUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(handleSignUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(handleSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
