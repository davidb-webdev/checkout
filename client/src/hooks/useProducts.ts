import { useEffect, useState } from "react";
import IProduct from "../models/IProduct";
import { getProducts } from "../services/stripeServices";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[] | null>();

  useEffect(() => {
    if (products) return;

    const awaitGetProducts = async () => {
      const data = await getProducts();
      setProducts(data.data);
    };
    awaitGetProducts();
  });
  return products;
};

export default useProducts;
