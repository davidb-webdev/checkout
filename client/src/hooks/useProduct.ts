import { useEffect, useState } from "react";
import IProduct from "../models/IProduct";
import { getProduct } from "../services/stripeServices";

const useProduct = (productId: string) => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (product) return;

    const awaitGetProduct = async () => {
      try {
        const data = await getProduct(productId);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    awaitGetProduct();
  });
  return product;
};

export default useProduct;
