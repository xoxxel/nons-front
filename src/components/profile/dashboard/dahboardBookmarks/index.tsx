"use client";
import ProductModel from "@/models/Product";
import BookmarksCard from "../../bookmarks/bookmarkCard";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "@/utils/cookie";
import { useEffect, useState } from "react";
import { fetchUserProductBookmarks } from "@/api/data";
import { Box, CircularProgress, Typography } from "@mui/material";
import BookmarkMobilecard from "../../bookmarks/mobileBookmarks/mobileCard";
import Link from "next/link";

const DashboardBookmarks = ({ bookmarkedProducts }: { bookmarkedProducts: ProductModel[] }) => {
  const [bookmarks, setBookmarkes] = useState<ProductModel[]>(bookmarkedProducts)
  
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
        setBookmarkes(bookmarks?.filter((b) => b.id !== productId))
        // getBookmarks()
      })
      .catch((err) => {
        toast.error("مشکل سرور");
        console.log(err);
      });
  };

  return bookmarks?.length > 0 && (
    <Box
      className="dashboard__section"
      id="bookmarks"
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        borderRadius: "12px",
        mt: "15px",
        border: "0.5px solid",
        borderColor: "border.secondary",
      }}
    >
      <Box
        sx={{
          px: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          علامت گذاری شده ها
        </Typography>
        <Link href="/profile/bookmarks">
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            مشاهده بیشتر
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          mt: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {bookmarks?.map((product) => (
            <>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <BookmarksCard
                  product={product}
                  // unbookmark={() => { }}
                  unbookmark={productUnbookmark}
                  key={product?.id}
                />
              </Box>
              <Box
                sx={{ display: { md: "none", xs: "block" }, width: "100%" }}
              >
                <BookmarkMobilecard
                  product={product}
                  // unbookmark={() => { }}
                  unbookmark={productUnbookmark}
                  key={product?.id}
                />
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>

  );
};

export default DashboardBookmarks;
