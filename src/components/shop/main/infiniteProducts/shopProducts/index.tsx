"use client"
import ProductModel from "@/models/Product";
import ProductsModel from "@/models/Products";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ShopProductList = ({ data }: { data: ProductsModel }) => {
  const [products,setProducts] = useState<ProductModel[]>(data?.results) 
    let lastBrandId :Number|null = null; // Initialize variable to track the last brand ID
  
    return products.map((product, index) => {
      const currentBrandId = product?.brand?.id;
  
      // Check if the current brand ID is different from the last one
      const renderBrandSeparator = currentBrandId !== lastBrandId;
  
      // Update the lastBrandId to the current one
      lastBrandId = currentBrandId;
  
      return (
        <div key={product.id}>
          {renderBrandSeparator && (
            <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 0px",
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
              width={32}
              height={32}
              style={{
                borderRadius: "100%",
              }}
              objectFit="cover"
              alt={product?.brand?.title}
            />
            <Typography sx={{ fontWeight: "600", fontSize: "16px", color: "text.content" }}>
              {product?.brand?.title_en}
            </Typography>
          </div>
          )}
          
          <Box
            sx={{
              my:{md:1.5,xs:1},
            }}
          >
            <Link href={`/products/${product?.slug}`}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "end", md: "center" },
                  justifyContent: "space-between",
                  borderRadius: "8px",
                  p: { xs: "5px 10px", md: "10px" },
                  ":hover": {
                    bgcolor: "hover.main",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "fit-content", md: "50%" },
                  }}
                >
                  <Box>
                    <Typography
                      className="line-clamp-1"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "text.main",
                        mb: product?.category?.title ? "5px" : "0px",
                      }}
                    >
                      {product?.title}
                    </Typography>
                    <Typography
                      className="line-clamp-1"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "icon.main",
                      }}
                    >
                      {product?.brand?.tags?.map((tag)=> tag?.title)?.join(" , ")}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { xs: "fit-content", md: "45%" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                    <Box
                      sx={{
                        mx: "10px",
                        display:{md:"block",xs:"none"},
                      }}
                      className="centeredTD"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "start",
                          color: "icon.main",
                        }}
                      >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{marginTop:"0.5px"}}
                          >
                            <path
                              d="M6.03834 0.484965C6.20914 0.0743188 6.79086 0.0743179 6.96166 0.484964L8.36649 3.86259C8.4385 4.0357 8.6013 4.15399 8.7882 4.16897L12.4346 4.46131C12.878 4.49685 13.0577 5.0501 12.7199 5.33944L9.94175 7.71925C9.79936 7.84123 9.73717 8.03262 9.78068 8.215L10.6295 11.7733C10.7327 12.2059 10.262 12.5478 9.88248 12.316L6.76063 10.4092C6.60062 10.3115 6.39938 10.3115 6.23937 10.4092L3.11752 12.316C2.73797 12.5478 2.26735 12.2059 2.37054 11.7733L3.21932 8.215C3.26283 8.03262 3.20064 7.84123 3.05825 7.71925L0.280054 5.33944C-0.057714 5.0501 0.122048 4.49685 0.565375 4.46131L4.2118 4.16897C4.3987 4.15399 4.5615 4.0357 4.63351 3.86259L6.03834 0.484965Z"
                              fill="currentColor"
                            />
                          </svg>
                        <Typography
                          sx={{
                            color: "icon.main",
                            fontSize: "12px",
                            fontWeight: "600",
                            marginInlineStart: 0.5,
                          }}
                        >
                          {product.score}
                        </Typography>
                      </Box>
                    </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  ></Box>
                  <Box
                    sx={{
                      mx: { xs: "0px", md: "10px" },
                    }}
                    className="centeredTD"
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "text.main",
                      }}
                    >
                      {ThousandSeparator(product?.price)}
                    </Typography>
                  </Box>
                  <Box
                    className="centeredTD"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                      color: "icon.main",
                      width: "48px",
                      height: "38px",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0002 10.8337C10.4604 10.8337 10.8335 10.4606 10.8335 10.0003C10.8335 9.54009 10.4604 9.16699 10.0002 9.16699C9.53993 9.16699 9.16683 9.54009 9.16683 10.0003C9.16683 10.4606 9.53993 10.8337 10.0002 10.8337Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8335 10.8337C16.2937 10.8337 16.6668 10.4606 16.6668 10.0003C16.6668 9.54009 16.2937 9.16699 15.8335 9.16699C15.3733 9.16699 15.0002 9.54009 15.0002 10.0003C15.0002 10.4606 15.3733 10.8337 15.8335 10.8337Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16683 10.8337C4.62707 10.8337 5.00016 10.4606 5.00016 10.0003C5.00016 9.54009 4.62707 9.16699 4.16683 9.16699C3.70659 9.16699 3.3335 9.54009 3.3335 10.0003C3.3335 10.4606 3.70659 10.8337 4.16683 10.8337Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
              </Link>
          </Box>
        </div>
      );
    });
  };
  
  export default ShopProductList;