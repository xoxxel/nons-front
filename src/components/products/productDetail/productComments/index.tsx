"use client";
import { Box, Container, Typography } from "@mui/material";
import Comment from "./comment";
import Comments from "./comments";
import CommentsDrawer from "./commentsDrawer";
import { useState } from "react";
import CommentModel from "@/models/Comment";

const ProductComments = ({
  comments,
  averageScore,
}: {
  comments: CommentModel[];
  averageScore: number;
}) => {
  const [isDrawerOpen, setIsDraweOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsDraweOpen(false);
  };

  return (
    <Container sx={{ mb: 3 }}>
      <Comments
        setIsDraweOpen={setIsDraweOpen}
        comments={comments}
        averageScore={averageScore}
      />
      <CommentsDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDraweOpen={setIsDraweOpen}
        handleClose={handleClose}
      >
        <Comments inMobile comments={comments} averageScore={averageScore} />
      </CommentsDrawer>
    </Container>
  );
};

export default ProductComments;
