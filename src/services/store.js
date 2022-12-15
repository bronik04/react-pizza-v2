import { configureStore } from '@reduxjs/toolkit';
import getPizzas from './slices/pizza-slice';
import filterSlice from "./slices/filter-slice";
import cartSlice from "./slices/cart-slice";

export default configureStore({
  reducer: {
    pizzas: getPizzas,
    filter: filterSlice,
    cart: cartSlice,
  },
});
