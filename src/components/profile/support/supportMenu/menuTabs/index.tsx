"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuTabs = () => {
  const pathname = usePathname();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: "10px" }}
    >
      <Link href="/profile/support">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/support" ? "tab.main" : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: pathname === "/profile/support" ? "tab.icon" : "text.main",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            ارسال تیکت
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color: pathname === "/profile/support" ? "tab.icon" : "text.main",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Link>
      <Link href="/profile/support/ticket-list">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/support/ticket-list"
                ? "tab.main"
                : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color:
                pathname === "/profile/support/ticket-list"
                  ? "tab.icon"
                  : "text.main",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            تیکت های من
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color:
                pathname === "/profile/support/ticket-list"
                  ? "tab.icon"
                  : "text.main",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Link>
      <Link href="/profile/support/help-center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/support/help-center"
                ? "tab.main"
                : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color:
                pathname === "/profile/support/help-center"
                  ? "tab.icon"
                  : "text.main",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            مرکز پشتیبانی
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color:
                pathname === "/profile/support/help-center"
                  ? "tab.icon"
                  : "text.main",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
export default MenuTabs;
