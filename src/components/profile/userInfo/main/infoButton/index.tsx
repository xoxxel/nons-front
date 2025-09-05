"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

const InfoButton = () => {
  const [infoShow, setInfoShow] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseOver={() => setInfoShow(true)}
        onMouseOut={() => setInfoShow(false)}
        style={{ cursor: "pointer" }}
      >
        <g clipPath="url(#clip0_2205_8154)">
          <path
            d="M6.06016 6.00004C6.2169 5.55449 6.52626 5.17878 6.93347 4.93946C7.34067 4.70015 7.81943 4.61267 8.28495 4.69252C8.75047 4.77236 9.17271 5.01439 9.47688 5.37573C9.78106 5.73706 9.94753 6.19439 9.94683 6.66671C9.94683 8.00004 7.94683 8.66671 7.94683 8.66671M8.00016 11.3334H8.00683M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z"
            stroke="#98A2B3"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2205_8154">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {infoShow && (
        <Box
          sx={{
            position: "absolute",
            right: "calc(100% + 15px)",
            // width: "250px",
            minWidth:"250px",
            // maxHight: "70px",
            bgcolor: "#101828",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            zIndex: 3,
            borderRadius: "8px",
            py:1,
            pr:1,
          }}
        >
          <Box
            sx={{
              width: "10px",
              height: "10px",
              bgcolor: "#101828",
              rotate: "45deg",
              right:"-5px",
              position:"absolute"
            }}
          ></Box>
          <Typography
            sx={{
              width: "100%",
              color: "white",
              fontSize: "12px",
              fontWeight: "600",
              justifySelf:"start",
              lineHeight:"1.5"
            }}
          >
            یک نام کاربری برای خود بنویسید ، این نامی است که دیگران شما را با این نام میشناسند و در آینده نمیتوانید آنرا تغییر دهید
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InfoButton;
