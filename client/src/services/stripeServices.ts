import CartItem from "../models/CartItem";
import ICreateSessionResponse from "../models/ICreateSessionResponse";
import IProduct from "../models/IProduct";
import IProductsResponse from "../models/IProductsResponse";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getProduct = async (productId: string) => {
  const url = baseUrl + "/stripe/product/" + productId;
  const response = await fetch(url);
  const data: IProduct = await response.json();

  return data;
};

export const getProducts = async () => {
  const url = baseUrl + "/stripe/products";

  const response = await fetch(url);
  const data: IProductsResponse = await response.json();

  return data;
};

export const createCheckoutSession = async (body: CartItem[]) => {
  const url = baseUrl + "/stripe/create-checkout-session";
  const payload = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  const response = await fetch(url, payload);
  const data: ICreateSessionResponse = await response.json();
  return data;
};

export const verifyOrder = async (sessionId: string) => {
  const url = baseUrl + "/stripe/verify-order";
  const payload = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId })
  };

  const response = await fetch(url, payload);
  const data = await response.json();

  return data;
};
