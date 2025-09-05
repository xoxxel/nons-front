import { Box } from "@mui/material";

const GamerCommentsPagination = ({
  prevRef,
  nextRef,
}: {
  prevRef: any;
  nextRef: any;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { md: "15px", xs: "8px" },
      }}
    >
      <Box
        sx={{ position: "relative", display: "flex", color: "text.secondary" }}
      >
        <svg
          ref={prevRef}
          style={{ cursor: "pointer" }}
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.674855 1.16488C1.13608 0.674645 1.90739 0.651129 2.39763 1.11235L8.60855 6.95576C9.50549 7.79962 9.50549 9.20039 8.60855 10.0443L2.39763 15.8877C1.90739 16.3489 1.13608 16.3254 0.674855 15.8351C0.213629 15.3449 0.237145 14.5736 0.72738 14.1124L6.69272 8.5L0.72738 2.88765C0.237145 2.42643 0.213629 1.65511 0.674855 1.16488Z"
            fill="currentColor"
          />
        </svg>
      </Box>
      <Box
        className="gamerCommentsPagination"
        sx={{
          "& > .swiper-pagination-current": {
            fontSize: { md: "23px !important", xs: "17px !important" },
            fontWeight: "600 !important",
          },
          "& > *": {
            color: "text.secondary",
          },
          color: "text.secondary",
          width: "fit-content !important",
          direction: "ltr",
          px: "20px",
          fontSize: { md: "16px !important", xs: "14px !important" },
        }}
      />
      <Box
        sx={{ position: "relative", display: "flex", color: "text.secondary" }}
      >
        <svg
          ref={nextRef}
          style={{ cursor: "pointer" }}
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.32515 15.8351C8.86392 16.3254 8.09261 16.3489 7.60237 15.8876L1.39145 10.0442C0.494509 9.20038 0.494516 7.79961 1.39145 6.95575L7.60237 1.11235C8.09261 0.651123 8.86392 0.674641 9.32515 1.16488C9.78637 1.65511 9.76285 2.42642 9.27262 2.88765L3.30728 8.5L9.27262 14.1123C9.76285 14.5736 9.78637 15.3449 9.32515 15.8351Z"
            fill="currentColor"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default GamerCommentsPagination;
