
import { Box, CircularProgress } from "@mui/material";

const ProfileLoading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {md:"97vh",xs:"calc(100vh - 128px)"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <CircularProgress size={50} />
    </Box>
  );
};

export default ProfileLoading;