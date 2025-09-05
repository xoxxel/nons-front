"use client"
import { Box, Container } from "@mui/material";
import ProductsListMobile from "./productsListMobile";
import ProductsBottomNav from "./productsBottomNav";
import ProductListEmptyState from "../emptyState";
import { useEffect, useState } from "react";
import ProductsModel from "@/models/Products";
import DashboardProductsFilterMenu from "../../productsMenu/filterMenu";

const ProductsMobile = ({items}:{items:ProductsModel}) => {

  const [isSharing,setIsSharing] = useState(false);
  const [brandSeperatos,setBrandSeperatos] = useState<number[]>([]);

    useEffect(() => {
      const newArray: number[] = [];
      let lastBrandId = 0;
      items?.results.forEach((item,index) => {
        if (item?.brand?.id !== lastBrandId) {
          newArray.push(index);
          lastBrandId = item?.brand?.id;
        }
      });
      setBrandSeperatos(newArray);
    }, [items]);

  return (
    <>
      <Container sx={{ display: { md: "none", xs: "block" }, mt: 2, mb: 22 }}>
        <Box>
          {/* serach box */}
          {items?.results?.length > 0 && <Box
            sx={{
              px: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "background.secondary",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                p: "5px",
                gap: 2,
                // maxWidth:"331px",
                mx: "auto",
              }}
            >
              <DashboardProductsFilterMenu />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                  color: "text.main",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2413_2773)">
                    <path
                      d="M10.5 10.5L8.325 8.325M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2413_2773">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="text"
                  placeholder="جستجو"
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "inherit",
                  }}
                />
              </Box>
            </Box>
          </Box>}
          {/* product list */}
          {items?.results?.length > 0 ? <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
            {items?.results?.map((item,index)=> <ProductsListMobile item={item} isWithBrand={brandSeperatos?.includes(index)} isSharing={isSharing} onShare={()=> setIsSharing(false)} /> )}
          </Box> : <ProductListEmptyState />}
        </Box>
      </Container>
      <ProductsBottomNav onShare={()=> setIsSharing(prev => !prev)} />
    </>
  );
};

export default ProductsMobile;
