"use client";

import { useState, useEffect } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { Box, Tab, Typography } from "@mui/material";
import ProductCard from "../productCard";
import Link from "next/link";
import CategoryModel from "@/models/Category";
import { fetchBrandsByCategory, fetchCategories } from "@/api/data";
import ProductSliderSkeleton from "@/components/skeletons/brandsByCategorySkeleton";

type BrandByCatecoryModel = {
  id: number;
  title: string;
  brands: BrandModel[];
};

const ProductsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [slideNotChanged, setSlideNotChanged] = useState(true);
  const [brandsByCategory, setBrandsByCategory] = useState<
    BrandByCatecoryModel[]
  >([]);

  useEffect(() => {
    setIsMounted(true);
    fetchCategories()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchBrandsByCategory()
      .then((res) => setBrandsByCategory(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    categories?.length > 0 && (
      <>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={"auto"}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="ProductSwiper"
        >
          {categories?.map((category) => (
            <SwiperSlide>
              <Tab
                sx={{
                  color: "text.main",
                  whiteSpace: "nowrap",
                  opacity: 1,
                }}
                label={category?.title}
                value={"tab-1"}
                data-index={0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            py: { md: 5.5, sm: 4, xs: 3.5 },
          }}
        >
          <Typography
            sx={{ color: "text.main", fontSize: { md: "16px", xs: "12px" } }}
          >
            {`خرید و فروش ${categories[activeTab]?.title}`}
          </Typography>
          <Link href={`/${categories[activeTab]?.slug}`}>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                alignItems: "center",
                gap: 1,
                color: "primary.main",
              }}
            >
              <Typography>مشاهده آرشیو</Typography>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.58333 6.66663L6.39824 9.66324C6.20058 9.84921 6.20059 10.1507 6.39825 10.3367L9.58333 13.3333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13.3334 10H7.08337"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Box>
            {/* arrow at mobile responsive */}
            <Box
              sx={{
                display: { md: "none", xs: "flex", alignItems: "center" },
                color: "text.secondary",
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
                  d="M15.8337 10.0001H4.16699M4.16699 10.0001L10.0003 15.8334M4.16699 10.0001L10.0003 4.16675"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Link>
        </Box>
        <Swiper
          breakpoints={{
            900: {
              slidesPerView: 1.85,
              spaceBetween: "20px",
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: "16px",
            },
            0: {
              slidesPerView: 1.063,
              spaceBetween: "11px",
            },
          }}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          loop
          onSlideChange={(e) => {
            const currentSlideIndex = e.realIndex;
            const currentSlideDataIndex =
              e?.slides[currentSlideIndex]?.dataset?.index;
            setActiveTab(currentSlideIndex);
            setSlideNotChanged(false);
          }}
          className="ProductSwiper2"
        >
          {categories?.map((category, index) => (
            <SwiperSlide key={index} data-index={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {brandsByCategory
                  ?.filter((item) => item?.title === category?.title)[0]
                  ?.brands?.map((brand) => (
                    <ProductCard
                      title={brand?.title_en}
                      product_count={brand?.product_count}
                      image={brand?.icon}
                      slug={brand?.id}
                      key={brand?.id}
                    />
                  ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  ) : (
    <ProductSliderSkeleton />
  );
};

export default ProductsSlider;
