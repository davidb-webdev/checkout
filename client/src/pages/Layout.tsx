import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import CartReducer from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";

const Layout = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Outlet />
    </CartContext.Provider>
  );
};

export default Layout;
