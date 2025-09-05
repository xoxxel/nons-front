"use client";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import SelectedPlatformPagination from "./pagination";
import SelectedPlatformSkeletons from "@/components/skeletons/selectedPlatformSkeletons";
import MainSelectedPlatform from "./main";

const SliderForSelectedPlatform = ({platforms}:{platforms:platformModel[]}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Container sx={{ mt: { md: "20px", xs: "0px" } }}>
      <Typography
        sx={{
          fontSize: { md: "18px", xs: "13px" },
          color: "text.main",
          fontWeight: "600",
        }}
      >
        پلتفرم های منتخب
      </Typography>
      <Box
        sx={{
          p: { md: "10px", xs: "0px" },
          pl: "0px",
          mt: { md: "10px", xs: "0px" },
        }}
      >
        {isMounted ? <MainSelectedPlatform platforms={platforms} /> : <SelectedPlatformSkeletons />}
      </Box>
      <SelectedPlatformPagination />
    </Container>
  );
};

export default SliderForSelectedPlatform;
