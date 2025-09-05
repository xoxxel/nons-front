import { Box } from "@mui/material";
import { fetchUserProducts } from "@/api/data";
import ProfileTabs from "../tabs";
import QuickAccess from "../quickAccess";
import SwapableUserProfile from "../userProfile&Info";
import ProfileProductsList from "../../profileProducts/profileProductsList";
import ProductListEmptyState from "@/components/profile/products/products/emptyState";
import ProductsModel from "@/models/Products";

const ProfileProductsMobile = async () => {
  const products: ProductsModel = await fetchUserProducts();

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <QuickAccess />
      <Box
        sx={{
          // bgcolor: "background.element",
          py: "15px",
          px: "10px",
        }}
      >
        <Box>
          <SwapableUserProfile />
        </Box>
        <ProfileTabs />
        <Box
          sx={{
            mt: 3,
            mb: 10,
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          {products?.results?.length > 0 ? <ProfileProductsList data={products} /> : <ProductListEmptyState />}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileProductsMobile;
