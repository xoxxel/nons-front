"use client";

import { Box, Drawer, Grid, Typography } from "@mui/material";
import ActivitiesMenu from "./activitiesMenu";
import * as Transaction from "./transaction";
import * as TransactionStatus from "./activitiesMenu/transactionStatus";
import { useSidebarContext } from "@/context/dashboardSidebar";
import ActivityModel from "@/models/Activity";
import ActivitiesEmptyState from "./emptyState";
import { useEffect, useState } from "react";
const UserActivities = ({ activities }: { activities: ActivityModel[] }) => {
  const { isSideBarOpen, setIsSideBarOpen } = useSidebarContext();
  const [drawerVisibility, setDrawerVisibility] = useState(0);
  const [activityDetail, setActivityDetail] = useState<ActivityModel>(
    {} as ActivityModel
  );

  useEffect(() => {
    if (drawerVisibility !== 0) {
      setActivityDetail(
        activities?.filter((activity) => activity?.id === drawerVisibility)?.[0]
      );
    }
  }, [drawerVisibility]);

  return (
    <>
      <Drawer
        open={Boolean(drawerVisibility)}
        onClose={() => setDrawerVisibility(0)}
        anchor="right"
        sx={{
          display: { xs: "none", md: "block" },
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
        {activityDetail?.order ? (
          <TransactionStatus.Trade
            setDrawerVisibility={setDrawerVisibility}
            activity={activityDetail}
          />
        ) : (
          <TransactionStatus.DepositAndWithdraw
            setDrawerVisibility={setDrawerVisibility}
            activity={activityDetail}
          />
        )}
      </Drawer>
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
            فعالیت های اخیر
          </Typography>
          {/* braedcrumb is here */}
          <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
            <Typography sx={{ color: "button.main" }}>Home</Typography>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary" }}>setting</Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid item lg={4} md={4.5}>
              <ActivitiesMenu />
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
                  sx={{
                    color: "text.main",
                    fontWeight: "600",
                    mb: 3,
                    py: 2,
                    px: "10px",
                  }}
                >
                  فعالیت های اخیر
                </Typography>
                {activities?.length > 0 ? (
                  <>
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
                    <Box>
                      <Box
                        sx={{
                          border: "0.5px solid",
                          borderColor: "border.main",
                          borderRadius: "5px",
                          overflow: "hidden",
                        }}
                      >
                        {activities?.map((activity) => (
                          <Box sx={{ mt: "-2px" }}>
                            <Box
                              sx={{
                                borderBottom: "0.5px solid",
                                borderColor: "border.main",
                              }}
                            ></Box>
                            {activity?.order ? (
                              <Transaction.Trade
                                open={!isSideBarOpen}
                                activity={activity}
                                setDrawerVisibility={setDrawerVisibility}
                              />
                            ) : activity?.transaction?.status_type ===
                              "deposite" ? (
                              <Transaction.Deposit
                                open={!isSideBarOpen}
                                activity={activity}
                                setDrawerVisibility={setDrawerVisibility}
                              />
                            ) : (
                              <Transaction.Withdraw
                                open={!isSideBarOpen}
                                activity={activity}
                                setDrawerVisibility={setDrawerVisibility}
                              />
                            )}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </>
                ) : (
                  <ActivitiesEmptyState />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UserActivities;
