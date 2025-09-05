"use client";

import { Box, Button } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
const Deposit = dynamic(() => import("./deposit"));
const Withdraw = dynamic(() => import("./withdraw"));

const DepositAndWithdraw = () => {
  const [status, setStatus] = useState<"deposit" | "withdraw" | "none">("none");

  return (
    <>
      {status === "deposit" && <Deposit withBackground setStatus={setStatus} />}
      {status === "withdraw" && <Withdraw setStatus={setStatus} />}
      {status === "none" && (
        <Box sx={{ width: "100%", display: "flex", gap: 2, my: 4.5 }}>
          <Button
            onClick={() => setStatus("deposit")}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "icon.main",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              bgcolor: "hover.main",
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "icon.main",
              }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 20V4M12.5 4L6.5 10M12.5 4L18.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            واریز
          </Button>
          <Button
            onClick={() => setStatus("withdraw")}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "icon.main",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              bgcolor: "hover.main",
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "icon.main",
              }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 5V19M12.5 19L19.5 12M12.5 19L5.5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            برداشت
          </Button>
        </Box>
      )}
    </>
  );
};

export default DepositAndWithdraw;
