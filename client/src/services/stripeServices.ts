import CartItem from "../models/CartItem";
import ICreateSessionResponse from "../models/ICreateSessionResponse";
import IProduct from "../models/IProduct";
import IProductsResponse from "../models/IProductsResponse";
import RegisterUserFormData from "../models/RegisterUserFormData";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const registerUser = async (userFormData: RegisterUserFormData) => {
  try {
    const url = baseUrl + "/stripe/create-customer";
    const payload: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userFormData)
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

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

export const getProducts = async (productIds?: string[]) => {
  try {
    const url = baseUrl + "/stripe/products";
    const payload: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productIds)
    };
    const response = await fetch(url, payload);
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
