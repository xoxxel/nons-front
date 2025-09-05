"use client"
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const QuickAccess = ({onAllSeen}:{onAllSeen?:Function}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 100,
        direction: "ltr",
        bgcolor: "background.tertiary",
        height: "54px",
        width: "100%",
        left: "0",
        bottom: "73px",
        px: 2.5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "120px",
          height: "54px",
          display: "flex",
          bgcolor: "background.main",
        }}
      >
        <Box
          sx={{
            width: "33.33%",
            flexBasis: "33.33%",
            height: "100%",
            borderRadius: "5px 0 0 0",
            bgcolor: "background.tertiary",
          }}
        ></Box>
        <Box
          sx={{
            width: "33.33%",
            flexBasis: "33.33%",
            height: "100%",
            bgcolor: "background.tertiary",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "40%",
              bgcolor: "background.main",
              borderRadius: "0 0 8px 8px",
              display:"flex",justifyContent:"center"
            }}
          >
              <Box
              onClick={()=> onAllSeen && onAllSeen()}
                sx={{
                  width: "80%",
                  height: "30px",
                  bgcolor: "background.tertiary",
                  position: "relative",
                  bottom: "12.5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
              >
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2L7 13L2 8"
                    stroke="#b280ff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3906_11489"
                      x1="4.85714"
                      y1="2"
                      x2="8.51043"
                      y2="12.1849"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3284FF" />
                      <stop offset="1" stop-color="#9039FE" />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "33.33%",
            flexBasis: "33.33%",
            height: "100%",
            borderRadius: "0 5px 0 0",
            bgcolor: "background.tertiary",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="/profile/notifications?type=system">
            <Box
              sx={{
                color: "white",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 11.2496L4.87782 16.7609C4.91657 16.9159 4.93594 16.9934 4.95886 17.061C5.18277 17.7221 5.77808 18.1869 6.47371 18.2438C6.54491 18.2496 6.6248 18.2496 6.78457 18.2496C6.98464 18.2496 7.08467 18.2496 7.16894 18.2414C8.00187 18.1607 8.66104 17.5015 8.74183 16.6686C8.75 16.5843 8.75 16.4843 8.75 16.2842V3.81212M16.1875 10.8121C17.8789 10.8121 19.25 9.44099 19.25 7.74962C19.25 6.05825 17.8789 4.68712 16.1875 4.68712M8.96875 3.81212H5.6875C3.51288 3.81212 1.75 5.575 1.75 7.74962C1.75 9.92424 3.51288 11.6871 5.6875 11.6871H8.96875C10.5144 11.6871 12.4051 12.5156 13.8638 13.3108C14.7147 13.7747 15.1402 14.0066 15.4189 13.9725C15.6773 13.9409 15.8727 13.8248 16.0242 13.6131C16.1875 13.3847 16.1875 12.9279 16.1875 12.0141V3.48512C16.1875 2.57136 16.1875 2.11449 16.0242 1.88615C15.8727 1.67441 15.6773 1.55838 15.4189 1.52673C15.1402 1.4926 14.7147 1.72454 13.8638 2.18843C12.4051 2.98359 10.5144 3.81212 8.96875 3.81212Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            mx: 3,
          }}
        >
          <Link href="/profile/notifications?type=message">
            <Box
              sx={{
                color: "white",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.625 5.825C1.625 4.35486 1.625 3.61979 1.91111 3.05827C2.16278 2.56435 2.56435 2.16278 3.05827 1.91111C3.61979 1.625 4.35486 1.625 5.825 1.625H13.175C14.6451 1.625 15.3802 1.625 15.9417 1.91111C16.4356 2.16278 16.8372 2.56435 17.0889 3.05827C17.375 3.61979 17.375 4.35486 17.375 5.825V10.55C17.375 12.0201 17.375 12.7552 17.0889 13.3167C16.8372 13.8107 16.4356 14.2122 15.9417 14.4639C15.3802 14.75 14.6451 14.75 13.175 14.75H10.9733C10.4272 14.75 10.1542 14.75 9.89306 14.8036C9.66137 14.8511 9.43717 14.9298 9.22655 15.0374C8.98915 15.1587 8.77595 15.3292 8.34956 15.6704L6.26229 17.3402C5.89821 17.6314 5.71617 17.7771 5.56297 17.7772C5.42974 17.7774 5.30369 17.7168 5.22058 17.6127C5.125 17.4929 5.125 17.2598 5.125 16.7936V14.75C4.31127 14.75 3.90441 14.75 3.5706 14.6606C2.66473 14.4178 1.95717 13.7103 1.71444 12.8044C1.625 12.4706 1.625 12.0637 1.625 11.25V5.825Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Link>
        </Box>
        <Box>
          <Link href="/profile/notifications?type=transaction">
            <Box
              sx={{
                color: "white",
                display: "flex",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.83 2.31L2.465 4.13C2.19464 4.49048 2.05946 4.67072 2.06259 4.82159C2.06532 4.95288 2.12689 5.07601 2.23028 5.15697C2.3491 5.25 2.5744 5.25 3.025 5.25H15.975C16.4256 5.25 16.6509 5.25 16.7697 5.15697C16.8731 5.07601 16.9347 4.95288 16.9374 4.82159C16.9405 4.67072 16.8054 4.49048 16.535 4.13L15.17 2.31M3.83 2.31C3.984 2.10467 4.061 2.002 4.15858 1.92795C4.24501 1.86237 4.34289 1.81343 4.44721 1.78364C4.565 1.75 4.69333 1.75 4.95 1.75H14.05C14.3067 1.75 14.435 1.75 14.5528 1.78364C14.6571 1.81343 14.755 1.86237 14.8414 1.92795C14.939 2.002 15.016 2.10467 15.17 2.31M3.83 2.31L2.185 4.50333C1.97722 4.78037 1.87333 4.91889 1.79956 5.07143C1.7341 5.20679 1.68636 5.35002 1.65751 5.49759C1.625 5.66389 1.625 5.83703 1.625 6.18333L1.625 16.45C1.625 17.4301 1.625 17.9201 1.81574 18.2945C1.98352 18.6238 2.25123 18.8915 2.58052 19.0593C2.95486 19.25 3.44491 19.25 4.425 19.25L14.575 19.25C15.5551 19.25 16.0451 19.25 16.4195 19.0593C16.7488 18.8915 17.0165 18.6238 17.1843 18.2945C17.375 17.9201 17.375 17.4301 17.375 16.45V6.18333C17.375 5.83704 17.375 5.66389 17.3425 5.49759C17.3136 5.35002 17.2659 5.20679 17.2004 5.07143C17.1267 4.91889 17.0228 4.78037 16.815 4.50333L15.17 2.31M13 8.75C13 9.67826 12.6313 10.5685 11.9749 11.2249C11.3185 11.8812 10.4283 12.25 9.5 12.25C8.57174 12.25 7.6815 11.8812 7.02513 11.2249C6.36875 10.5685 6 9.67826 6 8.75"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickAccess;
