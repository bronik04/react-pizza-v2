import {configureStore} from "@reduxjs/toolkit";
import getPizzas from './slices/pizza-slice';

export default configureStore({
  reducer: {
    pizzas :getPizzas,
  }
});

