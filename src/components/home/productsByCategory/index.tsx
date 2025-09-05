import { Box, Container } from "@mui/material";
import ProductsSlider from "./productsSlider";

const CategoryTabs = () => {


  return (
    <Container>
      <Box sx={{ minHeight: { md: "630px", xs: "500px" } }}>
        <ProductsSlider  />
      </Box>
    </Container>
  );
};

export default CategoryTabs;
