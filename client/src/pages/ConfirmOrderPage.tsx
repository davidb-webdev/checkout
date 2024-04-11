import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verifyOrder } from "../services/stripeServices";

const ConfirmOrderPage = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  useEffect(() => {
    if (orderConfirmed) return;

    const awaitVerifyOrder = async () => {
      const sessionId = localStorage.getItem("sessionId");
      if (!sessionId) return;
      const data = await verifyOrder(sessionId);
      console.log(data);
      setOrderConfirmed(true);
      localStorage.clear();
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
