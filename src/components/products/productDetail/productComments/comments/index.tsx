import { Box, Typography } from "@mui/material";
import Comment from "../comment";
import CommentModel from "@/models/Comment";

const Comments = ({
  inMobile,
  setIsDraweOpen,
  comments,
  averageScore,
}: {
  inMobile?: boolean;
  setIsDraweOpen?: any;
  comments: CommentModel[];
  averageScore: number;
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 2,
          mb: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                color: "text.main",
              }}
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.77446 1.01875C9.95101 0.624604 10.5106 0.624605 10.6871 1.01875L12.9574 6.08733C13.0325 6.25496 13.1934 6.36792 13.3766 6.38156L19.1992 6.81501C19.6529 6.84878 19.8294 7.42172 19.4733 7.70494L15.0934 11.1888C14.9391 11.3116 14.8713 11.5135 14.9204 11.7045L16.2679 16.9502C16.3777 17.3774 15.9207 17.7271 15.537 17.5095L10.4775 14.6399C10.3245 14.5531 10.1371 14.5531 9.98411 14.6399L4.92458 17.5095C4.54087 17.7271 4.08387 17.3774 4.19363 16.9502L5.54117 11.7045C5.59023 11.5135 5.52246 11.3116 5.36814 11.1888L0.988236 7.70494C0.632184 7.42172 0.808674 6.84878 1.26237 6.81501L7.08496 6.38156C7.26813 6.36792 7.42907 6.25496 7.50416 6.08733L9.77446 1.01875Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                fontSize: { md: "18px", xs: "13px" },
                fontWeight: "600",
                color: "text.main",
                height: "24px",
                mx: 1,
                pt: { md: 0, xs: 0.5 },
              }}
            >
              {averageScore || 0}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: "600",
              fontSize: { md: "14px", xs: "10px" },
            }}
          >
            از {comments?.length} بازخورد
          </Typography>
        </Box>
        {!inMobile && (
          <Box
            onClick={() => setIsDraweOpen(true)}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Typography
              sx={{
                ml: 0.5,
                color: "primary.main",
                fontWeight: "500",
                fontSize: { md: "16px", xs: "13px" },
              }}
            >
              مشاهده بیشتر
            </Typography>
            <Box
              sx={{
                position: "relative",
                color: "primary.main",
                display: "flex",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H2M2 6L5 9M2 6L5 3"
                  stroke="currentcolor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          borderRadius: inMobile ? "0px" : "7px",
          overflow: "hidden",
          backgroundColor: inMobile ? "transparent" : "background.element",
        }}
      >
        {comments?.map((comment, index) => (
          <Comment key={index} index={index} comment={comment} inMobile />
        ))}
      </Box>
    </>
  );
};

export default Comments;
