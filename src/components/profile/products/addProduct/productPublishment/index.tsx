"use client";

import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";

const ProductPublishment = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (arg: boolean) => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
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
          وضعیت محصول
        </Typography>
        <InfoButton />
      </Box>
      <Box
        sx={{ width: { lg: "70%", xs: "65%", display: "flex", gap: "30px" } }}
      >
        <Box sx={{ display: "flex", gap: 1, alihnitems: "center" }}>
          <Box
            onClick={() => onChange(true)}
            sx={{
              border: "1px solid",
              borderColor: value ? "button.main" : "#D0D5DD",
              width: "20px",
              height: "20px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: "1px",
            }}
          >
            {value && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
                  stroke="#0961DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Box>
          <Typography
            sx={{
              fontSize: { md: "16px", xs: "13px" },
              fontWeight: "600",
              color: "text.main",
            }}
          >
            منتشر شده
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alihnitems: "center" }}>
          <Box
            onClick={() => onChange(false)}
            sx={{
              border: "1px solid",
              borderColor: !value ? "button.main" : "#D0D5DD",
              width: "20px",
              height: "20px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: "2px",
            }}
          >
            {!value && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
                  stroke="#0961DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Box>
          <Typography
            sx={{
              fontSize: { md: "16px", xs: "13px" },
              fontWeight: "600",
              color: "text.main",
            }}
          >
            غیرفعال
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPublishment;
