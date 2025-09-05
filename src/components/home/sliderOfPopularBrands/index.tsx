import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Brand from "./brand";
import BrandsSlider from "./brandsSlider";
import Link from "next/link";

const PopularBrands = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: { md: "15px", xs: "7px" },
          padding: { md: "40px 8px", xs: "28px 0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: {md:5,xs:2},
          }}
        >
          {/* clusters and title between them */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { md: 0.8, xs: 0.5 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { md: "85px", xs: "67px" },
                width: { md: "56px", xs: "44px" },
              }}
            >
              <Image src="/images/right-cluster.png" fill alt="cluster" />
            </Box>
            <Box >
              <Typography sx={{
                textAlign: "center",
                fontSize: { md: "45px", xs: "32px" },
                fontWeight: "600",
                color: "text.main",
                lineHeight:1.2,
              }}>TOP</Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { md: "26px", xs: "22px" },
                fontWeight: "600",
                color: "text.main",
                lineHeight:1,
              }}
            >
              BRAND
            </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: { md: "85px", xs: "67px" },
                width: { md: "56px", xs: "44px" },
              }}
            >
              <Image src="/images/left-cluster.png" fill alt="cluster" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "text.main",
              gap: 1,
              mt:0.5,
            }}
          >
            <Typography
              sx={{ fontSize: { md: "29px", xs: "13px" }, fontWeight: "600" }}
            >
              برند های محبوب
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: { md: "500", xs: "400" },
              }}
            >
              در تنوع بیشمار محصولات شیرجه بزنید
            </Typography>
          </Box>
        </Box>
        <BrandsSlider />
        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "background.main",
            mt: "10px",
            my: 2,
          }}
        ></Box>
        <Box
          sx={{
            color: "primary.main",
            mt: {md:"20px",xs:"16px"},
          }}
        >
          <Link href="/products" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}>
          <Typography sx={{
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: { md: "500", xs: "400" },
          }}>مشاهده بیشتر</Typography>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0833 7.16666L6.89824 10.1633C6.70058 10.3492 6.70059 10.6507 6.89825 10.8367L10.0833 13.8333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.8333 10.5H7.58334"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default PopularBrands;
