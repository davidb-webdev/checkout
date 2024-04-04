import IProductsResponse from "../models/IProductsResponse";

const url = import.meta.env.VITE_BACKEND_URL + "/stripe/products";

export const getProducts = async () => {
  const response = await fetch(url);
  const data: IProductsResponse = await response.json();

  return data;
};

export const createCheckoutSession = async () => {
	const url =
		import.meta.env.VITE_BACKEND_URL + "/stripe/create-checkout-session";
	const payload = {
		method: "POST"
	};
	const response = await fetch(url, payload);
	const data = await response.json();

	return data;
};