import { useEffect, useState } from "react";
import IOrder from "../models/IOrder";
import { getOrders } from "../services/authServices";

const useOrders = () => {
  const [orders, setOrders] = useState<IOrder[] | null>();

  useEffect(() => {
    if (orders) return;

    const awaitGetOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };
    awaitGetOrders();
  });
  return orders;
};

export default useOrders;
