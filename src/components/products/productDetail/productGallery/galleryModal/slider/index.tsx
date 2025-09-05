"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import ProductModel from "@/models/Product";

const ModalSlider = ({
  gallery,
  initialItemIndex,
}: {
  gallery: ProductModel["gallery"];
  initialItemIndex: number;
}) => {
  const previousButton = useRef(null);
  const nextButton = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [previousButton, nextButton]);

  return (
    <Box sx={{ position: "relative", px: 1.5 }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1.5,
          height: "100%",
        }}
      >
        <Box
          ref={previousButton}
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            mr: 1,
            zIndex: 2,
            cursor: "pointer",
          }}
        >
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.875 2.25L9.125 9.5L1.875 16.75"
              stroke="black"
              stroke-opacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        <Box
          ref={nextButton}
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            ml: 1,
            zIndex: 2,
            cursor: "pointer",
          }}
        >
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.125 16.75L1.875 9.5L9.125 2.25"
              stroke="black"
              strokeOpacity="0.6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
      <Swiper
        modules={[Navigation, Pagination]}
        initialSlide={initialItemIndex}
        navigation={{
          nextEl: nextButton.current,
          prevEl: previousButton.current,
        }}
        onSwiper={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation == "object"
          ) {
            // Delay execution for the refs to be defined
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = previousButton.current;
            swiper.params.navigation.nextEl = nextButton.current;
          }

          swiperRef.current = swiper;
          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
        spaceBetween={10}
      >
        {gallery?.map((item) => (
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                  borderRadius: "7px",
                  overflow: "hidden",
                  userSelect: "none",
                }}
              >
                <Image src={`${process.env.NEXT_PUBLIC_SERVER}/${item?.image}`} fill alt="gallery" />
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default ModalSlider;
