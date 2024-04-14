import IOrder from "../models/IOrder";
import SignInUserFormData from "../models/SignInUserFormData";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const signIn = async (userFormData: SignInUserFormData) => {
  try {
    const url = baseUrl + "/auth/signin";
    const payload: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
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

export const signOut = async () => {
  try {
    const url = baseUrl + "/auth/signout";
    const payload: RequestInit = {
      credentials: "include"
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const authorizeUser = async () => {
  try {
    const url = baseUrl + "/auth/authorize";
    const payload: RequestInit = {
      credentials: "include"
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
  } catch (error) {
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const url = baseUrl + "/auth/getOrders";
    const payload: RequestInit = {
      credentials: "include"
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
    const data: IOrder[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
