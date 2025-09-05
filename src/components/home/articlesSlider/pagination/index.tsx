import { Box } from "@mui/material";

const ArticlesSliderPagination = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "34px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
      className="blogs-swiper-custom-pagination"
    ></Box>
  );
};

export default ArticlesSliderPagination;
