import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productDetail: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
