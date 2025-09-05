"use client";
import Badge from "@/components/profile/activities/transaction/badge";
import CopyCode from "@/components/profile/activities/transaction/copyCode";
import OrderModel from "@/models/Order";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OrderCardMobile from "./card";

const SoldBought = ({
  sellerOrders,
  orders
}: {
  sellerOrders: OrderModel[];
  orders: OrderModel[];
}) => {
  const [status, setStatus] = useState<"sold" | "bought">("sold");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
              color: status == "sold" ? "text.secondary" : "text.low",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            سفارشات فروخته شده
          </Typography>
          <Typography
            onClick={() => setStatus("bought")}
            sx={{
              color: status == "bought" ? "text.secondary" : "text.low",
              fontSize: "13px",
              fontWeight: "500",
              mx: "10px",
              cursor: "pointer",
            }}
          >
            سفارشات خریده شده
          </Typography>
        </Box>
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
            {sellerOrders
              ?.map((order, index) => (
                <OrderCardMobile order={order} key={index} />
              ))}
          </Box>
          <Box>
            <Link href="/profile/orders?type=sells">
              <Button
                sx={{
                  width: "100%",
                  height: "36px",
                  borderRadius: "5px",
                  bgcolor: "button.main",
                  ":hover": {
                    bgcolor: "button.main",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  مشاهده بیشتر
                </Typography>
              </Button>
            </Link>
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
            {orders
              ?.map((order, index) => (
                <OrderCardMobile order={order} key={index} />
              ))}
          </Box>
          <Box>
            <Link href="/profile/orders">
              <Button
                sx={{
                  width: "100%",
                  height: "36px",
                  borderRadius: "5px",
                  bgcolor: "button.main",
                  ":hover": {
                    bgcolor: "button.main",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  مشاهده بیشتر
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default SoldBought;
