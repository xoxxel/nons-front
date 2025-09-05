"use client";
import { fetchReagons } from "@/api/data";
import Search from "@/components/categories/filterDrawer/search";
import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ProductsRegion = ({
  regions,
  values,
  setValues,
}: {
  regions: RegionModel[];
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const [regionsData, setRegionsData] = useState<RegionModel[]>(regions);
  const [loading, setLoading] = useState(false);

  const getRegions = (search?: string) => {
    fetchReagons({title:search})
      .then((res) => setRegionsData(res))
      .catch((err) => console.error("error fetching regions", err));
  };

  const handleSearch = (search:string)=> {
    if (!loading) {
      setLoading(true);
    }
    const handler = setTimeout(() => {
      getRegions(search);
    }, 800); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }

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
          ریجن / سرور
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
        <Search
          WithoutTopTitle
          bordered
          title="ریجن / سرور"
          data={regionsData}
          selectedItems={values}
          setSelectedItems={setValues}
          
          onSearch={handleSearch}
        />
      </Box>
    </Box>
  ); 
};

export default ProductsRegion;
