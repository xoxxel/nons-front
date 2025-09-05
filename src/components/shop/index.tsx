import { Box, Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from "../breadcrumbs";
import BreadCrumbModel from "@/models/BreadCrumb";
import ShopMenu from "./shopMenu";
import ShopProductsAndPosts from "./main";
import ProductsModel from "@/models/Products";


const ShopDetails = ({shop,products}:{shop:ShopModel,products:ProductsModel}) => {
  
  const breadcrumbs: BreadCrumbModel[] = [
    { active: true, link: `/shop/${shop?.title_en}`, title: `فروشگاه ${shop?.title}` },
  ];

  return (
    <Container>
      <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
        <Box sx={{ mt: 5, mb: 4 }}>
          <Breadcrumbs breadCrumbs={breadcrumbs} />
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item xs={4}>
            <ShopMenu shop={shop} />
          </Grid>
          <Grid item xs={8} sx={{pl:"0px !important"}}>
            <ShopProductsAndPosts products={products} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShopDetails;
