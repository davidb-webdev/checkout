import Cart from "../components/Cart";
import DeliveryForm from "../components/DeliveryForm";
import OrderButton from "../components/OrderButton";

const CheckoutPage = () => {
  return (
    <>
      <h2>Your cart</h2>
      <Cart />
      <h2>Delivery</h2>
      <DeliveryForm />
      <h2>Confirm order</h2>
      <OrderButton />
    </>
  );
};

export default CheckoutPage;
