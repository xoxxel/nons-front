import jalaliDate from "@/utils/jalaliDate";
import { Box, Typography } from "@mui/material";

const GamerComment = ({score,text,date,code}:{score:number,text:string,date:Date,code:string}) => {

  const commentDate = jalaliDate(date,"DD jMMMM jYYYY")

  return (
    <Box
      className="gamerCommentBackground"
      sx={{
        width: "100%",
        borderRadius: "9px",
        position: "relative",
        boxShadow: "0px 4px 4px 0px #00000021",
        pb: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 1,
          pb: 0.2,
          pr: 2.5,
          pl: 1,
        }}
      >
        <Typography
          sx={{
            color: "rgba(58, 52, 28, 0.6)",
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          {commentDate}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_339_811)">
              <path
                d="M9.69264 1.60996C9.86343 1.19932 10.4452 1.19932 10.616 1.60996L12.682 6.57744C12.7541 6.75056 12.9169 6.86885 13.1038 6.88383L18.4666 7.31376C18.9099 7.3493 19.0897 7.90256 18.7519 8.19189L14.666 11.6919C14.5236 11.8139 14.4614 12.0053 14.5049 12.1876L15.7532 17.4208C15.8564 17.8534 15.3858 18.1954 15.0062 17.9635L10.4149 15.1592C10.2549 15.0615 10.0537 15.0615 9.89367 15.1592L5.30236 17.9635C4.92281 18.1954 4.45218 17.8534 4.55537 17.4208L5.80368 12.1876C5.84719 12.0053 5.785 11.8139 5.64261 11.6919L1.55671 8.19189C1.21894 7.90256 1.3987 7.3493 1.84203 7.31376L7.20484 6.88383C7.39174 6.86885 7.55454 6.75056 7.62655 6.57744L9.69264 1.60996Z"
                fill="#F2F4F7"
              />
              <g clip-path="url(#clip1_339_811)">
                <path
                  d="M9.69264 1.60996C9.86343 1.19932 10.4452 1.19932 10.616 1.60996L12.682 6.57744C12.7541 6.75056 12.9169 6.86885 13.1038 6.88383L18.4666 7.31376C18.9099 7.3493 19.0897 7.90256 18.7519 8.19189L14.666 11.6919C14.5236 11.8139 14.4614 12.0053 14.5049 12.1876L15.7532 17.4208C15.8564 17.8534 15.3858 18.1954 15.0062 17.9635L10.4149 15.1592C10.2549 15.0615 10.0537 15.0615 9.89367 15.1592L5.30236 17.9635C4.92281 18.1954 4.45218 17.8534 4.55537 17.4208L5.80368 12.1876C5.84719 12.0053 5.785 11.8139 5.64261 11.6919L1.55671 8.19189C1.21894 7.90256 1.3987 7.3493 1.84203 7.31376L7.20484 6.88383C7.39174 6.86885 7.55454 6.75056 7.62655 6.57744L9.69264 1.60996Z"
                  fill="#3A341C"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_339_811">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.154297)"
                />
              </clipPath>
              <clipPath id="clip1_339_811">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.154297)"
                />
              </clipPath>
            </defs>
          </svg>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              mr: 0.5,
              color: "#1E1E1E",
            }}
          >
            {score?.toFixed(1)}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "1px",
          opacity: 0.4,
          background:
            "linear-gradient(90deg, rgba(72, 79, 83, 0) 6.58%, rgba(116, 128, 134, 0.8) 38.61%, rgba(138, 152, 160, 0.8) 72.06%, rgba(160, 176, 185, 0) 88.43%)",
        }}
      />
      <Box sx={{ mt: 1, px: 3, pb: 3 }}>
        <Typography sx={{ fontSize: "16px", color: "#1E1E1E" }}>
        {text}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          position: "absolute",
          bottom: "0px",
          pr: 3.5,
          pb: 1.5,
        }}
      >
        <Typography sx={{ color: "#1E1E1E", fontWeight: "600" }}>
          {`#${code}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default GamerComment;
