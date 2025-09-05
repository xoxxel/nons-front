import Profile from "@/components/categories/card/profile";
import MessageModel from "@/models/Message";
import { Box, Typography } from "@mui/material";

const TextChat = ({
  isSender,
  isLast,
  message,

}: {
  isSender?: boolean;
  isLast?: boolean;
  message: MessageModel;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: isSender ? "start" : "end",
        justifyContent: "center",
        flexDirection: "column",
        mt: "10px",
        mb: isLast ? "10px" : "0px",
      }}
    >
      <Box>
        <Typography
          sx={{
            width: "100%",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "8px",
            mb: 0.5,
            px: 1,
          }}
        >
          {message?.sender?.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              backgroundColor: isSender ? "#0788F5" : "#FFFFFF",
              borderRadius: isSender
                ? "14px 14px 2px 14px"
                : "2px 14px 14px 14px",
              py: "13px",
              px: 1,
              ml: isSender ? "0px" : "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "500",
                color: isSender ? "#FFFFFF" : "#000000",
              }}
            >
              {message?.content}
            </Typography>
          </Box>
          {!isSender && (
            <Profile
              width="34px"
              height="34px"
              image={message?.sender?.image}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TextChat;
