import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { CartActionType } from "../reducers/CartReducer";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          <span>
            {item.id} - {item.quantity}
          </span>
          <button
            onClick={() =>
              dispatch({
                type: CartActionType.REMOVED,
                payload: item.id
              })
            }
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
