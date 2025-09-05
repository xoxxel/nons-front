"use client";

import { fetchProductWittAllFilters } from "@/api/data";
import Card from "@/components/categories/card";
import ProductModel from "@/models/Product";
import ProductsModel from "@/models/Products";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

interface SearchParams {
  q: string;
  category: string;
  brand: string;
  platform: string;
  region: string;
  online_shops: string;
  auto_sending: string;
}

const InfiniteProducts = ({
  searchParams,
  pageCount,
}: {
  searchParams: SearchParams;
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
  }, [searchParams]);

  const fetchMoreProducts = () => {
    if (currentPage <= pageCount) {
      setLoading(true);
      fetchProductWittAllFilters({
        categories: searchParams?.category || "",
        brands: searchParams?.brand || "",
        search: searchParams?.q || "",
        regions: searchParams?.region || "",
        platforms: searchParams?.platform || "",
        highestPrice: 1000000000,
        lowestPrice: 0,
        page: currentPage,
        online_shops: searchParams?.online_shops === "true" ? true : false,
        autoSending: searchParams?.auto_sending === "true" ? true : false,
      })
        .then((res) => loadMoreProducts(res))
        .catch((err) =>
          console.error("error fetching infinite products in shop", err)
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <Box sx={{ mb: 15 }}>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "background.secondary",
          borderTop: "0px",
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
    </Box>
  );
};

export default InfiniteProducts;
