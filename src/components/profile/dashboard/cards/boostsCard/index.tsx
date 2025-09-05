"use client"
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { UserContext } from "@/context/UserProvider";
export const BoostsCard = () => {
  const { user } = useContext(UserContext)
  return (
    <Link href={(user?.has_shop && user?.shop?.status === "is_confirmed" ) ?  "/profile/products/boost":"" }>
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
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "900",
                  background:
                    "linear-gradient(to right, #D01CFD 0%, #2DA7FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Pro
              </Typography>
            </Box>
            <Box sx={{ color: "white" }}>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "700", mb: "15px" }}
              >
                بوست
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Image
                      src="/images/spotify.png"
                      alt="steam"
                      width={34}
                      height={34}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mr: "-15px",
                    }}
                  >
                    <Image
                      src="/images/xbox.png"
                      alt="steam"
                      width={34}
                      height={34}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mr: "-15px",
                    }}
                  >
                    <Image
                      src="/images/steam.svg"
                      alt="steam"
                      width={34}
                      height={34}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66669 13L1.66669 7L7.66669 1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
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
      </Box>
    </Link>
  );
};

export default BoostsCard;
