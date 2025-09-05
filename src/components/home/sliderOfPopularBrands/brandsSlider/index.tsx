"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useEffect, useState } from "react";
import Brand from "../brand";
import "swiper/css/effect-coverflow";
import { Box } from "@mui/material";
import { fetchBrands } from "@/api/data";

const BrandsSlider = () => {
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBrands({limit:200,title:""})
      .then((res) => setBrands(res?.results))
      .catch((err) =>
        console.error("error fetching brand in popular brands", err)
      ).finally(()=>setLoading(false));
  }, []);

  return (
    <Box sx={{ minHeight: "179px" }}>
        <Swiper
          breakpoints={{
            1100: {
              slidesPerView: 9,
              spaceBetween: "20px",
            },
            900: {
              slidesPerView: 8,
              spaceBetween: "16px",
            },
            820: {
              slidesPerView: 7,
              spaceBetween: "14px",
            },
            700: {
              slidesPerView: 6,
              spaceBetween: "12px",
            },
            550: {
              slidesPerView: 5,
              spaceBetween: "11px",
            },
            450: {
              slidesPerView: 4,
              spaceBetween: "10px",
            },
            0: {
              slidesPerView: 3,
              spaceBetween: "10px",
            },
          }}
          initialSlide={2}
          loop
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            scale: 0.97,
            slideShadows: false,
          }}
          modules={[Pagination, EffectCoverflow]}
          watchSlidesProgress={true}
          pagination={{
            type: "progressbar",
            progressbarOpposite: false,
          }}
          id="brandSlider"
        >
          {(!loading) ? brands?.map((brand) => (
              brand?.is_favorite && <SwiperSlide>
                <Brand offerCount={brand?.product_count} icon={brand?.icon} slug={brand?.id} />
              </SwiperSlide>
            )):"loading..."}
        </Swiper>
    </Box>
  );
};

export default BrandsSlider;
