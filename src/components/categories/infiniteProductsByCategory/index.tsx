"use client";

import { fetchProductsByCategory } from "@/api/data";
import Card from "@/components/categories/card";
import ProductModel from "@/models/Product";
import ProductsModel from "@/models/Products";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const InfiniteProductsByCategory = ({
  category,
  brand,
  pageCount,
}: {
  category: string;
  brand?: number;
  pageCount: number;
}) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const loadMoreProducts = (res: ProductsModel) => {
    setCurrentPage(currentPage + 1);
    setProducts([...products, ...res.results]);
  };

  useEffect(() => {
    setCurrentPage(2);
    setProducts([]);
  }, [brand]);

  const fetchMoreProducts = () => {
    if (currentPage <= pageCount) {
      setLoading(true);
      fetchProductsByCategory(
        category,
        brand ? brand?.toString() : "",
        currentPage
      )
        .then((res) => loadMoreProducts(res))
        .catch((err) =>
          console.error("error fetching infinite products in shop", err)
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <Box
        sx={{
          borderRight: "1px solid",
          borderLeft: "1px solid",
          borderRightColor: "background.secondary",
          borderLeftColor: "background.secondary",
          borderTop:"none",
          borderBottom:"none"
        }}
      >
        <Grid container>
          {products?.map((product) => (
            <Grid key={product?.id} item xs={12}>
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
      {currentPage <= pageCount && (
        <Box
          onClick={fetchMoreProducts}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            bgcolor: "background.secondary",
            py: 3,
            borderRadius: "0 0 15px 15px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(180deg, #2AC9FA 0%, #1F65EB 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text", // Use camelCase for React
              color: "transparent", // Make text color transparent
              fontSize: "16px", // Adjust font size as needed
              fontWeight: "600", // Optional: make the text bold
            }}
          >
            {loading ? (
              <BeatLoader size={10} color="#2AC9FA" />
            ) : (
              "مشاهده بیشتر"
            )}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default InfiniteProductsByCategory;
