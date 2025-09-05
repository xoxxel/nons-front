"use state";

import InfoButton from "@/components/profile/userInfo/main/infoButton";
import { Box, Typography } from "@mui/material";
import DropDownWithIcon from "./dropDownWithIcon";
import { fetchBrandsByCategorySlug } from "@/api/data";
import { useEffect, useState } from "react";

const ProductsBrand = ({
  category,
  value,
  onChange,
}: {
  category: string;
  value: number;
  onChange: (itemID: number) => void;
}) => {
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<BrandModel | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setLoading(true);
      getBrands("");
    }
  }, [category]);

  useEffect(() => {
    if (value > 0) {
      const selectedBrand = brands?.find((brand) => brand?.id === value);
      setSelectedBrand(selectedBrand);
    }
  }, [value]);

  const getBrands = (search: string) => {
    fetchBrandsByCategorySlug({ categorySlug: category, search })
      .then((res) => setBrands(res?.results))
      .catch((err) => console.error("Error fetching category brands", err))
      .finally(() => setLoading(false));
  };

  const handleSearch = (searchTerm: string) => {
    getBrands(searchTerm);
  };

  const handleChange = (brandID: number) => {
    const selectedBrand = brands?.find((brand) => brand?.id === brandID);
    setSelectedBrand(selectedBrand);
    onChange(brandID);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
        alignItems: "start",
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
          محصول
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
        {category ? (
          <DropDownWithIcon
            data={brands}
            value={selectedBrand}
            onChange={(itemID) => handleChange(itemID)}
            onSearch={(text) => handleSearch(text)}
            loading={loading}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              py: "15px",
              px: "10px",
              border: "0.5px solid",
              borderColor: "border.main",
              borderRadius: "5px",
              color: "text.main",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 6.125L7.5 9.875L11.25 6.125"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "text.content",
              }}
            >
              ابتدا یک دسته بندی انتخاب کنید.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductsBrand;
