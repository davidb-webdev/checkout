import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";
import { Link } from "react-router-dom";
import { ModalActionType } from "../reducers/ModalReducer";
import CartContext from "../contexts/CartContext";

const PageHeader = () => {
  const { dispatch } = useContext(ModalContext);
  const { cart } = useContext(CartContext);

  return (
    <header>
      <h1>
        <Link to="/">Music Store</Link>
      </h1>
      <button
        onClick={() => {
          dispatch({
            type: ModalActionType.OPENED,
            which: "signIn"
          });
        }}
      >
        Sign In / Register
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ModalActionType.OPENED,
            which: "cart"
          });
        }}
      >
        Cart (
        {cart.reduce((accumulator, item) => accumulator + item.quantity, 0)})
      </button>
    </header>
  );
};

export default PageHeader;
