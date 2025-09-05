import { Box } from "@mui/material";
import GamerCommentSkeleton from "./gamerCommentsSkeleton";

const GamerCommentsSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "215px",
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        gap: "0px",
      }}
    >
      <GamerCommentSkeleton />
      <GamerCommentSkeleton active />
      <GamerCommentSkeleton />
    </Box>
  );
};

export default GamerCommentsSkeleton;
