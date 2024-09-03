import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isSignInDisplay: false,
    isSignUpDisplay: false,
    isUserLogin: false,
    isMenuClicked: false,
  },
  reducers: {
    changeIsSignUpStatus: (state, action) => {
      state.isSignUpDisplay = action.payload;
    },
    changeIsSignInStatus: (state, action) => {
      state.isSignInDisplay = action.payload;
    },
    changeIsUserLogin: (state, action) => {
      state.isUserLogin = action.payload;
    },
    changeIsMenuClicked: (state, action) => {
      state.isMenuClicked = action.payload;
    },
  },
});

export const {
  changeIsSignUpStatus,
  changeIsSignInStatus,
  changeIsUserLogin,
  changeIsMenuClicked,
} = headerSlice.actions;

export default headerSlice.reducer;
