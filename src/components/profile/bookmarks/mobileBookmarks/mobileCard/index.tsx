import CopyCode from "@/components/profile/activities/transaction/copyCode";
import ProductModel from "@/models/Product";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BookmarkMobilecard = ({
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
        p: "10px",
        pl: "17px",
        display: "flex",
        justifyContent: "space-between",
        height: "fit-content",
        bgcolor: "background.element",
        borderRadius: "12px",
      }}
    >
      {/* right side of card */}
      <Link href={`/products/${product?.slug}`}>
      <Box sx={{ display: "flex", gap: "7px" }}>
        <Box
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(4px)",
            position:"relative",
            overflow:"hidden",
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
            fill
            alt="spotify"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "600", color: "text.main" }}
          >
            {product?.brand?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "text.secondary",
            }}
          >
            {product?.category?.title}
            {product?.region?.length > 0 &&
              (product?.region?.length > 1
                ? " , چند منطقه ای"
                : ` , ${product?.region[0]?.title}`)}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "text.secondary",
            }}
          >
            قیمت: {ThousandSeparator(product?.price)}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "text.secondary",
              }}
            >
              {product?.shop?.title}
            </Typography>
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.shop?.image}`}
              width={16}
              height={16}
              alt="avatar"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
      </Link>
      {/* left side of card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minHeight: "100%",
          alignItems: "end",
        }}
      >
        {/* score and star */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
              fill="#4C5357"
            />
            <path
              d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
              fill="black"
              fillOpacity="0.2"
            />
            <path
              d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
              fill="black"
              fillOpacity="0.2"
            />
            <path
              d="M6.03834 0.984965C6.20914 0.574319 6.79086 0.574318 6.96166 0.984964L8.36649 4.36259C8.4385 4.5357 8.6013 4.65399 8.7882 4.66897L12.4346 4.96131C12.878 4.99685 13.0577 5.5501 12.7199 5.83944L9.94175 8.21925C9.79936 8.34123 9.73717 8.53262 9.78068 8.715L10.6295 12.2733C10.7327 12.7059 10.262 13.0478 9.88248 12.816L6.76063 10.9092C6.60062 10.8115 6.39938 10.8115 6.23937 10.9092L3.11752 12.816C2.73797 13.0478 2.26735 12.7059 2.37054 12.2733L3.21932 8.715C3.26283 8.53262 3.20064 8.34123 3.05825 8.21925L0.280054 5.83944C-0.057714 5.5501 0.122048 4.99685 0.565375 4.96131L4.2118 4.66897C4.3987 4.65399 4.5615 4.5357 4.63351 4.36259L6.03834 0.984965Z"
              fill="black"
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
        {/* trash icon */}
        <svg
          onClick={() => unbookmark({ productId: product.id })}
          style={{ cursor: "pointer" }}
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.875 1.625H12.125M1.625 4.25H17.375M15.625 4.25L15.0114 13.4544C14.9193 14.8353 14.8733 15.5258 14.575 16.0494C14.3124 16.5103 13.9163 16.8809 13.439 17.1122C12.8967 17.375 12.2047 17.375 10.8207 17.375H8.17932C6.79529 17.375 6.10328 17.375 5.56105 17.1122C5.08366 16.8809 4.68758 16.5103 4.42499 16.0494C4.12672 15.5258 4.08069 14.8353 3.98863 13.4544L3.375 4.25M7.75 8.1875V12.5625M11.25 8.1875V12.5625"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default BookmarkMobilecard;
