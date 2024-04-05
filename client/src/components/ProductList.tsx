import { useContext } from "react";
import IProduct from "../models/IProduct";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProductListProps) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      {products.map((product) => (
        <div key={product.name}>
          <img src={product.images[0]} alt={product.name} />
          <p>{product.name}</p>
          <button
            onClick={() =>
              dispatch({
                type: CartActionType.ADDED,
                payload: product.id
              })
            }
          >
            🛒
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
