import { configureStore } from '@reduxjs/toolkit';
import getPizzas from './slices/pizza-slice';
import filterSlice from "./slices/filter-slice";
import cartSlice from "./slices/cart-slice";
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    pizzas: getPizzas,
    filter: filterSlice,
    cart: cartSlice,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>
