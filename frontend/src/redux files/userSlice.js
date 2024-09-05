import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userLoginData: null },
  reducers: {
    addUserLoginData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const { addUserLoginData } = userSlice.actions;

export default userSlice.reducer;
