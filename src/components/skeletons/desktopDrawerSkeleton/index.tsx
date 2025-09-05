import { Box, Skeleton } from "@mui/material";

const DesktopDrawerSkeleton = () => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "150px" }} />
      <Skeleton
        variant="circular"
        width={60}
        height={60}
        sx={{ position: "absolute", top: "120px", right: "20px" }}
      />
      <Box mt={7} px={"10px"}>
        <Skeleton variant="text" width={120} height={24} />
        <Skeleton variant="text" width={200} height={24} sx={{ mt: 1 }} />
        <Skeleton variant="text" width={150} height={24} sx={{ mt: 1 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          px: "10px",
          mt: 4,
        }}
      >
        {Array(15)
          .fill(0)
          .map((_,index) => (
            <Skeleton variant="text" width={index % 2 ? 150 : 180} height={24} />
          ))}
      </Box>
    </Box>
  );
};

export default DesktopDrawerSkeleton;
