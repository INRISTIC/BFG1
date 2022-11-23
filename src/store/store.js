import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/sliceTheme';
import donatSlice from "./slices/sliceDonat";
import windmillSlice from "./slices/sliceModal";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    donat: donatSlice,
    modal: windmillSlice,
  },
})