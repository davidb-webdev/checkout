import { useContext } from "react";
import { createCheckoutSession } from "../services/stripeServices";
import CartContext from "../contexts/CartContext";

interface IOrderButtonProps {
  servicePoint: string;
}

const OrderButton = ({ servicePoint }: IOrderButtonProps) => {
  const { cart } = useContext(CartContext);

  const handlePayment = async () => {
    const data = await createCheckoutSession(servicePoint, cart);
    localStorage.setItem("sessionId", data.sessionId);
    window.location.href = data.url;
  };

  return <button onClick={handlePayment}>Confirm order</button>;
};

export default OrderButton;
