"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Box } from "@mui/material";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          900: {
            slidesPerView: 1.6,
          },
        }}
      >
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src="/images/game2.jpg" alt="game" fill />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image src="/images/game3.jpg" alt="game" fill />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
