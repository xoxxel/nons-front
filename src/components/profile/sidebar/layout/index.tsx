"use client";

import { Box } from "@mui/material";
import ProfileSideBar from "..";
import BottomNavigation from "../../../layout/bottomNavigation";
import { useState } from "react";
import NextTopLoader from "nextjs-toploader";
import { useSidebarContext } from "@/context/dashboardSidebar";
import MobileProfileSidebar from "../mobileSidebar";

const ProfileLayoutCompnent = ({ children }: { children: React.ReactNode }) => {
  const { isSideBarOpen, setIsSideBarOpen } = useSidebarContext();
  const [isMobileSideBarOpen, setIsMobileSideBarOpen] =
    useState<boolean>(false);

    
  return (
    <>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          height: "100%",
          gap: { lg: 3, md: 1.5 },
        }}
      >
        <Box
          sx={{
            width: isSideBarOpen ? { lg: "312px", md: "230px" } : "68px",
            transition: "all 0.3s ease",
          }}
        >
          <ProfileSideBar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            setIsMobileSideBarOpen={setIsMobileSideBarOpen}
          />
        </Box>
        <Box
          onClick={() => setIsSideBarOpen(false)}
          sx={{
            width: isSideBarOpen
              ? { lg: "calc(100vw - 336px)", md: "calc(100vw - 246px)" }
              : "calc(100vw - 92px)",
            height: "100vh",
            overflowY: "scroll",
            pb: 2,
            transition: "all 0.3s ease",
          }}
          className="scrollbarHidden"
        >
          {children}
        </Box>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <ProfileSideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          setIsMobileSideBarOpen={setIsMobileSideBarOpen}
        />
        <Box sx={{ display: { md: "none", xs: "block" } }}>{children}</Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <BottomNavigation />
        </Box>
        <MobileProfileSidebar
          setIsMobileSideBarOpen={setIsMobileSideBarOpen}
          isMobileSideBarOpen={isMobileSideBarOpen}
        />
      </Box>
      <NextTopLoader
        template='<div class="bar" id="bar" role="bar"></div>'
        height={5}
        color="linear-gradient(90deg, #9FE870 0%, #A31CA5 50%, #0961DC 100%);
 !important"
      />
    </>
  );
};

export default ProfileLayoutCompnent;
