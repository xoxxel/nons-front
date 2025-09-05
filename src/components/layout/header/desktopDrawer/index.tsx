"use client";

import DesktopDrawerSkeleton from "@/components/skeletons/desktopDrawerSkeleton";
import { Box, Drawer } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";

const DrawerContent = dynamic(() => import("./drawerContent"), {
  ssr: false,
  loading: () => <DesktopDrawerSkeleton />,
});

const DesktopDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const handleOpen = () => {
    setIsLoad(true);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Box sx={{ color: "text.main", height: "21px" }}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M2.5 10.5H17.5M2.5 5.5H17.5M2.5 15.5H17.5"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="right"
        id="main-drawer"
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "background.main",
            backgroundImage: "none",
            width: "300px",
            p: "0",
            msOverflowStyle: "none" /* IE and Edge */,
            scrollbarWidth: "none" /* Firefox */,
            zIndex: 999999,
          },
          "& .MuiDrawer-paper": {
            // borderLeft:"3px solid #9FE870"
          },
        }}
      >
        {isLoad && (
          <DrawerContent
            onSelect={()=>setIsDrawerOpen(false)}
          />
        )}
      </Drawer>
    </>
  );
};

export default DesktopDrawer;
