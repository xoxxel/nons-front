import MessageModel from "./Message";

interface ChatRoomModel {
  id: number;
  seller: {
    id: number;
    name: string;
    image: string;
    is_online: boolean;
    shop?: {
      name: string;
      id: number;
      slug: string;
      image: string;
      last_active: string
    }
  };
  customer: {
    id: number;
    name: string;
    image: string;
    is_online: boolean;
  };
  unseen_messages: number;
  room_name: string;
  is_arbitration: boolean;
  product: { title: string, price: string, slug: string };
  last_message: MessageModel;
}

export default ChatRoomModel;
