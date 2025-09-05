import { Box, Skeleton } from "@mui/material";

const ShopLayoutSekeleton = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ width: "170px", height: "35px" }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ width: "32px", height: "32px" }}
        />
      </Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ width: "100%", height: {md:"425px",sm:"245px",xs:"142px"}, borderRadius: "12px",mt:3 }}
      />
    </>
  );
};

export default ShopLayoutSekeleton;
