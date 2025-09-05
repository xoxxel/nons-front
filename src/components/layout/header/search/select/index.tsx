"use client";

import CategoryModel from "@/models/Category";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const Select = ({
  categories,
  dropDownOpenValueSlug,
  setDropDownOpenValueSlug,
}: {
  categories: CategoryModel[];
  dropDownOpenValueSlug:string | undefined,
  setDropDownOpenValueSlug: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dropDownOpenValue, setDropDownOpenValue] =
  useState("همه دسته بندی ها");

  const handleDropdownItemClick = (e: React.MouseEvent<HTMLDivElement>,category?:CategoryModel) => {
    setDropDownOpen(false);
    setDropDownOpenValueSlug(category?.slug)
    setDropDownOpenValue(
      (e.target as HTMLDivElement).textContent || "همه دسته بندی ها"
    );
  };

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          onClick={() => setDropDownOpen(!dropDownOpen)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            cursor: "pointer",
            minWidth: "150px",
            justifyContent: "space-between",
            color: "text.secondary",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "text.secondary",
              display: "flex",
            }}
          >
            {dropDownOpenValue}
          </Typography>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        {dropDownOpen && (
          <Box
            className="headerSelectBox"
            sx={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: "0",
              width: "100%",
              borderRadius: "0 0 12px 12px",
              px: "18px",
              py: 1,
              zIndex: "2",
            }}
          >
            <Typography
              onClick={handleDropdownItemClick}
              sx={{ fontSize: "14px", py: 1, cursor: "pointer" }}
            >
              همه دسته بندی ها
            </Typography>
            {categories?.map((category) => (
              <Typography
                onClick={(e:any)=>handleDropdownItemClick(e,category)}
                sx={{ fontSize: "14px", py: 1, cursor: "pointer" }}
              >
                {category?.title}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
      {dropDownOpen && (
        <Box
          onClick={() => setDropDownOpen(false)}
          sx={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            right: 0,
            bgcolor: "transparent",
          }}
        ></Box>
      )}
    </>
  );
};

export default Select;
