import { useReducer, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartReducer from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import Cart from "../components/Cart";
import Auth from "../components/Auth";
import SignInUserForm from "../components/SignInUserForm";
import StyledModal from "../styled/StyledModal";

const Layout = () => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [showModal, setShowModal] = useState("");

  localStorage.setItem("cart", JSON.stringify(cart));

  const handleModal = (whichModal: string) => {
    if (showModal === whichModal) {
      setShowModal("");
    } else {
      setShowModal(whichModal);
    }
  };

  const closeModal = () => {
    setShowModal("");
  };

  return (
    <Auth>
      <CartContext.Provider value={{ cart, dispatch }}>
        <header>
          <h1>
            <Link to="/">Music Store</Link>
          </h1>
          <button onClick={() => handleModal("signIn")}>
            Sign In / Register
          </button>
          <button onClick={() => handleModal("cart")}>Cart</button>
        </header>

        {showModal === "signIn" && (
          <StyledModal>
            <button onClick={closeModal}>𝗫</button>
            <SignInUserForm />
            <p>
              <Link to="/register" onClick={closeModal}>Register new customer</Link>
            </p>
          </StyledModal>
        )}
        {showModal === "cart" && (
          <StyledModal>
            <button onClick={closeModal}>𝗫</button>
            <Cart />
            <p>
              <Link to="/checkout" onClick={closeModal}>Go to checkout</Link>
            </p>
          </StyledModal>
        )}

        <main>
          <Outlet />
        </main>
      </CartContext.Provider>
    </Auth>
  );
};

export default Layout;
