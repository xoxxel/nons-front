"use client";

import { Box, Typography } from "@mui/material";
import ModeSwicher from "../../../modeSwicher";
import { useEffect, useState } from "react";
import CategoryModel from "@/models/Category";
import DrawerAccordion from "./drawerAccordion";
import { fetchCategories } from "@/api/data";

const Offcanvass = ({
  isDrawerOpen,
  setIsDrawerOpen,
  setIsSellersMenueLoad,
  setIsSellersMenueOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSellersMenueLoad: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSellersMenueOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [categories, setCategories] = useState<CategoryModel[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchingCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchingCategories();
  }, []);

  return (
    <>
      <Box
        className="scrollbarHidden"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            p: "8px 20px",
            bgcolor: "background.main",
            borderRadius: "12px",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          <input
            type="text"
            placeholder="جست و جو"
            className="whitePlaceHolder"
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "inherit",
              width: "100%",
            }}
          />
          <Box sx={{ color: "text.main", height: "24px" }}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0713 21L16.7213 16.65M19.0713 11C19.0713 15.4183 15.4896 19 11.0713 19C6.65301 19 3.07129 15.4183 3.07129 11C3.07129 6.58172 6.65301 3 11.0713 3C15.4896 3 19.0713 6.58172 19.0713 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "text.main",
            fontSize: "13px",
            pr: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsDrawerOpen(false);
            setIsSellersMenueLoad(true);
            setIsSellersMenueOpen(true);
          }}
        >
          پروفایل
        </Typography>
        {/* accordion */}
        <DrawerAccordion
          title="دسته بندی ها"
          data={categories}
          loading={loading}
        />
        <Typography sx={{ color: "text.main", fontSize: "13px", pr: "10px" }}>
          تماس با ما
        </Typography>
        <Box
          sx={{ width: "100%", height: "1px", bgcolor: "background.element" }}
        ></Box>
        <Typography sx={{ color: "text.main", fontSize: "13px", pr: "10px" }}>
          درباره ما
        </Typography>
        <Box
          sx={{ width: "100%", height: "1px", bgcolor: "background.element" }}
        ></Box>
        <Typography sx={{ color: "text.main", fontSize: "13px", pr: "10px" }}>
          وبلاگ
        </Typography>
        <Box
          sx={{ width: "100%", height: "1px", bgcolor: "background.element" }}
        ></Box>
        <Typography sx={{ color: "text.main", fontSize: "13px", pr: "10px" }}>
          پشتیبانی
        </Typography>
        <Box
          sx={{ width: "100%", height: "1px", bgcolor: "background.element" }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              pr: "10px",
              userSelect: "none",
            }}
          >
            حالت
          </Typography>
          <ModeSwicher />
        </Box>
      </Box>
    </>
  );
};

export default Offcanvass;
