"use client";

import { Box, Drawer } from "@mui/material";
import * as Transaction from "./WalletTransaction";
import * as TransactionStatus from "../WalletActivities/transactionStatus";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ActivityModel from "@/models/Activity";

const SucessfulDeposit = dynamic(() => import("../mobileWallet"));

const WalletActivities = ({
  open,
  activities,
}: {
  open: boolean;
  activities: ActivityModel[];
}) => {
  const [drawerVisible, setDrawerVisibility] = useState<number>(0);
  const [activityDetail, setActivityDetail] = useState<ActivityModel>(
    {} as ActivityModel
  );

  useEffect(() => {
    if (drawerVisible !== 0) {
      setActivityDetail(
        activities?.filter((activity) => activity?.id === drawerVisible)?.[0]
      );
    }
  }, [drawerVisible]);

  return (
    <>
      <Drawer
        open={Boolean(drawerVisible)}
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
        {activityDetail?.transaction?.status_change === "direct-deposite" ||
        activityDetail?.transaction?.status_change === "direct-withraw" ? (
          <TransactionStatus.DepositAndWithdraw setDrawerVisibility={setDrawerVisibility} transaction={activityDetail} />
        ) : (
          <TransactionStatus.Trade setDrawerVisibility={setDrawerVisibility} transaction={activityDetail} />
        )}
      </Drawer>
      <Box
        sx={{
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        {activities?.map((activity) => (
          <Box sx={{ mt: "-1.2px" }}>
            <Box
              sx={{
                borderBottom: "0.5px solid",
                borderColor: "border.main",
              }}
            ></Box>
            {activity?.transaction?.status_type === "deposite" &&(
                <Transaction.Deposit
                  open={open}
                  setDrawerVisibility={setDrawerVisibility}
                  data={activity?.transaction}
                  activityId={activity.id}
                />
              )}
            {activity?.transaction?.status_type === "withdraw" && (
              <Transaction.Withdraw
                open={open}
                setDrawerVisibility={setDrawerVisibility}
                data={activity?.transaction}
                activityId={activity?.id}
              />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default WalletActivities;
