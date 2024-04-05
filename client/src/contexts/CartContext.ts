import { Dispatch, createContext } from "react";
import CartItem from "../models/CartItem";
import { ICartAction } from "../reducers/CartReducer";

interface ICartContext {
  cart: CartItem[];
  dispatch: Dispatch<ICartAction>;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  dispatch: () => {}
});

export default CartContext;
