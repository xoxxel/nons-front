"use client"
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const LoginNavBar = ({ text }: { text: string }) => {

    const router = useRouter()

  return (
    <Box
      sx={{
        width: "100vw",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        position: "fixed",
        top: "0px",
        right: "0px",
        bgcolor: "background.element",
        px: "15px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", color: "text.content", gap:"10px" }}
      >
        <Typography sx={{fontSize:"13px",fontWeight:"600",color:"inherit"}}>{text}</Typography>
        <svg
        onClick={router.back}
        style={{cursor:"pointer"}}
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.875 8H3.125M3.125 8L7.5 12.375M3.125 8L7.5 3.625"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default LoginNavBar;
