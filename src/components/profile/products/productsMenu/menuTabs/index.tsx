"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuTabs = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: 4 }}>
      <Box sx={{ p: "8px 10px" }}>
        <Typography
          sx={{ fontWeight: "500", fontSize: "14px", color: "text.secondary" }}
        >
          اقدامات
        </Typography>
      </Box>
      <Link href="/profile/products/add-product">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/products/add-product"
                ? "tab.main"
                : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color:
                pathname === "/profile/products/add-product"
                  ? "tab.icon"
                  : "text.main",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            افزودن جدید
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color:
                pathname === "/profile/products/add-product"
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
      <Link href="/profile/products/edit-products">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/products/edit-products"
                ? "tab.main"
                : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color:
                pathname === "/profile/products/edit-products"
                  ? "tab.icon"
                  : "text.main",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            ویرایش گروهی
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color:
                pathname === "/profile/products/edit-products"
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
      {/* <Link href="/profile/products">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            اشتراک گذاری
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
      </Link> */}
    </Box>
  );
};

export default MenuTabs;
