export default interface IProduct {
  id: string;
  object: string;
  active: boolean;
  created: number;
  default_price: IDefaultPrice;
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

interface IDefaultPrice {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: null | Object;
  livemode: boolean;
  lookup_key: null | string;
  metadata: Object;
  nickname: null | string;
  product: string;
  recurring: null | {
    aggregate_usage: null | string;
    interval: string;
    interval_count: number;
    trial_period_days: null | number;
    usage_type: string;
  };
  tax_behavior: null | string;
  tiers_mode: null | string;
  transform_quantity: null | Object;
  type: string;
  unit_amount: number;
  unit_amount_decimal: null | number;
}
