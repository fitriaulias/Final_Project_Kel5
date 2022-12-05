import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/UserSlice";
import favoriteSlice from "./reducers/FavoriteSlice";

export const Store = configureStore({
  reducer: {
    user,
    favorite: favoriteSlice,
  },
});
