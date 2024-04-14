import CartItem from "../models/CartItem";
import ICreateSessionResponse from "../models/ICreateSessionResponse";
import IProduct from "../models/IProduct";
import IProductsResponse from "../models/IProductsResponse";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getProduct = async (productId: string) => {
  try {
    const url = baseUrl + "/stripe/product/" + productId;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data: IProduct = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const url = baseUrl + "/stripe/products";
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data: IProductsResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createCheckoutSession = async (body: CartItem[]) => {
  try {
    const url = baseUrl + "/stripe/create-checkout-session";
    const payload: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body)
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
    const data: ICreateSessionResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const verifyOrder = async (sessionId: string) => {
  try {
    const url = baseUrl + "/stripe/verify-order";
    const payload: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ sessionId })
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
