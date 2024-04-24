import { useContext } from "react";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";

interface IAddToCartButtonProps {
  productId: string;
  priceId: string;
	name: string;
}

const AddToCartButton = ({ productId, priceId, name }: IAddToCartButtonProps) => {
  const { dispatch } = useContext(CartContext);

  return (
    <button
      onClick={() => {
        dispatch({
          type: CartActionType.ADDED,
          productId,
          priceId,
          name
        });
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
