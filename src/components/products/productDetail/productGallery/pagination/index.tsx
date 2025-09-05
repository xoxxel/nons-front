import { Box } from "@mui/material";

const ProductGalleryPagination = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "49px", xs: "20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        mt: "10px",
      }}
      className="swiper-custom-pagination"
    ></Box>
  );
};

export default ProductGalleryPagination;
