"use client";

import { UserContext } from "@/context/UserProvider";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";

const MenuTabs = () => {
  const pathname = usePathname();
  const { user } = useContext(UserContext)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 6 }}>
      <Typography
        sx={{ color: "text.secondary", fontSize: "14px", fontWeight: "500" }}
      >
        تنظیمات
      </Typography>
      <Link href="/profile/settings">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor: pathname === "/profile/settings" ? "tab.main" : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: pathname === "/profile/settings" ? "tab.icon" : "text.main",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            اطلاعات کاربری
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color: pathname === "/profile/settings" ? "tab.icon" : "text.main",
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
      <Link href="/profile/settings/privacy">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/settings/privacy" ? "tab.main" : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: pathname === "/profile/settings/privacy" ? "tab.icon" : "text.main",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            حریم خصوصی و امنیت
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color: pathname === "/profile/settings/privacy" ? "tab.icon" : "text.main",
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
      <Link onClick={() => { if (!user?.verified) return toast.error("لطفا ابتدا پروفایل خود را تکمیل کنید!") }} href={user?.verified ? "/profile/settings/seller" : "#"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "10px",
            py: 1,
            bgcolor:
              pathname === "/profile/settings/seller" ? "tab.main" : "transparent",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: pathname === "/profile/settings/seller" ? "tab.icon" : "text.main",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            اطلاعات فروشگاه
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              color: pathname === "/profile/settings/seller" ? "tab.icon" : "text.main",
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
