"use client";
import { Box, Container, Typography } from "@mui/material";
import BookmarkMobilecard from "./mobileCard";
import Image from "next/image";
import ProductModel from "@/models/Product";
import MobileLastSeenProducts from "./lastseenProducts";
import { useState } from "react";
import { fetchUserProductBookmarks } from "@/api/data";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import BookmarkListEmptyState from "../emptyState";

const MobileBookmarks = ({ bookmarks }: { bookmarks: ProductModel[] }) => {
  const [productBookmarks, setProductBookmarks] =
    useState<ProductModel[]>(bookmarks);

  const fetchBookmarks = () => {
    fetchUserProductBookmarks()
      .then((res) => setProductBookmarks(res?.results))
      .catch((err) => console.error("Error fetching bookmarks", err));
  };

  const productUnbookmark = ({ productId }: { productId: number }) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API}/products/product-unbookmark/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        }
      )
      .then((res) => {
        fetchBookmarks();
      })
      .catch((err) => {
        toast.error("مشکل سرور");
        console.log(err);
      });
  };

  return (
    <Container sx={{ display: { md: "none", xs: "block" },mb: 12 }}>
      {/* last seen products card */}
      <MobileLastSeenProducts />
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "13px",
          fontWeight: "500",
          my: 2.5,
        }}
      >
        فهرست نشانه گذاری شده ها
      </Typography>
      {productBookmarks?.length > 0 ? (
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {productBookmarks?.map((product) => (
            <BookmarkMobilecard
              product={product}
              unbookmark={productUnbookmark}
            />
          ))}
        </Box>
      ) : (
        <BookmarkListEmptyState />
      )}
    </Container>
  );
};

export default MobileBookmarks;
