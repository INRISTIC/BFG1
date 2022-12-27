import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchFaqs = createAsyncThunk('/posts/fetchFaqs', async () => {
  const { data } = await axios.get('/faq');
  return data;
});

export const fetchPrivilege = createAsyncThunk('/posts/fetchPrivilege', async () => {
  const { data } = await axios.get('/privilege');
  return data;
});

export const fetchRegulation = createAsyncThunk('/posts/fetchRegulation', async () => {
  const { data } = await axios.get('/regulation');
  return data;
});

const initialState = {
  faqs: {
    items: [],
    status: 'loading'
  },
  privilege: {
    items: [],
    status: 'loading'
  },
  regulation: {
    items: [],
    status: 'loading'
  }
}

const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFaqs.pending]: (state) => {
      state.faqs.items = [];
      state.faqs.status = 'loading';
    },
    [fetchFaqs.fulfilled]: (state, action) => {
      state.faqs.items = action.payload;
      state.faqs.status = 'loaded';
    },
    [fetchFaqs.rejected]: (state) => {
      state.faqs.items = [];
      state.faqs.status = 'error';
    },
    [fetchPrivilege.pending]: (state) => {
      state.privilege.items = [];
      state.privilege.status = 'loading';
    },
    [fetchPrivilege.fulfilled]: (state, action) => {
      state.privilege.items = action.payload;
      state.privilege.status = 'loaded';
    },
    [fetchPrivilege.rejected]: (state) => {
      state.privilege.items = [];
      state.privilege.status = 'error';
    },
    [fetchRegulation.pending]: (state) => {
      state.regulation.items = [];
      state.regulation.status = 'loading';
    },
    [fetchRegulation.fulfilled]: (state, action) => {
      state.regulation.items = action.payload;
      state.regulation.status = 'loaded';
    },
    [fetchRegulation.rejected]: (state) => {
      state.regulation.items = [];
      state.regulation.status = 'error';
    },
  }
});

export default faqsSlice.reducer;