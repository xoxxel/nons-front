import CommentModel from "@/models/Comment";
import { Box, Typography } from "@mui/material";

const Comment = ({
  index,
  inMobile,
  comment,
}: {
  index: number;
  inMobile?: boolean;
  comment: CommentModel;
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();

    const diffTime: number = Math.abs(now.getTime() - date.getTime());
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // تبدیل به روز
    const diffMonths: number = Math.floor(diffDays / 30); // تبدیل به ماه
    const diffYears: number = Math.floor(diffDays / 365); // تبدیل به سال

    if (diffDays === 0) {
      return "امروز";
    } else if (diffDays === 1) {
      return "دیروز";
    } else if (diffDays < 7) {
      return `${diffDays} روز پیش`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return weeks === 1 ? "یک هفته پیش" : `${weeks} هفته پیش`;
    } else if (diffMonths < 12) {
      return diffMonths === 1 ? "یک ماه پیش" : `${diffMonths} ماه پیش`;
    } else {
      return diffYears === 1 ? "یک سال پیش" : `${diffYears} سال پیش`;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: "8px 12px 15px 12px",
        borderBottom: inMobile ? "none" : index !== 2 ? "0.25px solid" : "none",
        borderColor: "border.main",
        mb: inMobile ? "1px" : "0px",
        backgroundColor: inMobile ? "background.element" : "none",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "primary.main",
            borderRadius: "5px",
            px: 0.3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              color: "background.main",
            }}
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53834 0.984965C6.70914 0.574319 7.29086 0.574318 7.46166 0.984964L8.86649 4.36259C8.9385 4.5357 9.1013 4.65399 9.2882 4.66897L12.9346 4.96131C13.378 4.99685 13.5577 5.5501 13.2199 5.83944L10.4418 8.21925C10.2994 8.34123 10.2372 8.53262 10.2807 8.715L11.1295 12.2733C11.2327 12.7059 10.762 13.0478 10.3825 12.816L7.26063 10.9092C7.10062 10.8115 6.89938 10.8115 6.73937 10.9092L3.61752 12.816C3.23797 13.0478 2.76735 12.7059 2.87054 12.2733L3.71932 8.715C3.76283 8.53262 3.70064 8.34123 3.55825 8.21925L0.780054 5.83944C0.442286 5.5501 0.622048 4.99685 1.06538 4.96131L4.7118 4.66897C4.8987 4.65399 5.0615 4.5357 5.13351 4.36259L6.53834 0.984965Z"
                fill="currentcolor"
              />
            </svg>
          </Box>
          <Typography
            sx={{
              fontSize: { md: "14px", xs: "12px" },
              fontWeight: "600",
              color: "background.main",
              height: "18px",
              mr: 0.2,
            }}
          >
            {comment.score}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { md: "12px", xs: "9px" },
            fontWeight: "300",
            color: "text.secondary",
          }}
        >
          {formatDate(comment.date_created)}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "text.main",
          fontWeight: "500",
          fontSize: { md: "16px", xs: "13px" },
          mt: 0.8,
        }}
      >
        {comment.text}
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: { md: "14px", xs: "10px" },
          color: "text.secondary",
          mt: 0.3,
        }}
      >
        1234567#
      </Typography>
    </Box>
  );
};

export default Comment;
