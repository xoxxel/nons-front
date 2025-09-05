import { Box, Container, Typography } from "@mui/material";
import ShopMenu from "../shopMenu";
import ShopProductList from "../main/infiniteProducts/shopProducts";
import ProductsModel from "@/models/Products";

const ShopDetailsMobile = ({
  shop,
  products,
}: {
  shop: ShopModel;
  products: ProductsModel;
}) => {
  return (
    <Box sx={{ display: { md: "none", xs: "block" } }}>
      <ShopMenu shop={shop} />
      <Container>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              textAlign: "center",
              borderBottom: "3px solid",
              borderColor: "button.main",
              py: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "button.main" }}
            >
              محصولات
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              textAlign: "center",
              color: "background.secondary",
              borderBottom: "3px solid",
              borderColor: "background.secondary",
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "600", py: 1 }}>
              پست ها
            </Typography>
          </Box>
        </Box>
        <ShopProductList data={products} />
      </Container>
    </Box>
  );
};

export default ShopDetailsMobile;
