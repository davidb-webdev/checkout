import { useState } from "react";
import Cart from "../components/Cart";
import DeliveryForm from "../components/DeliveryForm";
import OrderButton from "../components/OrderButton";

const CheckoutPage = () => {
  const [servicePoint, setServicePoint] = useState("");

  const selectServicePoint = (servicePointId: string) => {
    setServicePoint(servicePointId);
  };

  return (
    <>
      <h2>Your cart</h2>
      <Cart />
      <h2>Delivery</h2>
      <p>Please note that we can only deliver to Sweden</p>
      <DeliveryForm selectServicePoint={selectServicePoint} />
      <h2>Confirm order</h2>
      <OrderButton servicePoint={servicePoint} />
    </>
  );
};

export default CheckoutPage;
