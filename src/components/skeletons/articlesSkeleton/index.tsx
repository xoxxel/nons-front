import { Box } from "@mui/material";
import ArticleSkeleton from "./articleSkeleton";

const ArticlesSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { md: "470px", xs: "250px" },
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <Box
            key={index}
            sx={{
              width: {
                md: "calc(100%  / 3 - 40px / 3)",
                sm: "calc(100%  / 2 - 40px / 2)",
                xs: "calc(100%  / 1.3)",
              },
              ml: "20px",
              flexShrink: 0,
            }}
          >
            <ArticleSkeleton />
          </Box>
        ))}
    </Box>
  );
};

export default ArticlesSkeleton;
