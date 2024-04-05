import { useContext, useState } from "react";
import IProduct from "../models/IProduct";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import { getProduct, getProducts } from "../services/stripeServices";

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { dispatch } = useContext(CartContext);

  const getProductsHandler = async () => {
    const data = await getProducts();

    console.log(data);
    setProducts(data.data);
  };

  const getProductHandler = async () => {
    const data = await getProduct("prod_Pr9a1VJg00Mago");

    console.log(data);
    setProducts([data]);
  };

  return (
    <div>
      <button onClick={getProductsHandler}>Get products</button>
      <button onClick={getProductHandler}>Get product</button>

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
    </div>
  );
};

export default ProductList;
