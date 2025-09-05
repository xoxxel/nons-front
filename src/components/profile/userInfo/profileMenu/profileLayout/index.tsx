import { Box, Grid, Link, Typography } from "@mui/material";
import ProfileMenu from "..";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
            پروفایل
          </Typography>
          {/* braedcrumb is here */}
          <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  color: "button.main",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Home
              </Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              profile
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid item md={4.5} lg={4}>
              <ProfileMenu />
            </Grid>
            <Grid item md={7.5} lg={8}>
              <Box
                sx={{
                  width: "100%",
                  
                }}
              >
                {children}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ mb: "74px", display: { md: "none", xs: "block" } }}>
        {children}
      </Box>
    </>
  );
};

export default ProfileLayout;
