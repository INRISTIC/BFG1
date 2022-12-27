import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSettings = createAsyncThunk('/settings/fetchSettings', async () => {
  const { data } = await axios.get('/settings');
  return data;
});

const initialState = {
  settings: {
    info: {},
    status: 'loading'
  }
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSettings.pending]: (state) => {
      state.settings.info = {};
      state.settings.status = 'loading';
    },
    [fetchSettings.fulfilled]: (state, action) => {
      state.settings.info = action.payload;
      state.settings.status = 'loaded';
    },
    [fetchSettings.rejected]: (state) => {
      state.settings.info = {};
      state.settings.status = 'error';
    },
  }
});

export default settingsSlice.reducer;