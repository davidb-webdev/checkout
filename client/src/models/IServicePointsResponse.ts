import IServicePoint from "./IServicePoint";

export default interface IServicePointsResponse {
  servicePointInformationResponse: {
    customerSupports: ICustomerSupport[],
		servicePoints: IServicePoint[];
	}
}

interface ICustomerSupport {
	customerSupportPhoneNo: string,
	country: string
}