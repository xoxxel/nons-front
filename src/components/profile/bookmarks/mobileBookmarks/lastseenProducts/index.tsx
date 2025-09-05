"use client";
import SaveInLocalStorage from "@/utils/saveInLocalStorage";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Tag {
  id: number;
  title: string;
}

interface Brand {
  title: string;
  icon: string;
  tags: Tag[];
}

interface Shop {
  title: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  brand: Brand;
  shop: Shop;
}

const MobileLastSeenProducts = () => {
  const [lastSeenProducts, setLastSeenProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsFromLocalStorage: string[] | undefined =
      SaveInLocalStorage("products-history");
    const parsedProducts = productsFromLocalStorage?.map(
      (jsonString) => JSON.parse(jsonString) as Product
    );
    setLastSeenProducts(parsedProducts || []);
  }, []);

  return (
    <>
      {lastSeenProducts?.length > 0 && (
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "13px",
            fontWeight: "500",
            my: 2.5,
          }}
        >
          بازدید های اخیر
        </Typography>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {lastSeenProducts?.map((product) => (
          <Link key={product?.id} href={`/products/${product?.slug}`}>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                p: "10px",
                borderRadius: "8px",
                ":hover": {
                  bgcolor: "hover.main",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box
                  sx={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(4px)",
                    // bgcolor: "background.element",
                    position:"relative",
                    overflow:"hidden",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                    fill
                    alt={product?.brand?.title}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    sx={{
                      color: "text.main",
                      fontWeight: "600",
                      fontSize: "13px",
                    }}
                  >
                    {product?.brand?.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    {product.brand.tags?.length > 0 &&
                      product.brand.tags.map((tag) => tag.title).join(",")}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  animation: "appearLater 0.3s forwards",
                }}
              >
                <Typography
                  sx={{ color: "text.main", fontSize: "14px", fontWeight: "500" }}
                >
                  فروشگاه {product?.shop?.title}
                </Typography>
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.shop?.image}`}
                    fill
                    alt={product?.shop?.title}
                  />
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default MobileLastSeenProducts;
