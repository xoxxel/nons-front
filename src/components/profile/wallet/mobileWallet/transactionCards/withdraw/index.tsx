import React from "react";
import { Box, Typography } from "@mui/material";
import ThousandSeparator from "@/utils/thousandSeparator";

const WalletWithdraw = ({
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
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 1.5V17.5M7.5 17.5L13.5 11.5M7.5 17.5L1.5 11.5"
                  stroke="#FC5D6D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{ color: "text.main", fontWeight: "600", fontSize: "13px" }}
              >
                برداشت
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                واریز به حساب
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
              color: "#B42318",
              fontSize: "13px",
              fontWeight: "500",
              direction: "ltr",
            }}
          >
            {`-${ThousandSeparator(data?.value)}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletWithdraw;
