import {
  fetchMessages,
  fetchNotifications,
  fetchRecentActivities,
  fetchSellerOrders,
  fetchTickets,
  fetchUserOrders,
  fetchUserProductBookmarks,
} from "@/api/data";
import Dashboard from "@/components/profile/dashboard";
import DashboardMobile from "@/components/profile/dashboard/dashboardMobile";
import ActivityModel from "@/models/Activity";
import ChatRoomModel from "@/models/ChatRoom";
import OrderModel from "@/models/Order";
import ProductModel from "@/models/Product";
import React from "react";

const ProfileDashboard = async () => {
  const sellerOrders: { results: OrderModel[] } = await fetchSellerOrders({ limit: "4" });
  const orders: { results: OrderModel[] } = await fetchUserOrders({ limit: "4" });
  const tickets: { results: TicketModel[] } = await fetchTickets(4);
  const notifications: NotificationModel[] = await fetchNotifications();
  const activities: { results: ActivityModel[] } = await fetchRecentActivities({
    limit: 4,
  });
  const messages: { results: ChatRoomModel[] } = await fetchMessages({
    limit: 4,
  });


  let bookmarks: ProductModel[] = [];

  const getBookmarks = async () => {
    bookmarks = (await fetchUserProductBookmarks(3))?.results;
  }

  await getBookmarks()

  return (
    <>
      <DashboardMobile
        tickets={tickets?.results}
        notifications={notifications}
        activities={activities?.results}
        sellerOrders={sellerOrders?.results}
        orders={orders?.results}
        messages={messages}
        bookmarkedProducts={bookmarks}
      />
      <Dashboard
        tickets={tickets?.results}
        notifications={notifications}
        sellerOrders={sellerOrders?.results}
        orders={orders?.results}
        activities={activities?.results}
        messages={messages}
        bookmarkedProducts={bookmarks}

      />
    </>
  );
};

export default ProfileDashboard;
