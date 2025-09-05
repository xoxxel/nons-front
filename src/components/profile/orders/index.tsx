"use client";

import { Box, Grid, Typography } from "@mui/material";
import * as Transaction from "@/components/profile/activities/transaction";
import OrderMenu from "./orderMenu";
import Link from "next/link";
import OrderModel from "@/models/Order";
import { useSidebarContext } from "@/context/dashboardSidebar";
import OrdersEmptyState from "./emptyState";

const UserOrders = ({
  orders,
  isOrderSeller,
  status,
  setStatus,
  setDrawerVisibility,
}: {
  orders: OrderModel[];
  isOrderSeller: boolean;
  status: "sold" | "bought";
  setStatus: React.Dispatch<React.SetStateAction<"sold" | "bought">>;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { isSideBarOpen, setIsSideBarOpen } = useSidebarContext();


  return (
    <>
      <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
        <Box sx={{ mt: 5 }}>
          {/* big title at the top */}
          <Typography
            sx={{
              color: "text.main",
              fontSize: "29px",
              fontWeight: "600",
              mt: 5,
            }}
          >
            سفارشات
          </Typography>
          {/* braedcrumb is here */}
          <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
            <Link href="/">
              <Typography sx={{ color: "button.main" }}>Home</Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary" }}>orders</Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid item lg={4} md={4.5}>
              <OrderMenu status={status} setStatus={setStatus} />
            </Grid>
            <Grid item lg={8} md={7.5}>
              <Box
                sx={{
                  width: "100%",
                  p: { lg: "24px 15px", xs: "15px 12px" },
                  bgcolor: "background.element",
                  borderRadius: "12px",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
                }}
              >
                <Typography
                  sx={{ color: "text.main", fontWeight: "600", mb: 3, py: 2 }}
                >
                  {isOrderSeller ? "سفارشات فروخته شده" : "سفارشات خریداری شده"}
                </Typography>
                {orders?.length > 0 && (
                  <Box
                    sx={{
                      p: "10px",
                      mb: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        marginInlineEnd: "12px",
                        color: "text.main",
                      }}
                    >
                      <svg
                        width="12"
                        height="19"
                        viewBox="0 0 12 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 12.5L6 17.5L11 12.5M1 6.5L6 1.5L11 6.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Typography
                      sx={{
                        color: "text.main",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      همه
                    </Typography>
                  </Box>
                )}
                {orders?.length > 0 ? (
                  <Box
                    sx={{
                      border: "0.5px solid",
                      borderColor: "border.main",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    {orders?.map((order) => (
                      <>
                        <Box sx={{ mt: "-1.2px" }}>
                          <Box
                            sx={{
                              borderBottom: "0.5px solid",
                              borderColor: "border.main",
                            }}
                          ></Box>
                          <Transaction.Order
                            setDrawerVisibility={setDrawerVisibility}
                            open={!isSideBarOpen}
                            order={order}
                            isOrderSeller={isOrderSeller}
                          />
                        </Box>
                      </>
                    ))}
                  </Box>
                ) : (
                  <OrdersEmptyState />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UserOrders;
