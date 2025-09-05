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

const BookmarksMenu: React.FC = () => {
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
    lastSeenProducts?.length > 0 &&
    <Box
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        border: "0.5px solid",
        borderColor: "border.secondary",
        borderRadius: "12px",
      }}
    >
      <Box>
        <Typography
          sx={{ color: "text.secondary", fontSize: "14px", mb: "20px" }}
        >
          بازدید های اخیر
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {lastSeenProducts.map((product) => (
            <Link href={`/products/${product?.slug}`} key={product?.id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap:1.5
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px",width:"100%",overflow:"hidden" }}
                >
                  <Box
                    sx={{
                      minWidth: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1,width:"100%",overflow:"hidden" }}
                  >
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
                        whiteSpace:"nowrap",
                        overflow:"hidden",
                        textOverflow:"ellipsis"
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
                    sx={{
                      color: "text.main",
                      fontSize: "14px",
                      fontWeight: "500",
                      whiteSpace:"nowrap"
                    }}
                  >
                    {product?.shop?.title}
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
      </Box>
    </Box>
  );
};

export default BookmarksMenu;
