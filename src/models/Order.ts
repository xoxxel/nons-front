import ProductModel from "./Product";

interface OrderModel {
  id: number;
  quantity: number;
  date_created: string;
  last_updated: string;
  is_paid: true;
  final_price: number;
  tracking_code: null;
  product: ProductModel;
  activation_code: string;
  guide?: string;
  faq?: { question: string; answer: string }[];
  payment: "bank" | "wallet";
  order_type: "purchase" | "boost";
  status: "processing" | "completed" | "canceled" | "judging";
  user: { id: number; name: string; image: string };
}

export default OrderModel;
