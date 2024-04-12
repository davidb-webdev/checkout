import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";
import CartReducer from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import Cart from "../components/Cart";
import Auth from "../components/Auth";
import UserFormSwitcher from "../components/UserFormSwitcher";

const Layout = () => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <Auth>
      <CartContext.Provider value={{ cart, dispatch }}>
        <header>
          <UserFormSwitcher />
          <Cart />
          <Link to="/checkout">Go to checkout</Link>
        </header>

        <main>
          <Outlet />
        </main>
      </CartContext.Provider>
    </Auth>
  );
};

export default Layout;
