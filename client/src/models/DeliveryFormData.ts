export default class DeliveryFormData {
  constructor(
    public name: string,
    public addressLine1: string,
    public addressLine2: string,
    public postal_code: string,
    public city: string,
    public country: string,
    public phone: string
  ) {}
}
