interface UserModel {
  id: number;
  name: string;
  is_admin: boolean;
  username: string;
  date_joined: string;
  number: string;
  email: string;
  image: string;
  has_shop: boolean;
  verified: boolean;
  has_authentication: boolean;
  wallet_balance: number;
  order_count: number;
  message_count: number;
  notif_count: number;
  tag: {
    id: number;
    title: string;
  };
  national_id: string;
  birthdate: Date;
  return_option: "Wallet" | "Bank";
  shop: {
    title: string;
    title_en: string;
    image: string;
    is_authenticated: true;
    date_created: string;
    score: number;
    score_count: number;
    welcome_message: string;
    product_count: number;
    is_active: boolean;
    id: number;
    status: "waiting" | "is_confirmed" | "suspended",
    tags: {
      id: number;
      title: string;
    };
  };
}

export default UserModel;
