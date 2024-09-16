import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import userReducer from "./userSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    header: headerSlice,
    user: userReducer,
    product: productSlice,
    cart: cartSlice,
  },
});

export default appStore;
