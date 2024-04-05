import { useReducer } from "react";
import CartReducer from "./reducers/CartReducer";
import CartContext from "./contexts/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <ProductList />
      <Cart />
    </CartContext.Provider>
  );
};

export default App;
