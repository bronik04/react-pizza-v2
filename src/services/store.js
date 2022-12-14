import { configureStore } from '@reduxjs/toolkit';
import getPizzas from './slices/pizza-slice';
import filterSlice from "./slices/filter-slice";

export default configureStore({
  reducer: {
    pizzas: getPizzas,
    filter: filterSlice,
  },
});
