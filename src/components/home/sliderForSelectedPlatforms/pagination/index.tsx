import { Box } from "@mui/material";

const SelectedPlatformPagination = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "49px", xs: "20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { md: "8px", xs: "10px" },
        mt: { md: "10px", xs: "0px" },
      }}
      className="platform-swiper-custom-pagination"
    ></Box>
  );
};

export default SelectedPlatformPagination;
