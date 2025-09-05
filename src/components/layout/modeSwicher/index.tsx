"use client";

import {
  Box,
  Button,
  Skeleton,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useEffect, useState } from "react";

const ModeSwicher = () => {
  const { mode, setMode } = useColorScheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.cookie = `mode=${mode}`;
  }, [mode]);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Box
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={{
        width: "44px",
        height: "24px",
        borderRadius: "80px",
        bgcolor: mode === "dark" ? "white" : "#3C464B",
        padding: "2px",
        display: "flex",
        justifyContent: mode === "dark" ? "end" : "start",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50px",
          bgcolor: mode === "dark" ? "#3C464B" : "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mode === "dark" ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8781 7.55801C12.0749 8.96693 10.559 9.91684 8.82113 9.91684C6.2438 9.91684 4.15446 7.8275 4.15446 5.25017C4.15446 3.51221 5.10452 1.99614 6.51362 1.19299C3.55348 1.47366 1.23779 3.96642 1.23779 7.00003C1.23779 10.2217 3.84947 12.8334 7.07113 12.8334C10.1046 12.8334 12.5972 10.5179 12.8781 7.55801Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.07113 1.16663V2.33329M7.07113 11.6666V12.8333M2.40446 6.99996H1.23779M3.75436 3.68319L2.9294 2.85824M10.3879 3.68319L11.2128 2.85824M3.75436 10.3191L2.9294 11.1441M10.3879 10.3191L11.2128 11.1441M12.9045 6.99996H11.7378M9.98779 6.99996C9.98779 8.61079 8.68196 9.91663 7.07113 9.91663C5.4603 9.91663 4.15446 8.61079 4.15446 6.99996C4.15446 5.38913 5.4603 4.08329 7.07113 4.08329C8.68196 4.08329 9.98779 5.38913 9.98779 6.99996Z"
              stroke="#0E0F0C"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Box>
    </Box>
  ) : (
    <Skeleton
      variant="rectangular"
      width={44}
      height={24}
      sx={{ borderRadius: "50px" }}
    />
  );
};

export default ModeSwicher;

export const BiggerModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.cookie = `mode=${mode}`;
  }, [mode]);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Box
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={{
        width: "98px",
        height: "32px",
        borderRadius: "50px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.14) inset",
        border:
          mode === "light"
            ? "1px solid rgba(252, 252, 252, 1)"
            : "1px solid rgba(88, 101, 108, 1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "4px",
        bgcolor: mode === "light" ? "#F5F7FA" : "#3C464B",
        cursor: "pointer",
        flexDirection: mode === "light" ? "row-reverse" : "reverse",
      }}
    >
      <Box
        sx={{
          width: "24px",
          height: "24px",
          borderRadius: "50px",
          background:
            mode === "light"
              ? "linear-gradient(180deg, #FFE500 0%, #E1CB05 100%)"
              : "linear-gradient(180deg, #4D5356 0%, #343C40 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mode === "light" ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00008 1.16675V2.33341M7.00008 11.6667V12.8334M2.33341 7.00008H1.16675M3.68332 3.68332L2.85836 2.85836M10.3168 3.68332L11.1418 2.85836M3.68332 10.3192L2.85836 11.1442M10.3168 10.3192L11.1418 11.1442M12.8334 7.00008H11.6667M9.91675 7.00008C9.91675 8.61091 8.61091 9.91675 7.00008 9.91675C5.38925 9.91675 4.08341 8.61091 4.08341 7.00008C4.08341 5.38925 5.38925 4.08341 7.00008 4.08341C8.61091 4.08341 9.91675 5.38925 9.91675 7.00008Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8071 7.55813C12.0039 8.96705 10.4879 9.91696 8.75008 9.91696C6.17275 9.91696 4.08341 7.82762 4.08341 5.25029C4.08341 3.51233 5.03347 1.99626 6.44257 1.19312C3.48243 1.47378 1.16675 3.96654 1.16675 7.00015C1.16675 10.2218 3.77842 12.8335 7.00008 12.8335C10.0335 12.8335 12.5262 10.518 12.8071 7.55813Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Box>
      <Typography
        sx={{
          fontSize: "13px",
          color: "text.main",
          userSelect: "none",
          pr: mode === "light" ? "2px" : 0,
          pl: mode === "dark" ? "2px" : 0,
        }}
      >
        {`حالت ${mode === "light" ? "روز" : "شب"}`}
      </Typography>
    </Box>
  ) : (
    <Skeleton
      variant="rectangular"
      width={95}
      height={28}
      sx={{ borderRadius: "50px" }}
    />
  );
};

export const ModeSwicherButton = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={{ minWidth: "36px", height: "36px", borderRadius: "50%",color:"icon.main" }}
    >
      {mode === "dark" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8068 12.5581C17.0036 13.967 15.4877 14.917 13.7498 14.917C11.1725 14.917 9.08317 12.8276 9.08317 10.2503C9.08317 8.51233 10.0332 6.99626 11.4423 6.19312C8.48219 6.47378 6.1665 8.96654 6.1665 12.0002C6.1665 15.2218 8.77818 17.8335 11.9998 17.8335C15.0333 17.8335 17.5259 15.518 17.8068 12.5581Z"
            stroke="#E0E0E0"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V5.6M12 18.4V20M5.6 12H4M7.45129 7.45129L6.31992 6.31992M16.5487 7.45129L17.6801 6.31992M7.45129 16.552L6.31992 17.6834M16.5487 16.552L17.6801 17.6834M20 12H18.4M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke="#344054"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Button>
  );
};
