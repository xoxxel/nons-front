"use client";

import ProductModel from "@/models/Product";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card = ({ product }: { product: ProductModel }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={`/products/${product?.slug}`}>
      <Box
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        sx={{
          p: "1px",
          bgcolor: "transparent",
          animation: hover ? `categoryCardBorder 0.2s forwards` : "none",
        }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.main",
            padding: { md: "20px", xs: "8px" },
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { md: 5, xs: 2 },
              height: "fit-content",
            }}
          >
            <Box
              sx={{
                width: { md: "65%", xs: "70%" },
                display: "flex",
                alignItems: { md: "center", xs: "start" },
                justifyContent: "space-between",
                flexDirection: { md: "row", xs: "column" },
                gap: "10px",
                height: "fit-content",
              }}
            >
              {/* logo and title of the product */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { md: 3, xs: 2 },
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Box
                    sx={{ position: "relative", width: "25px", height: "25px", borderRadius: "5px", overflow: "hidden" }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                      fill
                      alt={product?.brand?.title}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { md: "16px", xs: "13px" },
                    }}
                  >
                    {product?.brand?.title_en}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: { md: "600", xs: "900" },
                    fontSize: { md: "16px", xs: "13px" },
                    color: "text.main",
                  }}
                >
                  {product?.title}
                </Typography>
              </Box>
              {/* profile and tags in mobile responsive mode */}
              <Box
                sx={{
                  display: { md: "none", xs: "flex" },
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* profile username and score */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  {/* profile with blue tick */}
                  <Box
                    sx={{
                      width: { md: "48px", xs: "35px" },
                      height: { md: "48px", xs: "35px" },
                      border: "2px solid",
                      borderColor: "grey.600",
                      borderRadius: "50px",
                      boxShadow: "0px 4px 4px 0px #00000026 inset",
                      position: "relative",
                    }}
                  >
                    <Box sx={{
                      borderRadius: "50px", overflow: "hidden", position: "relative", width: "100%", height: "100%"
                    }}>

                      <Image alt="logo" fill src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.shop?.image}`} />
                    </Box>
                    {product?.shop?.is_authenticated && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "-12px",
                          left: "-2px",
                        }}
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.831 3.97833C14.0012 4.38367 14.3277 4.70586 14.7388 4.87408L16.1805 5.46245C16.592 5.63036 16.9189 5.95243 17.0893 6.3578C17.2597 6.76318 17.2597 7.21865 17.0893 7.62403L16.4925 9.04346C16.322 9.44902 16.3218 9.90495 16.4931 10.3103L17.0888 11.7293C17.1733 11.9301 17.2168 12.1453 17.2168 12.3627C17.2168 12.58 17.1734 12.7952 17.089 12.996C17.0046 13.1968 16.8808 13.3793 16.7248 13.533C16.5688 13.6866 16.3836 13.8085 16.1797 13.8916L14.7391 14.4795C14.3277 14.6471 14.0007 14.9689 13.8299 15.3739L13.2328 16.7944C13.0623 17.1998 12.7354 17.5218 12.324 17.6898C11.9126 17.8577 11.4503 17.8577 11.0389 17.6898L9.59819 17.1018C9.18674 16.9343 8.72462 16.9347 8.31342 17.1028L6.87172 17.6903C6.46051 17.8578 5.99863 17.8577 5.58753 17.6899C5.17642 17.5221 4.84972 17.2004 4.67918 16.7955L4.08183 15.3746C3.91172 14.9693 3.5852 14.6471 3.17405 14.4789L1.73235 13.8905C1.32109 13.7227 0.994305 13.4008 0.823819 12.9956C0.653333 12.5905 0.653101 12.1352 0.823176 11.7299L1.41992 10.3105C1.58992 9.90511 1.58958 9.4498 1.41895 9.04467L0.823067 7.62319C0.738582 7.42242 0.695079 7.2072 0.695044 6.98986C0.695009 6.77251 0.738441 6.55728 0.822861 6.35648C0.907281 6.15568 1.03103 5.97323 1.18704 5.81957C1.34306 5.6659 1.52827 5.54403 1.7321 5.46092L3.17277 4.87297C3.58382 4.70552 3.91064 4.38421 4.08149 3.97959L4.67866 2.55913C4.84908 2.15376 5.17597 1.83169 5.58741 1.66378C5.99884 1.49587 6.46113 1.49587 6.87257 1.66378L8.31323 2.25173C8.72468 2.41923 9.1868 2.41888 9.598 2.25078L11.0403 1.66469C11.4517 1.49687 11.9139 1.49691 12.3252 1.66478C12.7366 1.83266 13.0634 2.15464 13.2339 2.55991L13.8312 3.98079L13.831 3.97833Z"
                            fill="#0788F5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.4629 7.36356C12.5825 7.17839 12.6226 6.95398 12.5743 6.7397C12.5261 6.52541 12.3934 6.3388 12.2054 6.22092C12.0175 6.10303 11.7897 6.06353 11.5722 6.11111C11.3547 6.15868 11.1653 6.28943 11.0457 6.47459L7.75793 11.5646L6.25342 9.7117C6.11433 9.54029 5.91182 9.43033 5.69044 9.40603C5.46907 9.38173 5.24696 9.44506 5.07298 9.58211C4.899 9.71915 4.7874 9.91868 4.76274 10.1368C4.73807 10.3549 4.80235 10.5737 4.94145 10.7452L7.18031 13.5025C7.26374 13.6054 7.37091 13.6871 7.49289 13.741C7.61487 13.7949 7.74814 13.8192 7.88161 13.8121C8.01509 13.805 8.14491 13.7666 8.26027 13.7001C8.37564 13.6336 8.47322 13.5409 8.54489 13.4297L12.4629 7.36356Z"
                            fill="white"
                          />
                        </svg>
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      justifyItems: "space-between",
                      height: "100%",
                      gap: { md: 1, xs: 0.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: { md: "16px", xs: "13px" },
                      }}
                    >
                      {`فروشگاه ${product?.shop?.title}`}
                    </Typography>
                    {/* score */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: { md: 0.5, xs: "1px" },
                        borderRadius: "5px",
                        bgcolor: "#FFEB69",
                        width: "fit-content",
                        padding: { md: "4px 4px 2px 4px", xs: "1px 2px 0 2px" },
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_348_4926)">
                          <path
                            d="M7.03834 1.48496C7.20914 1.07432 7.79086 1.07432 7.96166 1.48496L9.36649 4.86259C9.4385 5.0357 9.6013 5.15399 9.7882 5.16897L13.4346 5.46131C13.878 5.49685 14.0577 6.0501 13.7199 6.33944L10.9418 8.71925C10.7994 8.84123 10.7372 9.03262 10.7807 9.215L11.6295 12.7733C11.7327 13.2059 11.262 13.5478 10.8825 13.316L7.76063 11.4092C7.60062 11.3115 7.39938 11.3115 7.23937 11.4092L4.11752 13.316C3.73797 13.5478 3.26735 13.2059 3.37054 12.7733L4.21932 9.215C4.26283 9.03262 4.20064 8.84123 4.05825 8.71925L1.28005 6.33944C0.942286 6.0501 1.12205 5.49685 1.56538 5.46131L5.2118 5.16897C5.3987 5.15399 5.5615 5.0357 5.63351 4.86259L7.03834 1.48496Z"
                            fill="#495156"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_348_4926">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Typography sx={{ color: "#495156", fontSize: "12px" }}>
                        {product?.score?.toFixed(1)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* product tags */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { md: 1.5, xs: 0 },
                    flexWrap: "wrap",
                  }}
                >
                  {/* country name and logo tag */}
                  {product?.region?.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        ml: 1,
                      }}
                    >
                      <Typography sx={{ color: "#A0E1E1", fontSize: "12px" }}>
                        {product?.region?.length === 1
                          ? product?.region?.[0]?.title
                          : "مولتی ریجن"}
                      </Typography>
                      {product?.region?.length === 1 && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.region?.[0]?.icon}`}
                          width={16}
                          height={16}
                          alt={product?.region?.[0]?.title}
                          style={{ borderRadius: "50%" }}
                        />
                      )}
                    </Box>
                  )}
                  {product?.region?.length > 0 && (
                    <Box
                      sx={{
                        width: "2px",
                        height: "30px",
                        background:
                          "linear-gradient(180deg, rgba(160, 225, 225, 0) 20%, #A0E1E1 40%, #A0E1E1 60%, rgba(160, 225, 225, 0) 80%);",
                      }}
                    ></Box>
                  )}
                  {/* account tag */}
                  {product?.brand?.tags.length > 0 &&
                    product?.brand?.tags?.map((tag, index) => (
                      <>
                        <Box
                          key={tag?.id}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            px: 1,
                            py: 0.5,
                          }}
                        >
                          <Typography
                            sx={{ color: "#A0E1E1", fontSize: "12px" }}
                          >
                            {tag?.title}
                          </Typography>
                        </Box>
                        {product?.brand?.tags?.length !== index + 1 && (
                          <Box
                            sx={{
                              width: "2px",
                              height: "30px",
                              background:
                                "linear-gradient(180deg, rgba(160, 225, 225, 0) 20%, #A0E1E1 40%, #A0E1E1 60%, rgba(160, 225, 225, 0) 80%);",
                            }}
                          ></Box>
                        )}
                      </>
                    ))}
                </Box>
              </Box>
              {/* product tags */}
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                {/* country name and logo tag */}
                {product?.region?.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      border: "1px solid #A0E1E1",
                      borderRadius: "5px",
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <Typography sx={{ color: "#A0E1E1", fontSize: "12px" }}>
                      {product?.region?.length === 1
                        ? product?.region?.[0]?.title
                        : "مولتی ریجن"}
                    </Typography>
                    {product?.region?.length === 1 && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.region?.[0]?.icon}`}
                        width={18}
                        height={18}
                        alt={product?.region?.[0]?.title}
                        style={{ borderRadius: "50%" }}
                      />
                    )}
                  </Box>
                )}
                {/* tags */}
                {product?.brand?.tags.length > 0 &&
                  product?.brand?.tags?.map((tag) => (
                    <Box
                      key={tag?.id}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #A0E1E1",
                        borderRadius: "5px",
                        px: 1,
                        py: 0.5,
                      }}
                    >
                      <Typography sx={{ color: "#A0E1E1", fontSize: "12px" }}>
                        {tag?.title}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box
              sx={{
                width: { md: "35%", xs: "30%" },
                display: "flex",
                justifyContent: { md: "space-between", xs: "end" },
                alignItems: "center",
              }}
            >
              {/* profile username and score */}
              <Link href={`/shop/${product?.shop?.title_en}`}>
                <Box
                  sx={{
                    display: { md: "flex", xs: "none" },
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  {/* profile with blue tick */}

                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      border: "2px solid",
                      borderColor: "grey.600",
                      position: "relative",
                      borderRadius: "50px",
                      boxShadow: "0px 4px 4px 0px #00000026 inset",
                    }}
                  >
                    <Box sx={{
                      overflow: "hidden", width: "100%", height: "100%", position: "relative", borderRadius: "50px",
                    }}>
                      <Image alt="logo" fill src={product?.shop?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${product?.shop?.image}` : "/images/boredape.png"} />
                    </Box>
                    {product?.shop?.is_authenticated && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "-12px",
                          left: "-2px",
                        }}
                      >
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.831 3.97833C14.0012 4.38367 14.3277 4.70586 14.7388 4.87408L16.1805 5.46245C16.592 5.63036 16.9189 5.95243 17.0893 6.3578C17.2597 6.76318 17.2597 7.21865 17.0893 7.62403L16.4925 9.04346C16.322 9.44902 16.3218 9.90495 16.4931 10.3103L17.0888 11.7293C17.1733 11.9301 17.2168 12.1453 17.2168 12.3627C17.2168 12.58 17.1734 12.7952 17.089 12.996C17.0046 13.1968 16.8808 13.3793 16.7248 13.533C16.5688 13.6866 16.3836 13.8085 16.1797 13.8916L14.7391 14.4795C14.3277 14.6471 14.0007 14.9689 13.8299 15.3739L13.2328 16.7944C13.0623 17.1998 12.7354 17.5218 12.324 17.6898C11.9126 17.8577 11.4503 17.8577 11.0389 17.6898L9.59819 17.1018C9.18674 16.9343 8.72462 16.9347 8.31342 17.1028L6.87172 17.6903C6.46051 17.8578 5.99863 17.8577 5.58753 17.6899C5.17642 17.5221 4.84972 17.2004 4.67918 16.7955L4.08183 15.3746C3.91172 14.9693 3.5852 14.6471 3.17405 14.4789L1.73235 13.8905C1.32109 13.7227 0.994305 13.4008 0.823819 12.9956C0.653333 12.5905 0.653101 12.1352 0.823176 11.7299L1.41992 10.3105C1.58992 9.90511 1.58958 9.4498 1.41895 9.04467L0.823067 7.62319C0.738582 7.42242 0.695079 7.2072 0.695044 6.98986C0.695009 6.77251 0.738441 6.55728 0.822861 6.35648C0.907281 6.15568 1.03103 5.97323 1.18704 5.81957C1.34306 5.6659 1.52827 5.54403 1.7321 5.46092L3.17277 4.87297C3.58382 4.70552 3.91064 4.38421 4.08149 3.97959L4.67866 2.55913C4.84908 2.15376 5.17597 1.83169 5.58741 1.66378C5.99884 1.49587 6.46113 1.49587 6.87257 1.66378L8.31323 2.25173C8.72468 2.41923 9.1868 2.41888 9.598 2.25078L11.0403 1.66469C11.4517 1.49687 11.9139 1.49691 12.3252 1.66478C12.7366 1.83266 13.0634 2.15464 13.2339 2.55991L13.8312 3.98079L13.831 3.97833Z"
                            fill="#0788F5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.4629 7.36356C12.5825 7.17839 12.6226 6.95398 12.5743 6.7397C12.5261 6.52541 12.3934 6.3388 12.2054 6.22092C12.0175 6.10303 11.7897 6.06353 11.5722 6.11111C11.3547 6.15868 11.1653 6.28943 11.0457 6.47459L7.75793 11.5646L6.25342 9.7117C6.11433 9.54029 5.91182 9.43033 5.69044 9.40603C5.46907 9.38173 5.24696 9.44506 5.07298 9.58211C4.899 9.71915 4.7874 9.91868 4.76274 10.1368C4.73807 10.3549 4.80235 10.5737 4.94145 10.7452L7.18031 13.5025C7.26374 13.6054 7.37091 13.6871 7.49289 13.741C7.61487 13.7949 7.74814 13.8192 7.88161 13.8121C8.01509 13.805 8.14491 13.7666 8.26027 13.7001C8.37564 13.6336 8.47322 13.5409 8.54489 13.4297L12.4629 7.36356Z"
                            fill="white"
                          />
                        </svg>
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      justifyItems: "space-between",
                      height: "100%",
                      gap: 1,
                    }}
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      {`فروشگاه ${product?.shop?.title}`}
                    </Typography>
                    {/* score */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 0.5,
                        borderRadius: "5px",
                        bgcolor: "#FFEB69",
                        width: "fit-content",
                        padding: "4px 4px 2px 4px",
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_348_4926)">
                          <path
                            d="M7.03834 1.48496C7.20914 1.07432 7.79086 1.07432 7.96166 1.48496L9.36649 4.86259C9.4385 5.0357 9.6013 5.15399 9.7882 5.16897L13.4346 5.46131C13.878 5.49685 14.0577 6.0501 13.7199 6.33944L10.9418 8.71925C10.7994 8.84123 10.7372 9.03262 10.7807 9.215L11.6295 12.7733C11.7327 13.2059 11.262 13.5478 10.8825 13.316L7.76063 11.4092C7.60062 11.3115 7.39938 11.3115 7.23937 11.4092L4.11752 13.316C3.73797 13.5478 3.26735 13.2059 3.37054 12.7733L4.21932 9.215C4.26283 9.03262 4.20064 8.84123 4.05825 8.71925L1.28005 6.33944C0.942286 6.0501 1.12205 5.49685 1.56538 5.46131L5.2118 5.16897C5.3987 5.15399 5.5615 5.0357 5.63351 4.86259L7.03834 1.48496Z"
                            fill="#495156"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_348_4926">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Typography sx={{ color: "#495156", fontSize: "12px" }}>
                        {product?.score?.toFixed(1)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
              <Box
                sx={{
                  display: " flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {product?.is_boosted && <Box sx={{ bgcolor: "background.element", px: "5px", borderRadius: "5px 5px 1px 5px" }}>
                    <svg
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.500937 9.5V0.772727H4.26798C4.91571 0.772727 5.48247 0.900568 5.96827 1.15625C6.45406 1.41193 6.8319 1.77131 7.10179 2.23438C7.37168 2.69744 7.50662 3.23864 7.50662 3.85795C7.50662 4.48295 7.36741 5.02415 7.08901 5.48153C6.81344 5.93892 6.42565 6.29119 5.92565 6.53835C5.42849 6.78551 4.84753 6.90909 4.18276 6.90909H1.93276V5.06818H3.70548C3.98389 5.06818 4.22111 5.01989 4.41713 4.9233C4.61599 4.82386 4.76798 4.68324 4.8731 4.50142C4.98105 4.3196 5.03503 4.10511 5.03503 3.85795C5.03503 3.60795 4.98105 3.39489 4.8731 3.21875C4.76798 3.03977 4.61599 2.90341 4.41713 2.80966C4.22111 2.71307 3.98389 2.66477 3.70548 2.66477H2.87026V9.5H0.500937ZM9.37003 9.5V2.95455H11.6541V4.19886H11.7223C11.8416 3.73864 12.0305 3.40199 12.2891 3.18892C12.5504 2.97585 12.8558 2.86932 13.2053 2.86932C13.3075 2.86932 13.4084 2.87784 13.5078 2.89489C13.6101 2.90909 13.7081 2.9304 13.8018 2.95881V4.96591C13.6854 4.92614 13.5419 4.89631 13.3714 4.87642C13.201 4.85653 13.0547 4.84659 12.9325 4.84659C12.7024 4.84659 12.495 4.89915 12.3104 5.00426C12.1286 5.10653 11.9851 5.25142 11.88 5.43892C11.7749 5.62358 11.7223 5.84091 11.7223 6.09091V9.5H9.37003ZM18.3116 9.61932C17.6013 9.61932 16.9934 9.47869 16.4877 9.19744C15.982 8.91335 15.5942 8.51847 15.3243 8.01278C15.0545 7.50426 14.9195 6.91477 14.9195 6.24432C14.9195 5.57386 15.0545 4.9858 15.3243 4.48011C15.5942 3.97159 15.982 3.5767 16.4877 3.29545C16.9934 3.01136 17.6013 2.86932 18.3116 2.86932C19.0218 2.86932 19.6297 3.01136 20.1354 3.29545C20.6411 3.5767 21.0289 3.97159 21.2988 4.48011C21.5687 4.9858 21.7036 5.57386 21.7036 6.24432C21.7036 6.91477 21.5687 7.50426 21.2988 8.01278C21.0289 8.51847 20.6411 8.91335 20.1354 9.19744C19.6297 9.47869 19.0218 9.61932 18.3116 9.61932ZM18.3286 7.88068C18.5275 7.88068 18.6993 7.81392 18.8442 7.6804C18.9891 7.54687 19.1013 7.35653 19.1809 7.10938C19.2604 6.86222 19.3002 6.56818 19.3002 6.22727C19.3002 5.88352 19.2604 5.58949 19.1809 5.34517C19.1013 5.09801 18.9891 4.90767 18.8442 4.77415C18.6993 4.64062 18.5275 4.57386 18.3286 4.57386C18.1184 4.57386 17.938 4.64062 17.7874 4.77415C17.6368 4.90767 17.5218 5.09801 17.4422 5.34517C17.3627 5.58949 17.3229 5.88352 17.3229 6.22727C17.3229 6.56818 17.3627 6.86222 17.4422 7.10938C17.5218 7.35653 17.6368 7.54687 17.7874 7.6804C17.938 7.81392 18.1184 7.88068 18.3286 7.88068Z"
                        fill="url(#paint0_linear_6071_1114)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6071_1114"
                          x1="7.16667"
                          y1="2.11157"
                          x2="22.0879"
                          y2="13.3821"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#D01CFD" />
                          <stop offset="1" stop-color="#2DA7FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>}
                  {product?.auto_send && (
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.167 2.29163L4.66699 11.25H10.0837L8.83366 17.7083L16.3337 8.74996H10.917L12.167 2.29163Z"
                        stroke="#9FE870"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Box>
                <Typography
                  sx={{
                    color: "text.main",
                    fontWeight: "900",
                    fontSize: { md: "16px", xs: "13px" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {`IRT ${ThousandSeparator(product?.price)}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link >
  );
};

export default Card;
