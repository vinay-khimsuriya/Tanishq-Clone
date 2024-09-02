import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";

const appStore = configureStore({
  reducer: {
    header: headerSlice,
  },
});

export default appStore;
