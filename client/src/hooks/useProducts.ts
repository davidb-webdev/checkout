import { useEffect, useState } from "react";
import IProduct from "../models/IProduct";
import { getProducts } from "../services/stripeServices";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products.length > 0) return;

    const awaitGetProducts = async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data.data);
    };
    awaitGetProducts();
  });
  return products;
};

export default useProducts;
