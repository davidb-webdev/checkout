import { useState } from "react";
import { createCheckoutSession, getProducts } from "./services/stripeServices";
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

  return (
    <>
      <button onClick={handlePayment}>Pay now</button>
      <button onClick={getProductsHandler}>Get products</button>

      <div>
        {products.map((product) => (
          <div>
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
