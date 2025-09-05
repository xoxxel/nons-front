import { Skeleton } from "@mui/material";

const CircularBrandSkeleton = ({ count }: { count: number }) => {
  return (
    <div
      style={{
        display: "flex",
        paddingRight: "10px",
        gap: "20px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {Array(count)
        .fill(0)
        .map(() => (
          <div>
            <Skeleton
              variant="circular"
              sx={{
                mx: "auto",
                mb: 1.75,
                width: { md: 45, xs: 28 },
                height: { md: 45, xs: 28 },
              }}
            />
            <Skeleton variant="text" height={20} sx={{width:{md:"80px",xs:"40px"}}} />
          </div>
        ))}
    </div>
  );
};

export default CircularBrandSkeleton;
