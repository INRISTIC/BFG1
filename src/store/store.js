import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/sliceTheme'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})