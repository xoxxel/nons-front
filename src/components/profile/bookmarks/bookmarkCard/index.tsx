"use client";
import ProductModel from "@/models/Product";
import Cookies from "@/utils/cookie";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BookmarksCard = ({
  product,
  unbookmark,
}: {
  product: ProductModel;
  unbookmark: Function;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 5,
        px: "10px",
        py: 2,
        borderRadius: "8px",
        ":hover": {
          bgcolor: "hover.main",
        },
      }}
    >
      <Link href={`/products/${product?.slug}`} style={{ width: "45%",maxWidth:"45%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap:1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              overflow:"hidden"
            }}
          >
            <Box
              sx={{
                width: "45px",
                minWidth: "45px",
                height: "45px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(4px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                fill
                alt={product?.brand?.title}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1,overflow:"hidden",width:"100%" }}>
              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: "600",
                  fontSize: "13px",
                  width:"100%",overflow:"hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {product?.title}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                {product?.category?.title}
                {product?.region?.length > 0 &&
                  (product?.region?.length > 1
                    ? " , چند منطقه ای"
                    : ` , ${product?.region[0]?.title}`)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, color: "icon.main" }}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
                fill="currentColor"
              />
              <path
                d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "12px",
                color: "text.secondary",
              }}
            >
              {product?.score}
            </Typography>
          </Box>
        </Box>
      </Link>
      <Box
        sx={{
          width: "55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            animation: "appearLater 0.3s forwards",
          }}
        >
          <Typography
            sx={{ color: "text.content", fontSize: "16px", fontWeight: "500" }}
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
              alt="shop"
            />
          </Box>
        </Box>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {ThousandSeparator(product?.price)}
        </Typography>
        <Box sx={{ height: "20px", color: "icon.main" }}>
          <svg
            onClick={() => unbookmark({ productId: product.id })}
            style={{ cursor: "pointer" }}
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.875 3.125H13.125M2.625 5.75H18.375M16.625 5.75L16.0114 14.9544C15.9193 16.3353 15.8733 17.0258 15.575 17.5494C15.3124 18.0103 14.9163 18.3809 14.439 18.6122C13.8967 18.875 13.2047 18.875 11.8207 18.875H9.17932C7.79529 18.875 7.10328 18.875 6.56105 18.6122C6.08366 18.3809 5.68758 18.0103 5.42499 17.5494C5.12672 17.0258 5.08069 16.3353 4.98863 14.9544L4.375 5.75M8.75 9.6875V14.0625M12.25 9.6875V14.0625"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default BookmarksCard;
