"use client";
import UserOrders from "@/components/profile/orders";
import MobileUserOrders from "@/components/profile/orders/mobileOrders";
import OrderDetailDrawer from "@/components/profile/orders/orderDetailDrawer";
import OrderModel from "@/models/Order";
import { useEffect, useState } from "react";

const MainOrders = ({
  sellerOrders,
  customerOrders,
  orderType,
}: {
  sellerOrders: OrderModel[];
  customerOrders: OrderModel[];
  orderType?: "sells" | "buys";
}) => {
  const [status, setStatus] = useState<"sold" | "bought">("bought");
  const [orders, setOrders] = useState<OrderModel[]>(customerOrders);

  const changeOrdersData = () => {
    orderType === "sells"
      ? setOrders([...sellerOrders])
      : setOrders([...customerOrders]);
  };

  useEffect(() => {
    changeOrdersData();
  }, [status]);

  useEffect(() => {
    changeOrdersData()
  }, [customerOrders,sellerOrders]);

  const [order, setOrder] = useState<OrderModel>({} as OrderModel);
  const [drawerVisible, setDrawerVisibility] = useState<number>(0);

  useEffect(() => {
    const res = orders?.find((o) => o.id == drawerVisible);

    setOrder(res || ({} as OrderModel));
  }, [drawerVisible]);

  const handleStatusChange = (order: OrderModel) => {
    const orderList = orders;
    const orderIndex = orderList.findIndex((item) => item.id === order.id);
    if (orderIndex !== -1) {
      orderList[orderIndex] = order; // Update the object
      setOrders(orderList);
    }
  };

  return (
    <>
      <OrderDetailDrawer
        drawerVisible={drawerVisible}
        order={order}
        onStatusChange={(order: OrderModel) => handleStatusChange(order)}
        setDrawerVisibility={setDrawerVisibility}
      />
      <UserOrders
        orders={orders}
        isOrderSeller={orderType === "sells"}
        status={status}
        setStatus={setStatus}
        setDrawerVisibility={setDrawerVisibility}
      />
      <MobileUserOrders
        orders={orders}
        isOrderSeller={orderType === "sells"}
        status={status}
        setStatus={setStatus}
        sellerOrdersLength={sellerOrders?.length}
        customerOrdersLength={customerOrders?.length}
        setDrawerVisibility={setDrawerVisibility}
      />
    </>
  );
};

export default MainOrders;
