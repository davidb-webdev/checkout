import { Link } from "react-router-dom";
import Modal from "./Modal";
import SignInUserForm from "./SignInUserForm";
import Cart from "./Cart";
import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";
import { ModalActionType } from "../reducers/ModalReducer";

const Modals = () => {
  const { dispatch } = useContext(ModalContext);

  return (
    <>
      <Modal modalName="signIn">
        <SignInUserForm />
        <p>
          <Link
            to="/register"
            onClick={() => {
              dispatch({
                type: ModalActionType.CLOSED
              });
            }}
          >
            Register new customer
          </Link>
        </p>
      </Modal>

      <Modal modalName="cart">
        <h2>Cart</h2>
        <Cart />
        <p>
          <Link
          className="styleAsButton"
            to="/checkout"
            onClick={() => {
              dispatch({
                type: ModalActionType.CLOSED
              });
            }}
          >
            Go to checkout
          </Link>
        </p>
      </Modal>
    </>
  );
};

export default Modals;
