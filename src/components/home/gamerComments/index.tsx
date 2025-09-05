"use client";
import { Box, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GamerCommentsSkeleton from "@/components/skeletons/gamerCommentsSkeleton";
import MainGamerComments from "./mainGamerComments";
import GamerCommentsIcon from "./gamerCommentsIcon";
import GamerCommentsTitle from "./title";
import { fetchGamerComments } from "@/api/data";

type gamerComment = {
  id: number;
  text: string;
  score: number;
  date: Date;
  code:string
};

const GamerComments = ({withoutTitles}:{withoutTitles?:boolean}) => {
  const [comments, setComments] = useState<gamerComment[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchGamerComments()
        .then((data) => {
          setComments(data);
        })
        .catch((error) => {
          console.error("Error fetching gamer comments:", error);
        }).finally(()=> setLoading(false));
    }, []);

  return (
    comments?.length > 0 &&<Container sx={{ mt: "30px", pb: "41px" }}>
      {!withoutTitles && <Box>
        <GamerCommentsIcon />
        <GamerCommentsTitle />
      </Box>}
      <Box sx={{ mt: { md: "10px", xs: "5px" }, overflowX: "none" }}>
        {!loading ? (
          <>
            <MainGamerComments comments={comments} />
          </>
        ) : (
          <Box sx={{ py: "25px" }}>
            <GamerCommentsSkeleton />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default GamerComments;
