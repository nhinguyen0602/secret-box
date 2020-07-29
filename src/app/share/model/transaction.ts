import { User } from './user';

export class Transaction {
  id: number;
  // tslint:disable-next-line:variable-name
  price_amount_micros: string;
  // tslint:disable-next-line:variable-name
  price_currency_code: string;
  // tslint:disable-next-line:variable-name
  created_at: Date;
  // tslint:disable-next-line:variable-name
  subscription_purchase: ProductDetail;
}
export class ProductDetail {
  id: number;
  // tslint:disable-next-line:variable-name
  product_id: string;
  // tslint:disable-next-line:variable-name
  user_detail: User;
}
