import { fetchUserProducts } from "@/api/data";
import { Box, Typography } from "@mui/material";
import ProfileProductsList from "./profileProductsList";
import ProductListEmptyState from "@/components/profile/products/products/emptyState";
import ProductsModel from "@/models/Products";

const ProfileProducts = async () => {
  const products: ProductsModel = await fetchUserProducts();

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "text.main",
          p: "12px 10px",
          mt: "24px",
          mb: "10px",
        }}
      >
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12.5L6 17.5L11 12.5M1 6.5L6 1.5L11 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Typography
          sx={{
            color: "text.main",
            fontSize: "16px",
            fontWeight: "500",
            mx: 1.5,
          }}
        >
          محصولات
        </Typography>
      </Box>
      <Box
        sx={{
          p: "24px",
          bgcolor: "background.element",
          borderRadius: "12px",
          border: "0.5px solid",
          borderColor: "border.secondary",
        }}
      >
        {products?.results?.length > 0 ? (
          <Box
            sx={{
              px: "10px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <ProfileProductsList data={products} />
          </Box>
        ) : (
          <ProductListEmptyState />
        )}
      </Box>
    </Box>
  );
};

export default ProfileProducts;
