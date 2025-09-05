import { Box, Typography } from "@mui/material";
import ProductsList from "./products/productsList";
import ProductListEmptyState from "./products/emptyState";
import ProductsModel from "@/models/Products";

const SellerProducts = async ({items}:{items:ProductsModel}) => {

  return (
    <Box sx={{ display: { md: "block", xs: "none" } }}>
      <Typography sx={{ color: "text.main", fontWeight: "600", my: 3 }}>
        فهرست محصولات
      </Typography>
      <Box
        sx={{
          width: "100%",
          p: "24px 15px",
          bgcolor: "background.element",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          border: "0.5px solid",
          borderColor: "border.secondary",
        }}
      >
        {items?.results?.length > 0 ? <Box>
            <ProductsList data={items} />
        </Box> : <ProductListEmptyState />}
      </Box>
    </Box>
  );
};

export default SellerProducts;
