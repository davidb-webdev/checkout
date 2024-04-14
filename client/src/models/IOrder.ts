export default interface IOrder {
  orderNumber: number;
  sessionId: string;
  orderDate: string;
  customerDetails: {
    id: string;
    name: string;
    email: string;
  };
  orderTotal: number;
  deliveryPoint: string;
  products: ILineItem[];
}

interface ILineItem {
  id: string;
  description: string;
  amount: number;
  quantity: number;
}
