import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";
import orderSlice from "../features/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    orderItems: orderSlice,
  },
});

export default store;
