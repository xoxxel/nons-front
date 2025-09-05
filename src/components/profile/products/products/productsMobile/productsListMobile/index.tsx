"use client";
import ProductModel from "@/models/Product";
import ShareLink from "@/utils/share";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsListMobile = ({
  item,
  isSharing,
  onShare,
  isWithBrand,
}: {
  item: ProductModel;
  isSharing?: boolean;
  onShare?: () => void;
  isWithBrand: boolean;
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      ShareLink(`/products/${selectedProduct}`);
      setTimeout(() => {
        setSelectedProduct("");
        if (onShare) onShare();
      }, 500);
    }
  }, [selectedProduct]);

  const copy = (slug: string) => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/products/${slug}`
    );
  };

  const handleCopy = (slug: string) => {
    if (!copied) {
      copy(slug);
      setCopied(true);
    }
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Box>
      {isWithBrand && (
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "5px", mb: 2.5 }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER}/${item?.brand?.icon}`}
            width={22}
            height={22}
            alt="spotify"
          />
          <Typography
            sx={{ color: "text.main", fontSize: "13px", fontWeight: "600" }}
          >
            {item?.brand?.title_en}
          </Typography>
        </Box>
      )}
      {/* head of table */}
      {isWithBrand && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "0.5px solid",
            borderColor: "border.main",
            px: 1,
            pb: 1,
          }}
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            توضیحات
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            قیمت
          </Typography>
        </Box>
      )}
      {/* contents of table  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "0.5px solid",
          borderColor: "border.main",
          px: 1,
          pb: 1.5,
          pt: isWithBrand ? 2 : 0,
          ":hover": {
            bgcolor: "hover.main",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {isSharing && (
            <Box
              onClick={() => setSelectedProduct(item?.slug)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid",
                borderColor:
                  selectedProduct === item?.slug
                    ? "button.main"
                    : "border.main",
                width: "20px",
                height: "20px",
                borderRadius: "6px",
              }}
            >
              {selectedProduct === item?.slug && (
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1663 3.5L5.74967 9.91667L2.83301 7"
                    stroke="#1A79FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Box>
          )}
        </Box>
        <Link href={`/profile/products/${item?.slug}`} style={{width:"100%"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width:"100%",
            mr: isSharing ? 1 : 0
          }}
        >
          <Tooltip
            title={copied ? "کپی شد!" : "اشتراک گذاری"}
            placement="top-start"
            arrow
          >
            <Typography
              onClick={() => handleCopy(item?.slug)}
              sx={{ color: "text.main", fontSize: "13px", fontWeight: "500" }}
            >
              {item?.title}
            </Typography>
          </Tooltip>
          <Typography
            sx={{ color: "text.main", fontSize: "13px", fontWeight: "600" }}
          >
            {ThousandSeparator(item?.price)}
          </Typography>
        </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductsListMobile;
