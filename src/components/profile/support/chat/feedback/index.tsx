"use client";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const FeedbackRating = ({
  id,
  responderName
}: {
  id: number;
  responderName:string
}) => {
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const handleSendFeedback = (
    id: number,
    comment: "bad" | "not_bad" | "good"
  ) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API}/user/ticket/comment/${id}`,
        { comment }
      )
      .then(() => {
        toast.success("امتیاز شما با موفقیت ثبت شد! سپاس گزاریم");
        setIsFeedbackSubmitted(true);
      })
      .catch(() => toast.error("خطای سرور"));
  };

  return (
    <Box
      sx={{
        mb: 6,
        mt: 2,
        width: "100%",
        display: !isFeedbackSubmitted ? "block" : "none",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.secondary",
          borderRadius: "8px",
          padding: { xs: "8px", md: "24px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "15px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "text.content",
              fontSize: { xs: "18px", md: "20px" },
              fontWeight: "600",
            }}
          >
            رتبه رضایت
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "icon.main",
              fontSize: { xs: "13px", md: "16px" },
              fontWeight: "500",
            }}
          >
            {`رضایت خود را از پاسخگویی ارائه شده توسط ${responderName} را چگونه ارزیابی
            میکنید`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
              width: { xs: "22px", md: "31px" },
              height: { xs: "20px", md: "29px" },
            }}
          >
            <svg
              onClick={() => handleSendFeedback(id, "good")}
              width="31"
              height="29"
              viewBox="0 0 31 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path
                d="M9.71695 17.166C9.71695 17.166 11.8708 19.8327 15.4605 19.8327C19.0503 19.8327 21.2041 17.166 21.2041 17.166M19.7682 10.4993H19.7826M11.1528 10.4993H11.1672M29.8195 14.4993C29.8195 21.8631 23.3908 27.8327 15.4605 27.8327C7.53029 27.8327 1.10156 21.8631 1.10156 14.4993C1.10156 7.13555 7.53029 1.16602 15.4605 1.16602C23.3908 1.16602 29.8195 7.13555 29.8195 14.4993ZM20.4862 10.4993C20.4862 10.8675 20.1647 11.166 19.7682 11.166C19.3717 11.166 19.0503 10.8675 19.0503 10.4993C19.0503 10.1312 19.3717 9.83268 19.7682 9.83268C20.1647 9.83268 20.4862 10.1312 20.4862 10.4993ZM11.8708 10.4993C11.8708 10.8675 11.5494 11.166 11.1528 11.166C10.7563 11.166 10.4349 10.8675 10.4349 10.4993C10.4349 10.1312 10.7563 9.83268 11.1528 9.83268C11.5494 9.83268 11.8708 10.1312 11.8708 10.4993Z"
                stroke="#00FF47"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
              width: { xs: "22px", md: "31px" },
              height: { xs: "20px", md: "29px" },
              color: "icon.main",
            }}
          >
            <svg
              onClick={() => handleSendFeedback(id, "not_bad")}
              width="32"
              height="29"
              viewBox="0 0 32 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path
                d="M10.256 18.4993L21.7432 18.4993M20.3073 10.4993H20.3217M11.6919 10.4993H11.7063M30.3586 14.4993C30.3586 21.8631 23.9298 27.8327 15.9996 27.8327C8.06936 27.8327 1.64062 21.8631 1.64062 14.4993C1.64062 7.13555 8.06936 1.16602 15.9996 1.16602C23.9298 1.16602 30.3586 7.13555 30.3586 14.4993ZM21.0252 10.4993C21.0252 10.8675 20.7038 11.166 20.3073 11.166C19.9108 11.166 19.5893 10.8675 19.5893 10.4993C19.5893 10.1312 19.9108 9.83268 20.3073 9.83268C20.7038 9.83268 21.0252 10.1312 21.0252 10.4993ZM12.4099 10.4993C12.4099 10.8675 12.0884 11.166 11.6919 11.166C11.2954 11.166 10.974 10.8675 10.974 10.4993C10.974 10.1312 11.2954 9.83268 11.6919 9.83268C12.0884 9.83268 12.4099 10.1312 12.4099 10.4993Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
              width: { xs: "22px", md: "31px" },
              height: { xs: "20px", md: "29px" },
            }}
          >
            <svg
              onClick={() => handleSendFeedback(id, "bad")}
              width="31"
              height="29"
              viewBox="0 0 31 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path
                d="M21.2823 19.8327C21.2823 19.8327 19.1284 17.166 15.5387 17.166C11.9489 17.166 9.79507 19.8327 9.79507 19.8327M22.7182 10.8193C22.151 11.466 21.3756 11.8327 20.5643 11.8327C19.753 11.8327 18.9992 11.466 18.4105 10.8193M12.6669 10.8193C12.0997 11.466 11.3243 11.8327 10.513 11.8327C9.70174 11.8327 8.94789 11.466 8.35918 10.8193M29.8976 14.4993C29.8976 21.8631 23.4689 27.8327 15.5387 27.8327C7.60842 27.8327 1.17969 21.8631 1.17969 14.4993C1.17969 7.13555 7.60842 1.16602 15.5387 1.16602C23.4689 1.16602 29.8976 7.13555 29.8976 14.4993Z"
                stroke="#ED0006"
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

export default FeedbackRating;
