import { Box, Grid, Typography } from "@mui/material";
import WishesMenu from "./wishesMenu";
import WishCard from "./wishCard";

const UserWishList = () => {

  return (
    <Box sx={{ width: "100%",display:{md:"block",xs:"none"}}}>
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
        علاقه مندی ها
        </Typography>
        {/* braedcrumb is here */}
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
          <Typography sx={{ color: "button.main" }}>Home</Typography>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography sx={{ color: "text.secondary" }}>wishlist</Typography>
        </Box>
        <Grid container spacing={{lg:3,md:1.5}} sx={{ maxWidth: "100%" }}>
          <Grid item xs={4}>
            <WishesMenu />
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Typography sx={{ color: "text.main", fontWeight: "600", my: 3 }}>
              فهرست علاقه مندی ها
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  p: {lg:"30px 25px",md:"15px 12px"},
                  bgcolor: "background.element",
                  borderRadius: "12px",
                }}
              >
                <WishCard />
                <WishCard />
                <WishCard />
                <WishCard />
                <WishCard />
                <WishCard />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserWishList;
