"use client";
import { Box, Container, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import BannerSkeleton from "@/components/skeletons/bannerSkeleton";
import MainSliderBanners from "./main";
import BannerModel from "@/models/Banner";

const SliderBanners = ({ banners }: { banners: BannerModel[] }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    banners?.length > 0 ? <Container sx={{ mt: { md: "30px", xs: "15px" } }}>
      <Box
        sx={{
          px: { md: "28px", xs: "0px" },
          height: { lg: "426px", md: "300px", sm: "250px", xs: "142px" },
        }}
      >
        {isMounted ? (
          <MainSliderBanners banners={banners} />
        ) : (
          <BannerSkeleton />
        )}
      </Box>
    </Container> : ""
  );
};

export default SliderBanners;
