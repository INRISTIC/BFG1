import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: true,
  time: false,
};

export const slicePosts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeBtn: (state, action) => {
      let btn = action.payload;
      return { rating: false, valute: false, clan: false, ...btn };
    },
  },
});

export const { changeBtn } = slicePosts.actions;

export default slicePosts.reducer;
