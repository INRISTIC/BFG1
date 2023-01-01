import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerStatus: false,
  settingsStatus: false,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    closeHeader: () => {
      return { headerStatus: false, settingsStatus: false }
    },
    openHeader: () => {
      return { headerStatus: true, settingsStatus: false }
    },
    openSettings: () => {
      return { headerStatus: false, settingsStatus: true }
    }
  },
})

export const { openHeader, closeHeader, openSettings } = headerSlice.actions

export default headerSlice.reducer