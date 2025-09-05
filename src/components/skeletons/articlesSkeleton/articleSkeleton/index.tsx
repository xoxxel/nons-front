import { Skeleton } from "@mui/material";

const ArticleSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "9px",
      }}
    />
  );
};

export default ArticleSkeleton;
