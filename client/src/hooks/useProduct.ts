import { useEffect, useState } from "react";
import IProduct from "../models/IProduct";
import { getProduct } from "../services/stripeServices";

const useProduct = (productId: string) => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (product) return;

    const awaitGetProduct = async () => {
      const data = await getProduct(productId);
      setProduct(data);
    };
    awaitGetProduct();
  });
  return product;
};

export default useProduct;
