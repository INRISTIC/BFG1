import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/sliceTheme';
import donatSlice from "./slices/sliceDonat";
import windmillSlice from "./slices/sliceModal";
import sliceStat from "./slices/sliceStat";
import sliceHeader from "./slices/sliceHeader";
import postsReducer from "./slices/slicePosts";
import settingsReducer from "./slices/sliceSettings";
import faqsReducer from "./slices/sliceFaq";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    donat: donatSlice,
    modal: windmillSlice,
    stats: sliceStat,
    header: sliceHeader,
    posts: postsReducer,
    settings: settingsReducer,
    faqs: faqsReducer
  },
})