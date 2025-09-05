"use client"

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const SidebarOption = ({
  icon,
  title,
  badgeNumber,
  isActive,
  isSideBarOpen,
  link,
}: {
  icon: string;
  title: string;
  badgeNumber: number;
  isActive?: boolean;
  isSideBarOpen: boolean;
  link:string;
}) => {

  const [showComponent, setShowComponent] = useState(isSideBarOpen);

  useEffect(() => {
    if (isSideBarOpen) {
      const timer = setTimeout(() => {
        setShowComponent(true);
      }, 70); //

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    } else {
      setShowComponent(false);
    }
  }, [isSideBarOpen]);

  return (
    <>
      {showComponent ? (
        <Link href={link} >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            py: 0.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: "text.main",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: icon }} />
            <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
              {title}
            </Typography>
          </Box>
          {badgeNumber > 0 && (
            <Box
              sx={{
                width: "18px",
                height: "18px",
                bgcolor: "border.main",
                borderRadius: "50px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                pt: "2px",
                ml: "10px",
              }}
            >
              {badgeNumber}
            </Box>
          )}
          {/* active row border */}
          {isActive && (
            <Box
              sx={{
                height: "100%",
                width: "5px",
                bgcolor: "button.main",
                position: "absolute",
                left: "-5px",
              }}
            ></Box>
          )}
        </Box>
        </Link>
      ) : (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", position:"relative",py:0.5,color:"text.main"}}>
          <Link href={link}>
          <div dangerouslySetInnerHTML={{ __html: icon }} />
          </Link>
          {/* active row border */}
          {isActive && (
            <Box
              sx={{
                height: "100%",
                width: "5px",
                bgcolor: "button.main",
                position: "absolute",
                left: "-5px",
              }}
            ></Box>
          )}
        </Box>
      )}
    </>
  );
};

export default SidebarOption;
