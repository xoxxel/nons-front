import { Box, Skeleton } from "@mui/material";

const SellersMenueSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton variant="text" animation="wave" sx={{ width: "80px" }} />
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: "96px", height: "30px", borderRadius: "80px" }}
        />
      </Box>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          {Array(5)
            .fill(0)
            .map(() => (
              <Skeleton variant="rectangular" animation="wave" sx={{width:"100%"}} />
            ))}
        </Box>
    </Box>
  );
};

export default SellersMenueSkeleton;
