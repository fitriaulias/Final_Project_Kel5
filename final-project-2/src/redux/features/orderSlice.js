import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};

export const orderItems = createSlice({
  name: "orderItems",
  initialState,
  reducers: {
    addOrderItem: (state, action) => {
      const localOrders = JSON.parse(localStorage.getItem("orderItems"));
      if (localOrders) {
        state.orderItems = localOrders;
      }
      state.orderItems.push(action.payload);
      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
    },
  },
});

export const { addOrderItem } = orderItems.actions;

export default orderItems.reducer;
