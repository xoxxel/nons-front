import { Box, Typography } from "@mui/material";
import Link from "next/link";

const OrderConfirmation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.05)",
        border: "1px solid #373E43",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > p": {
          fontSize: { md: "14px", xs: "12px" },
          fontWeight: "500",
          color: "text.main",
        },
        gap: "5px",
        p: "5px",
        mt: { md: "20px", xs: "10px" },
      }}
    >
      <Typography
        sx={{
          color: "text.main",
        }}
      >
        با خرید تائید میکنید{" "}
      </Typography>
      <Link href="/">
        <Typography
          sx={{
            fontSize: { md: "14px", xs: "12px" },
            fontWeight: "600",
            color: "primary.main",
          }}
        >
          درباره امنیت حساب
        </Typography>
      </Link>
      <Typography
        sx={{
          color: "text.main",
        }}
      >
        خود میدانید و
      </Typography>
      <Link href="/">
        <Typography
          sx={{
            fontSize: { md: "14px", xs: "12px" },
            fontWeight: "600",
            color: "primary.main",
          }}
        >
          قوانین و مقررات
        </Typography>
      </Link>
      <Typography
        sx={{
          color: "text.main",
        }}
      >
        را مطالعه و قبول کرده اید
      </Typography>
    </Box>
  );
};

export default OrderConfirmation;
