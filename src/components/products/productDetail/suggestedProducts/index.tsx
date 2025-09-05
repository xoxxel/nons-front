import Card from "@/components/categories/card";
import ProductCard from "@/components/home/productsByCategory/productCard";
import ProductModel from "@/models/Product";
import { Box, Container, Grid, Typography } from "@mui/material";

const SuggestedProducts = () => {
  return (
    <Container sx={{ pb: { md: "50px", xs: "20px" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: { md: 2, xs: 0 },
          mb: { md: 3, xs: "10px" },
        }}
      >
        <Typography
          sx={{
            color: "text.main",
            fontSize: { md: "16px", xs: "12px" },
            fontWeight: "500",
          }}
        >
          محصولات پیشنهادی
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              ml: 0.5,
              color: "primary.main",
              fontSize: { md: "16px", xs: "12px" },
              fontWeight: "500",
            }}
          >
            مشاهده بیشتر
          </Typography>
          <Box
            sx={{
              position: "relative",
              color: "primary.main",
              display: "flex",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H2M2 6L5 9M2 6L5 3"
                stroke="currentcolor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container gap={"15px"}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Grid item xs={12} key={index}>
                <Card product={{} as ProductModel} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SuggestedProducts;
