import { combineReducers } from "redux";
import { cartItemsReducer } from "./cartReducer";

export const reducers = combineReducers({
  cartItems: cartItemsReducer,
});