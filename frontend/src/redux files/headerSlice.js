import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isOnComponent: false,
  },
  reducers: {
    changeIsOnComponentStatus: (state, action) => {
      state.isOnComponent = action.payload;
    },
  },
});

export const { changeIsOnComponentStatus } = headerSlice.actions;

export default headerSlice.reducer;
