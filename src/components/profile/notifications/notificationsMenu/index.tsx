import { Box, Typography } from "@mui/material";
import MenuTabs from "./menuTabs";

const NotificationsMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: { lg: "15px", md: "10px" },
        bgcolor: "background.element",
        borderRadius: "12px",
        border: "0.5px solid",
        borderColor: "border.secondary",
      }}
    >
      <MenuTabs />
    </Box>
  );
};

export default NotificationsMenu;
