"use client";

import { Box, SwipeableDrawer, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ProfileMenuContent from "./menuContent";

const BottomNavigation = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: "14px",
          bgcolor: "navigation.main",
          display: { md: "none", xs: "flex" },
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        {/* profile */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            color:
              pathname.startsWith("/profile") &&
              pathname !== "/profile/wish-list" &&
              pathname !== "/profile/messages"
                ? "primary.main"
                : "text.secondary",
          }}
        >
          <Box
            onClick={() => setIsDrawerOpen(true)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
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
                d="M12.4999 15C9.32977 15 6.51065 16.5306 4.71585 18.906C4.32956 19.4172 4.13641 19.6728 4.14273 20.0183C4.14761 20.2852 4.31521 20.6219 4.52522 20.7867C4.79704 21 5.17372 21 5.92708 21H19.0726C19.826 21 20.2027 21 20.4745 20.7867C20.6845 20.6219 20.8521 20.2852 20.857 20.0183C20.8633 19.6728 20.6701 19.4172 20.2839 18.906C18.4891 16.5306 15.6699 15 12.4999 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.4999 12C14.9851 12 16.9999 9.98528 16.9999 7.5C16.9999 5.01472 14.9851 3 12.4999 3C10.0146 3 7.99985 5.01472 7.99985 7.5C7.99985 9.98528 10.0146 12 12.4999 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography sx={{ fontSize: "12px", color: "inherit" }}>
              پروفایل
            </Typography>
          </Box>
        </Box>
        {/* messages */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            color:
              pathname === "/profile/messages"
                ? "primary.main"
                : "text.secondary",
          }}
        >
          <Link href="/profile/messages">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15L6.92474 18.1137C6.49579 18.548 6.28131 18.7652 6.09695 18.7805C5.93701 18.7938 5.78042 18.7295 5.67596 18.6076C5.55556 18.4672 5.55556 18.162 5.55556 17.5515V15.9916C5.55556 15.444 5.10707 15.0477 4.5652 14.9683V14.9683C3.25374 14.7762 2.22378 13.7463 2.03168 12.4348C2 12.2186 2 11.9605 2 11.4444V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H14.2C15.8802 2 16.7202 2 17.362 2.32698C17.9265 2.6146 18.3854 3.07354 18.673 3.63803C19 4.27976 19 5.11984 19 6.8V11M19 22L16.8236 20.4869C16.5177 20.2742 16.3647 20.1678 16.1982 20.0924C16.0504 20.0255 15.8951 19.9768 15.7356 19.9474C15.5558 19.9143 15.3695 19.9143 14.9969 19.9143H13.2C12.0799 19.9143 11.5198 19.9143 11.092 19.6963C10.7157 19.5046 10.4097 19.1986 10.218 18.8223C10 18.3944 10 17.8344 10 16.7143V14.2C10 13.0799 10 12.5198 10.218 12.092C10.4097 11.7157 10.7157 11.4097 11.092 11.218C11.5198 11 12.0799 11 13.2 11H18.8C19.9201 11 20.4802 11 20.908 11.218C21.2843 11.4097 21.5903 11.7157 21.782 12.092C22 12.5198 22 13.0799 22 14.2V16.9143C22 17.8462 22 18.3121 21.8478 18.6797C21.6448 19.1697 21.2554 19.5591 20.7654 19.762C20.3978 19.9143 19.9319 19.9143 19 19.9143V22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography sx={{ fontSize: "12px", color: "inherit" }}>
                پیام ها
              </Typography>
            </Box>
          </Link>
        </Box>
        {/* store */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: pathname?.startsWith("/shop")
              ? "primary.main"
              : "text.secondary",
            width: "100%",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Link href="/products">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
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
                  d="M8.9 3H5.1C4.53995 3 4.25992 3 4.04601 3.10899C3.85785 3.20487 3.70487 3.35785 3.60899 3.54601C3.5 3.75992 3.5 4.03995 3.5 4.6V8.4C3.5 8.96005 3.5 9.24008 3.60899 9.45399C3.70487 9.64215 3.85785 9.79513 4.04601 9.89101C4.25992 10 4.53995 10 5.1 10H8.9C9.46005 10 9.74008 10 9.95399 9.89101C10.1422 9.79513 10.2951 9.64215 10.391 9.45399C10.5 9.24008 10.5 8.96005 10.5 8.4V4.6C10.5 4.03995 10.5 3.75992 10.391 3.54601C10.2951 3.35785 10.1422 3.20487 9.95399 3.10899C9.74008 3 9.46005 3 8.9 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.9 3H16.1C15.5399 3 15.2599 3 15.046 3.10899C14.8578 3.20487 14.7049 3.35785 14.609 3.54601C14.5 3.75992 14.5 4.03995 14.5 4.6V8.4C14.5 8.96005 14.5 9.24008 14.609 9.45399C14.7049 9.64215 14.8578 9.79513 15.046 9.89101C15.2599 10 15.5399 10 16.1 10H19.9C20.4601 10 20.7401 10 20.954 9.89101C21.1422 9.79513 21.2951 9.64215 21.391 9.45399C21.5 9.24008 21.5 8.96005 21.5 8.4V4.6C21.5 4.03995 21.5 3.75992 21.391 3.54601C21.2951 3.35785 21.1422 3.20487 20.954 3.10899C20.7401 3 20.4601 3 19.9 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.9 14H16.1C15.5399 14 15.2599 14 15.046 14.109C14.8578 14.2049 14.7049 14.3578 14.609 14.546C14.5 14.7599 14.5 15.0399 14.5 15.6V19.4C14.5 19.9601 14.5 20.2401 14.609 20.454C14.7049 20.6422 14.8578 20.7951 15.046 20.891C15.2599 21 15.5399 21 16.1 21H19.9C20.4601 21 20.7401 21 20.954 20.891C21.1422 20.7951 21.2951 20.6422 21.391 20.454C21.5 20.2401 21.5 19.9601 21.5 19.4V15.6C21.5 15.0399 21.5 14.7599 21.391 14.546C21.2951 14.3578 21.1422 14.2049 20.954 14.109C20.7401 14 20.4601 14 19.9 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.9 14H5.1C4.53995 14 4.25992 14 4.04601 14.109C3.85785 14.2049 3.70487 14.3578 3.60899 14.546C3.5 14.7599 3.5 15.0399 3.5 15.6V19.4C3.5 19.9601 3.5 20.2401 3.60899 20.454C3.70487 20.6422 3.85785 20.7951 4.04601 20.891C4.25992 21 4.53995 21 5.1 21H8.9C9.46005 21 9.74008 21 9.95399 20.891C10.1422 20.7951 10.2951 20.6422 10.391 20.454C10.5 20.2401 10.5 19.9601 10.5 19.4V15.6C10.5 15.0399 10.5 14.7599 10.391 14.546C10.2951 14.3578 10.1422 14.2049 9.95399 14.109C9.74008 14 9.46005 14 8.9 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography sx={{ fontSize: "12px", color: "inherit" }}>
                فروشگاه
              </Typography>
            </Box>
          </Link>
        </Box>
        {/* wish list  */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            color:
              pathname === "/profile/bookmarks"
                ? "primary.main"
                : "text.secondary",
          }}
        >
          <Link href="/profile/bookmarks">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography sx={{ fontSize: "12px", color: "inherit" }}>
                نشان ها
              </Typography>
            </Box>
          </Link>
        </Box>
        {/* home */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: pathname === "/" ? "primary.main" : "text.secondary",
            width: "100%",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Link href="/">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
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
                  d="M8.5 17H16.5M11.5177 2.764L4.73539 8.03912C4.28202 8.39175 4.05534 8.56806 3.89203 8.78886C3.74737 8.98444 3.6396 9.20478 3.57403 9.43905C3.5 9.70352 3.5 9.9907 3.5 10.5651V17.8C3.5 18.9201 3.5 19.4801 3.71799 19.908C3.90973 20.2843 4.21569 20.5903 4.59202 20.782C5.01984 21 5.57989 21 6.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4801 21.5 18.9201 21.5 17.8V10.5651C21.5 9.9907 21.5 9.70352 21.426 9.43905C21.3604 9.20478 21.2526 8.98444 21.108 8.78886C20.9447 8.56806 20.718 8.39175 20.2646 8.03913L13.4823 2.764C13.131 2.49075 12.9553 2.35412 12.7613 2.3016C12.5902 2.25526 12.4098 2.25526 12.2387 2.3016C12.0447 2.35412 11.869 2.49075 11.5177 2.764Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography sx={{ fontSize: "12px", color: "inherit" }}>
                خانه
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <SwipeableDrawer
        disableSwipeToOpen
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "background.main",
            backgroundImage: "none",
            borderRadius: "15px 15px 0 0",
            p: "10px",
            maxHeight: "100vh",
            overflowY: "auto",
            width: "100%",
            pb: "74px",
          },
          zIndex: 100,
        }}
        anchor={"bottom"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        <ProfileMenuContent setIsDrawerOpen={setIsDrawerOpen} />
      </SwipeableDrawer>
    </>
  );
};

export default BottomNavigation;
