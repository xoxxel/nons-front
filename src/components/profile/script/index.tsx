"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Slider from "./swiper";
import ScriptSidebar from "./sidebar";
import QuickAccess from "./quickAccess";
import { useState } from "react";
import Reply from "./reply";

const ProfileScript = () => {
  const [status, setStatus] = useState<string>("usual");
  return (
    <>
      <Box>
        <QuickAccess />
        <Box
          sx={{
            mt: { xs: 0, md: 5 },
            mb: { xs: "150px", md: 0 },
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "29px",
              fontWeight: "600",
              mt: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            اسکریت
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              mt: 1,
              mb: 5,
            }}
          >
            <Link href="/">
              <Typography sx={{ color: "button.main", fontWeight: "600" }}>
                Home
              </Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Link href="/profile">
              <Typography sx={{ color: "text.secondary", fontWeight: "500" }}>
                Profile
              </Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary", fontWeight: "500" }}>
              Script
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid item lg={8} md={7.5} xs={12}>
              {status == "usual" ? (
                <>
                  <Box
                    sx={{
                      bgcolor: "background.element",
                      borderRadius: { xs: "0px", md: "12px" },
                      padding: "15px",
                      mb: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        columnGap: "12px",
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "35px", md: "48px" },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "35px", md: "48px" },
                            height: { xs: "35px", md: "48px" },
                            borderRadius: "100%",
                            position: "relative",
                            overflow: "hidden",
                            background: "#D4B2AF",
                          }}
                        >
                          <Image
                            src="/images/avatar.png"
                            alt="avatar"
                            fill
                            objectFit="cover"
                          />
                        </Box>
                        <Box
                          sx={{
                            pt: "10px",
                            width: "100%",
                            height: {
                              xs: "calc(100% - 35px)",
                              md: "calc(100% - 48px)",
                            },
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "1.5px",
                              height: "100%",
                              background: "#9fe870",
                            }}
                          ></Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: {
                            xs: "calc(100% - 35px)",
                            md: "calc(100% - 48px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            pt: "18px",
                            pr: { xs: "0px", md: "7px" },
                            pl: { xs: "0px", md: "15px" },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.main",
                              fontSize: { xs: "14px", md: "16px" },
                              fontWeight: "500",
                              mb: "10px",
                            }}
                          >
                            abbasjadidi
                          </Typography>
                          <input
                            type="text"
                            placeholder="اینجا بنویسید..."
                            style={{
                              width: "100%",
                              color: "#344054",
                              fontSize: "14px",
                              fontWeight: "500",
                              background: "transparent",
                              border: "0",
                              outline: "0",
                            }}
                          />
                          <Box
                            sx={{
                              mt: "25px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "20px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="20"
                                  height="22"
                                  viewBox="0 0 20 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.5 6.27734L9.99997 10.9996M9.99997 10.9996L1.49997 6.27734M9.99997 10.9996L10 20.4996M19 15.0582V6.94104C19 6.5984 19 6.42708 18.9495 6.27428C18.9049 6.1391 18.8318 6.01502 18.7354 5.91033C18.6263 5.79199 18.4766 5.70879 18.177 5.54239L10.777 1.43128C10.4934 1.27372 10.3516 1.19494 10.2015 1.16406C10.0685 1.13672 9.93146 1.13672 9.79855 1.16406C9.64838 1.19494 9.50658 1.27372 9.22297 1.43128L1.82297 5.54239C1.52345 5.70879 1.37369 5.792 1.26463 5.91033C1.16816 6.01502 1.09515 6.1391 1.05048 6.27428C1 6.42708 1 6.5984 1 6.94104V15.0582C1 15.4008 1 15.5721 1.05048 15.7249C1.09515 15.8601 1.16816 15.9842 1.26463 16.0889C1.37369 16.2072 1.52345 16.2904 1.82297 16.4568L9.22297 20.5679C9.50658 20.7255 9.64838 20.8042 9.79855 20.8351C9.93146 20.8625 10.0685 20.8625 10.2015 20.8351C10.3516 20.8042 10.4934 20.7255 10.777 20.5679L18.177 16.4568C18.4766 16.2904 18.6263 16.2072 18.7354 16.0889C18.8318 15.9842 18.9049 15.8601 18.9495 15.7249C19 15.5721 19 15.4008 19 15.0582Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="22"
                                  height="20"
                                  viewBox="0 0 22 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.27209 18.7279L9.86863 12.1314C10.2646 11.7354 10.4627 11.5373 10.691 11.4632C10.8918 11.3979 11.1082 11.3979 11.309 11.4632C11.5373 11.5373 11.7354 11.7354 12.1314 12.1314L18.6839 18.6839M13 13L15.8686 10.1314C16.2646 9.73535 16.4627 9.53735 16.691 9.46316C16.8918 9.3979 17.1082 9.3979 17.309 9.46316C17.5373 9.53735 17.7354 9.73535 18.1314 10.1314L21 13M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM5.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
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
                                    d="M7.5 6.96533C7.5 6.48805 7.5 6.24941 7.59974 6.11618C7.68666 6.00007 7.81971 5.92744 7.96438 5.9171C8.13038 5.90525 8.33112 6.03429 8.73261 6.29239L13.4532 9.32706C13.8016 9.55102 13.9758 9.663 14.0359 9.80539C14.0885 9.9298 14.0885 10.0702 14.0359 10.1946C13.9758 10.337 13.8016 10.449 13.4532 10.6729L8.73261 13.7076C8.33112 13.9657 8.13038 14.0948 7.96438 14.0829C7.81971 14.0726 7.68666 13.9999 7.59974 13.8838C7.5 13.7506 7.5 13.512 7.5 13.0347V6.96533Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="19"
                                  height="20"
                                  viewBox="0 0 19 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.49999 1L4.49999 19M15.5 1L12.5 19M18.5 6H1.5M17.5 14H0.5"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                            </Box>
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="22"
                                  height="20"
                                  viewBox="0 0 22 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.95686 10.7344C2.30471 10.4317 2.30471 9.56765 2.95686 9.2649L17.7898 2.37913C18.3781 2.10602 19.0703 2.50321 19.0703 3.1139L15.8592 9.27347C15.62 9.73215 15.62 10.2672 15.8592 10.7259L19.0703 16.8854C19.0703 17.4961 18.3781 17.8933 17.7898 17.6202L2.95686 10.7344Z"
                                    stroke="#344054"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M15.4805 10H8.7497"
                                    stroke="#344054"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.element",
                      borderRadius: { xs: "0px", md: "12px" },
                      padding: "15px",
                      mb: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "40px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          columnGap: "12px",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "35px", md: "48px" },
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: "35px", md: "48px" },
                              height: { xs: "35px", md: "48px" },
                              borderRadius: "100%",
                              position: "relative",
                              overflow: "hidden",
                              background: "#D4B2AF",
                            }}
                          >
                            <Image
                              src="/images/avatar2.jpg"
                              alt="avatar"
                              fill
                              objectFit="cover"
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: {
                              xs: "calc(100% - 35px)",
                              md: "calc(100% - 48px)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: "40px",
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "text.main",
                                  fontSize: { xs: "13px", md: "14px" },
                                  fontWeight: "500",
                                }}
                              >
                                aghabazi
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "13px",
                                  fontWeight: "400",
                                  mx: 1,
                                }}
                              >
                                سه ساعت پیش
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                width="18"
                                height="4"
                                viewBox="0 0 18 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mb: "25px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#344054",
                                fontSize: { xs: "13px", md: "16px" },
                                fontWeight: "500",
                              }}
                            >
                              “ آقا کسی نیست بیاد یه کالاف بزنیم “
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              columnGap: "20px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 15.5V7.25M0.5 8.75V14C0.5 14.8284 1.17157 15.5 2 15.5H12.0697C13.1802 15.5 14.1247 14.6898 14.2935 13.5921L15.1012 8.34213C15.3109 6.97917 14.2564 5.75 12.8774 5.75H10.25C9.83579 5.75 9.5 5.41421 9.5 5V2.34938C9.5 1.328 8.672 0.5 7.65062 0.5C7.407 0.5 7.18623 0.643471 7.08729 0.866092L4.44795 6.8046C4.32758 7.07545 4.05899 7.25 3.76259 7.25H2C1.17157 7.25 0.5 7.92157 0.5 8.75Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                34
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 5.375H8M4.25 8H10.25M4.25 12.5V14.2516C4.25 14.6513 4.25 14.8511 4.33192 14.9537C4.40317 15.043 4.5112 15.0949 4.6254 15.0948C4.75672 15.0946 4.91275 14.9698 5.22482 14.7201L7.01391 13.2889C7.37939 12.9965 7.56213 12.8503 7.76561 12.7463C7.94615 12.6541 8.13832 12.5867 8.33691 12.5459C8.56075 12.5 8.79477 12.5 9.26281 12.5H11.15C12.4101 12.5 13.0402 12.5 13.5215 12.2548C13.9448 12.039 14.289 11.6948 14.5048 11.2715C14.75 10.7902 14.75 10.1601 14.75 8.9V4.85C14.75 3.58988 14.75 2.95982 14.5048 2.47852C14.289 2.05516 13.9448 1.71095 13.5215 1.49524C13.0402 1.25 12.4101 1.25 11.15 1.25H4.85C3.58988 1.25 2.95982 1.25 2.47852 1.49524C2.05516 1.71095 1.71095 2.05516 1.49524 2.47852C1.25 2.95982 1.25 3.58988 1.25 4.85V9.5C1.25 10.1975 1.25 10.5462 1.32667 10.8323C1.53472 11.6088 2.1412 12.2153 2.91766 12.4233C3.20378 12.5 3.55252 12.5 4.25 12.5Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.56058 7.05836C1.11407 6.88472 0.890814 6.7979 0.825635 6.67279C0.769131 6.56434 0.769055 6.43516 0.825431 6.32664C0.890463 6.20146 1.11362 6.11438 1.55992 5.94021L14.2257 0.997455C14.6286 0.840232 14.8301 0.76162 14.9588 0.804622C15.0706 0.841966 15.1583 0.929693 15.1956 1.04148C15.2386 1.1702 15.16 1.37164 15.0028 1.77453L10.06 14.4403C9.88588 14.8866 9.7988 15.1098 9.67362 15.1748C9.5651 15.2312 9.43591 15.2311 9.32747 15.1746C9.20236 15.1094 9.11554 14.8862 8.9419 14.4397L6.97082 9.37118C6.93557 9.28054 6.91794 9.23522 6.89072 9.19706C6.8666 9.16324 6.83702 9.13366 6.8032 9.10953C6.76504 9.08231 6.71972 9.06469 6.62908 9.02944L1.56058 7.05836Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          columnGap: "12px",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "35px", md: "48px" },
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: "35px", md: "48px" },
                              height: { xs: "35px", md: "48px" },
                              borderRadius: "100%",
                              position: "relative",
                              overflow: "hidden",
                              background: "#D4B2AF",
                            }}
                          >
                            <Image
                              src="/images/avatar2.jpg"
                              alt="avatar"
                              fill
                              objectFit="cover"
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: {
                              xs: "calc(100% - 35px)",
                              md: "calc(100% - 48px)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: "40px",
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "text.main",
                                  fontSize: { xs: "13px", md: "14px" },
                                  fontWeight: "500",
                                }}
                              >
                                aghabazi
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "13px",
                                  fontWeight: "400",
                                  mx: 1,
                                }}
                              >
                                سه ساعت پیش
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                width="18"
                                height="4"
                                viewBox="0 0 18 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mb: "15px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#344054",
                                fontSize: { xs: "13px", md: "16px" },
                                fontWeight: "500",
                              }}
                            >
                              گیم پلی و ببین و از بازی لذت ببر
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              height: "350px",
                              borderRadius: "15px",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src="/images/game.jpg"
                              alt="game"
                              fill
                              objectFit="cover"
                            />
                          </Box>
                          <Box
                            sx={{
                              mt: "12px",
                              display: "flex",
                              alignItems: "center",
                              columnGap: "20px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 15.5V7.25M0.5 8.75V14C0.5 14.8284 1.17157 15.5 2 15.5H12.0697C13.1802 15.5 14.1247 14.6898 14.2935 13.5921L15.1012 8.34213C15.3109 6.97917 14.2564 5.75 12.8774 5.75H10.25C9.83579 5.75 9.5 5.41421 9.5 5V2.34938C9.5 1.328 8.672 0.5 7.65062 0.5C7.407 0.5 7.18623 0.643471 7.08729 0.866092L4.44795 6.8046C4.32758 7.07545 4.05899 7.25 3.76259 7.25H2C1.17157 7.25 0.5 7.92157 0.5 8.75Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                34
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 5.375H8M4.25 8H10.25M4.25 12.5V14.2516C4.25 14.6513 4.25 14.8511 4.33192 14.9537C4.40317 15.043 4.5112 15.0949 4.6254 15.0948C4.75672 15.0946 4.91275 14.9698 5.22482 14.7201L7.01391 13.2889C7.37939 12.9965 7.56213 12.8503 7.76561 12.7463C7.94615 12.6541 8.13832 12.5867 8.33691 12.5459C8.56075 12.5 8.79477 12.5 9.26281 12.5H11.15C12.4101 12.5 13.0402 12.5 13.5215 12.2548C13.9448 12.039 14.289 11.6948 14.5048 11.2715C14.75 10.7902 14.75 10.1601 14.75 8.9V4.85C14.75 3.58988 14.75 2.95982 14.5048 2.47852C14.289 2.05516 13.9448 1.71095 13.5215 1.49524C13.0402 1.25 12.4101 1.25 11.15 1.25H4.85C3.58988 1.25 2.95982 1.25 2.47852 1.49524C2.05516 1.71095 1.71095 2.05516 1.49524 2.47852C1.25 2.95982 1.25 3.58988 1.25 4.85V9.5C1.25 10.1975 1.25 10.5462 1.32667 10.8323C1.53472 11.6088 2.1412 12.2153 2.91766 12.4233C3.20378 12.5 3.55252 12.5 4.25 12.5Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.56058 7.05836C1.11407 6.88472 0.890814 6.7979 0.825635 6.67279C0.769131 6.56434 0.769055 6.43516 0.825431 6.32664C0.890463 6.20146 1.11362 6.11438 1.55992 5.94021L14.2257 0.997455C14.6286 0.840232 14.8301 0.76162 14.9588 0.804622C15.0706 0.841966 15.1583 0.929693 15.1956 1.04148C15.2386 1.1702 15.16 1.37164 15.0028 1.77453L10.06 14.4403C9.88588 14.8866 9.7988 15.1098 9.67362 15.1748C9.5651 15.2312 9.43591 15.2311 9.32747 15.1746C9.20236 15.1094 9.11554 14.8862 8.9419 14.4397L6.97082 9.37118C6.93557 9.28054 6.91794 9.23522 6.89072 9.19706C6.8666 9.16324 6.83702 9.13366 6.8032 9.10953C6.76504 9.08231 6.71972 9.06469 6.62908 9.02944L1.56058 7.05836Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          columnGap: "12px",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "35px", md: "48px" },
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: "35px", md: "48px" },
                              height: { xs: "35px", md: "48px" },
                              borderRadius: "100%",
                              position: "relative",
                              overflow: "hidden",
                              background: "#D4B2AF",
                            }}
                          >
                            <Image
                              src="/images/avatar2.jpg"
                              alt="avatar"
                              fill
                              objectFit="cover"
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: {
                              xs: "calc(100% - 35px)",
                              md: "calc(100% - 48px)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: "40px",
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "text.main",
                                  fontSize: { xs: "13px", md: "14px" },
                                  fontWeight: "500",
                                }}
                              >
                                aghabazi
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "13px",
                                  fontWeight: "400",
                                  mx: 1,
                                }}
                              >
                                سه ساعت پیش
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                width="18"
                                height="4"
                                viewBox="0 0 18 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mb: "15px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#344054",
                                fontSize: { xs: "13px", md: "16px" },
                                fontWeight: "500",
                              }}
                            >
                              گیم پلی و ببین و از بازی لذت ببر
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              background: "#F5F5F5",
                              borderRadius: "5px",
                              position: "relative",
                              py: " 16.5px",
                              px: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                columnGap: { xs: "10px", md: "20px" },
                              }}
                            >
                              <Box
                                sx={{
                                  width: { xs: "45px", md: "65px" },
                                  height: { xs: "45px", md: "65px" },
                                  borderRadius: "8px",
                                  background:
                                    "linear-gradient(to bottom,#2AC9FA,#1F65EB)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  width="19"
                                  height="16"
                                  viewBox="0 0 19 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.9468 1.65403C12.2494 1.12586 12.0685 0.451264 11.5428 0.147274C11.0171 -0.156717 10.3456 0.0250158 10.043 0.553185L9.51525 1.47442L8.98749 0.553185C8.68491 0.0250158 8.01344 -0.156717 7.48772 0.147274C6.962 0.451264 6.78111 1.12586 7.08369 1.65403L8.24802 3.68643L4.56524 10.1149H1.59831C0.991728 10.1149 0.5 10.6089 0.5 11.2183C0.5 11.8277 0.991728 12.3217 1.59831 12.3217H11.9324C12.023 12.0825 12.1184 11.6721 12.0169 11.2949C11.8644 10.7279 11.3 10.1149 10.3542 10.1149H7.0997L11.9468 1.65403Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.13641 13.5419C4.94902 13.3328 4.52917 12.9987 4.16102 12.8888C3.59967 12.7211 3.17413 12.8263 2.95942 12.9179L2.14132 14.346C1.83874 14.8741 2.01963 15.5487 2.54535 15.8527C3.07107 16.1567 3.74254 15.975 4.04512 15.4468L5.13641 13.5419Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.7295 12.3217H17.4017C18.0083 12.3217 18.5 11.8277 18.5 11.2183C18.5 10.6089 18.0083 10.1149 17.4017 10.1149H14.4653L11.1575 4.34108C10.9118 4.57567 10.4407 5.17498 10.3695 5.85446C10.278 6.728 10.4152 7.46361 10.8271 8.1839C12.2118 10.6056 13.5987 13.0262 14.9854 15.4468C15.288 15.975 15.9594 16.1567 16.4852 15.8527C17.0109 15.5487 17.1918 14.8741 16.8892 14.346L15.7295 12.3217Z"
                                    fill="white"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  width: {
                                    xs: "calc(100% - 45px)",
                                    md: "calc(100% - 65px)",
                                  },
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "text.main",
                                    fontSize: { xs: "13px", md: "16px" },
                                    fontWeight: { xs: "500", md: "600" },
                                  }}
                                >
                                  اسپاتیفای 5 دلاری آمریکا
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: "#344054",
                                      fontSize: { xs: "13px", md: "16px" },
                                      fontWeight: "500",
                                    }}
                                  >
                                    234,000 IRT
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        width: { xs: "14px", md: "18px" },
                                        height: { xs: "14px", md: "18px" },
                                      }}
                                    >
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      >
                                        <path
                                          d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                                          fill="#344054"
                                        />
                                      </svg>
                                    </Box>
                                    <Typography
                                      sx={{
                                        color: "#344054",
                                        fontSize: { xs: "13px", md: "16px" },
                                        fontWeight: "600",
                                        marginInlineStart: 0.25,
                                      }}
                                    >
                                      4.0
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: "12px",
                              display: "flex",
                              alignItems: "center",
                              columnGap: "20px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 15.5V7.25M0.5 8.75V14C0.5 14.8284 1.17157 15.5 2 15.5H12.0697C13.1802 15.5 14.1247 14.6898 14.2935 13.5921L15.1012 8.34213C15.3109 6.97917 14.2564 5.75 12.8774 5.75H10.25C9.83579 5.75 9.5 5.41421 9.5 5V2.34938C9.5 1.328 8.672 0.5 7.65062 0.5C7.407 0.5 7.18623 0.643471 7.08729 0.866092L4.44795 6.8046C4.32758 7.07545 4.05899 7.25 3.76259 7.25H2C1.17157 7.25 0.5 7.92157 0.5 8.75Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                34
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 5.375H8M4.25 8H10.25M4.25 12.5V14.2516C4.25 14.6513 4.25 14.8511 4.33192 14.9537C4.40317 15.043 4.5112 15.0949 4.6254 15.0948C4.75672 15.0946 4.91275 14.9698 5.22482 14.7201L7.01391 13.2889C7.37939 12.9965 7.56213 12.8503 7.76561 12.7463C7.94615 12.6541 8.13832 12.5867 8.33691 12.5459C8.56075 12.5 8.79477 12.5 9.26281 12.5H11.15C12.4101 12.5 13.0402 12.5 13.5215 12.2548C13.9448 12.039 14.289 11.6948 14.5048 11.2715C14.75 10.7902 14.75 10.1601 14.75 8.9V4.85C14.75 3.58988 14.75 2.95982 14.5048 2.47852C14.289 2.05516 13.9448 1.71095 13.5215 1.49524C13.0402 1.25 12.4101 1.25 11.15 1.25H4.85C3.58988 1.25 2.95982 1.25 2.47852 1.49524C2.05516 1.71095 1.71095 2.05516 1.49524 2.47852C1.25 2.95982 1.25 3.58988 1.25 4.85V9.5C1.25 10.1975 1.25 10.5462 1.32667 10.8323C1.53472 11.6088 2.1412 12.2153 2.91766 12.4233C3.20378 12.5 3.55252 12.5 4.25 12.5Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.56058 7.05836C1.11407 6.88472 0.890814 6.7979 0.825635 6.67279C0.769131 6.56434 0.769055 6.43516 0.825431 6.32664C0.890463 6.20146 1.11362 6.11438 1.55992 5.94021L14.2257 0.997455C14.6286 0.840232 14.8301 0.76162 14.9588 0.804622C15.0706 0.841966 15.1583 0.929693 15.1956 1.04148C15.2386 1.1702 15.16 1.37164 15.0028 1.77453L10.06 14.4403C9.88588 14.8866 9.7988 15.1098 9.67362 15.1748C9.5651 15.2312 9.43591 15.2311 9.32747 15.1746C9.20236 15.1094 9.11554 14.8862 8.9419 14.4397L6.97082 9.37118C6.93557 9.28054 6.91794 9.23522 6.89072 9.19706C6.8666 9.16324 6.83702 9.13366 6.8032 9.10953C6.76504 9.08231 6.71972 9.06469 6.62908 9.02944L1.56058 7.05836Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          columnGap: "12px",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "35px", md: "48px" },
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: "35px", md: "48px" },
                              height: { xs: "35px", md: "48px" },
                              borderRadius: "100%",
                              position: "relative",
                              overflow: "hidden",
                              background: "#D4B2AF",
                            }}
                          >
                            <Image
                              src="/images/avatar2.jpg"
                              alt="avatar"
                              fill
                              objectFit="cover"
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: {
                              xs: "calc(100% - 35px)",
                              md: "calc(100% - 48px)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: "40px",
                              padding: "0 0 0 12px",
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "text.main",
                                  fontSize: { xs: "13px", md: "14px" },
                                  fontWeight: "500",
                                }}
                              >
                                aghabazi
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "13px",
                                  fontWeight: "400",
                                  mx: 1,
                                }}
                              >
                                سه ساعت پیش
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                width="18"
                                height="4"
                                viewBox="0 0 18 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                                  stroke="#344054"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mb: "15px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#344054",
                                fontSize: { xs: "13px", md: "16px" },
                                fontWeight: "500",
                              }}
                            >
                              گیم پلی و ببین و از بازی لذت ببر
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              padding: "0 0 0 15px",
                            }}
                          >
                            <Slider />
                          </Box>
                          <Box
                            sx={{
                              mt: "12px",
                              display: "flex",
                              alignItems: "center",
                              columnGap: "20px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 15.5V7.25M0.5 8.75V14C0.5 14.8284 1.17157 15.5 2 15.5H12.0697C13.1802 15.5 14.1247 14.6898 14.2935 13.5921L15.1012 8.34213C15.3109 6.97917 14.2564 5.75 12.8774 5.75H10.25C9.83579 5.75 9.5 5.41421 9.5 5V2.34938C9.5 1.328 8.672 0.5 7.65062 0.5C7.407 0.5 7.18623 0.643471 7.08729 0.866092L4.44795 6.8046C4.32758 7.07545 4.05899 7.25 3.76259 7.25H2C1.17157 7.25 0.5 7.92157 0.5 8.75Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                34
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.25 5.375H8M4.25 8H10.25M4.25 12.5V14.2516C4.25 14.6513 4.25 14.8511 4.33192 14.9537C4.40317 15.043 4.5112 15.0949 4.6254 15.0948C4.75672 15.0946 4.91275 14.9698 5.22482 14.7201L7.01391 13.2889C7.37939 12.9965 7.56213 12.8503 7.76561 12.7463C7.94615 12.6541 8.13832 12.5867 8.33691 12.5459C8.56075 12.5 8.79477 12.5 9.26281 12.5H11.15C12.4101 12.5 13.0402 12.5 13.5215 12.2548C13.9448 12.039 14.289 11.6948 14.5048 11.2715C14.75 10.7902 14.75 10.1601 14.75 8.9V4.85C14.75 3.58988 14.75 2.95982 14.5048 2.47852C14.289 2.05516 13.9448 1.71095 13.5215 1.49524C13.0402 1.25 12.4101 1.25 11.15 1.25H4.85C3.58988 1.25 2.95982 1.25 2.47852 1.49524C2.05516 1.71095 1.71095 2.05516 1.49524 2.47852C1.25 2.95982 1.25 3.58988 1.25 4.85V9.5C1.25 10.1975 1.25 10.5462 1.32667 10.8323C1.53472 11.6088 2.1412 12.2153 2.91766 12.4233C3.20378 12.5 3.55252 12.5 4.25 12.5Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
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
                                  display: "flex",
                                  marginInlineEnd: 0.75,
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.56058 7.05836C1.11407 6.88472 0.890814 6.7979 0.825635 6.67279C0.769131 6.56434 0.769055 6.43516 0.825431 6.32664C0.890463 6.20146 1.11362 6.11438 1.55992 5.94021L14.2257 0.997455C14.6286 0.840232 14.8301 0.76162 14.9588 0.804622C15.0706 0.841966 15.1583 0.929693 15.1956 1.04148C15.2386 1.1702 15.16 1.37164 15.0028 1.77453L10.06 14.4403C9.88588 14.8866 9.7988 15.1098 9.67362 15.1748C9.5651 15.2312 9.43591 15.2311 9.32747 15.1746C9.20236 15.1094 9.11554 14.8862 8.9419 14.4397L6.97082 9.37118C6.93557 9.28054 6.91794 9.23522 6.89072 9.19706C6.8666 9.16324 6.83702 9.13366 6.8032 9.10953C6.76504 9.08231 6.71972 9.06469 6.62908 9.02944L1.56058 7.05836Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Typography
                                sx={{
                                  color: "#344054",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                }}
                              >
                                2
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.element",
                      borderRadius: { xs: "0px", md: "12px" },
                      padding: "15px",
                      mb: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        columnGap: "12px",
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "35px", md: "48px" },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "35px", md: "48px" },
                            height: { xs: "35px", md: "48px" },
                            borderRadius: "100%",
                            position: "relative",
                            overflow: "hidden",
                            background: "#D4B2AF",
                          }}
                        >
                          <Image
                            src="/images/avatar.png"
                            alt="avatar"
                            fill
                            objectFit="cover"
                          />
                        </Box>
                        <Box
                          sx={{
                            pt: "10px",
                            width: "100%",
                            height: {
                              xs: "calc(100% - 35px)",
                              md: "calc(100% - 48px)",
                            },
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "1.5px",
                              height: "100%",
                              background: "#9fe870",
                            }}
                          ></Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: {
                            xs: "calc(100% - 35px)",
                            md: "calc(100% - 48px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            pt: "18px",
                            pr: { xs: "0px", md: "7px" },
                            pl: { xs: "0px", md: "15px" },
                          }}
                        >
                          <Box
                            sx={{
                              mb: "15px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "text.main",
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: "500",
                                mb: "10px",
                              }}
                            >
                              abbasjadidi
                            </Typography>
                            <input
                              type="text"
                              placeholder="اینجا بنویسید..."
                              style={{
                                width: "100%",
                                color: "#344054",
                                fontSize: "14px",
                                fontWeight: "500",
                                background: "transparent",
                                border: "0",
                                outline: "0",
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mb: "5px",
                            }}
                          >
                            <Box>
                              <Link
                                href="https://www.aparat.com/v/j55o64c"
                                target="_blank"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                  }}
                                >
                                  <svg
                                    width="18"
                                    height="10"
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.75 8.75H5.25C3.17893 8.75 1.5 7.07107 1.5 5C1.5 2.92893 3.17893 1.25 5.25 1.25H6.75M11.25 8.75H12.75C14.8211 8.75 16.5 7.07107 16.5 5C16.5 2.92893 14.8211 1.25 12.75 1.25H11.25M5.25 5L12.75 5"
                                      stroke="#344054"
                                      strokeWidth="1.66667"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Box>
                                <Typography
                                  sx={{
                                    marginInlineStart: 0.25,
                                    color: "#344054",
                                    fontSize: "13px",
                                    fontWeight: "400",
                                  }}
                                >
                                  aparat.com/v/j55o64c
                                </Typography>
                              </Link>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5 1.5L1.5 10.5M1.5 1.5L10.5 10.5"
                                  stroke="#344054"
                                  strokeWidth="1.66667"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              height: "320px",
                              borderRadius: "15px",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src="/images/game.jpg"
                              alt="game"
                              fill
                              objectFit="cover"
                            />
                          </Box>
                          <Box
                            sx={{
                              mt: "25px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "20px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="20"
                                  height="22"
                                  viewBox="0 0 20 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.5 6.27734L9.99997 10.9996M9.99997 10.9996L1.49997 6.27734M9.99997 10.9996L10 20.4996M19 15.0582V6.94104C19 6.5984 19 6.42708 18.9495 6.27428C18.9049 6.1391 18.8318 6.01502 18.7354 5.91033C18.6263 5.79199 18.4766 5.70879 18.177 5.54239L10.777 1.43128C10.4934 1.27372 10.3516 1.19494 10.2015 1.16406C10.0685 1.13672 9.93146 1.13672 9.79855 1.16406C9.64838 1.19494 9.50658 1.27372 9.22297 1.43128L1.82297 5.54239C1.52345 5.70879 1.37369 5.792 1.26463 5.91033C1.16816 6.01502 1.09515 6.1391 1.05048 6.27428C1 6.42708 1 6.5984 1 6.94104V15.0582C1 15.4008 1 15.5721 1.05048 15.7249C1.09515 15.8601 1.16816 15.9842 1.26463 16.0889C1.37369 16.2072 1.52345 16.2904 1.82297 16.4568L9.22297 20.5679C9.50658 20.7255 9.64838 20.8042 9.79855 20.8351C9.93146 20.8625 10.0685 20.8625 10.2015 20.8351C10.3516 20.8042 10.4934 20.7255 10.777 20.5679L18.177 16.4568C18.4766 16.2904 18.6263 16.2072 18.7354 16.0889C18.8318 15.9842 18.9049 15.8601 18.9495 15.7249C19 15.5721 19 15.4008 19 15.0582Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="22"
                                  height="20"
                                  viewBox="0 0 22 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.27209 18.7279L9.86863 12.1314C10.2646 11.7354 10.4627 11.5373 10.691 11.4632C10.8918 11.3979 11.1082 11.3979 11.309 11.4632C11.5373 11.5373 11.7354 11.7354 12.1314 12.1314L18.6839 18.6839M13 13L15.8686 10.1314C16.2646 9.73535 16.4627 9.53735 16.691 9.46316C16.8918 9.3979 17.1082 9.3979 17.309 9.46316C17.5373 9.53735 17.7354 9.73535 18.1314 10.1314L21 13M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM5.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
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
                                    d="M7.5 6.96533C7.5 6.48805 7.5 6.24941 7.59974 6.11618C7.68666 6.00007 7.81971 5.92744 7.96438 5.9171C8.13038 5.90525 8.33112 6.03429 8.73261 6.29239L13.4532 9.32706C13.8016 9.55102 13.9758 9.663 14.0359 9.80539C14.0885 9.9298 14.0885 10.0702 14.0359 10.1946C13.9758 10.337 13.8016 10.449 13.4532 10.6729L8.73261 13.7076C8.33112 13.9657 8.13038 14.0948 7.96438 14.0829C7.81971 14.0726 7.68666 13.9999 7.59974 13.8838C7.5 13.7506 7.5 13.512 7.5 13.0347V6.96533Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8Z"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="19"
                                  height="20"
                                  viewBox="0 0 19 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.49999 1L4.49999 19M15.5 1L12.5 19M18.5 6H1.5M17.5 14H0.5"
                                    stroke="#344054"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                            </Box>
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="22"
                                  height="20"
                                  viewBox="0 0 22 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.95686 10.7344C2.30471 10.4317 2.30471 9.56765 2.95686 9.2649L17.7898 2.37913C18.3781 2.10602 19.0703 2.50321 19.0703 3.1139L15.8592 9.27347C15.62 9.73215 15.62 10.2672 15.8592 10.7259L19.0703 16.8854C19.0703 17.4961 18.3781 17.8933 17.7898 17.6202L2.95686 10.7344Z"
                                    stroke="#344054"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M15.4805 10H8.7497"
                                    stroke="#344054"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </>
              ) : status == "reply" ? (
                <Reply />
              ) : (
                ""
              )}
            </Grid>
            <Grid
              item
              lg={4}
              md={4.5}
              xs={12}
              display={{ xs: "none", md: "block" }}
            >
              <ScriptSidebar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProfileScript;
