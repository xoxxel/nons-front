"use client";

import OrderModel from "@/models/Order";
import { Drawer } from "@mui/material";
import React from "react";
import * as OrderStatus from "@/components/profile/activities/activitiesMenu/orderStatus";
import { useSearchParams } from "next/navigation";

const OrderDetailDrawer = ({
  order,
  onStatusChange,
  drawerVisible,
  setDrawerVisibility,
}: {
  order: OrderModel;
  onStatusChange?: (order: OrderModel) => void;
  drawerVisible: number;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const searchParams = useSearchParams();
  const orderType = searchParams.get("type");

  return (
    drawerVisible !== 0 && (
      <Drawer
        open={Boolean(drawerVisible)}
        onClose={() => setDrawerVisibility(0)}
        anchor="right"
        sx={{
          "& .MuiPaper-root": {
            background: "background.main",
            width: "372px",
            p: "0",
            msOverflowStyle: "none" /* IE and Edge */,
            scrollbarWidth: "none" /* Firefox */,
            zIndex: 999999,
          },
          "& .MuiDrawer-paper": {
            borderLeft: "3px solid #9FE870",
          },
        }}
      >
        {order?.status == "completed" ? (
          !(orderType === "sells") ? (
            <OrderStatus.Completed
              setDrawerVisibility={setDrawerVisibility}
              order={order}
            />
          ) : (
            <OrderStatus.Pending
              setDrawerVisibility={setDrawerVisibility}
              onStatusChange={onStatusChange!}
              order={order}
              orderType="sell"
            />
          )
        ) : order?.status == "canceled" ? (
          <OrderStatus.Cancelled
            setDrawerVisibility={setDrawerVisibility}
            order={order}
          />
        ) : order?.status == "processing" ? (
          <OrderStatus.Pending
            setDrawerVisibility={setDrawerVisibility}
            onStatusChange={onStatusChange!}
            order={order}
            orderType={orderType === "sells" ? "sell" : "buy"}
          />
        ) : order?.status == "judging" ? (
          <OrderStatus.UnderReview
            setDrawerVisibility={setDrawerVisibility}
            order={order}
          />
        ) : (
          ""
        )}
      </Drawer>
    )
  );
};

export default OrderDetailDrawer;
