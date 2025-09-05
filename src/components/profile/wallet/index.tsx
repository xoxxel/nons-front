"use client";
import { Box, Grid, Typography } from "@mui/material";
import WalletMenu from "./walletMenu";
import WalletActivities from "./WalletActivities";
import { useSidebarContext } from "@/context/dashboardSidebar";
import Link from "next/link";
import ActivityModel from "@/models/Activity";
import WalletEmptyState from "./emptyState";

const Wallet = ({ transactions }: { transactions: ActivityModel[] }) => {
  const { isSideBarOpen, setIsSideBarOpen } = useSidebarContext();
  return (
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
          کیف پول
        </Typography>
        {/* braedcrumb is here */}
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
          <Link href="/profile">
            <Typography
              sx={{
                color: "button.main",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              profile
            </Typography>
          </Link>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Wallet
          </Typography>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item lg={4} md={4.5}>
            <WalletMenu />
          </Grid>
          <Grid item lg={8} md={7.5}>
            <Box
              sx={{
                width: "100%",
                p: { lg: "24px 15px", xs: "15px 12px" },
                bgcolor: "background.element",
                border: "0.5px solid",
                borderColor: "border.secondary",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{ color: "text.main", fontWeight: "600", mb: 3, py: 2 }}
              >
                فعالیت های اخیر
              </Typography>
              {transactions?.length > 0 && (
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
              <Box>
                {transactions?.length > 0 ? (
                  <WalletActivities
                    open={!isSideBarOpen}
                    activities={transactions}
                  />
                ) : (
                  <WalletEmptyState />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Wallet;
