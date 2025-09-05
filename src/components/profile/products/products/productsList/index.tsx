"use client";
import ProductModel from "@/models/Product";
import ProductsModel from "@/models/Products";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductBadge from "./badge";
import Link from "next/link";

const ProductList = ({ data }: { data: ProductsModel }) => {
  const [products, setProducts] = useState<ProductModel[]>(data?.results);
  const [isCopied, setIsCopied] = useState(false);
  const [brandSeperatos, setBrandSeperatos] = useState<number[]>([]);

  const copy = (slug: string) => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/products/${slug}`
    );
  };

  const handleCopy = (slug: string) => {
    if (!isCopied) {
      copy(slug);
      setIsCopied(true);
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  useEffect(() => {
    setProducts(data?.results);
  }, [data]);

  useEffect(() => {
    const newArray: number[] = [];
    let lastBrandId = 0;
    products.forEach((product,index) => {
      if (product?.brand?.id !== lastBrandId) {
        newArray.push(index);
        lastBrandId = product?.brand?.id;
      }
    });
    setBrandSeperatos(newArray);
  }, [products]);

  return products?.map((product,index) => (
    <div key={product.id}>
      {brandSeperatos?.includes(index) && <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 0px",
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
          width={32}
          height={32}
          style={{
            borderRadius: "100%",
          }}
          objectFit="cover"
          alt={product?.brand?.title}
        />
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            color: "text.content",
          }}
        >
          {product?.brand?.title_en}
        </Typography>
      </div>}
      <Box
        sx={{
          my: { md: 1.5, xs: 1 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "end", md: "center" },
            justifyContent: "space-between",
            borderRadius: "8px",
            p: { xs: "5px 10px", md: "10px" },
            ":hover": {
              bgcolor: "hover.main",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "fit-content", md: "50%" },
            }}
          >
            <Tooltip
              title={isCopied ? "کپی شد!" : "کپی لینک محصول"}
              placement="top-end"
              arrow
            >
              <Typography
                className="line-clamp-1"
                onClick={() => handleCopy(product?.slug)}
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "text.main",
                  mb: product?.category?.title ? "5px" : "0px",
                  cursor: "pointer",
                }}
              >
                {product?.title}
              </Typography>
            </Tooltip>
          </Box>
          <Box
            sx={{
              width: { xs: "fit-content", md: "45%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <ProductBadge
                status={product?.status}
                isActive={product?.is_active}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  mx: { xs: "0px", md: "10px" },
                }}
                className="centeredTD"
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "text.main",
                  }}
                >
                  {ThousandSeparator(product?.price)}
                </Typography>
              </Box>
              <Link href={`/profile/products/${product?.slug}`}>
                <Box
                  className="centeredTD"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    color: "icon.main",
                    width: "48px",
                    height: "38px",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0002 10.8337C10.4604 10.8337 10.8335 10.4606 10.8335 10.0003C10.8335 9.54009 10.4604 9.16699 10.0002 9.16699C9.53993 9.16699 9.16683 9.54009 9.16683 10.0003C9.16683 10.4606 9.53993 10.8337 10.0002 10.8337Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8335 10.8337C16.2937 10.8337 16.6668 10.4606 16.6668 10.0003C16.6668 9.54009 16.2937 9.16699 15.8335 9.16699C15.3733 9.16699 15.0002 9.54009 15.0002 10.0003C15.0002 10.4606 15.3733 10.8337 15.8335 10.8337Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16683 10.8337C4.62707 10.8337 5.00016 10.4606 5.00016 10.0003C5.00016 9.54009 4.62707 9.16699 4.16683 9.16699C3.70659 9.16699 3.3335 9.54009 3.3335 10.0003C3.3335 10.4606 3.70659 10.8337 4.16683 10.8337Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  ));
};

export default ProductList;
