import { Box, Typography } from "@mui/material";
import ShopProductList from "./infiniteProducts/shopProducts";
import ProductsModel from "@/models/Products";

const ShopProductsAndPosts = ({products}:{products:ProductsModel}) => {
  return (
    <Box>
      <Box sx={{pt:3,pb:2.5}}>
        <Typography sx={{fontSize:"14px",fontWeight:"600",color:"button.main"}}>محصولات</Typography>
      </Box>
    <Box
      sx={{
        width: "100%",
        p: "24px 15px",
        bgcolor: "background.element",
        borderRadius: "12px",
        border: "0.5px solid",
        borderColor: "border.secondary",
        mb:"10px",
      }}
    >
      <ShopProductList data={products} />
    </Box>
    </Box>
  );
};

export default ShopProductsAndPosts;
