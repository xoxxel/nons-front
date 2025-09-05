"use client"

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const MenuTabs = ({
  status,
  setStatus,
}: {
  status: "sold" | "bought";
  setStatus: React.Dispatch<React.SetStateAction<"sold" | "bought">>;
}) => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name:string, value:string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: "10px" }}
    >
      <Box sx={{ p: "8px 10px" }}>
        <Typography
          sx={{ fontWeight: "500", fontSize: "14px", color: "text.secondary" }}
        >
          مدریت سفارشات
        </Typography>
      </Box>
      <Box
      onClick={()=> router.push(`${pathname}?${createQueryString("type","buys")}`)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
          py: 1,
          bgcolor: !(searchParams.get("type") == "sells") ? "tab.main" : "transparent",

          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <Typography
        
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: !(searchParams.get("type") == "sells") ? "tab.icon" : "text.main",
          }}
        >
          خریده شده
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            color: searchParams.get("type") == "buys" ? "tab.icon" : "text.main",
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
      <Box
      onClick={()=> router.push(`${pathname}?${createQueryString("type","sells")}`)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
          py: 1,
          bgcolor: searchParams.get("type") == "sells" ? "tab.main" : "transparent",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: searchParams.get("type") == "sells" ? "tab.icon" : "text.main",
          }}
        >
          فروخته شده
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            color: searchParams.get("type") == "sells" ? "tab.icon" : "text.main",
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
    </Box>
  );
};

export default MenuTabs;
