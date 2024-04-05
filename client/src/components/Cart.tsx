import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { CartActionType } from "../reducers/CartReducer";
import { createCheckoutSession } from "../services/stripeServices";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handlePayment = async () => {
    const data = await createCheckoutSession(cart);
    console.log(data);
    window.location = data.url;
  };

  return (
    <>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.id} - {item.quantity}
            </span>
            <button
              onClick={() => {
                dispatch({
                  type: CartActionType.REMOVED,
                  payload: item.id
                });
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handlePayment}>Pay now</button>
    </>
  );
};

export default Cart;
