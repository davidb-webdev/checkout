import IProduct from "./IProduct";

export default interface IProductsResponse {
  object: string;
  url: string;
  has_more: boolean;
  data: IProduct[];
}
