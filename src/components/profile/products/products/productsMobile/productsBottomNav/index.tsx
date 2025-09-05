import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProductsBottomNav = ({onShare}:{onShare:()=>void}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        bottom: "74px",
        width: "100%",
        height: "54px",
        bgcolor: "background.tertiary",
        display: { md: "none", xs: "block" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          height: "100%",
          px: 2,
          gap: 3,
        }}
      >
        <Link href="/profile/products/boost">
          <Box
            sx={{
              width: "32px",
              height: "24px",
              borderRadius: "5px 5px 0 5px",
              bgcolor: "#3C464B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="pro">Pro</p>
          </Box>
        </Link>
        <svg
        onClick={onShare}
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.51625 12.3213L13.4925 15.8037M13.4837 6.19625L7.51625 9.67875M18.375 4.875C18.375 6.32475 17.1997 7.5 15.75 7.5C14.3003 7.5 13.125 6.32475 13.125 4.875C13.125 3.42525 14.3003 2.25 15.75 2.25C17.1997 2.25 18.375 3.42525 18.375 4.875ZM7.875 11C7.875 12.4497 6.69975 13.625 5.25 13.625C3.80025 13.625 2.625 12.4497 2.625 11C2.625 9.55025 3.80025 8.375 5.25 8.375C6.69975 8.375 7.875 9.55025 7.875 11ZM18.375 17.125C18.375 18.5747 17.1997 19.75 15.75 19.75C14.3003 19.75 13.125 18.5747 13.125 17.125C13.125 15.6753 14.3003 14.5 15.75 14.5C17.1997 14.5 18.375 15.6753 18.375 17.125Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Link href="/profile/products/edit-products">
          <Box sx={{width:"21px",height:"21px",color:"icon.main",}}>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 9.25027L12.25 5.75027M2.1875 19.3128L5.14882 18.9837C5.51063 18.9435 5.69153 18.9234 5.86062 18.8687C6.01063 18.8201 6.15339 18.7515 6.28503 18.6647C6.4334 18.5669 6.5621 18.4382 6.81951 18.1808L18.375 6.62527C19.3415 5.65877 19.3415 4.09176 18.375 3.12526C17.4085 2.15877 15.8415 2.15877 14.875 3.12526L3.31951 14.6808C3.0621 14.9382 2.9334 15.0669 2.83556 15.2152C2.74875 15.3469 2.68014 15.4896 2.63157 15.6397C2.57684 15.8087 2.55674 15.9896 2.51654 16.3514L2.1875 19.3128Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Link>
      </Box>
      {/* plus */}
      <Link href="/profile/products/add-product">
        <Box
          sx={{
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "-16px",
            right: "35px",
            bgcolor: "background.main",
            borderRadius: "7px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "32px",
              bgcolor: "background.tertiary",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/icons/plus.svg"
              width={24}
              height={24}
              alt="add"
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductsBottomNav;
