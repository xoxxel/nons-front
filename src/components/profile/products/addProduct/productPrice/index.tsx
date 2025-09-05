"use client";

import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ProductPrice = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (arg: string) => void;
}) => {
  const [price, setPrice] = useState("");
  const [foucos, setFocus] = useState(false);

  const formatPrice = (value: any) => {
    // Remove any non-digit characters
    const numericValue = value.replace(/[^0-9]/g, "");
    // Format with thousand separators
    return numericValue ? Number(numericValue).toLocaleString() : "";
  };

  const handleChange = (e: any) => {
    onChange(e?.target?.value?.replaceAll(",", ""));
    const rawValue = e.target.value.replace(/,/g, ""); // Remove commas for raw value
    // Prevent non-numeric input
    if (/^\d*$/.test(rawValue)) {
      setPrice(rawValue); // Store the raw value
    }
  };

  const handleBlur = () => {
    setFocus(false);
    // Format the price when the input loses focus
    setPrice(formatPrice(price));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{
            color: "text.main",
            fontWeight: "400",
            fontSize: { md: "16px", xs: "13px" },
          }}
        >
          قیمت
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
            display: "flex",
            color:"text.main"
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "icon.main",
            }}
          >
            IRT
          </Typography>
          <input
            type="text"
            value={formatPrice(value)} // Format the displayed value
            onChange={handleChange}
            onFocus={() => setFocus(true)}
            onBlur={handleBlur}
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              backgroundColor: "transparent",
              direction: "ltr",
              color:"inherit",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPrice;
