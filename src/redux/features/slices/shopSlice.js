import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  total: 0,
  price: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {},
    incrementShop: (state, { payload }) => {},
    decrementShop: (state, { payload }) => {},
    allTotal: (state) => {},
    deletedPShops: (state, { payload }) => {},
  },
});

export default shopSlice.reducer;
export const {
  incrementShop,
  decrementShop,
  addCart,
  allTotal,
  deletedPShops,
} = shopSlice.actions;
