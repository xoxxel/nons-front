import { Box, Typography } from "@mui/material";
import Title from "../../title";

const GamerCommentsTitle = () => {
  return (
    <Box sx={{ pr: "9px", pt: "11px", mt: 0.5 }}>
      <Title title="نظرات گیمرها" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: { md: "20px", xs: "10px" },
        }}
      >
        <Typography
          sx={{
            color: "text.main",
            fontSize: { md: "18px", xs: "16px" },
            fontWeight: "500",
          }}
        >
          تجربه کاربران درباره نونز
        </Typography>
      </Box>
    </Box>
  );
};

export default GamerCommentsTitle;
