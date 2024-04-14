import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verifyOrder } from "../services/stripeServices";

const ConfirmOrderPage = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  useEffect(() => {
    if (orderConfirmed) return;

    const awaitVerifyOrder = async () => {
      try {
        const sessionId = localStorage.getItem("sessionId");
        if (!sessionId) return;
        const data = await verifyOrder(sessionId);
        console.log(data);
        setOrderConfirmed(true);
        localStorage.removeItem("sessionId");
        localStorage.removeItem("cart");
      } catch (error) {
        console.log(error);
      }
    };
    awaitVerifyOrder();
  });

  return (
    <>
      {orderConfirmed && <h1>Thank you for your order!</h1>}
      <Link to="/">Go to start page</Link>
    </>
  );
};

export default ConfirmOrderPage;
