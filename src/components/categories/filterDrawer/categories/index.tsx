"use client";

import { fetchCategories } from "@/api/data";
import CategoryModel from "@/models/Category";
import { Box, Skeleton, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";

const Categories = ({
  filterOptions,
  setFilterOptions,
}: {
  filterOptions: CategoRyFiltersModel;
  setFilterOptions: React.Dispatch<SetStateAction<CategoRyFiltersModel>>;
}) => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then((res) => setCategories(res))
      .catch((err) =>
        console.error(
          "error in fetching categories in category page filter",
          err
        )
      ).finally(()=> setLoading(false));
  }, []);

  const handleClick = (value: string) => {
    if (!filterOptions.categories.includes(value)) {
      setFilterOptions({
        ...filterOptions,
        categories: [...filterOptions.categories, value],
      });
    } else {
      const categories = [...filterOptions.categories];
      const categoryIndex = categories.indexOf(value);
      categories.splice(categoryIndex, 1);
      setFilterOptions({
        ...filterOptions,
        categories: categories,
      });
    }
  };

  return categories?.length > 0 && (
    !loading ? <Box
      sx={{
        width: "100%",
        border: "0.5px solid",
        borderColor: "border.main",
        borderRadius:"12px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {categories?.map((category, index) => (
          <Box
            key={category?.id}
            onClick={() => handleClick(category?.slug)}
            sx={{
              flex: "1 0 33.33%",
              borderLeft:
                (index + 1) % 3 === 0 || index === categories?.length - 1
                  ? "none"
                  : "1px solid",
              borderTop: index < 3 ? "none" : "1px solid",
              borderColor: "border.main",
              textAlign: "center",
              py: 2,
              bgcolor: filterOptions?.categories.includes(category?.slug)
                ? "button.main"
                : "transparent",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "13px",
                fontWeight: filterOptions?.categories.includes(category?.slug)
                  ? "900"
                  : "500",
                userSelect: "none",
              }}
            >
              {category?.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box> : <Skeleton variant="rectangular" height={106} sx={{width:"100%",borderRadius:"12px"}} />
  );
};

export default Categories;
