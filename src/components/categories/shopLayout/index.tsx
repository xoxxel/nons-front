import { Box} from "@mui/material";
import SearchFilters from "../searchFilters";
import CategoryTabs from "../categoryTabs";
import BannerAndBreadCrumb from "./banner&breadCrumb";

const ShopLayout = () => {

  return (
    <>
    <BannerAndBreadCrumb />
      <Box sx={{ mb: 6 }}>
        <SearchFilters />
      </Box>
      <Box sx={{ mb: 7 }}>
        <CategoryTabs />
      </Box>
    </>
  );
};

export default ShopLayout;
