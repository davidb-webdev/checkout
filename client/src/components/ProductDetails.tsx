import { useContext } from "react";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import useProduct from "../hooks/useProduct";

interface IProductDetailsProps {
  productId: string;
}

const ProductDetails = ({ productId }: IProductDetailsProps) => {
  const { dispatch } = useContext(CartContext);
  const product = useProduct(productId);

  return product ? (
    <>
      <h2>Individual product</h2>
      <img src={product.images[0]} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.default_price.unit_amount / 100} kr</p>
      <button
        onClick={() => {
          dispatch({
            type: CartActionType.ADDED,
            payload: product.default_price.id
          });
        }}
      >
        🛒
      </button>
    </>
  ) : (
    <p>No product found</p>
  );
};

export default ProductDetails;
