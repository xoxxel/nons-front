"use client";

import Select from "@/components/layout/header/search/select";
import SearcDrawerSkeleton from "@/components/skeletons/searchDrawerSkeleton";
import { Box, SwipeableDrawer, Typography, useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";

const SearchPage = dynamic(() => import("./searchPage"), { ssr: false, loading: ()=> <SearcDrawerSkeleton /> });

const SearcDrawer = () => {
  const [isDrawerOpen, setIsDraweOpen] = useState(false);
  const right = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "28px",
          bgcolor: "background.element",
          borderRadius: "7px",
          minHeight: "100%",
          width: { md: "50%", xs: "100%" },
        }}
      >
        <Box
          onClick={() => setIsDraweOpen(true)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            // width: { lg: "65%", md: "58%", xs: "100%" },
            width:"100%",
            color: "text.main",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path
              d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography>دنبال چی میگردی ؟</Typography>
        </Box>
        {/* <Box
          sx={{
            display: { md: "block", xs: "none" },
          }}
        >
          <Select />
        </Box> */}
      </Box>
      <SwipeableDrawer
        disableSwipeToOpen
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "background.main",
            borderRadius: right ? "15px 0 0 15px" : "15px 15px 0 0",
            px: 2.5,
            pb: 3.25,
            height: { sm: "100vh", xs: "90%" },
            maxHeight: "100vh",
            overflowY: "auto",
            width: right ? "400px" : "100%",
            display: "flex",
            alignSelf: "center",
          },
          zIndex: 99999999,
        }}
        anchor={right ? "right" : "bottom"}
        open={isDrawerOpen}
        onClose={() => setIsDraweOpen(false)}
        onOpen={() => setIsDraweOpen(true)}
      >
        {/* line at top in mobile  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "5px",
              width: "170px",
              borderRadius: "80px",
              bgcolor: "#848686",
              mt: 2,
              mb: 3,
              display: { sm: "none", xs: "block" },
            }}
          ></Box>
        </Box>
        {isDrawerOpen && <SearchPage setIsDraweOpen={setIsDraweOpen} />}
      </SwipeableDrawer>
    </>
  );
};

export default SearcDrawer;
