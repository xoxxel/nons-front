import CopyCode from "@/components/profile/activities/transaction/copyCode";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Badge, Box, Typography } from "@mui/material";
import React from "react";

const WalletDeposit = ({
  setDrawerVisibility,
  data,
  activityId
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  data: WalletTransactionModel;
  activityId:number
}) => {
  return (
    <Box
      onClick={() => setDrawerVisibility(activityId)}
      sx={{
        p: "10px",
        cursor: "pointer",
        transition: "0.3s ease",
        borderRadius: "5px",
        ":hover": {
          bgcolor: "background.secondary",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
            gap: 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                bgcolor: "background.element",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20.5V4.5M12 4.5L6 10.5M12 4.5L18 10.5"
                  stroke="#06D6A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{ color: "text.main", fontWeight: "600", fontSize: "13px" }}
              >
                افزایش موجودی
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                فروش محصول
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "93px",
          }}
        >
          <Typography
            sx={{
              color: "#027A48",
              fontSize: "13px",
              fontWeight: "500",
              direction: "ltr",
            }}
          >
            {`+${ThousandSeparator(data?.value)}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletDeposit;
