interface MessageModel {
  id: number;
  content: string;
  is_seen: boolean;
  sender: {
    id: number;
    name: string;
    image: string;
  };
  timestamp: Date;
  time: Date;
  file: string;
  text_type: "notification" | "message" | "dispute"
}

export default MessageModel;
