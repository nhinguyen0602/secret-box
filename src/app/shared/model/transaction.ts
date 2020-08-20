import { User } from './user';

export class Transaction {
  public id: number;
  // tslint:disable-next-line:variable-name
  public price_amount_micros: string;
  // tslint:disable-next-line:variable-name
  public price_currency_code: string;
  // tslint:disable-next-line:variable-name
  public created_at: Date;
  // tslint:disable-next-line:variable-name
  public subscription_purchase: ProductDetail;
}
export class ProductDetail {
  public id: number;
  // tslint:disable-next-line:variable-name
  public product_id: string;
  // tslint:disable-next-line:variable-name
  public user_detail: User;
}
