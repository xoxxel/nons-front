import ProductsMenu from "@/components/profile/products/productsMenu";
import { Box, Grid, Typography } from "@mui/material";

const ProfileProductsLayout = ({ children }: { children: React.ReactNode }) => {
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
          محصولات
        </Typography>
        {/* braedcrumb is here */}
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
          <Typography sx={{ color: "button.main" }}>dashboard</Typography>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography sx={{ color: "text.secondary" }}>product</Typography>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item xs={4}>
            <ProductsMenu />
          </Grid>
          <Grid item xs={8}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box sx={{display:{md:"none",xs:"block"}}}>{children}</Box>
    </>
  );
};

export default ProfileProductsLayout;
