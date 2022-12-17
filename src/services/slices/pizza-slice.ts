import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { PizzaBlockProps } from '../../utils/consts';

interface PizzaSliceState {
  status: 'loading' | 'success' | 'error';
  items: PizzaBlockProps[];
}

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading',
};

export const fetchPizzas = createAsyncThunk<
  PizzaBlockProps[],
  Record<string, string>
>('pizzas/fetchPizzas', async (params) => {
  const { category, search, sortBy } = params;
  const { data } = await axios.get<PizzaBlockProps[]>(
    `https://6396f81d77359127a0282b32.mockapi.io/items?${category}${search}${sortBy}`,
  );
  return data;
});

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});
export const selectPizza = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;
