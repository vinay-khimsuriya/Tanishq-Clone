import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    header: headerSlice,
    user: userReducer,
  },
});

export default appStore;
