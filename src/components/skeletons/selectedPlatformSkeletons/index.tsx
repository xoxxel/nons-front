import { Box, Skeleton } from "@mui/material";
import SelectedPlatformSkeleton from "./selectedPlatformSkeleton";

const SelectedPlatformSkeletons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { md: "291px", xs: "158px" },
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        pt: { md: "35px", xs: "20px" },
      }}
    >
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Box
            sx={{
              width: {
                lg: "calc(100%  / 2.2 - 40px / 2)",
                md: "calc(100%  / 1.7 - 40px / 2)",
                sm: "calc(100%  / 2.4 - 20px)",
                xs: "calc(100%  / 1.2 - 20px)",
              },
              ml: { md: "40px", xs: "20px" },
              height: "100%",
              flexShrink: 0,
            }}
          >
            <SelectedPlatformSkeleton key={index} />
          </Box>
        ))}
    </Box>
  );
};

export default SelectedPlatformSkeletons;
