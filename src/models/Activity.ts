import OrderModel from "./Order";

interface ActivityModel {
  id: number;
  title: string;
  code: string;
  status: string;
  price: number;
  image: string;
  type: string;
  activity_type: "transaction"|"order";
  date_created: string;
  order: OrderModel;
  transaction: WalletTransactionModel;
}

export default ActivityModel;
