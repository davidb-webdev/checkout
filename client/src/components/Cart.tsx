import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { CartActionType } from "../reducers/CartReducer";
import StyledUl from "../styled/StyledUl";
import StyledMiniButton from "../styled/StyledMiniButton";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <StyledUl>
      {cart.length > 0
        ? cart.map((item) => (
            <li key={item.productId}>
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <StyledMiniButton
                onClick={() => {
                  dispatch({
                    type: CartActionType.REMOVED,
                    productId: item.productId
                  });
                }}
              >
                🗑️
              </StyledMiniButton>
            </li>
          ))
        : "Cart is empty"}
    </StyledUl>
  );
};

export default Cart;
