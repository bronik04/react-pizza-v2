import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CartItemProps } from '../../utils/consts';
import {RootState} from "../store";

interface CartSliceState {
  totalPrice: number;
  items: CartItemProps[];
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemProps>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0,
      );
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);

export const { addItem, removeItem, minusItem, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;
