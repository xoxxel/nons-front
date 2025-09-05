"use client";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import OurFeaturePagination from "./pagination";
import MainOurFeatureSlider from "./mainSlider";
import OurFeatureSkeletons from "@/components/skeletons/ourFeatureSkeletons";

const OurFeatureSlider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Container sx={{ mt: { md: 3, xs: 6 } }}>
      <Typography
        sx={{
          fontSize: { md: "18px", xs: "13px" },
          color: "text.main",
          fontWeight: "600",
        }}
      >
        ویژگی های ما
      </Typography>
      <Box
        sx={{
          p: { md: "10px", xs: 0 },
          pl: "0px",
          mt: { md: "20px", xs: "10px" },
        }}
      >
        {isMounted ? (
          <>
            <MainOurFeatureSlider />
            <OurFeaturePagination />
          </>
        ) : (
          <Box sx={{ pt: "10px" }}>
            <OurFeatureSkeletons />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default OurFeatureSlider;
