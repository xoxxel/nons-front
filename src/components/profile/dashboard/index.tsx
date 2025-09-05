import { Box, Grid, Typography } from "@mui/material";
import BalanceCard from "../activities/activitiesMenu/balanceCard";
import Image from "next/image";
import ShopStatusCard from "./cards/shopStatusCard";
import BoostsCard from "./cards/boostsCard";
import BookmarksMenu from "../bookmarks/bookmarksMenu";
import Link from "next/link";
import convertToTehranTime from "@/utils/convertToTehranTime";
import MessageCard from "../messages/messageCard";
import ChatRoomModel from "@/models/ChatRoom";
import jalaliDate from "@/utils/jalaliDate";
import TicketBadge from "../support/ticketList/ticketBadge";
import DashboardBookmarks from "./dahboardBookmarks";
import SoldBought from "./soldBought";
import OrderModel from "@/models/Order";
import Badge from "../activities/transaction/badge";
import ActivityModel from "@/models/Activity";
import HiUser from "./hiUser";
import ThousandSeparator from "@/utils/thousandSeparator";
import OrderBadge from "../activities/transaction/orderBadge";
import ProductModel from "@/models/Product";
const Dashboard = async ({
  tickets,
  notifications,
  sellerOrders,
  orders,
  activities,
  messages,
  bookmarkedProducts,
}: {
  tickets: TicketModel[];
  notifications: NotificationModel[];
  sellerOrders: OrderModel[];
  orders: OrderModel[];
  activities: ActivityModel[];
  messages: { results: ChatRoomModel[] };
  bookmarkedProducts: ProductModel[]
}) => {
  return (
    <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
      <HiUser />
      <Box
        sx={{
          mt: "30px",
          mb: "40px",
          pl: { md: "8px", lg: "12px" },
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "33.33%",
            px: 1,
          }}
        >
          <BalanceCard />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            px: 1,
          }}
        >
          <ShopStatusCard />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            px: 1,
          }}
        >
          <BoostsCard />
        </Box>
      </Box>
      <Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item lg={4.5} md={4}>
            {activities?.length > 0 && (
              <Box
                sx={{
                  width: "100%",
                  p: "15px",
                  bgcolor: "background.element",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
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
                    فعالیت های اخیر
                  </Typography>
                  <Link href="/profile/activities">
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
                              activity?.transaction?.status_change ===
                              "cancel-buy"
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
              </Box>
            )}
            {notifications?.length > 0 && (
              <Box
                sx={{
                  width: "100%",
                  p: "15px",
                  bgcolor: "background.element",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
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
                              color: "icon.main",
                              fontSize: "14px",
                              fontWeight: "400",
                              // overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <div
                              className="notif_text"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: notification?.text,
                              }}
                            />
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
                            color: "text.secondary",
                            fontSize: "13px",
                            fontWeight: "400",
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
              </Box>
            )}
            {tickets?.length > 0 && (
              <Box
                sx={{
                  width: "100%",
                  p: "15px",
                  bgcolor: "background.element",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
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
                    تیکت ها
                  </Typography>
                  <Link href="/profile/support/ticket-list">
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
                    rowGap: "10px",
                  }}
                >
                  {tickets?.map((ticket) => (
                    <Link
                      href={`/profile/support/${ticket?.id}`}
                      key={ticket?.id}
                    >
                      <Box
                        sx={{
                          transition: "0.3s ease",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderRadius: "8px",
                          ":hover": {
                            bgcolor: "hover.main",
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
                              bgcolor: "background.secondary",
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
                                  color: "text.low",
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
                          <Box
                            sx={{
                              width: "7px",
                              height: "7px",
                              background: "#0961DC",
                              borderRadius: "15px",
                              mb: 1.5,
                              visibility: ticket?.last_message?.is_seen
                                ? "hidden"
                                : "unset",
                            }}
                          ></Box>
                          <Box>
                            <TicketBadge type={ticket?.status_ticket} />
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  ))}
                </Box>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <BookmarksMenu />
            </Box>
          </Grid>
          <Grid item lg={7.5} md={8}>
            {messages?.results?.length > 0 && (
              <Box
                sx={{
                  width: "100%",
                  p: "15px",
                  bgcolor: "background.element",
                  borderRadius: "12px",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
                }}
              >
                <Box
                  sx={{
                    px: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      پیام ها
                    </Typography>
                    <Link href="/profile/messages">
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
                      rowGap: "10px",
                    }}
                  >
                    {messages?.results?.map((message, i) => (
                      <Link
                        href={`/profile/messages?room=${message?.room_name}`}
                      >
                        <MessageCard message={message} key={i} />
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
            {orders?.length > 0 || sellerOrders?.length > 0 ? (
              <Box
                sx={{
                  width: "100%",
                  p: "15px",
                  bgcolor: "background.element",
                  borderRadius: "12px",
                  mt: "15px",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
                }}
              >
                <SoldBought
                  orders={orders}
                  sellerOrders={sellerOrders}
                  active={sellerOrders?.length > 0 ? "sold" : "bought"}
                />
              </Box>
            ) : (
              ""
            )}
              <DashboardBookmarks bookmarkedProducts={bookmarkedProducts}  />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
