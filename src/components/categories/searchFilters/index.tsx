import { Box, Container } from "@mui/material";
import FilterDrawer from "../filterDrawer";
import SearcDrawer from "../searchDrawer";

const SearchFilters = async () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <FilterDrawer />
        <SearcDrawer />
      </Box>
    </Container>
  );
};

export default SearchFilters;
