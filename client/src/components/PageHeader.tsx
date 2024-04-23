import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";
import { Link } from "react-router-dom";
import { ModalActionType } from "../reducers/ModalReducer";
import CartContext from "../contexts/CartContext";
import StyledPageHeader from "../styled/StyledPageHeader";

const PageHeader = () => {
  const { dispatch } = useContext(ModalContext);
  const { cart } = useContext(CartContext);

  return (
    <StyledPageHeader>
      <h1>
        <Link to="/">Music Store</Link>
      </h1>
      <div>
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
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
