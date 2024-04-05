import { useContext } from "react";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import useProducts from "../hooks/useProducts";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const { dispatch } = useContext(CartContext);
  const products = useProducts();

  return (
    <>
      <h2>Product list</h2>
      {products.map((product) => (
        <div key={product.name}>
          <img src={product.images[0]} alt={product.name} />
          <p>{product.name}</p>
          <button
            disabled={!product.default_price}
            onClick={() => {
              if (!product.default_price) return;
              dispatch({
                type: CartActionType.ADDED,
                payload: product.default_price
              });
            }}
          >
            🛒
          </button>
        </div>
      ))}
      {products.length === 0 && <p>No products in list</p>}

      <ProductDetails productId="prod_PrbjqKzuOGpkfR" />
    </>
  );
};

export default ProductList;
