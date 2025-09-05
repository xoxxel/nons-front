"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const MenuTabs = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const type = searchParams?.get("type")

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: "500",
          fontSize: "14px",
          p: "8px 10px",
        }}
      >
        فیلتر ها
      </Typography>
      <Link href="/profile/activities">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
          py: 1,
          borderRadius: "5px",
          bgcolor:
            (pathname === "/profile/activities" && !type) ? "tab.main" : "transparent",
        }}
      >
        <Typography
          sx={{
            color:
              (pathname === "/profile/activities" && !type) ? "tab.icon" : "text.main",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          همه
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            color:
              pathname === "/profile/activities" ? "tab.icon" : "text.main",
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
      <Link href="/profile/activities?type=incomes">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "8px 10px",
          borderRadius: "5px",
          bgcolor:
          type === "incomes" ? "tab.main" : "transparent",
        }}
      >
        <Typography
          sx={{ color:
            type === "incomes" ? "tab.icon" : "text.main", fontWeight: "500", fontSize: "16px" }}
        >
          ورودی ها
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            color: "text.main",
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
      <Link href="/profile/activities/?type=outgoings">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "8px 10px",
          borderRadius: "5px",
          bgcolor:
          type === "outgoings" ? "tab.main" : "transparent",
        }}
      >
        <Typography
          sx={{ color: type === "outgoings" ? "tab.icon" : "text.main", fontWeight: "500", fontSize: "16px" }}
        >
          خروجی ها
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            color: "text.main",
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
