"use client";

import Cookies from "@/utils/cookie";
import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PayAgain = ({ orderId }: { orderId: string }) => {
  const router = useRouter();
  const payUserOrder = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/cart/pay-order/${orderId}`, {}, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      })
      .then((res) => router.push(res?.data?.data))
      .catch((err) =>
        console.error("Error on ridrecting to payment gateway", err)
      );
  };

  return (
    <Link href="/checkout" >
      <Button
        // onClick={payUserOrder}
        sx={{
          minWidth: "100%",
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: "7px",
          bgcolor: "#FFFFFF0D",
          fontWeight: "600",
          fontSize: "13px",
          py: "11px",
          ":hover": {
            bgcolor: "#FFFFFF0D",
          },
        }}
      >
        خرید دوباره
      </Button>
    </Link>
  );
};

export default PayAgain;
