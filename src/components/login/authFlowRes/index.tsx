"use client";

import { Box, CircularProgress, Drawer } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
interface AuthModel {
  step: "login" | "otp" | "password";
  timer: number;
  isAuthVisible: boolean;
  inputValue: string;
  onClose: () => void;
}

const LoginDrawerContent = dynamic(() => import("./drawerContent"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "238px",
      }}
    >
      <CircularProgress size={50} />
    </Box>
  ),
});

const AuthFlowRes = ({
  step,
  timer,
  isAuthVisible,
  inputValue,
  onClose,
}: AuthModel) => {

  return (
    <Drawer
    sx={{
      "& .MuiPaper-root": {
        bgcolor: "background.main",
        backgroundImage: "none",
        borderRadius:"15px 15px 0 0",
        p: "10px",
        maxHeight: "100vh",
        overflowY: "auto",
        width: "100%",
        pb:"74px",
        px:2,
      },
      zIndex: 100,
    }}
    anchor={"bottom"}
    open={isAuthVisible}
    onClose={() => onClose()}
  >
      {isAuthVisible && (
        <LoginDrawerContent timer={timer} step={step} inputValue={inputValue} />
      )}
    </Drawer>
  );
};

export default AuthFlowRes;
