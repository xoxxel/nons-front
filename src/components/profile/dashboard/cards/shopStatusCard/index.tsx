import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const ShopStatusCard = () => {
  return (
    <Link href="/profile/settings">
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
                SHOP
              </Typography>
            </Box>
            <Box sx={{ color: "white" }}>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "700", mb: "30px" }}
              >
                افتتاح فروشگاه
              </Typography>
              <Box
                sx={{
                  px: { md: "10px", lg: "30px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "20px",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#0961DC" />
                    <path
                      d="M14 7L8.5 12.5L6 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      mx: 0.5,
                    }}
                  >
                    مرحله بعد از تایید شماره
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "3px",
                    mb: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: "25%",
                      height: "8px",
                      bgcolor: "button.main",
                      borderRadius: "0 10px 10px 0",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "25%",
                      height: "8px",
                      bgcolor: "button.main",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "25%",
                      height: "8px",
                      bgcolor: "button.main",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "25%",
                      height: "8px",
                      background: "#3E4343",
                      borderRadius: "10px 0 0 10px",
                    }}
                  ></Box>
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

export default ShopStatusCard;
