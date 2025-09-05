"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuTabs = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 6 }}>
      <Link href="/profile">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor: pathname === "/profile" ? "tab.main" : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: pathname === "/profile" ? "tab.icon" : "text.main",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            محصولات
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color: pathname === "/profile" ? "tab.icon" : "text.main",
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
      {/* <Link href="/profile/posts"> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor: pathname === "/profile/posts" ? "tab.main" : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: pathname === "/profile/posts" ? "tab.icon" : "text.main",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            پست ها
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color: pathname === "/profile/posts" ? "tab.icon" : "text.main",
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
      {/* </Link> */}
    </Box>
  );
};

export default MenuTabs;
