import { Skeleton } from "@mui/material";

const GamerCommentSkeleton = ({ active }: { active?: boolean }) => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{
        width: { md: "calc(100%  / 3)", xs: "100%" },
        height: "100%",
        borderRadius: "12px",
        flexShrink: 0,
        transform: { md: active ? "none" : "scale(0.9)", xs: "none" },
        opacity: { md: active ? 1 : 0.5, xs: 1 },
        filter: { md: active ? "none" : "blur(1.5px)", xs: "none" },
      }}
    />
  );
};

export default GamerCommentSkeleton;
