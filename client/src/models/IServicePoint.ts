export default interface IServicePoint {
  name: string;
  servicePointId: string;
  phoneNoToCashRegister: string;
  routingCode: null;
  handlingOffice: null;
  locationDetail: null;
  routeDistance: number;
  pickup: {
    cashOnDelivery: null;
    products: IPickupProduct[];
    heavyGoodsProducts: [];
  };
  visitingAddress: IAddress;
  deliveryAddress: IAddress;
  notificationArea: {
    postalCodes: string[];
  };
  coordinates: ICoordinate[];
  openingHours: {
    specialDates: [];
    postalServices: IOpeningHours[];
  };
  type: {
    groupTypeId: number;
    groupTypeName: string;
  };
}

interface IPickupProduct {
  name: string;
  timeSlots: {
    availableForPickupEarlyCollect: [];
  };
}

interface IAddress {
  countryCode: string;
  city: string;
  streetName: string;
  streetNumber: string;
  postalCode: string;
  additionalDescription: null | string;
}

interface ICoordinate {
  countryCode: string;
  northing: number;
  easting: number;
  srId: string;
}

interface IOpeningHours {
  openTime: string;
  openDay: string;
  closeTime: string;
  closeDay: string;
}
