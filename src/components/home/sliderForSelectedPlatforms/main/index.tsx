"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Pagination } from "swiper/modules";
import SelectedPlatform from "../selectedPlatform";
import { Box, useMediaQuery } from "@mui/material";

const MainSelectedPlatform = ({platforms}:{platforms:platformModel[]}) => {
  const md = useMediaQuery("(min-width:900px)");

  return (
    <Box>
      <Swiper
        pagination={{
          clickable: true,
          el: ".platform-swiper-custom-pagination",
        }}
        modules={[Pagination]}
        initialSlide={md ? 0 : 1}
        autoplay={{
          delay: 1000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: "20px !important",
            centeredSlides: true,
            initialSlide: 1,
          },
          600: {
            slidesPerView: 2.4,
            spaceBetween: "20px !important",
            centeredSlides: true,
            initialSlide: 1,
          },
          900: {
            slidesPerView: 1.7,
            spaceBetween: "40px",
          },
          1200: {
            slidesPerView: 2.2,
            spaceBetween: "40px",
          },
        }}
        style={{
          paddingBottom: md ? "35px" : "20px",
          paddingTop: md ? "35px" : "20px",
          paddingLeft: md ? "35px" : "20px",
        }}
      >
        {platforms?.map((platform)=><SwiperSlide key={platform?.id}>
          <SelectedPlatform
            title={platform?.title}
            text={platform?.text}
            image={platform?.image}
            gradient={platform?.background_color}
            slug={platform?.id}
          />
        </SwiperSlide>)}
      </Swiper>
    </Box>
  );
};

export default MainSelectedPlatform;
