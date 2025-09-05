import { Box, Skeleton } from "@mui/material";

const MobileDrawerSkeleton = () => {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ width: "100%", height: "40px", borderRadius: "12px" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt:3 }}>
        {Array(7)
          .fill(0)
          .map(() => (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{ width: "100%", height: "32px", borderRadius: "8px" }}
            />
          ))}
      </Box>
    </Box>
  );
};

export default MobileDrawerSkeleton;
