import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
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
    setFirstname: (state, action) => {
      state.user.firstName = action.payload;
    },
    setLastname: (state, action) => {
      state.user.lastName = action.payload;
    },
    setAddress: (state, action) => {
      state.user.address = action.payload;
    },
  },
});

export const {
  setUser,
  setAuth,
  setFirstname,
  setLastname,
  setGender,
  setPhone,
  setAddress,
} = user.actions;

export default user.reducer;
