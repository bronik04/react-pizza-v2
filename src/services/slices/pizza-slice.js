import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  loading: true,
  error: false,
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async () => {
    const res = await axios.get(
      'https://6396f81d77359127a0282b32.mockapi.io/items',
    );
    return res.data;
  },
);

const getPizzas = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default getPizzas.reducer;
