"use client";
import React, { Ref, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BookmarksMenu from "../../bookmarks/bookmarksMenu";
import CardsSlider from "./swiper/cardsSlider";
import Badge from "../../activities/transaction/badge";
import TicketBadge from "../../support/ticketList/ticketBadge";
import jalaliDate from "@/utils/jalaliDate";
import convertToTehranTime from "@/utils/convertToTehranTime";
import Link from "next/link";
import DashboardBookmarks from "../dahboardBookmarks";
import SoldBought from "./soldBought";
import ActivityModel from "@/models/Activity";
import HiUser from "../hiUser";
import ThousandSeparator from "@/utils/thousandSeparator";
import OrderBadge from "../../activities/transaction/orderBadge";
import OrderModel from "@/models/Order";
import ChatRoomModel from "@/models/ChatRoom";
import MessageCard from "../../messages/messageCard";
import SaveInLocalStorage from "@/utils/saveInLocalStorage";
import ProductModel from "@/models/Product";

const DashboardMobile = ({
  tickets,
  notifications,
  activities,
  sellerOrders,
  orders,
  messages,
  bookmarkedProducts
}: {
  tickets: TicketModel[];
  notifications: NotificationModel[];
  activities: ActivityModel[];
  sellerOrders: OrderModel[];
  orders: OrderModel[];
  messages: { results: ChatRoomModel[] },
  bookmarkedProducts: ProductModel[]

}) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const ticketsRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const viewsRef = useRef<HTMLDivElement>(null);
  const ordersRef = useRef<HTMLDivElement>(null);
  const bookmarksRef = useRef<HTMLDivElement>(null);
  const messagesTabRef = useRef<HTMLDivElement>(null);
  const activitiesTabRef = useRef<HTMLDivElement>(null);
  const ticketsTabRef = useRef<HTMLDivElement>(null);
  const notificationsTabRef = useRef<HTMLDivElement>(null);
  const viewsTabRef = useRef<HTMLDivElement>(null);
  const ordersTabRef = useRef<HTMLDivElement>(null);
  const bookmarksTabRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("messages");
  const [isTabClicked, setIsTabClicked] = useState(false);
  const lasSeenProducts = SaveInLocalStorage("products-history")

  const handleScroll = (
    ref: React.RefObject<HTMLElement>,
    tabRef: React.RefObject<HTMLElement>
  ): void => {
    if (ref.current) {
      setIsTabClicked(true);
      setActiveTab(ref.current.id);
      setTimeout(() => {
        setIsTabClicked(false);
      }, 420);
      const targetPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - 110;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 400; // Decreased duration to 400 milliseconds
      let startTime: number | null = null;

      tabRef.current?.scrollIntoView({ inline: "center", behavior: "smooth" });

      const animation = (currentTime: number): void => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

        // Ease-in-out effect
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

        window.scrollTo(
          startPosition + distance * ease,
          startPosition + distance * ease
        );

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const sections: { id: string, label: string, ref: React.RefObject<HTMLDivElement>, tabRef: React.RefObject<HTMLDivElement>, length: number }[] = [
    {
      id: "messages",
      label: "پیام ها",
      ref: messagesRef,
      tabRef: messagesTabRef,
      length: messages?.results?.length
    },
    {
      id: "activities",
      label: "فعالیت های اخیر",
      ref: activitiesRef,
      tabRef: activitiesTabRef,
      length: activities?.length
    },
    { id: "tickets", label: "تیکت ها", ref: ticketsRef, tabRef: ticketsTabRef, length: tickets?.length },
    {
      id: "notifications",
      label: "اطلاع رسانی",
      ref: notificationsRef,
      tabRef: notificationsTabRef,
      length: notifications?.length
    },
    {
      id: "views",
      label: "بازدیدهای اخیر",
      ref: viewsRef,
      tabRef: viewsTabRef,
      length: lasSeenProducts?.length || 0
    },
    { id: "orders", label: "سفارشات", ref: ordersRef, tabRef: ordersTabRef, length: orders?.length + sellerOrders?.length },
    {
      id: "bookmarks",
      label: "علامت گذاری شده ها",
      ref: bookmarksRef,
      tabRef: bookmarksTabRef,
      length: bookmarkedProducts?.length
    },
  ];

  const throttle = <T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ) => {
    let lastFunc: NodeJS.Timeout | undefined;
    let lastRan: number = 0; // Initialize lastRan with a default value

    return function (this: any, ...args: Parameters<T>) {
      const context = this;
      const now = Date.now();

      if (now - lastRan >= limit) {
        func.apply(context, args);
        lastRan = now; // Update lastRan to the current time
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now(); // Update lastRan to the current time
          }
        }, limit - (now - lastRan));
      }
    };
  };

  return (
    <Box sx={{ width: "100%", display: { md: "none", xs: "block" } }}>
      <Box
        sx={{
          mb: "88px",
        }}
      >
        <Box
          sx={{
            px: 3,
          }}
        >
          <HiUser />
        </Box>
        <Box
          sx={{
            mt: 2.5,
            mb: "40px",
            px: "10px",
          }}
        >
          <CardsSlider />
        </Box>
        <Box
          className="scrollbarHidden"
          ref={tabContainerRef}
          sx={{
            mb: 2,
            px: 3,
            // py: 2,
            bgcolor: "background.main",
            position: "sticky",
            top: "53px",
            paddingBottom: "1px",
            zIndex: "10",
            display: "flex",
            gap: 3,
            overflowX: "scroll",
          }}
        >
          {/* <TabsSlider /> */}
          {sections.map((section) => (
            section?.length > 0 && (
              <Box
                key={section?.id}
                id={`${section?.id}Tab`}
                ref={section?.tabRef}
                onClick={() => handleScroll(section?.ref, section?.tabRef)}
                sx={{
                  color: "icon.main",
                  borderBottom: "3px solid",
                  borderColor:
                    activeTab === section?.id ? "primary.main" : "transparent",
                  pb: "10px",
                  px: 2,
                  mt: 1,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {section?.label}
              </Box>)
          ))}
        </Box>
        <Box>
          <Box
            sx={{
              px: "10px",
            }}
          >
            {messages?.results?.length > 0 && <Box
              className="dashboard__section"
              ref={messagesRef}
              id="messages"
              sx={{
                width: "100%",
                p: "15px",
                bgcolor: "background.element",
                borderRadius: "12px",
                mt: "15px",
              }}
            >
              <Box
                sx={{
                  px: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  پیام ها
                </Typography>
                <Link href="/profile/messages">
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    مشاهده بیشتر
                  </Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  mt: "10px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                {messages?.results?.map((message, i) => (
                  <Link href={`/profile/messages?room=${message?.room_name}`}>
                    <MessageCard message={message} key={i} />
                  </Link>
                ))}
              </Box>
            </Box>}
            {activities?.length > 0 && <Box
              className="dashboard__section"
              id="activities"
              ref={activitiesRef}
              sx={{
                width: "100%",
                p: "15px",
                bgcolor: "background.element",
                borderRadius: "12px",
                mt: "15px",
              }}
            >
              <Box
                sx={{
                  px: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  فعالیت های اخیر
                </Typography>
                <Link href="/profile/activities">
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    مشاهده بیشتر
                  </Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  mt: "10px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                {activities?.map((activity) => (
                  <Box
                    key={activity?.id}
                    sx={{
                      py: "10px",
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
                      <Box
                        sx={{
                          width: "36px",
                          height: "36px",
                          bgcolor: "hover.main",
                          color: "icon.main",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 6.5V10.5M10 14.5H10.01M5.8 19.5H14.2C15.8802 19.5 16.7202 19.5 17.362 19.173C17.9265 18.8854 18.3854 18.4265 18.673 17.862C19 17.2202 19 16.3802 19 14.7V6.3C19 4.61984 19 3.77976 18.673 3.13803C18.3854 2.57354 17.9265 2.1146 17.362 1.82698C16.7202 1.5 15.8802 1.5 14.2 1.5H5.8C4.11984 1.5 3.27976 1.5 2.63803 1.82698C2.07354 2.1146 1.6146 2.57354 1.32698 3.13803C1 3.77976 1 4.61984 1 6.3V14.7C1 16.3802 1 17.2202 1.32698 17.862C1.6146 18.4265 2.07354 18.8854 2.63803 19.173C3.27976 19.5 4.11984 19.5 5.8 19.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Box
                        sx={{
                          mx: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          {activity?.transaction?.status_change ===
                            "direct-deposite" ||
                            activity?.transaction?.status_change === "sell" ||
                            activity?.transaction?.status_change === "cancel-buy"
                            ? "افزایش موجودی"
                            : "کاهش موجودی"}
                          {/* {activity?.transaction?.status_change === "direct-withraw" ||
                          activity?.transaction?.status_change === "buy" ||
                          activity?.transaction?.status_change === "cancel-sell" ? "کاهش موجودی" : ""} */}
                        </Typography>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "500",
                            px: "10px",
                          }}
                        >
                          {ThousandSeparator(activity?.price)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      {activity?.order ? (
                        <OrderBadge status={activity?.order?.status} />
                      ) : (
                        <Badge
                          status={activity?.transaction?.status_transaction}
                        />
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>}
            {tickets?.length > 0 && <Box
              className="dashboard__section"
              id="tickets"
              ref={ticketsRef}
              sx={{
                width: "100%",
                p: "15px",
                bgcolor: "background.element",
                borderRadius: "12px",
                mt: "15px",
              }}
            >
              <Box
                sx={{
                  px: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  تیکت ها
                </Typography>
                <Link href="/profile/support/ticket-list">
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    مشاهده بیشتر
                  </Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                {tickets?.map((ticket) => (
                  <Link
                    key={ticket?.id}
                    href={`/profile/support/${ticket?.id}`}
                  >
                    <Box
                      sx={{
                        transition: "0.3s ease",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        ":hover": {
                          background: "hover.main",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "hover.main",
                            width: "36px",
                            height: "36px",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "icon.main",
                          }}
                        >
                          <svg
                            width="22"
                            height="19"
                            viewBox="0 0 22 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 9.5H4.88197C5.56717 9.5 6.19357 9.88713 6.5 10.5C6.80643 11.1129 7.43283 11.5 8.11803 11.5H13.882C14.5672 11.5 15.1936 11.1129 15.5 10.5C15.8064 9.88713 16.4328 9.5 17.118 9.5H20.5M7.96656 1.5H14.0334C15.1103 1.5 15.6487 1.5 16.1241 1.66396C16.5445 1.80896 16.9274 2.0456 17.2451 2.35675C17.6043 2.7086 17.8451 3.1902 18.3267 4.15337L20.4932 8.4865C20.6822 8.86449 20.7767 9.05348 20.8434 9.25155C20.9026 9.42745 20.9453 9.60847 20.971 9.79226C21 9.99923 21 10.2105 21 10.6331V12.7C21 14.3802 21 15.2202 20.673 15.862C20.3854 16.4265 19.9265 16.8854 19.362 17.173C18.7202 17.5 17.8802 17.5 16.2 17.5H5.8C4.11984 17.5 3.27976 17.5 2.63803 17.173C2.07354 16.8854 1.6146 16.4265 1.32698 15.862C1 15.2202 1 14.3802 1 12.7V10.6331C1 10.2105 1 9.99923 1.02897 9.79226C1.05471 9.60847 1.09744 9.42745 1.15662 9.25155C1.22326 9.05348 1.31776 8.86448 1.50675 8.4865L3.67331 4.15337C4.1549 3.19019 4.3957 2.7086 4.75495 2.35675C5.07263 2.0456 5.45551 1.80896 5.87589 1.66396C6.35125 1.5 6.88969 1.5 7.96656 1.5Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            px: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.main",
                              fontSize: "16px",
                              fontWeight: "600",
                              cursor: "default",
                            }}
                          >
                            {`#${ticket?.ticket_code}`}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#8899A6",
                                fontSize: "14px",
                                fontWeight: "400",
                                cursor: "default",
                              }}
                            >
                              {`ایجاد شده در ${jalaliDate(
                                ticket?.date_created,
                                "D MMMM"
                              )}`}
                            </Typography>
                            <span
                              style={{
                                color: "#8899A6",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "default",
                                margin: "0 3px",
                              }}
                            >
                              .
                            </span>
                            <Typography
                              sx={{
                                color: "#8899A6",
                                fontSize: "14px",
                                fontWeight: "400",
                                cursor: "default",
                              }}
                            >
                              سفارش
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        {!ticket?.last_message?.is_seen && <Box
                          sx={{
                            width: "7px",
                            height: "7px",
                            background: "#0961DC",
                            borderRadius: "15px",
                            mb: 1.5,
                            // visibility: "hidden",
                          }}
                        ></Box>}
                        <Box>
                          <TicketBadge type={ticket?.status_ticket} />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>}
            {notifications?.length > 0 && <Box
              className="dashboard__section"
              id="notifications"
              ref={notificationsRef}
              sx={{
                width: "100%",
                p: "15px",
                bgcolor: "background.element",
                borderRadius: "12px",
                mt: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  اطلاع رسانی
                </Typography>
                <Link href="/profile/notifications">
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
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "16px",
                }}
              >
                {notifications?.slice(0, 4)?.map((notification) => (
                  <Box
                    key={notification?.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "90%",
                      }}
                    >
                      <Box>
                        <Image
                          src={
                            notification?.sender?.image
                              ? `${process.env.NEXT_PUBLIC_SERVER}/${notification?.sender?.image}`
                              : "/images/boredape.png"
                          }
                          alt="avatar"
                          width={36}
                          height={36}
                          style={{
                            borderRadius: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          mx: "10px",
                          maxWidth: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          {notification?.sender?.name ?? "وبسایت نونز"}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "text.main",
                          }}
                        >
                          {notification?.text}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "7px",
                          height: "7px",
                          background: !notification?.is_seen
                            ? "#0961DC"
                            : "transparent",
                          borderRadius: "100%",
                        }}
                      ></Box>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "text.secondary",
                        }}
                      >
                        {convertToTehranTime(notification?.date_created) ===
                          convertToTehranTime(new Date().toISOString())
                          ? "اکنون"
                          : convertToTehranTime(notification?.date_created)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>}
            {(lasSeenProducts && lasSeenProducts?.length > 0) && <Box
              className="dashboard__section"
              id="views"
              ref={viewsRef}
              sx={{
                width: "100%",
                bgcolor: "background.element",
                borderRadius: "12px",
                p: "15px",
                mt: "15px",
              }}
            >
              <BookmarksMenu />
            </Box>}
          </Box>
          <Box
            sx={{
              px: "10px",
            }}
          >
            {(orders?.length > 0 && sellerOrders?.length > 0) && <Box
              className="dashboard__section"
              id="orders"
              ref={ordersRef}
              sx={{
                width: "100%",
                p: "15px",
                bgcolor: "background.element",
                borderRadius: "12px",
                mt: "15px",
              }}
            >
              <SoldBought orders={orders} sellerOrders={sellerOrders} />
            </Box>}

            <Box
              className="dashboard__section"
              id="bookmarks"
              ref={bookmarksRef}
            >
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <DashboardBookmarks bookmarkedProducts={bookmarkedProducts} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardMobile;
