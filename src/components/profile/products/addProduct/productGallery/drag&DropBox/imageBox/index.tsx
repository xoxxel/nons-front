"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ImageBox = ({
  file,
  progress,
  status,
  onDelete,
  onTryAgain,
  image,
  name,
}: {
  file?: File;
  progress: number;
  status: "uploading" | "successful" | "unsuccessful";
  onDelete: () => void;
  onTryAgain?: () => void;
  image?: string;
  name?: string;
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!image) {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }, [file]);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 250);
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: "0.5px solid",
        borderColor:
          status === "uploading"
            ? "button.main"
            : status === "successful"
            ? "border.main"
            : "#B42318",
        borderRadius: "8px",
        padding: "10px 10px 15px 10px",
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        animation: isDeleting ? "goOut 0.3s ease" : "slideToRight 0.3s ease",
      }}
    >
      {(imageSrc || image) && (
        <Image
          id="uploadedImage"
          src={imageSrc || `${process.env.NEXT_PUBLIC_SERVER}/${image}`}
          width={125}
          height={70}
          alt="media"
          objectFit="cover"
          style={{ borderRadius: "7px" }}
        />
      )}
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Box sx={{ width: "200px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "icon.main",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "200px",
                overflow: "hidden",
              }}
            >
              {file?.name || name}
            </Typography>
          </Box>
          <Box sx={{color:"icon.main"}}>
          {status === "uploading" ? (
            <svg
              onClick={onDelete}
              style={{ cursor: "pointer" }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1663 5.83398L5.83301 14.1673M5.83301 5.83398L14.1663 14.1673"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : status === "successful" ? (
            <svg
              onClick={handleDelete}
              style={{ cursor: "pointer" }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              onClick={onTryAgain}
              style={{ cursor: "pointer" }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.167 15.7295C15.9348 14.4415 17.0837 12.3553 17.0837 10.0007C17.0837 6.08863 13.9123 2.91732 10.0003 2.91732H9.58366M10.0003 17.084C6.08831 17.084 2.91699 13.9127 2.91699 10.0007C2.91699 7.64604 4.06588 5.55976 5.83366 4.27182M9.16699 18.6673L10.8337 17.0007L9.16699 15.334M10.8337 4.66732L9.16699 3.00065L10.8337 1.33398"
                stroke="#B42318"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          </Box>
        </Box>
        {status === "uploading" && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography
              sx={{ mb: -0.75, fontSize: "14px", color: "grey.700" }}
            >{`${progress ?? 0}%`}</Typography>
            <Box sx={{ width: "100%" }}>
              {file && <Typography sx={{ direction: "ltr", color: "#475467" }}>
                {(file?.size / 1024).toFixed(2)} KB
              </Typography>}
              <Box
                sx={{
                  width: "100%",
                  height: "8px",
                  borderRadius: "8px",
                  bgcolor: "#EAECF0",
                  overflow: "hidden",
                  direction: "ltr",
                }}
              >
                <Box
                  sx={{
                    width: `${progress}%`,
                    height: "8px",
                    bgcolor: "button.main",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "400",
                    transition: "all 0.5s ease",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        )}
        {(status === "successful" && file) && (
          <Typography sx={{ direction: "ltr", color: "#475467" }}>
            {(file?.size / 1024).toFixed(2)} KB
          </Typography>
        )}
        {status === "unsuccessful" && (
          <Typography
            sx={{ fontSize: "14px", fontWeight: "600", color: "#B42318" }}
          >
            نا موفق
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageBox;
