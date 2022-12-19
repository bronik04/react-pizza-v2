import { calcTotalPrice } from './calcTotalPrice';
import {CartItemProps} from "./consts";

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
    return {
      items: items as CartItemProps[],
      totalPrice,
    };
};
