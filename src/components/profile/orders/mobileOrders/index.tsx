"use client";

import { Box, Button, Typography } from "@mui/material";
import OrderCard from "./orderCard";
import OrderModel from "@/models/Order";
import { useState } from "react";
import Bought from "./bought";
import Sold from "./sold";
import OrdersEmptyState from "../emptyState";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import DashboardOrdersFilterMenu from "../orderMenu/filterDrawer";

const MobileUserOrders = ({
  orders,
  isOrderSeller,
  status,
  setStatus,
  sellerOrdersLength,
  customerOrdersLength,
  setDrawerVisibility,
}: {
  orders: OrderModel[];
  isOrderSeller: boolean;
  status: "sold" | "bought";
  setStatus: React.Dispatch<React.SetStateAction<"sold" | "bought">>;
  customerOrdersLength: number;
  sellerOrdersLength: number;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {

  const searchParams = useSearchParams()

  return (
    <Box sx={{ p: "16px 14px", display: { md: "none", xs: "block" } }}>
      {/* tabs */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              minWidth: "24px",
              height: "24px",
              borderRadius: "50%",
              bgcolor: "#E9ECEF",
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {customerOrdersLength}
          </Box>
          <Link href="/profile/orders?type=buys">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              color: !(searchParams?.get("type") === "sells") ? "button.main" : "text.main",
              borderColor: "button.main",
              borderBottom: !(searchParams?.get("type") === "sells") ? "2px solid" : "none",
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            خریداری شده
          </Typography>
          </Link>
        </Box>
        <Link href="/profile/orders?type=sells">
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              minWidth: "24px",
              height: "24px",
              borderRadius: "50%",
              bgcolor: "#E9ECEF",
              color: "#A9A9A9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {sellerOrdersLength}
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              color: searchParams?.get("type") === "sells" ? "button.main" : "text.secondary",
              borderColor: "button.main",
              borderBottom: searchParams?.get("type") === "sells" ? "2px solid" : "none",
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            فروخته شده
          </Typography>
        </Box>
        </Link>
      </Box>
      {/* searchbar */}
      {orders?.length > 0 && <Box
        sx={{
          width: "100%",
          bgcolor: "background.secondary",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          p: "5px",
          gap: "10px",
          mt: "10px",
        }}
      >
        <DashboardOrdersFilterMenu />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            gap: 0.5,
            color: "text.secondary",
          }}
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.5L8.825 8.325M10 5.5C10 7.70914 8.20914 9.5 6 9.5C3.79086 9.5 2 7.70914 2 5.5C2 3.29086 3.79086 1.5 6 1.5C8.20914 1.5 10 3.29086 10 5.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Box
            sx={{
              color: "text.secondary",
            }}
          >
            <input
              type="text"
              placeholder="جستجو"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "inherit",
              }}
            />
          </Box>
        </Box>
      </Box>}
      {/* cards */}
      {orders?.length > 0 ? <Box
        sx={{
          mt: 5,
          mb: "70px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {status == "bought" ? (
          <Bought
            orders={orders}
            isOrderSeller={isOrderSeller}
            setDrawerVisibility={setDrawerVisibility}
          />
        ) : status == "sold" ? (
          <Sold
            orders={orders}
            isOrderSeller={isOrderSeller}
            setDrawerVisibility={setDrawerVisibility}
          />
        ) : null}
      </Box> : <OrdersEmptyState />}
    </Box>
  );
};

export default MobileUserOrders;
