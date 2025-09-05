import { Box, Typography } from "@mui/material";

const BoostDescriptions = () => {
  return (
    <Box
      sx={{
        p: "7px 10px",
        bgcolor: "background.secondary",
        borderRadius: "5px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "13px", md: "18px" },
          fontWeight: "600",
          color: "text.secondary",
        }}
      >
        توضیحات
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "13px", md: "15px" },
          fontWeight: "500",
          color: "text.secondary",
          mt: "10px",
        }}
      >
        محصول خود را ارتقاع دهید و در بالاترین جایگاه دیده شوید،هر چه انرژی
        بیشتر باشد جایگاه محصول شما بالاتر است
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          fontWeight: "500",
          color: "button.main",
          textDecoration: "underline",
          mt: 2,
          pr: 1,
        }}
      >
        نیاز به آموزش دارید ؟
      </Typography>
    </Box>
  );
};

export default BoostDescriptions;
