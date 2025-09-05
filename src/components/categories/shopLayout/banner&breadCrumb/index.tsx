"use client";

import { fetchCategoryBySlug, fetchSettings } from "@/api/data";
import Breadcrumbs from "@/components/breadcrumbs";
import Banner from "@/components/home/sliderBanners/banner";
import ShopLayoutSekeleton from "@/components/skeletons/shopLayoutSkeleton";
import BreadCrumbModel from "@/models/BreadCrumb";
import { Box, Container, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type DataProps = {
  banner?: string;
  banner_products?: string;
  title?: string;
  slug?: string;
};

const BannerAndBreadCrumb = () => {
  const [data, setData] = useState<DataProps | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const breadCrumbs: BreadCrumbModel[] = [
    {
      title: data?.title || "فروشگاه",
      link: `/${data?.slug || "shop"}`,
      active: true,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pathname === "/shop") {
          const settings = await fetchSettings();
          setData(settings);
        }
        const categoryData = await fetchCategoryBySlug(pathname?.slice(1));
        setData((prevData) => ({ ...prevData, ...categoryData }));
      } catch (err) {
        console.error(
          "Error fetching category data in shop & category layout",
          err
        );
      }
    };

    fetchData();
  }, [pathname]);

  return (
    <Container sx={{ mt: 4, mb: { md: 8.5, xs: 3.5 } }}>
      {!data ? (
        <ShopLayoutSekeleton />
      ) : (
        <>
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Breadcrumbs breadCrumbs={breadCrumbs} />
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              color: "text.main",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: "900", color: "text.main" }}
            >
              {pathname === "/products" ? "فهرست محصولات" : `فهرست ${data?.title} ها`}
            </Typography>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => router.back()}
            >
              <path
                d="M16.6666 10.5H3.33331M3.33331 10.5L8.33331 15.5M3.33331 10.5L8.33331 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box sx={{ width: "100%", px: { md: 4, xs: 0 }, mt: "25px" }}>
            {pathname === "/shop" ? (
              data.banner_products && (
                <Banner banner={data.banner_products} />
              )
            ) : data.banner && (
              <Banner banner={data.banner} />
            )}
          </Box>
        </>
      )}
    </Container>
  );
};

export default BannerAndBreadCrumb;
