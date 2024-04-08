import { useContext } from "react";
import { createCheckoutSession } from "../services/stripeServices";
import CartContext from "../contexts/CartContext";

const OrderButton = () => {
  const { cart } = useContext(CartContext);

  const handlePayment = async () => {
    const data = await createCheckoutSession(cart);
    console.log(data);
    localStorage.setItem("sessionId", JSON.stringify(data.sessionId));
    window.location = data.url;
  };

  return <button onClick={handlePayment}>Confirm order</button>;
};

export default OrderButton;
