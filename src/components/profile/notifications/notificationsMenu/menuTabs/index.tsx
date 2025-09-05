"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MenuTabs = () => {
  const searchParams = useSearchParams();
  const filter = searchParams?.get("type");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: 4 }}>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "14px",
          fontWeight: "500",
          px: "10px",
        }}
      >
        فیلتر ها
      </Typography>
      {/* tab */}
      <Link href="/profile/notifications">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor: !filter ? "tab.main" : "transparent",
            color: !filter ? "tab.icon" : "text.main",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            همه
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
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
      {/* tab */}
      <Link href="/profile/notifications?type=message">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor: filter === "message" ? "tab.main" : "transparent",
            color: filter === "message" ? "tab.icon" : "text.main",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            پیام ها
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
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
      {/* tab */}
      <Link href="/profile/notifications?type=transaction">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              filter === "transaction" ? "tab.main" : "transparent",
            color: filter === "transaction" ? "tab.icon" : "text.main",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            تراکنش ها
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
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
      {/* tab */}
      <Link href="/profile/notifications?type=system">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor: filter === "system" ? "tab.main" : "transparent",
            color: filter === "system" ? "tab.icon" : "text.main",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            سیستمی
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
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
