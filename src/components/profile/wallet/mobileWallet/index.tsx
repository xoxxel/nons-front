"use client";

import { Box, Drawer, Typography } from "@mui/material";
import BalanceCard from "../../activities/activitiesMenu/balanceCard";
import * as Transaction from "./transactionCards";
import * as TransactionStatus from "../WalletActivities/transactionStatus";
import QuickAccess from "./quickAccess";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import FinancialAccount from "../../privacy/financialAccount";
import ActivityModel from "@/models/Activity";
import WalletEmptyState from "../emptyState";
const Withdraw = dynamic(
  () =>
    import(
      "@/components/profile/activities/activitiesMenu/deposit&withdraw/withdraw"
    )
);
const Deposit = dynamic(
  () =>
    import(
      "@/components/profile/activities/activitiesMenu/deposit&withdraw/deposit/index"
    ),
  {
    ssr: false,
  }
);

const MobileWallet = ({
  transactions,
}: {
  transactions: ActivityModel[];
}) => {
  const [drawerVisible, setDrawerVisibility] = useState<number>(0);
  const [actionDrawerOpen, setActionDrawerOpen] = useState<
    boolean | "withdraw" | "deposit" | "card"
  >(false);

    const [activityDetail, setActivityDetail] = useState<ActivityModel>(
      {} as ActivityModel
    );
  
    useEffect(() => {
      if (drawerVisible !== 0) {
        setActivityDetail(
          transactions?.filter((transaction) => transaction?.id === drawerVisible)?.[0]
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
          display: { xs: "block", md: "none" },
          "& .MuiPaper-root": {
            background: "background.main",
            width: { xs: "320px", sm: "372px" },
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
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <QuickAccess setActionDrawerOpen={setActionDrawerOpen} />
        <Box
          sx={{
            p: "16px 13.5px",
            bgcolor: "background.main",
            pb: 20,
          }}
        >
          <Box>
            <BalanceCard />
          </Box>
          {transactions?.length > 0 &&<Box
            sx={{
              my: 2,
              py: "10px",
              px: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                color: "text.main",
              }}
            >
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 12L6.5 17L11.5 12M1.5 6L6.5 1L11.5 6"
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
                px: 1.5,
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              همه
            </Typography>
          </Box>}
          {transactions?.length > 0 ? <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            {transactions?.map((activity) =>
              activity?.transaction?.status_type === "deposite" ? (
                <Transaction.Deposit
                  data={activity?.transaction}
                  setDrawerVisibility={setDrawerVisibility}
                  activityId={activity.id}
                />
              ) : (
                <Transaction.Withdraw
                  data={activity?.transaction}
                  setDrawerVisibility={setDrawerVisibility}
                  activityId={activity.id}
                />
              )
            )}
          </Box> : <WalletEmptyState />}
        </Box>
      </Box>
      {/* bottom drawer */}
      <Drawer
        open={Boolean(actionDrawerOpen)}
        onClose={() => setActionDrawerOpen(false)}
        anchor="bottom"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "35px 35px 0 0",
            mb: "70px",
            height: actionDrawerOpen === "withdraw" ? "85%" : "fit-content",
          },
          // "& .MuiBackdrop-root": { bgcolor: "transparent" },
          zIndex: 998,
        }}
      >
        {actionDrawerOpen === "withdraw" && <Withdraw withoutShadow onClose={()=> setActionDrawerOpen(false)} />}
        {actionDrawerOpen === "card" && (
          <Box sx={{ py: 8, px: 2 }}>
            <FinancialAccount />
          </Box>
        )}
        {actionDrawerOpen === "deposit" && <Deposit onClose={()=> setActionDrawerOpen(false)} />}
      </Drawer>
    </>
  );
};

export default MobileWallet;
