"use client";

import { fetchBrands, fetchBrandsByCategorySlug } from "@/api/data";
import CircularBrandSkeleton from "@/components/skeletons/brandSkeleton";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Link from "next/link";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("");
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const searchParamsBrand = searchParams.get("brand");

  useEffect(() => {
    const brandId = searchParams.get("brand");
    if (brandId) {
      setActiveTab(`tab-${brandId}`);
    } else {
      setActiveTab("all-products");
    }
  }, [searchParams]);


  useEffect(() => {
    setLoading(true);
    if (params?.category) {
      fetchBrandsByCategorySlug({ categorySlug: params?.category?.toString(), limit: 1000 })
        .then((res) => setBrands(res?.results))
        .catch((err) =>
          console.error(
            "error fetching brands by category in category tabs",
            err
          )
        )
        .finally(() => setLoading(false));
    } else {
      fetchBrands({ limit: 100000, title: "" })
        .then((res) => setBrands(res?.results))
        .catch((err) =>
          console.error("error fetching brands in category tabs", err)
        )
        .finally(() => setLoading(false));
    }
  }, [params?.category]);

  return (
    <Container>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper category-tab-swiper"
      >
        <SwiperSlide>
          {!loading && (
            <Link href={`/${params?.category || "products"}`}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  maxWidth: "fit-content",
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { md: "45px", xs: "28px" },
                    height: { md: "45px", xs: "28px" },
                    display: "flex",
                    justifyContent: "center",
                    color: (!params?.brand && !searchParamsBrand) ? "primary.main" : "text.main",
                  }}
                >
                  <svg
                    width="39"
                    height="38"
                    viewBox="0 0 39 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="allBrandsSVG"
                  >
                    <path
                      d="M32.9583 11.5232L19.5 19M19.5 19L6.04161 11.5232M19.5 19L19.5 34.0417M33.75 25.4261V12.574C33.75 12.0315 33.75 11.7602 33.6701 11.5183C33.5994 11.3043 33.4838 11.1078 33.331 10.942C33.1583 10.7547 32.9212 10.6229 32.447 10.3595L20.7303 3.85022C20.2813 3.60075 20.0567 3.47602 19.819 3.42711C19.6085 3.38383 19.3915 3.38383 19.181 3.42711C18.9433 3.47602 18.7187 3.60075 18.2697 3.85022L6.55304 10.3595C6.07879 10.6229 5.84167 10.7547 5.669 10.9421C5.51625 11.1078 5.40065 11.3043 5.32993 11.5183C5.25 11.7602 5.25 12.0315 5.25 12.574V25.4261C5.25 25.9686 5.25 26.2399 5.32993 26.4818C5.40065 26.6958 5.51625 26.8923 5.669 27.0581C5.84167 27.2454 6.07879 27.3772 6.55304 27.6406L18.2697 34.1499C18.7187 34.3994 18.9433 34.5241 19.181 34.573C19.3915 34.6163 19.6085 34.6163 19.819 34.573C20.0567 34.5241 20.2813 34.3994 20.7303 34.1499L32.447 27.6406C32.9212 27.3772 33.1583 27.2454 33.331 27.0581C33.4838 26.8923 33.5994 26.6958 33.6701 26.4818C33.75 26.2399 33.75 25.9686 33.75 25.4261Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Typography
                  sx={{
                    color: (!params?.brand && !searchParamsBrand) ? "primary.main" : "text.main",
                    px: 1.5,
                  }}
                >
                  همه
                </Typography>
                <Box
                  sx={{
                    width: (!params?.brand && !searchParamsBrand) ? "100%" : "0%",
                    height: "5px",
                    bgcolor: "primary.main",
                    borderRadius: "50px",
                    transition: "all 0.2s ease-in-out",
                  }}
                ></Box>
              </Box>
            </Link>
          )}
        </SwiperSlide>
        {!loading ? (
          brands?.map((brand) => (
            <SwiperSlide key={brand?.id}>
              <Link
                href={
                  params?.category
                    ? `/${params?.category}/${brand?.slug}`
                    : `/products?brand=${brand?.id}`
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    maxWidth: "fit-content",
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "45px", xs: "28px" },
                      height: { md: "45px", xs: "28px" },
                      position: "relative",
                      objectFit: "contain",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${brand?.icon}`}
                      fill
                      alt={brand?.title}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color:
                        params?.brand === brand?.slug ||
                          searchParamsBrand === brand?.id?.toString()
                          ? "primary.main"
                          : "text.main",
                      px: 1.5,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {brand?.title_en}
                  </Typography>
                  <Box
                    sx={{
                      width:
                        params?.brand === brand?.slug ||
                          searchParamsBrand === brand?.id?.toString()
                          ? "100%"
                          : "0%",
                      height: "5px",
                      bgcolor: "primary.main",
                      borderRadius: "50px",
                      transition: "all 0.2s ease-in-out",
                    }}
                  ></Box>
                </Box>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <CircularBrandSkeleton count={15} />
        )}
      </Swiper>
    </Container>
  );
};

export default CategoryTabs;
