import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    favoriteHotel: (state, action) => {
      const findHotel = state.hotels.find(
        (hotel) => hotel.name === action.payload.name
      );
      if (findHotel) {
        state.hotels = state.hotels.filter(
          (hotel) => hotel.name !== action.payload.name
        );
      } else {
        state.hotels = [action.payload, ...state.hotels];
      }
    },
  },
});

export const { favoriteHotel } = favoriteSlice.actions;

export default favoriteSlice.reducer;
