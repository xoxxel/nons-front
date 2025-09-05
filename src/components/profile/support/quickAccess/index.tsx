"use client"
import { UserContext } from "@/context/UserProvider";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";

const QuickAccess = () => {

  const {user} = useContext(UserContext)

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
              href="/profile/support"
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
        <Box
          sx={{
            mx: 3,
          }}
        >
          <Link href="/profile/support/help-center">
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
                  d="M7.99423 7.99425L4.31282 4.31284M4.31282 16.6872L8.02197 12.978M13.0034 13.0058L16.6848 16.6872M16.6848 4.31284L12.9751 8.02254M19.25 10.5C19.25 15.3325 15.3325 19.25 10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75C15.3325 1.75 19.25 5.66751 19.25 10.5ZM14 10.5C14 12.433 12.433 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.567 8.567 7 10.5 7C12.433 7 14 8.567 14 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Link>
        </Box>
        <Box>
          <Link href="/profile/support/ticket-list">
            <Box
              sx={{
                color: "white",
                display: "flex",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "25px",
                  backgroundColor: "#ED0006",
                  position: "absolute",
                  top: "0",
                  right: "0",
                }}
              ></Box>
              <svg
                width="21"
                height="17"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1875 8.5H5.14672C5.74627 8.5 6.29437 8.83874 6.5625 9.375C6.83063 9.91126 7.37873 10.25 7.97828 10.25H13.0217C13.6213 10.25 14.1694 9.91126 14.4375 9.375C14.7056 8.83874 15.2537 8.5 15.8533 8.5H18.8125M7.84574 1.5H13.1543C14.0965 1.5 14.5677 1.5 14.9836 1.64347C15.3514 1.77034 15.6864 1.9774 15.9644 2.24965C16.2788 2.55752 16.4895 2.97892 16.9109 3.8217L18.8066 7.61319C18.972 7.94393 19.0546 8.10929 19.113 8.2826C19.1647 8.43652 19.2021 8.59491 19.2246 8.75573C19.25 8.93682 19.25 9.12171 19.25 9.49149V11.3C19.25 12.7701 19.25 13.5052 18.9639 14.0667C18.7122 14.5607 18.3107 14.9622 17.8167 15.2139C17.2552 15.5 16.5201 15.5 15.05 15.5H5.95C4.47986 15.5 3.74479 15.5 3.18327 15.2139C2.68935 14.9622 2.28778 14.5607 2.03611 14.0667C1.75 13.5052 1.75 12.7701 1.75 11.3V9.49149C1.75 9.12171 1.75 8.93682 1.77535 8.75573C1.79787 8.59491 1.83526 8.43652 1.88704 8.2826C1.94535 8.1093 2.02804 7.94392 2.19341 7.61319L4.08915 3.8217C4.51054 2.97892 4.72124 2.55752 5.03558 2.24965C5.31355 1.9774 5.64858 1.77034 6.0164 1.64347C6.43235 1.5 6.90348 1.5 7.84574 1.5Z"
                  stroke="currentColor"
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
