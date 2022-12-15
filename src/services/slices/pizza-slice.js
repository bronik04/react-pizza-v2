import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'loading',
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params) => {
    const {category, search, sortBy} = params;
    const {data} = await axios.get(
      `https://6396f81d77359127a0282b32.mockapi.io/items?${category}${search}${sortBy}`,
    );
    return data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    // setItems(state, action) {
    //   state.items = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, state => {
        state.status = 'error';
        state.items = [];
      });
  },
});
export const selectPizza = state => state.pizzas;
export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
