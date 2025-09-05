import jalaliDate from "@/utils/jalaliDate";
import { Box, Container, Typography } from "@mui/material";

const DateBox = ({date}:{date:Date}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: "10px",
      }}
    >
      <Box
        sx={{
          minHeight: "21px",
          backgroundColor: "rgba(160, 225, 225, 0.05)",
          borderRadius: "3px",
          display: "flex",
          px: 1,
          py: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "8px",
            fontWeight: "500",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {jalaliDate(date,"dddd D MMMM")}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateBox;
