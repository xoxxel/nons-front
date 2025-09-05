import { Button, Typography } from "@mui/material";
import React from "react";

const TicketButton = ({ type }: { type: string }) => {
  return (
    <Button
      sx={{
        backgroundColor:
          type == "close" ? "#F2F4F7" : type == "open" ? "#FDF2FA" : "#FFFAEB",
        width: "64px",
        height: "22px",
        borderRadius: "5px",
        p: 0,
      }}
    >
      <Typography
        sx={{
          color:
            type == "close"
              ? "#344054"
              : type == "open"
              ? "#C11574"
              : "#B54708",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        {type == "close" ? "بسته شده" : type == "open" ? "باز" : "در انتظار"}
      </Typography>
    </Button>
  );
};

export default TicketButton;
