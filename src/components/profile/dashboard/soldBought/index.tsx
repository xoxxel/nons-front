"use client";
import OrderModel from "@/models/Order";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SoldBoughtCard from "./card";
import Link from "next/link";
const SoldBought = ({
  sellerOrders,
  orders,active
}: {
  sellerOrders: OrderModel[];
  orders: OrderModel[];
  active:"sold" | "bought"
}) => {
  const [status, setStatus] = useState<"sold" | "bought">(active);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            onClick={() => setStatus("sold")}
            sx={{
              color: status == "sold" ? "text.secondary" : "#8899A6",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            سفارشات فروخته شده
          </Typography>
          <Typography
            onClick={() => setStatus("bought")}
            sx={{
              color: status == "bought" ? "text.secondary" : "#8899A6",
              fontSize: "14px",
              fontWeight: "500",
              mx: "10px",
              cursor: "pointer",
            }}
          >
            سفارشات خریده شده
          </Typography>
        </Box>
        <Link
          href={`/profile/orders?ordersType=${
            status == "sold" ? "seller" : "customer"
          }`}
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            مشاهده بیشتر
          </Typography>
        </Link>
      </Box>
      {status == "sold" ? (
        <Box className="sold">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              mt: "20px",
            }}
          >
            {sellerOrders.map((order, index) => (
              <SoldBoughtCard order={order} key={index} />
            ))}
          </Box>
        </Box>
      ) : status == "bought" ? (
        <Box className="bought">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              mt: "20px",
            }}
          >
            {orders.map((order, index) => (
              <SoldBoughtCard order={order} key={index} />
            ))}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default SoldBought;
