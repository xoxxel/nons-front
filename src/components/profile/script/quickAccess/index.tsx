import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const QuickAccess = () => {
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
        display: { xs: "flex", md: "none" },
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
            }}
          >
            <Link
              href="/profile/script"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
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
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="#b280ff"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2950_45348"
                      x1="7.5"
                      y1="5"
                      x2="13.5"
                      y2="16.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3284FF" />
                      <stop offset="1" stop-color="#9039FE" />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
            </Link>
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
          <Link href="/profile/script">
            <Box
              sx={{
                color: "white",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7V4.375L16.625 1.75L17.5 3.5L19.25 4.375L16.625 7H14ZM14 7L10.5 10.5M19.25 10.5C19.25 15.3325 15.3325 19.25 10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75M14.875 10.5C14.875 12.9162 12.9162 14.875 10.5 14.875C8.08375 14.875 6.125 12.9162 6.125 10.5C6.125 8.08375 8.08375 6.125 10.5 6.125"
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
          <Link href="/profile/script">
            <Box
              sx={{
                color: "white",
                display: "flex",
                cursor: "pointer",
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
                  d="M16.9375 6.36804L9.49997 10.5M9.49997 10.5L2.06247 6.36804M9.49997 10.5L9.5 18.8125M17.375 14.0512V6.94878C17.375 6.64896 17.375 6.49906 17.3308 6.36536C17.2917 6.24708 17.2279 6.13851 17.1434 6.0469C17.048 5.94336 16.917 5.87056 16.6549 5.72496L10.1799 2.12773C9.93175 1.98987 9.80767 1.92094 9.67627 1.89392C9.55998 1.87 9.44003 1.87 9.32373 1.89392C9.19233 1.92094 9.06825 1.98987 8.8201 2.12774L2.3451 5.72496C2.08302 5.87056 1.95197 5.94336 1.85655 6.04691C1.77214 6.13851 1.70825 6.24708 1.66917 6.36536C1.625 6.49906 1.625 6.64897 1.625 6.94878V14.0512C1.625 14.3511 1.625 14.501 1.66917 14.6347C1.70825 14.7529 1.77214 14.8615 1.85655 14.9531C1.95197 15.0567 2.08302 15.1295 2.3451 15.2751L8.8201 18.8723C9.06826 19.0102 9.19233 19.0791 9.32373 19.1061C9.44003 19.13 9.55998 19.13 9.67627 19.1061C9.80767 19.0791 9.93175 19.0102 10.1799 18.8723L16.6549 15.2751C16.917 15.1295 17.048 15.0567 17.1434 14.9531C17.2279 14.8615 17.2917 14.7529 17.3308 14.6347C17.375 14.501 17.375 14.3511 17.375 14.0512Z"
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
          <Link href="/profile/script">
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
                  d="M17.375 17.375L13.5687 13.5687M15.625 8.625C15.625 12.491 12.491 15.625 8.625 15.625C4.75901 15.625 1.625 12.491 1.625 8.625C1.625 4.75901 4.75901 1.625 8.625 1.625C12.491 1.625 15.625 4.75901 15.625 8.625Z"
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
