"use client";
import { UserContext } from "@/context/UserProvider";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";

const HiUser = () => {
  const { user } = useContext(UserContext);
  return (
    <Box
      sx={{
        mt: {md:5,xs:2},
        px: "10px",
      }}
    >
      <Typography
        sx={{
          color: "icon.main",
          fontSize: {md:"46px",xs:"28px"},
          fontWeight: "600",
        }}
      >
        سلام {user?.name}
      </Typography>
      <Typography
        sx={{
          color: "icon.main",
          fontSize: {md:"16px",xs:"13px"},
          fontWeight: "500",
        }}
      >
        امروز چه کاری برای انجام داریم ...
      </Typography>
    </Box>
  );
};

export default HiUser;
