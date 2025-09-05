"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Banner from "../banner";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { useRef, useEffect } from "react";
import BannerModel from "@/models/Banner";

const MainSliderBanners = ({ banners }: { banners: BannerModel[] }) => {
  const { inView, ref } = useInView();
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (inView) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  }, [inView, swiperRef]);

  return (
    <Box ref={ref}>
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        spaceBetween={"24px"}
      >
        {banners?.map((banner, index: number) => (
          <SwiperSlide key={index}>
            <Banner banner={banner?.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MainSliderBanners;
