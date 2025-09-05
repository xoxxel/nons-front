import { Box, Skeleton } from "@mui/material";
import OurFeatureSkeleton from "./OurFeatureSkeleton";

const OurFeatureSkeletons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { md: "280px", xs: "140px" },
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <Box
            sx={{
              width: {
                lg: "calc(100%  / 1.5 - 20px)",
                md: "calc(100%  / 1.3 - 20px)",
                sm: "calc(100%  / 1.5 - 10px)",
                xs: "calc(100%  / 1.1 - 10px)",
              },
              ml: { md: "20px", xs: "10px" },
              height: "100%",
              flexShrink: 0,
            }}
          >
            <OurFeatureSkeleton key={index} />
          </Box>
        ))}
    </Box>
  );
};

export default OurFeatureSkeletons;
