"use client";
import { Box, Grid, Typography } from "@mui/material";
import BookmarksMenu from "./bookmarksMenu";
import BookmarksCard from "./bookmarkCard";
import ProductModel from "@/models/Product";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { fetchUserProductBookmarks } from "@/api/data";
import { useState } from "react";
import BookmarkListEmptyState from "./emptyState";

const Bookmarks = ({ bookmarks }: { bookmarks: ProductModel[] }) => {
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
    <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
      <Box sx={{ mt: 5 }}>
        {/* big title at the top */}
        <Typography
          sx={{
            color: "text.main",
            fontSize: "29px",
            fontWeight: "600",
            mt: 5,
          }}
        >
          نشان ها
        </Typography>
        {/* braedcrumb is here */}
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
          <Typography sx={{ color: "button.main" }}>Home</Typography>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography sx={{ color: "text.secondary" }}>Bookmark</Typography>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item xs={4}>
            <BookmarksMenu />
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  p: { lg: "30px 25px", md: "15px 12px" },
                  bgcolor: "background.element",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
                  borderRadius: "12px",
                }}
              >
                <Typography
                  sx={{ color: "text.main", fontWeight: "600", my: 3 }}
                >
                  فهرست علامت گذاری شده ها
                </Typography>
                {productBookmarks?.length > 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {productBookmarks?.map((product) => (
                      <BookmarksCard
                        product={product}
                        unbookmark={productUnbookmark}
                      />
                    ))}
                  </Box>
                ) : (
                  <BookmarkListEmptyState />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Bookmarks;
