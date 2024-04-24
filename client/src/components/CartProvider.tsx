import { useReducer } from "react";
import CartReducer from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";

interface ICartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
