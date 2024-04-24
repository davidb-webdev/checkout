import DeliveryFormData from "../models/DeliveryFormData";
import IServicePointsResponse from "../models/IServicePointsResponse";

const baseUrl = import.meta.env.VITE_POSTNORD_BASE_URL;
const postNordApiKey = import.meta.env.VITE_POSTNORD_API_KEY;

export const getServicePoints = async (formData: DeliveryFormData) => {
  const { addressLine1, postal_code, city, country } = formData;
  const url = `${baseUrl}/rest/businesslocation/v5/servicepoints/nearest/byaddress?numberOfServicePoints=5&returnType=json&srId=EPSG%3A4326&context=optionalservicepoint&responseFilter=public&apikey=${postNordApiKey}&countryCode=${country}&agreementCountry=${country}&city=${city}&postalCode=${postal_code}&streetName=${addressLine1}`;

  const response = await fetch(url);
  const data: IServicePointsResponse = await response.json();
  return data;
};
