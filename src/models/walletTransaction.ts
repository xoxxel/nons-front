interface WalletTransactionModel {
  id: number;
  value: number;
  status_type: "deposite" | "withdraw";
  date: Date | string;
  time: string;
  tracking_code: string;
  status_transaction: "successful" | "failed" | "in_queue";
  status_change:
    | "direct-deposite"
    | "direct-withraw"
    | "buy"
    | "sell"
    | "cancel-buy"
    | "cancel-sell";
}
