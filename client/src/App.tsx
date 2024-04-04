import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const handlePayment = async () => {
    const url =
      import.meta.env.VITE_BACKEND_URL + "/stripe/create-checkout-session";
    const payload = {
      method: "POST"
    };
    const response = await fetch(url, payload);
    const data = await response.json();
    console.log(data);
    window.location = data.url;
  };

  const getProducts = async () => {
    const url = import.meta.env.VITE_BACKEND_URL + "/stripe/products";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.products);
    setProducts(data.products);
  };

  return (
    <>
      <button onClick={handlePayment}>Pay now</button>
      <button onClick={getProducts}>Get products</button>

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
