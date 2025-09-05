"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileTabs = () => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        display: "flex",
        mt: 5,
      }}
    >
      <Link
        href="/profile"
        style={{
          width: "50%",
          flexBasis: "50%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderBottom: "3px solid",
            borderBottomColor:
              pathname === "/profile" ? "button.main" : "background.secondary",
            // transition: "0.3s ease",
            // ":hover": {
            //   borderBottomColor: "primary.main",
            // },
            // "&:hover .text": {
            //   color: "primary.main",
            // },
          }}
        >
          <Typography
            className="text"
            sx={{
              color:
                pathname === "/profile"
                  ? "button.main"
                  : "background.secondary",
              fontSize: "14px",
              fontWeight: "600",
              py: 1,
              transition: "0.3s ease",
            }}
          >
            محصولات
          </Typography>
        </Box>
      </Link>
      <Link
        href="/profile"
        style={{
          width: "50%",
          flexBasis: "50%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderBottom: "3px solid",
            borderBottomColor:
              pathname === "/profile/posts"
                ? "button.main"
                : "background.secondary",
            // transition: "0.3s ease",
            // ":hover": {
            //   borderBottomColor: "primary.main",
            // },
            // "&:hover .text": {
            //   color: "primary.main",
            // },
          }}
        >
          <Typography
            className="text"
            sx={{
              color:
                pathname === "/profile/posts"
                  ? "button.main"
                  : "background.secondary",
              fontSize: "14px",
              fontWeight: "600",
              py: 1,
              transition: "0.3s ease",
            }}
          >
            پست ها
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default ProfileTabs;
