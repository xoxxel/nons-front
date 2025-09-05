import { Box, CircularProgress } from "@mui/material";

const profileLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight:"350px",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default profileLoading;
