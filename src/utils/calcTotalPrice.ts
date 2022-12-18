import {CartItemProps} from "./consts";

export const calcTotalPrice = (items: CartItemProps[]) => {
    return items.reduce(
        (sum, item) => item.price * item.count + sum,
        0,
    );
}