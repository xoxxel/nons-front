"use client";

import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ProductTitle = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (arg: string) => void;
}) => {
  const [foucos, setFocus] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
        alignItems: "start",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "13px" }}>
        <Typography
          sx={{
            color: "text.main",
            fontWeight: "400",
            fontSize: { md: "16px", xs: "13px" },
          }}
        >
          عنوان محصول
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
        <Box
          sx={{
            width: "100%",
            border: "0.5px solid",
            borderColor: foucos ? "button.main" : "border.main",
            borderRadius: "5px",
            p: "14px",
          }}
        >
          <input
            type="text"
            value={value}
            onChange={(e) =>
              e.target.value?.length <= 160 && onChange(e.target.value)
            }
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="عنوان محصول را اینجا بنویسید"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              color: "#B0B0B0",
              backgroundColor: "transparent",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 0.5 }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            حداکثر 160 کارکتر
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: "400",
              direction: "ltr",
            }}
          >{`${value?.length} / 160`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductTitle;
