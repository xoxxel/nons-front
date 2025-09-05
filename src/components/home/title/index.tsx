"use client";

import { Typography, useTheme } from "@mui/material";

const Title = ({ title }: { title: string }) => {
  const theme = useTheme();
  const colorScheme = theme.palette.mode;
  return (
    <Typography
      sx={{
        fontSize: { md: "45px", xs: "24px" },
        fontWeight: "600",
        WebkitTextFillColor: "transparent",
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: colorScheme === "dark" ? "#fff" : "#444444",
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
