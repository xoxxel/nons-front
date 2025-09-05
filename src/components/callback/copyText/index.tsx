"use client";

import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const CopyText = ({ text, code }: { text?: string; bordered?: boolean, code:string }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.textContent?.slice(1) || "");
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
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
      }}
    >
      {text && (
        <Typography sx={{ fontSize: "10px", color: "white", mb: 0.5 }}>
          {text}
        </Typography>
      )}
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          gap: 2,
          border: "2px dashed #FFFFFF99",
          borderRadius: "12px",
          p: 1,
        }}
      >
        {copied ? (
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
        ) : (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleCopy}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M6.25 3H12.1667C14.0335 3 14.9669 3 15.68 3.36331C16.3072 3.68289 16.8171 4.19282 17.1367 4.82003C17.5 5.53307 17.5 6.46649 17.5 8.33333V14.25M5.16667 18H11.9167C12.8501 18 13.3168 18 13.6733 17.8183C13.9869 17.6586 14.2419 17.4036 14.4017 17.09C14.5833 16.7335 14.5833 16.2668 14.5833 15.3333V8.58333C14.5833 7.64991 14.5833 7.1832 14.4017 6.82668C14.2419 6.51308 13.9869 6.25811 13.6733 6.09832C13.3168 5.91667 12.8501 5.91667 11.9167 5.91667H5.16667C4.23325 5.91667 3.76654 5.91667 3.41002 6.09832C3.09641 6.25811 2.84144 6.51308 2.68166 6.82668C2.5 7.1832 2.5 7.64991 2.5 8.58333V15.3333C2.5 16.2668 2.5 16.7335 2.68166 17.09C2.84144 17.4036 3.09641 17.6586 3.41002 17.8183C3.76654 18 4.23325 18 5.16667 18Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <Typography ref={textRef} sx={{ fontWeight: "700", color: "white" }}>
          #{code}
        </Typography>
      </Box>
    </Box>
  );
};

export default CopyText;
