interface TicketModel {
  id: number;
  subject: {
    id: number;
    title: string;
  };
  messages: {
    id: number;
    sender: string;
    text: string;
    file: null | string;
    ticket: number;
    date_created: Date;
  }[];
  last_message: {
    id: number;
    sender: string;
    is_seen: boolean;
    text: string;
    file: null | string;
    ticket: number;
    date_created: Date;
  };
  order_code: number;
  status_user: "seller" | "buyer";
  status_ticket: "open" | "close" | "waiting";
  comment: "bad" | "not_bad" | "good"|null;
  email: string;
  date_created: Date;
  date_modified: Date;
  ticket_code: number;
  responder: { name: string; image: string };
}
