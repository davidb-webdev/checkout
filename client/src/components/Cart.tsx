import { useState } from "react";
import CartItem from "../models/CartItem";

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (id: string) => {
    if (cart.some((item) => item.id === id)) {
      setCart(
        cart.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    } else {
      setCart([...cart, new CartItem(id, 1)]);
    }
  };

  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.id} - {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
