"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductGalleryPagination from "./pagination";
import GalleryImg from "./image";
import { Pagination } from "swiper/modules";
import GalleryModal from "./galleryModal";
import { useState } from "react";
import ProductModel from "@/models/Product";

const ProductGallery = ({ gallery,productName }: { gallery: ProductModel["gallery"],productName:string }) => {
  const [lightBoxOpen, setLightBoxOpen] = useState<boolean>(false);
  const [initialItemIndex, setInitialItemIndex] = useState<number>(0);

  const handleLightBoxClose = () => {
    setLightBoxOpen(false);
  };

  const handleLightBoxOpen = () => {
    setLightBoxOpen(true);
  };

  return (
    <Container sx={{ mb: { md: 5, xs: "10px" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: { md: 2, xs: 0 },
          mb: { md: 4, xs: 2 },
        }}
      >
        <Typography
          sx={{
            color: "text.main",
            fontSize: { md: "16px", xs: "12px" },
            fontWeight: "500",
          }}
        >
          گالری محصول
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            onClick={handleLightBoxOpen}
            sx={{
              ml: 0.5,
              color: "primary.main",
              fontSize: { md: "16px", xs: "12px" },
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            مشاهده بیشتر
          </Typography>
          <Box
            sx={{
              position: "relative",
              color: "primary.main",
              display: "flex",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H2M2 6L5 9M2 6L5 3"
                stroke="currentcolor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: { md: "13px", xs: "3px" } }}>
        <Swiper
          initialSlide={2}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          breakpoints={{
            900: {
              slidesPerView: 3.5,
              spaceBetween: "15px",
              centeredSlides: true,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: "10px",
              centeredSlides: false,
            },
          }}
          modules={[Pagination]}
        >
          {gallery?.map((item,index) => (
            <SwiperSlide key={item?.id} onClick={()=>setInitialItemIndex(index)}>
              <GalleryImg onOpen={handleLightBoxOpen} image={item?.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <ProductGalleryPagination />
      <GalleryModal
        open={lightBoxOpen}
        gallery={gallery}
        initialItemIndex={initialItemIndex}
        onClose={handleLightBoxClose}
        productName={productName}
      />
    </Container>
  );
};

export default ProductGallery;
