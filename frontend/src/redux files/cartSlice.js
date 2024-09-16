import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    emptyProductCart: (state, action) => {
      state.cart.length = 0;
    },
  },
});

export const { addProductToCart, emptyProductCart } = cartSlice.actions;
export default cartSlice.reducer;
