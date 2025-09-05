"use client";

import { UserContext } from "@/context/UserProvider";
import ThousandSeparator from "@/utils/thousandSeparator";
import {
  Box,
  CircularProgress,
  Drawer,
  Skeleton,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
const Deposit = dynamic(() => import("../deposit&withdraw/deposit"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight:"300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ),
});

const BalanceCard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMount, setIsMount] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          mt: "7px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "380px", xs: "none" },
            height: "190px",
            background: "url('/images/balancebg.png'), rgba(0,0,0,0.8)",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            borderRadius: "12px",
            p: { md: "15px 24px", sm: "15px", xs: "10px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Image src="/images/nons.svg" width={55} height={13} alt="none" />
          </Box>
          <Box sx={{ color: "white" }}>
            <Typography sx={{ fontSize: "13px", fontWeight: "700", mb: "2px" }}>
              موجودی حساب
            </Typography>
            {isMount ? (
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  direction: "ltr",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                {ThousandSeparator(user?.wallet_balance)} IRT
              </Typography>
            ) : (
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ height: "36px", width: "100px" }}
              />
            )}
          </Box>
          <Box
            onClick={() => setIsDrawerOpen(true)}
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              display: { md: "none", xs: "flex" },
              alignItems: "center",
              gap: "10px",
              p: "10px",
              cursor: "pointer",
            }}
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.125V11.875M3.625 7.5H12.375"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{ color: "white", fontWeight: "600", fontSize: "12px" }}
            >
              افزایش موجودی
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "85%",
            height: "7px",
            borderRadius: "15px 15px 0 0",
            background:
              "radial-gradient(31.03% 70.81% at 73.85% 40%, #FFEB69 0%, #A7F242 100%)",
            top: "-7px",
            position: "absolute",
          }}
        ></Box>
      </Box>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="bottom"
        sx={{
          "& .MuiPaper-root": { borderRadius: "35px 35px 0 0", mb: "70px" },
          "& .MuiBackdrop-root": { bgcolor: "transparent" },
          zIndex: 998,
        }}
      >
        <Box sx={{ minHeight: "300px" }}>
          {isDrawerOpen && <Deposit setOpen={setIsDrawerOpen} />}
        </Box>
      </Drawer>
    </Box>
  );
};

export default BalanceCard;
