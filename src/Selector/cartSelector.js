import { selector } from "recoil";
import { cartState } from "../Atoms/cart";

export const totalCartItems = selector({
  key: "totalCartItems",
  get: ({ get }) => {
    const cartItems = get(cartState);
    return cartItems.reduce((total, item) => total + item.count, 0);
  },
});

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cartItems = get(cartState);
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  },
});
