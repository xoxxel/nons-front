"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ProductCard from "./productCard";
import ProductListEmptyState from "../products/emptyState";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import ProductsModel from "@/models/Products";

type UpdatedProductsType = {
  id: number;
  price: string;
};

const EditProducts = ({ products }: { products: ProductsModel }) => {
  const [updatedProducts, setUpdatedProducts] = useState<UpdatedProductsType[]>(
    []
  );

  const [brandSeperatos, setBrandSeperatos] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const newArray: number[] = [];
    let lastBrandId = 0;
    products?.results.forEach((product, index) => {
      if (product?.brand?.id !== lastBrandId) {
        newArray.push(index);
        lastBrandId = product?.brand?.id;
      }
    });
    setBrandSeperatos(newArray);
    setIsMounted(true);
  }, [products]);

  const handleRemove = (id: number) => {
    const newArray = updatedProducts?.filter((product) => product?.id !== id);
    setUpdatedProducts(newArray);
  };

  const handlePriceChange = (id: number, price: string) => {
    const elementToChange = updatedProducts?.find((item) => item?.id === id);
    if (elementToChange) {
      const indexOfElement = updatedProducts?.indexOf(elementToChange);
      const newArray = updatedProducts;
      newArray[indexOfElement].price = price;
      setUpdatedProducts(newArray);
    }
  };

  const handleSubmit = () => {
    if (updatedProducts?.length > 0) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/products/dashboard/update-products-price/`,
          updatedProducts,
          { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
        )
        .then((res) => toast.success("تغییرات با موفقیت اعمال شد"))
        .catch((err) => toast.error("مشکلی پیش آمده است"));
    }
  };

  return (
    isMounted && (
      <Box>
        <Box
          sx={{
            px: "10px",
            mb: { md: 0, xs: 12 },
            mt:{md:0,xs:2}
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontWeight: "600",
              my: 3,
              fontSize: { md: "16px", xs: "13px" },
              display: { xs: "none", md: "none" },
            }}
          >
            ویرایش گروهی
          </Typography>
          <Box
            sx={{
              width: "100%",
              p: { lg: "30px 25px", md: "15px 12px" },
              bgcolor: { xs: "transparent", md: "background.element" },
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: { xs: "transparent", md: "border.secondary" },
              display: "flex",
              flexDirection: "column",
              // gap: 2,
            }}
          >
            {products?.results?.length > 0 ? (
              products?.results?.map((product, index) => (
                <Box key={product?.id}>
                  {brandSeperatos?.includes(index) && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1.5,
                        mt: index !== 0 ? 3 : 0,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          width: { xs: "20px", md: "28px" },
                          height: { xs: "20px", md: "28px" },
                          overflow: "hidden",
                          borderRadius: "100%",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                          alt="spotify"
                          fill
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: { xs: "text.main", md: "icon.main" },
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "600",
                          marginInlineStart: "10px",
                        }}
                      >
                        {product?.brand?.title}
                      </Typography>
                    </Box>
                  )}
                  <Box
                    sx={{
                      borderTop: "0px solid",
                      borderLeft: "0.px solid",
                      borderRight: "0px solid",
                      borderBottom: "0px solid",
                      borderColor: "border.main",
                      overflow: "hidden",
                    }}
                  >
                    {brandSeperatos?.includes(index) && (
                      <Box
                        sx={{
                          bgcolor: "background.secondary",
                          p: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderTop: "0.5px solid",
                          borderRight: "0.5px solid",
                          borderLeft: "0.5px solid",
                          borderTopColor: "border.main",
                          borderRightColor: "border.main",
                          borderLeftColor: "border.main",
                          borderRadius: "5px 5px 0 0",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            px: 0.5,
                          }}
                        >
                          <Box
                            sx={{
                              color: "icon.main",
                              display: "flex",
                            }}
                          >
                            <svg
                              width="12"
                              height="18"
                              viewBox="0 0 12 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 12L6 17L11 12M1 6L6 1L11 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Box>
                          <Typography
                            sx={{
                              color: "icon.main",
                              fontSize: "13px",
                              fontWeight: "400",
                              mx: 1.5,
                            }}
                          >
                            توضیحات
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              mx: "20px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "icon.main",
                                fontSize: "13px",
                                fontWeight: "400",
                              }}
                            >
                              بروزرسانی قیمت
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "102px",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "icon.main",
                                fontSize: "13px",
                                fontWeight: "400",
                              }}
                            >
                              قیمت
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                    <Box
                      sx={{
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                        borderColor: "border.main",
                        borderRadius: brandSeperatos?.includes(index + 1)
                          ? "0 0 5px 5px"
                          : "0px",
                        overflow: "hidden",
                      }}
                    >
                      <ProductCard
                        key={product?.id * 10000}
                        product={product}
                        onSelect={(productID, price) =>
                          setUpdatedProducts([
                            ...updatedProducts,
                            { id: productID, price },
                          ])
                        }
                        onRemove={(productID) => handleRemove(productID)}
                        onPriceChangeDone={(productID, price) =>
                          handlePriceChange(productID, price)
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <ProductListEmptyState />
            )}
          </Box>
          {products?.results?.length > 0 && (
            <Box
              sx={{
                mt: 5,
                display: "flex",
                alignItems: "center",
                columnGap: "15px",
              }}
            >
              <Box sx={{width:{md:"fit-content",xs:"100%"}}}>
                <Button
                  onClick={handleSubmit}
                  sx={{
                    width: {md:"210px",xs:"100%"},
                    height: "56px",
                    bgcolor: "button.main",
                    borderRadius: "5px",
                    ":hover": {
                      bgcolor: "button.main",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    ذخیره
                  </Typography>
                </Button>
              </Box>
              <Box sx={{width:{md:"fit-content",xs:"100%"}}}>
                <Button
                  sx={{
                    width: {md:"210px",xs:"100%"},
                    height: "56px",
                    bgcolor: "background.element",
                    borderRadius: "5px",
                    ":hover": {
                      bgcolor: "background.element",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.main",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    انصراف
                  </Typography>
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    )
  );
};

export default EditProducts;
