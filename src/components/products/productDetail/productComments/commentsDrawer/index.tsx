"use client";
import {
  Box,
  Button,
  Modal,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const CommentsDrawer = ({
  children,
  setIsDraweOpen,
  isDrawerOpen,
  handleClose,
}: Readonly<{
  children: React.ReactNode;
  setIsDraweOpen: any;
  isDrawerOpen: boolean;
  handleClose: Function;
}>) => {
  const isTab = useMediaQuery("(min-width:600px)");

  return (
    <>
      {!isTab && (
        <SwipeableDrawer
          disableSwipeToOpen
          sx={{
            "& .MuiPaper-root": {
              bgcolor: "#40494D",
              borderRadius: "15px 15px 0 0",
              px: 2.5,
              pb: 3.25,
              height: { md: "auto", xs: "100%" },
            },
            zIndex: 99999999,
          }}
          anchor="bottom"
          open={isDrawerOpen}
          onClose={() => setIsDraweOpen(false)}
          onOpen={() => setIsDraweOpen(true)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={() => setIsDraweOpen(false)}
              sx={{
                height: "5px",
                width: "170px",
                borderRadius: "80px",
                bgcolor: "#848686",
                mt: 2,
                mb: 3,
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 1,
              borderBottom: "0.5px solid",
              borderColor: "grey.700",
              pb: 2,
              mb: 5,
            }}
          >
            <Typography sx={{ fontWeight: "900", color: "white" }}>
              نظرات
            </Typography>
            <svg
              onClick={() => setIsDraweOpen(false)}
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6666 10.5H3.33325M3.33325 10.5L8.33325 15.5M3.33325 10.5L8.33325 5.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Box
            className="scrollbarHidden"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "calc(100% - 126px)",
              overflowY: "auto",
            }}
          >
            {children}
          </Box>
        </SwipeableDrawer>
      )}
      {isTab && (
        <Modal
          open={isDrawerOpen}
          onClose={() => handleClose()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: { sm: "600px", xs: "100%" },
              height: { sm: "80vh", xs: "100vh" },
              bgcolor: "background.main",
              borderRadius: { sm: "12px", xs: "0px" },
              outline: 0,
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
                borderBottom: "0.5px solid",
                borderColor: "grey.700",
                pb: 2,
                mb: 5,
                pt: 2.5,
                px: 2,
                color:"text.main",
              }}
            >
              <Typography sx={{ fontWeight: "900", color: "text.main" }}>
                نظرات
              </Typography>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={()=>handleClose()}
                style={{cursor:"pointer"}}
              >
                <path
                  d="M15.5 5.5L5.5 15.5M5.5 5.5L15.5 15.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Box
              className="scrollbarHidden"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "calc(100% - 126px)",
                overflowY: "auto",
                px: 2,
              }}
            >
              {children}
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CommentsDrawer;
