import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: true,
  valute: false,
  clan: false,
};

export const sliceStat = createSlice({
  name: "stat",
  initialState,
  reducers: {
    changeBtn: (state, action) => {
      let btn = action.payload;
      return { rating: false, valute: false, clan: false, ...btn };
    },
  },
});

export const { changeBtn } = sliceStat.actions;

export default sliceStat.reducer;
