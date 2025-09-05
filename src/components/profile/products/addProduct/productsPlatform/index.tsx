import Search from "@/components/categories/filterDrawer/search";
import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";

const ProductsPlatform = ({
  platforms,
  values,
  setValues,
}: {
  platforms: platformModel[];
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "12.5px" }}>
        <Typography
          sx={{
            color: "text.main",
            fontWeight: "400",
            fontSize: { md: "16px", xs: "13px" },
          }}
        >
          پلتفرم
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
        <Search
          WithoutTopTitle
          bordered
          title="پلتفرم"
          data={platforms}
          selectedItems={values}
          setSelectedItems={setValues}
        />
      </Box>
    </Box>
  );
};

export default ProductsPlatform;
