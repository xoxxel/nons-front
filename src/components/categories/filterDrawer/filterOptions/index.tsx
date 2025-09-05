"use client";

import { Box, Button, Typography } from "@mui/material";
import Categories from "../categories";
import PriceRange from "../priceRange";
import Search from "../search";
import Platforms from "../platforms";
import BuyingItems from "../buyingOptions";
import { useEffect, useState } from "react";
import { fetchBrands, fetchReagons } from "@/api/data";
import ProductsModel from "@/models/Products";
import { BeatLoader } from "react-spinners";

const filterOptions = ({
  setIsDraweOpen,
  filterOptions,
  setFilterOptions,
  selectedBrands,
  setSelectedBrands,
  selectedRegions,
  setSelectedRegions,
  products,
  loading,
}: {
  setIsDraweOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterOptions: CategoRyFiltersModel;
  setFilterOptions: React.Dispatch<React.SetStateAction<CategoRyFiltersModel>>;
  selectedBrands: number[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<number[]>>;
  selectedRegions: number[];
  setSelectedRegions: React.Dispatch<React.SetStateAction<number[]>>;
  products: ProductsModel;
  loading: boolean;
}) => {
  const [brands, setBrands] = useState([]);
  const [reagons, setReagons] = useState([]);

  const getRegions = (search?: string) => {
    fetchReagons({title:search})
      .then((res) => setReagons(res))
      .catch((err) => console.error("error fetching regions", err));
  };

  const getBrands = (search: string) => {
    fetchBrands({title:search})
      .then((res) => setBrands(res?.results))
      .catch((err) => console.error("error on fetching brands in category filters", err));
  };

  useEffect(() => {
    getRegions("")
  }, []);

  useEffect(() => {
    getBrands("")
  }, []);

  const handleSearch = (search:string)=> {
    const handler = setTimeout(() => {
      getRegions(search);
    }, 800); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }

  const handleBrandSearch = (search:string)=> {
    const handler = setTimeout(() => {
      getBrands(search);
    }, 800); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }

  const handleClear = () => {
    const clearObject = {
      categories: [],
      platforms: [],
      lowestPrice: 0,
      highestPrice: 10000000001,
      suggestedProducts: false,
      onlineSellers: false,
      autoSendings: false,
      discountedProducts: false,
      productsWithWarranty: false,
    };
    if (JSON.stringify(filterOptions) !== JSON.stringify(clearObject)) {
      setFilterOptions({
        categories: [],
        platforms: [],
        lowestPrice: 0,
        highestPrice: 10000000001,
        suggestedProducts: false,
        onlineSellers: false,
        autoSendings: false,
        discountedProducts: false,
        productsWithWarranty: false,
      });
    }
    if (selectedBrands?.length > 0 || selectedRegions?.length > 0) {
      setSelectedBrands([]);
      setSelectedRegions([]);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "5px",
            width: "170px",
            borderRadius: "80px",
            bgcolor: "#848686",
            mt: 2,
            mb: 3,
            display: { sm: "none", xs: "block" },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: 1,
          borderBottom: "0.5px solid #4D5356",
          pb: 2,
          mb: 5,
          color: "text.main",
          mt: 3,
        }}
      >
        <Typography sx={{ fontWeight: "900", color: "text.main" }}>
          فیلتر
        </Typography>
        <svg
          onClick={() => setIsDraweOpen(false)}
          style={{ cursor: "pointer" }}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5.5L5 15.5M5 5.5L15 15.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box
        className="scrollbarHidden"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
          overflowY: "auto",
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: "600", fontSize: "13px", color: "text.main" }}
          >
            دسته بندی
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "13px", color: "text.main" }}
          >
            دسته بندی محصول را انتخاب کنید
          </Typography>
          <Categories
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
          <PriceRange setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Search
            title="برند"
            data={brands}
            selectedItems={selectedBrands}
            setSelectedItems={setSelectedBrands}
            searchable
            onSearch={handleBrandSearch}
          />
          <Search
            title="ریجن"
            data={reagons}
            selectedItems={selectedRegions}
            setSelectedItems={setSelectedRegions}
            searchable
            onSearch={handleSearch}
          />
        </Box>
        <Platforms
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        <BuyingItems
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      </Box>
      {/* button and delete options at bottom */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "0.5px solid",
          borderColor: "border.main",
          pt: 1,
          mb: -1,
        }}
      >
        <Button
          sx={{
            bgcolor: "button.main",
            color: "white",
            px: 1,
            py: 2,
            minWidth: "137px",
            height: "56px",
            borderRadius: "7px",
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          {!loading ? (
            `نمایش ${products?.count ? products?.count : 0} محصول`
          ) : (
            <BeatLoader size={10} color="white" />
          )}
        </Button>
        <Typography
          sx={{ color: "text.main", fontSize: "13px", cursor: "pointer" }}
          onClick={handleClear}
        >
          حذف فیلتر ها
        </Typography>
      </Box>
    </>
  );
};

export default filterOptions;
