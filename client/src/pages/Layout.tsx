import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";
import CartReducer from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import Cart from "../components/Cart";

const Layout = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Outlet />
      <Cart />
      <Link to="/checkout">Go to checkout</Link>
    </CartContext.Provider>
  );
};

export default Layout;
