import styled from "styled-components";
import useOrders from "../hooks/useOrders";

const StyledOrderList = styled.div`
  > div,
  > div > div {
    display: flex;
    flex-direction: column;
  }
`;

const OrderList = () => {
  const orders = useOrders();

  return (
    <StyledOrderList>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.orderNumber}>
            <h2>Order {order.orderNumber}</h2>
            <span>Date: {order.orderDate}</span>
            <span>Total: {order.orderTotal / 100} kr</span>
            <span>Deliver to: {order.deliveryPoint}</span>

            <h3>Order items</h3>
            {order.products.map((product) => (
              <div key={product.id}>
                <strong>{product.description}</strong>
                <span>ID: {product.id}</span>
                <span>Amount: {product.amount / 100} kr</span>
                <span>Qty: {product.quantity}</span>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>Could not find any previous orders</p>
      )}
    </StyledOrderList>
  );
};

export default OrderList;
