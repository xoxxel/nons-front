import { Box, Typography } from "@mui/material";
import React from "react";

const TicketBadge = ({ type }: { type: string }) => {
  return (
    <Box
      sx={{
        bgcolor:
          type == "close" ? "badge.disable" : type == "open" ? "badge.info" : "badge.warning",
        width: { xs: "64px", md: "80px" },
        height: { xs: "22px", md: "28px" },
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color:
            type == "close"
              ? "badgeText.disable"
              : type == "open"
              ? "badgeText.info"
              : "badgeText.warning",
          fontSize: { xs: "12px", md: "14px" },
          fontWeight: "500",
        }}
      >
        {type == "close" ? "بسته شده" : type == "open" ? "باز" : "در انتظار"}
      </Typography>
    </Box>
  );
};

export default TicketBadge;
