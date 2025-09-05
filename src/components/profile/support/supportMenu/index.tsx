import { Box, Typography } from "@mui/material";
import MenuTabs from "./menuTabs";

const SupportMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        p: "40px 15px",
        bgcolor: "background.element",
        border: "0.5px solid",
        borderColor: "border.secondary",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "600",
            color: "icon.main",
            // mb : "10px",
          }}
        >
          24/7
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "icon.main",
            mb: "10px",
          }}
        >
          همیشه در دسترس
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "icon.main",
            mb: "10px",
          }}
        >
          7 روز هفته و 24 ساعت شبانه روز در کنار شما هستیم تا تجربه ها را لذت
          بخش کنیم
        </Typography>
      </Box>
      <MenuTabs />
    </Box>
  );
};

export default SupportMenu;
