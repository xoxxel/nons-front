import Login from "@/components/login";
import { Box } from "@mui/material";

const LoginPage = () => {
  return (
      <Box
        sx={{
          height:"100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow : "hidden",
        }}
      >
        <Login />
      </Box>
  );
};

export default LoginPage;
