import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
  },
  isAuthenticated: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setAuth } = user.actions;

export default user.reducer;