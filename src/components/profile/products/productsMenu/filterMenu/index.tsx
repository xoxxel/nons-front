"use client";

import {
  Box,
  Button,
  CircularProgress,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";

const MenueContents = dynamic(
  () =>
    import("@/components/profile/products/productsMenu/filterMenu/menuContent"),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          width: "100%",
          my: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "canter",
        }}
      >
        <CircularProgress size={50} />
      </Box>
    ),
  }
);

const DashboardProductsFilterMenu = () => {
  const [isDrawerOpen, setIsDraweOpen] = useState(false);
  const right = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Button
        onClick={() => setIsDraweOpen(true)}
        sx={{
          minWidth: "28px",
          height: "28px",
          bgcolor: "icon.main",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "background.secondary",
          ":hover": {
            bgcolor: "icon.main",
          },
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2413_2792)">
            <path
              d="M1.69295 2.83343C1.31478 2.41077 1.12569 2.19944 1.11856 2.01984C1.11236 1.86382 1.17941 1.71386 1.29982 1.61444C1.43842 1.5 1.72199 1.5 2.28914 1.5H9.71061C10.2778 1.5 10.5613 1.5 10.6999 1.61444C10.8203 1.71386 10.8874 1.86382 10.8812 2.01984C10.8741 2.19944 10.685 2.41077 10.3068 2.83344L7.45368 6.02222C7.3783 6.10647 7.3406 6.14859 7.31373 6.19654C7.28989 6.23906 7.2724 6.28484 7.26181 6.33242C7.24987 6.38607 7.24987 6.4426 7.24987 6.55565V9.22919C7.24987 9.32697 7.24987 9.37586 7.2341 9.41813C7.22017 9.45548 7.1975 9.48895 7.168 9.51576C7.13461 9.54611 7.08922 9.56426 6.99843 9.60058L5.29843 10.2806C5.11466 10.3541 5.02277 10.3908 4.94901 10.3755C4.88451 10.3621 4.8279 10.3238 4.7915 10.2689C4.74987 10.2061 4.74987 10.1071 4.74987 9.90919V6.55565C4.74987 6.4426 4.74987 6.38607 4.73793 6.33242C4.72734 6.28484 4.70985 6.23906 4.68602 6.19654C4.65914 6.14859 4.62145 6.10647 4.54607 6.02222L1.69295 2.83343Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2413_2792">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Button>
      <SwipeableDrawer
        disableSwipeToOpen
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "background.main",
            backgroundImage: "none",
            borderRadius: right ? "15px 0 0 15px" : "15px 15px 0 0",
            px: 2.5,
            py: "10px",
            height: { sm: "100%", xs: "90%" },
            maxHeight: "100vh",
            overflowY: "auto",
            width: right ? "400px" : "100%",
          },
          zIndex: 99999999,
        }}
        anchor={right ? "right" : "bottom"}
        open={isDrawerOpen}
        onClose={() => setIsDraweOpen(false)}
        onOpen={() => setIsDraweOpen(true)}
      >
        <MenueContents onClose={() => setIsDraweOpen(false)} />
      </SwipeableDrawer>
    </>
  );
};

export default DashboardProductsFilterMenu;
