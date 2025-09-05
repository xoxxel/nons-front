"use client";
import { Box } from "@mui/material";
import PayOrder from "./payOrder";
import OrderConfirmation from "./orderConfirmation/inde";
import PaymentType from "./paymentType";
import Factor from "./factor";
import OrderModel from "@/models/Order";
import { useState } from "react";
const Bill = ({ order }: { order: OrderModel }) => {
  const [paymentMethod, setPaymentMethod] = useState<"" | "wallet" | "bank">(
    order?.payment || ""
  );

  return (
    <Box
      sx={{
        width: "100%",
        border: { md: "1px dashed #848686", xs: "none" },
        borderRadius: { md: "12px", xs: "none" },
        pt: "10px",
        pb: { md: "40px", xs: "0px" },
        px: { md: "13px", xs: "0px" },
      }}
    >
      <Factor order={order} />
      <PaymentType order={order} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <PayOrder order={order} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <OrderConfirmation />
    </Box>
  );
};

export default Bill;
