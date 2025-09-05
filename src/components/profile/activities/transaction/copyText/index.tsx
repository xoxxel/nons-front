"use client";

import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const CopyText = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (textRef?.current) {
      navigator?.clipboard?.writeText(textRef?.current?.textContent || "");
    }
  };

  const handleCopy = () => {
    copy();
    setCopied(true);
    toast.success("کپی شد !");
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.main",
      }}
    >
      <Typography
        ref={textRef}
        sx={{ fontWeight: "600", fontSize: "13px", color: "text.main", mx: 1 }}
      >
        {text}
      </Typography>
      {copied ? (
        <Box sx={{ minWidth: "20px", height: "20px", color: "#344054" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="#9FE870"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={handleCopy}
        >
          <g clipPath="url(#clip0_2289_9812)">
            <path
              d="M5.33301 5.33337V3.46671C5.33301 2.71997 5.33301 2.3466 5.47833 2.06139C5.60616 1.8105 5.81014 1.60653 6.06102 1.4787C6.34624 1.33337 6.7196 1.33337 7.46634 1.33337H12.533C13.2797 1.33337 13.6531 1.33337 13.9383 1.4787C14.1892 1.60653 14.3932 1.8105 14.521 2.06139C14.6663 2.3466 14.6663 2.71997 14.6663 3.46671V8.53337C14.6663 9.28011 14.6663 9.65348 14.521 9.93869C14.3932 10.1896 14.1892 10.3936 13.9383 10.5214C13.6531 10.6667 13.2797 10.6667 12.533 10.6667H10.6663M3.46634 14.6667H8.53301C9.27974 14.6667 9.65311 14.6667 9.93833 14.5214C10.1892 14.3936 10.3932 14.1896 10.521 13.9387C10.6663 13.6535 10.6663 13.2801 10.6663 12.5334V7.46671C10.6663 6.71997 10.6663 6.3466 10.521 6.06139C10.3932 5.8105 10.1892 5.60653 9.93833 5.4787C9.65311 5.33337 9.27974 5.33337 8.53301 5.33337H3.46634C2.7196 5.33337 2.34624 5.33337 2.06102 5.4787C1.81014 5.60653 1.60616 5.8105 1.47833 6.06139C1.33301 6.3466 1.33301 6.71997 1.33301 7.46671V12.5334C1.33301 13.2801 1.33301 13.6535 1.47833 13.9387C1.60616 14.1896 1.81014 14.3936 2.06102 14.5214C2.34624 14.6667 2.7196 14.6667 3.46634 14.6667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2289_9812">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </Box>
  );
};

export default CopyText;
