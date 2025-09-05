"use client";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArticlesSkeleton from "@/components/skeletons/articlesSkeleton";
import Title from "../title";
import ViewArchive from "./viewArchive";
import MainArticlesSlider from "./mainArticlesSlider";

const ArticlesSlider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Container sx={{ mt: "30px" }}>
      <Title title="بلاگ..." />
      <Box sx={{ mt: "30px", mb: "34px" }}>
        {isMounted ? (
          <>
            <MainArticlesSlider />
            <ViewArchive />
          </>
        ) : (
          <ArticlesSkeleton />
        )}
      </Box>
    </Container>
  );
};

export default ArticlesSlider;
