import { useSelector } from "react-redux";

export const CartItemsSelector = () => {
  return useSelector((state) => state.cartItems.cartItems);
};