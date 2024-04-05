import { useState, useReducer } from "react";
import {
  createCheckoutSession,
  getProduct,
  getProducts
} from "./services/stripeServices";
import IProduct from "./models/IProduct";
import CartReducer from "./reducers/CartReducer";
import CartContext from "./contexts/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, dispatch] = useReducer(CartReducer, []);

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
    <CartContext.Provider value={{ cart, dispatch }}>
      <button onClick={handlePayment}>Pay now</button>
      <button onClick={getProductsHandler}>Get products</button>
      <button onClick={getProductHandler}>Get product</button>

      <ProductList products={products} />
      <Cart />
    </CartContext.Provider>
  );
};

export default App;
