"use client";
import { UserContext } from "@/context/UserProvider";
import ShareLink from "@/utils/share";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";

const QuickAccess = () => {
  const { isSeller, setIsSeller,user } = useContext(UserContext);

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
            }}
          >
            <Link
              href="/profile"
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
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                      <stop stopColor="#3284FF" />
                      <stop offset="1" stopColor="#9039FE" />
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
        <Box
          onClick={() => setIsSeller(!isSeller)}
          sx={{
            mx: 3,
          }}
        >
          <Box
            sx={{
              color: "white",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 13.875H1.5M1.5 13.875L5 10.375M1.5 13.875L5 17.375M1.5 5.125H15.5M15.5 5.125L12 1.625M15.5 5.125L12 8.625"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        <Box>
            <Box
            onClick={()=> ShareLink(`/shop/${user?.shop?.title_en}`)}
              sx={{
                display: "flex",
                cursor: "pointer",
                position: "relative",
                color:"icon.main"
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
                  d="M6.51625 11.8213L12.4925 15.3037M12.4837 5.69625L6.51625 9.17875M17.375 4.375C17.375 5.82475 16.1997 7 14.75 7C13.3003 7 12.125 5.82475 12.125 4.375C12.125 2.92525 13.3003 1.75 14.75 1.75C16.1997 1.75 17.375 2.92525 17.375 4.375ZM6.875 10.5C6.875 11.9497 5.69975 13.125 4.25 13.125C2.80025 13.125 1.625 11.9497 1.625 10.5C1.625 9.05025 2.80025 7.875 4.25 7.875C5.69975 7.875 6.875 9.05025 6.875 10.5ZM17.375 16.625C17.375 18.0747 16.1997 19.25 14.75 19.25C13.3003 19.25 12.125 18.0747 12.125 16.625C12.125 15.1753 13.3003 14 14.75 14C16.1997 14 17.375 15.1753 17.375 16.625Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickAccess;
