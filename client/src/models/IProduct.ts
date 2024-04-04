export default interface IProduct {
  id: string;
  object: string;
  active: boolean;
  created: number;
  default_price: null | string;
  description: null | string;
  images: string[];
  features: [];
  livemode: boolean;
  metadata: {};
  name: string;
  package_dimensions: null | {};
  shippable: null | boolean;
  statement_descriptor: null | string;
  tax_code: null | string;
  unit_label: null | string;
  updated: number;
  url: null | string;
}
