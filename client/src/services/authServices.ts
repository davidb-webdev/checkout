import UserFormData from "../models/UserFormData";

export const registerUser = async (userFormData: UserFormData) => {
  try {
    const url = "http://localhost:3000/stripe/create-customer";
    const payload: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userFormData)
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userFormData: UserFormData) => {
  try {
    const url = "http://localhost:3000/auth/signin";
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
    const url = "http://localhost:3000/auth/signout";
    const payload: RequestInit = {
      credentials: "include"
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
  } catch (error) {
    throw error;
  }
};

export const authorizeUser = async () => {
  try {
    const url = "http://localhost:3000/auth/authorize";
    const payload: RequestInit = {
      credentials: "include"
    };
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(response.statusText);
  } catch (error) {
    throw error;
  }
};
