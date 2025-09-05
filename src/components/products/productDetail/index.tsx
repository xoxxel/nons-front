"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ViolationReport from "./violationReport";
import ProductGallery from "./productGallery";
import ProductComments from "./productComments";
import ProductInformation from "./productInformation";
import Breadcrumbs from "@/components/breadcrumbs";
import { usePathname, useRouter } from "next/navigation";
import StartChatModal from "./startChatModal";
import { useState } from "react";
import ProductModel from "@/models/Product";
import ShareModal from "./shareModal";
import BreadCrumbModel from "@/models/BreadCrumb";
import axios from "axios";
import { toast } from "react-hot-toast";
import SaveInLocalStorage from "@/utils/saveInLocalStorage";
import Cookies from "@/utils/cookie";
import { BeatLoader } from "react-spinners";
import ThousandSeparator from "@/utils/thousandSeparator";

const ProductDetail = ({ product }: { product: ProductModel }) => {
  const toMd = useMediaQuery("(min-width:900px)");
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [openShare, setOpenShare] = useState<boolean>(false);
  const pathName = usePathname();
  const [loading, setLoading] = useState(false);

  const submitOrder = () => {
    if (product?.quantity) {
      setLoading(true);
      const access = Cookies.get("access");
      if (!access) {
        router.push("/login");
        return toast.error("ابتدا وارد شوید");
      }
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/cart/submit-order/`,
          {
            quantity: 1,
            product: product?.id,
            payment: "bank",
          },
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        )
        .then(() => router.push("/checkout"))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  };

  // save the attributes of this product in local storage
  SaveInLocalStorage(
    "products-history",
    JSON.stringify({
      id: product?.id,
      title: product?.title,
      slug: product?.slug,
      brand: {
        title: product?.brand?.title,
        icon: product?.brand?.icon,
        tags: product?.brand?.tags,
      },
      shop: {
        title: product?.shop?.title,
        image: product?.shop?.image,
      },
    }),
    5
  );

  const breadCrumbs: BreadCrumbModel[] = [
    {
      title: product?.category?.title,
      link: `/${product?.category?.slug}`,
      active: false,
    },
    {
      title: product?.title,
      link: `/shop/${product?.slug}`,
      active: true,
    },
  ];

  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    product?.is_bookmarked
  );
  const handleBookmark = () => {
    if (isBookmarked) {
      axios
        .delete(
          `${process.env.NEXT_PUBLIC_API}/products/product-unbookmark/${product?.id}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("access")}`,
            },
          }
        )
        .then((res) => {
          toast.success("ان بوکمارک شد");
          setIsBookmarked(false);
        })
        .catch((err) => {
          toast.error("مشکل سرور");
          console.log(err);
        });
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/products/product-bookmark/`,
          { product: product?.id },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("access")}`,
            },
          }
        )
        .then((res) => {
          toast.success("بوکمارک شد");
          setIsBookmarked(true);
        })
        .catch((err) => {
          toast.error("مشکل سرور");
          console.log(err);
        });
    }
  };

  const handleCloseShare = () => {
    setOpenShare(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const averageScore = () => {
    const totalScore = product?.product_comments?.reduce(
      (acc, comment) => acc + comment?.score,
      0
    );
    const average = totalScore / product?.product_comments?.length;
    return average;
  };

  return (
    <Box sx={{ mt: 2, mb: { md: "0px", xs: 14 } }}>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          zIndex: 999,
          pt: "12px",
          pb: "6px",
          bgcolor: "background.element",
          bottom: "0px",
          display: { md: "none", xs: "block" },
        }}
      >
        <Container>
          <Box
            sx={{
              width: "100%",
              height: "56px",
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              onClick={submitOrder}
              sx={{
                width: "40%",
                height: "52px",
                py: 1.5,
                bgcolor: "button.main",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "600px",
                borderRadius: "7px",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                ":hover": {
                  bgcolor: "button.main",
                },
              }}
            >
              {loading ? (
                <BeatLoader size={10} color="white" />
              ) : product?.quantity ? (
                "پرداخت"
              ) : (
                "ناموجود"
              )}
            </Button>
            <Typography
              sx={{ color: "text.main", fontSize: "18px", fontWeight: 600 }}
            >{`IRT ${ThousandSeparator(product?.price)}`}</Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mr: "5px",
            ml: { md: 2, xs: 0 },
            py: { md: 2, xs: 0 },
            mt: { md: "30px", xs: "0px" },
          }}
        >
          {toMd ? (
            <Breadcrumbs breadCrumbs={breadCrumbs} />
          ) : (
            <Box
              onClick={() => router.back()}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                order: 1,
              }}
            >
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 7H1.5M1.5 7L7.5 13M1.5 7L7.5 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{ color: "icon.main", position: "relative", display: "flex" }}
            >
              <svg
                width="23"
                height="21"
                onClick={handleBookmark}
                viewBox="0 0 23 21"
                fill={isBookmarked ? "var(--mui-palette-icon-main)" : "none"}
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M5.02563 7C5.02563 5.59987 5.02563 4.8998 5.31908 4.36502C5.5772 3.89462 5.98907 3.51217 6.49566 3.27248C7.07158 3 7.82549 3 9.33333 3H13.282C14.7899 3 15.5438 3 16.1197 3.27248C16.6263 3.51217 17.0382 3.89462 17.2963 4.36502C17.5897 4.8998 17.5897 5.59987 17.5897 7V18L11.3077 14.6667L5.02563 18V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Box
              sx={{ color: "icon.main", position: "relative", display: "flex" }}
            >
              <svg
                width="22"
                height="21"
                onClick={() => setOpenShare(true)}
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M7.70905 11.7584L13.8385 15.0751M13.8296 5.92508L7.70905 9.24175M18.8462 4.66675C18.8462 6.04746 17.6408 7.16675 16.1539 7.16675C14.667 7.16675 13.4616 6.04746 13.4616 4.66675C13.4616 3.28604 14.667 2.16675 16.1539 2.16675C17.6408 2.16675 18.8462 3.28604 18.8462 4.66675ZM8.077 10.5001C8.077 11.8808 6.87161 13.0001 5.38469 13.0001C3.89777 13.0001 2.69238 11.8808 2.69238 10.5001C2.69238 9.11937 3.89777 8.00008 5.38469 8.00008C6.87161 8.00008 8.077 9.11937 8.077 10.5001ZM18.8462 16.3334C18.8462 17.7141 17.6408 18.8334 16.1539 18.8334C14.667 18.8334 13.4616 17.7141 13.4616 16.3334C13.4616 14.9527 14.667 13.8334 16.1539 13.8334C17.6408 13.8334 18.8462 14.9527 18.8462 16.3334Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Container>
      <ProductInformation handleOpen={handleOpen} product={product} />
      <ProductComments
        comments={product?.product_comments}
        averageScore={averageScore()}
      />
      {product?.gallery?.length > 0 && (
        <ProductGallery
          gallery={product?.gallery}
          productName={product?.title}
        />
      )}
      {/* <RelatedProducts products={product.related_products} />
      <SuggestedProducts /> */}
      <ViolationReport />
      <StartChatModal
        productId={product?.id}
        shop={product?.shop}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <ShareModal
        handleClose={handleCloseShare}
        open={openShare}
        link={process.env.NEXT_PUBLIC_URL + pathName}
      />
    </Box>
  );
};

export default ProductDetail;
