import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
// import itemSlice from "../features/itemSlice";
// import productSlice from "../features/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
