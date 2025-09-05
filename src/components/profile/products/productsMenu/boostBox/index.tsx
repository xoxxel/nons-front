import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const BoostBox = () => {
  return (
    <Box
      sx={{
        // bgcolor: "#C1C1C133",
        borderRadius: "8px",
        p: "15px",
      }}
    >
      <Typography
        sx={{ fontSize: "16px", fontWeight: "900", color: "text.main" }}
      >
        بوست
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: "500",
          color: "text.secondary",
          mt: 0.5,
        }}
      >
        بوست راهی موثر برای افزایش بازدید و فروش بیشتر محصولات شماست
      </Typography>
      <Link href="/profile/products/boost">
        <Button
          sx={{
            bgcolor: "button.main",
            borderRadius: "5px",
            color: "white",
            fontWeight: "600",
            px: 3,
            py: 1,
            mt: 4,
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          همین حالا شروع کنید
        </Button>
      </Link>
    </Box>
  );
};

export default BoostBox;
