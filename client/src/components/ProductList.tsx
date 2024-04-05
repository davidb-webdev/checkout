import { useContext, useState } from "react";
import IProduct from "../models/IProduct";
import { CartActionType } from "../reducers/CartReducer";
import CartContext from "../contexts/CartContext";
import {
  createCheckoutSession,
  getProduct,
  getProducts
} from "../services/stripeServices";

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { dispatch } = useContext(CartContext);

  const handlePayment = async () => {
    const data = await createCheckoutSession();
    console.log(data);
    window.location = data.url;
  };

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
      <button onClick={handlePayment}>Pay now</button>
      <button onClick={getProductsHandler}>Get products</button>
      <button onClick={getProductHandler}>Get product</button>

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
