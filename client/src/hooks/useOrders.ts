import { useEffect, useState } from "react";
import IOrder from "../models/IOrder";
import { getOrders } from "../services/authServices";

const useOrders = () => {
  const [orders, setOrders] = useState<IOrder[] | null>();

  useEffect(() => {
    if (orders) return;

    const awaitGetOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    awaitGetOrders();
  });
  return orders;
};

export default useOrders;
