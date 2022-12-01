import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/UserSlice";

export const Store = configureStore({
  reducer: {
    user,
  },
});