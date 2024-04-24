import { useEffect, useState } from "react";
import IProduct from "../models/IProduct";
import { getProducts } from "../services/stripeServices";

const useProducts = (productIds?: string[]) => {
  const [products, setProducts] = useState<IProduct[] | null>();

  useEffect(() => {
    if (products) return;

    const awaitGetProducts = async () => {
      try {
        const data = await getProducts(productIds);
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    awaitGetProducts();
  });
  return products;
};

export default useProducts;
