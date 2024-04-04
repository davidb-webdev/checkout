import { useState } from "react";
import {
  createCheckoutSession,
  getProduct,
  getProducts
} from "./services/stripeServices";
import IProduct from "./models/IProduct";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
    <>
      <button onClick={handlePayment}>Pay now</button>
      <button onClick={getProductsHandler}>Get products</button>
      <button onClick={getProductHandler}>Get product</button>

      <div>
        {products.map((product) => (
          <div key={product.name}>
            <img src={product.images[0]} alt={product.name} />
            <p>{product.name}</p>
            <button>Dummy</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
