import { useEffect, useState } from "react";
import { getDeliveryData } from "../services/authServices";
import DeliveryFormData from "../models/DeliveryFormData";

const useDeliveryData = () => {
  const [deliveryData, setDeliveryData] = useState<DeliveryFormData>();

  useEffect(() => {
    if (deliveryData) return;

    const awaitGetDeliveryData = async () => {
      try {
        const data = await getDeliveryData();
        setDeliveryData(data);
      } catch (error) {
        console.log(error);
      }
    };
    awaitGetDeliveryData();
  });
  return deliveryData;
};

export default useDeliveryData;
