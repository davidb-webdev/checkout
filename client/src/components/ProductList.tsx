import { useContext } from "react";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import StyledCardList from "../styled/StyledCardList";

const ProductList = () => {
  const { dispatch } = useContext(CartContext);
  const products = useProducts();

  return (
    <StyledCardList>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.name}>
            <Link to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.name} />
            </Link>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <span>{product.default_price.unit_amount / 100} kr</span>

            <button
              disabled={!product.default_price}
              onClick={() => {
                if (!product.default_price) return;
                dispatch({
                  type: CartActionType.ADDED,
                  payload: product.default_price.id
                });
              }}
            >
              🛒
            </button>
          </div>
        ))
      ) : (
        <p>Could not find any products</p>
      )}
    </StyledCardList>
  );
};

export default ProductList;
