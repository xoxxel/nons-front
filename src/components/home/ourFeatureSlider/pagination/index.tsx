import { Box } from "@mui/material";

const OurFeaturePagination = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "49px", xs: "20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { md: "8px", xs: "10px" },
        mt: "10px",
      }}
      className="swiper-custom-pagination"
    ></Box>
  );
};

export default OurFeaturePagination;
