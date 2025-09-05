import { Box, Container, Grid, Typography } from "@mui/material";
import AboutCategory from "./aboutCategory";
import Card from "./card";
import ProductsModel from "@/models/Products";
import InfiniteProductsByCategory from "./infiniteProductsByCategory";

const Ctaegories = ({
  products,
  category,
  brand,
}: {
  products: ProductsModel;
  category: string;
  brand?: BrandDetailsModel;
}) => {
  return (
    <Box sx={{ mb: { md: 0, xs: "120px" } }}>
      <Container>
        <Box sx={{ border: "1px solid", borderColor: "background.secondary",borderBottom:"0px", borderRadius:"15px 15px 0 0" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              color: "text.main",
              px: { md: "20px", xs: "8px" },
              py: 4,
            }}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 5.5L7.5 14.6667L3.33334 10.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{
                fontSize: { md: "21px", xs: "14px" },
                color: "text.main",
                fontWeight: { md: "600", xs: "500" },
              }}
            >
              {products?.count > 0
                ? `${products?.count} پیشنهاد از ${
                    brand
                      ? products?.results?.[0]?.brand?.title
                      : products?.results?.[0]?.category?.title
                  } یافت شد`
                : "پیشنهادی یافت نشد"}
            </Typography>
          </Box>
          <Grid container>
            {products?.results?.map((product, index) => (
              <Grid key={index} item xs={12}>
                <Card product={product} />
                <Box
                  sx={{
                    borderTop: "1px solid",
                    borderColor: "background.secondary",
                  }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        </Box>
          <InfiniteProductsByCategory
            pageCount={products?.page_count}
            category={category}
            brand={brand?.id}
          />
      </Container>
      <Box sx={{ mt: { md: 15, xs: 9 } }}>
        {brand && <AboutCategory brand={brand} />}
      </Box>
    </Box>
  );
};

export default Ctaegories;
