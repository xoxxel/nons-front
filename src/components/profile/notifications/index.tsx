import { Box, Grid, Typography } from "@mui/material";
import NotificationsMenu from "./notificationsMenu";
import NotificationsMain from "./main";

const Notifications = ({notifications}:{notifications:NotificationModel[]}) => {
  return (
    <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
      <Box sx={{ mt: 5 }}>
        {/* big title at the top */}
        <Typography
          sx={{
            color: "text.main",
            fontSize: "29px",
            fontWeight: "600",
            mt: 5,
          }}
        >
          اطلاع رسانی
        </Typography>
        {/* braedcrumb is here */}
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
          <Typography sx={{ color: "button.main" }}>Home</Typography>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            notifications
          </Typography>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item xs={4}>
            <NotificationsMenu />
          </Grid>
          <Grid item xs={8}>
            <NotificationsMain notifications={notifications} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Notifications;
