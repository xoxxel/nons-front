"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { Box } from "@mui/material";
import QouteCard from "./qouteCard";

const FoundersQoute = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <Swiper
      className="gamerCommentsSlider"
      slideNextClass=".gamerCommentsNext"
      modules={[Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: "10px",
          initialSlide: 0,
        },
        600: {
          slidesPerView: 1.5,
          spaceBetween: "10px",
          initialSlide: 0,
        },
        900: {
          spaceBetween: "10px",
          slidesPerView: 2,
          initialSlide: 1,
          centeredSlides: true,
        },
      }}
      pagination={{
        clickable: true,
        type: "fraction",
        el: ".gamerCommentsPagination",
      }}
      navigation={{ nextEl: nextRef?.current }}
      onSwiper={(swiper: any) => {
        if (
          swiper?.params?.navigation &&
          typeof swiper?.params?.navigation == "object"
        ) {
          swiper.params.navigation.prevEl = prevRef?.current;
          swiper.params.navigation.nextEl = nextRef?.current;
        }
        swiper?.navigation?.destroy();
        swiper?.navigation?.init();
        swiper?.navigation?.update();
      }}
      style={{
        paddingTop: "25px",
        paddingBottom: "25px",
      }}
    >
      {/* pagination */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { md: "15px", xs: "8px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            color: "text.secondary",
          }}
        >
          <Box
            ref={prevRef}
            sx={{
              width: { md: "40px", xs: "32px" },
              height: { md: "40px", xs: "32px" },
              borderRadius: "50px",
              bgcolor: "#A7F242",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6149_480)">
                <path
                  d="M12.9164 19.7955L11.2686 18.1619L15.5939 13.8366H5.45898V11.4361H15.5939L11.2686 7.1179L12.9164 5.47727L20.0755 12.6364L12.9164 19.7955Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_6149_480">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
        <Box
          className="gamerCommentsPagination"
          sx={{
            "& > .swiper-pagination-current": {
              fontSize: { md: "16px !important", xs: "14px !important" },
              fontWeight: "600 !important",
            },
            "& > *": {
              color: "text.secondary",
            },
            color: "text.secondary",
            width: "fit-content !important",
            direction: "ltr",
            px: "20px",
            fontSize: { md: "16px !important", xs: "14px !important" },
            userSelect: "none",
          }}
        />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            color: "text.secondary",
          }}
        >
          <Box
            ref={nextRef}
            sx={{
              width: { md: "40px", xs: "32px" },
              height: { md: "40px", xs: "32px" },
              borderRadius: "50px",
              bgcolor: "#A7F242",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6149_484)">
                <path
                  d="M12.0925 19.7955L4.93342 12.6364L12.0925 5.47727L13.7402 7.1108L9.41495 11.4361H19.5499V13.8366H9.41495L13.7402 18.1548L12.0925 19.7955Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_6149_484">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
      </Box>
      {/* sliders */}
      {Array(3)
        .fill(0)
        ?.map((_, index) => (
          <SwiperSlide key={index}>
            <QouteCard />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default FoundersQoute;
