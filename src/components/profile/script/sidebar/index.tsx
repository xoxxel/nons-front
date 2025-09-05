import { Box, Typography } from "@mui/material";
import Link from "next/link";

const ScriptSidebar = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: { xs: "0px", md: "12px" },
          py: "10px",
          px: "5px",
          mb: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginInlineEnd: 0.75,
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
                d="M10.5 10.5L8.325 8.325M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
                stroke="#344054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <input
            type="text"
            placeholder="جستجو"
            style={{
              width: "100%",
              border: "0",
              outline: "0",
              color: "#344054",
              fontSize: "14px",
              fontWeight: "500",
              background: "transparent",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: { xs: "0px", md: "12px" },
          mb: "10px",
        }}
      >
        <Box
          sx={{
            py: "10px",
            px: "15px",
            borderBottom: "0.5px solid",
            borderColor: "border.main",
          }}
        >
          <Typography
            sx={{
              color: "#344054",
              fontSize: { xs: "13px", md: "20px" },
              fontWeight: "500",
            }}
          >
            پیشنهاد ویژه
          </Typography>
        </Box>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Box
              sx={{
                py: "10px",
                px: "15px",
                borderBottom: "0.5px solid",
                borderColor: "border.main",
              }}
            >
              <Box
                sx={{
                  pt: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: "25px",
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: "calc(100% - 45px)",
                        md: "calc(100% - 65px)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#8899A6",
                        fontSize: "14px",
                        fontWeight: "400",
                        mb: "6px",
                      }}
                    >
                      abasjadidi
                      <span
                        style={{
                          margin: "0 3px",
                        }}
                      >
                        .
                      </span>
                      دیشب
                    </Typography>
                    <Typography
                      sx={{
                        color: "#3C464B",
                        fontSize: { xs: "13px", md: "15px" },
                        fontWeight: { xs: "600", md: "700" },
                        mb: "6px",
                      }}
                    >
                      فصل جدید بازی کال آف دیوتی منتشر شده و تمام محصولات جدید
                      برای فروش در دسترسه
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#8899A6",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        برچسب
                      </Typography>
                      <Typography
                        sx={{
                          marginInlineStart: 0.5,
                          color: "#1DA1F2",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        کالاف دیوتی
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "45px", md: "65px" },
                      height: { xs: "45px", md: "65px" },
                      borderRadius: "8px",
                      background: "linear-gradient(to bottom,#2AC9FA,#1F65EB)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9468 2.15403C12.2494 1.62586 12.0685 0.951264 11.5428 0.647274C11.0171 0.343283 10.3456 0.525016 10.043 1.05318L9.51525 1.97442L8.98749 1.05318C8.68491 0.525016 8.01344 0.343283 7.48772 0.647274C6.962 0.951264 6.78111 1.62586 7.08369 2.15403L8.24802 4.18643L4.56524 10.6149H1.59831C0.991728 10.6149 0.5 11.1089 0.5 11.7183C0.5 12.3277 0.991728 12.8217 1.59831 12.8217H11.9324C12.023 12.5825 12.1184 12.1721 12.0169 11.7949C11.8644 11.2279 11.3 10.6149 10.3542 10.6149H7.0997L11.9468 2.15403Z"
                        fill="white"
                      />
                      <path
                        d="M5.13641 14.0419C4.94902 13.8328 4.52917 13.4987 4.16102 13.3888C3.59967 13.2211 3.17413 13.3263 2.95942 13.4179L2.14132 14.846C1.83874 15.3741 2.01963 16.0487 2.54535 16.3527C3.07107 16.6567 3.74254 16.475 4.04512 15.9468L5.13641 14.0419Z"
                        fill="white"
                      />
                      <path
                        d="M15.7295 12.8217H17.4017C18.0083 12.8217 18.5 12.3277 18.5 11.7183C18.5 11.1089 18.0083 10.6149 17.4017 10.6149H14.4653L11.1575 4.84108C10.9118 5.07567 10.4407 5.67498 10.3695 6.35446C10.278 7.228 10.4152 7.96361 10.8271 8.6839C12.2118 11.1056 13.5987 13.5262 14.9854 15.9468C15.288 16.475 15.9594 16.6567 16.4852 16.3527C17.0109 16.0487 17.1918 15.3741 16.8892 14.846L15.7295 12.8217Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        <Box
          sx={{
            p: "15px",
          }}
        >
          <Box
            sx={{
              pt: "5px",
            }}
          >
            <Link href="/">
              <Typography
                sx={{
                  color: "#1DA1F2",
                  fontSize: { xs: "13px", md: "15px" },
                  fontWeight: "500",
                }}
              >
                مشاهده بیشتر
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: { xs: "0px", md: "12px" },
        }}
      >
        <Box
          sx={{
            py: "10px",
            px: "15px",
            borderBottom: "0.5px solid",
            borderColor: "border.main",
            mb: "15px",
          }}
        >
          <Typography
            sx={{
              color: "#344054",
              fontSize: { xs: "13px", md: "20px" },
              fontWeight: "500",
            }}
          >
            محصولات ترند شده
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: { xs: "0px", md: "15px" },
          }}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <Box
                sx={{
                  px: "15px",
                  py: "10px",
                  borderBottom: "0.5px solid",
                  borderBottomColor: { xs: "border.main", md: "transparent" },
                }}
              >
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    mb: { xs: "15px", md: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#8899A6",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    abasjadidi
                    <span
                      style={{
                        margin: "0 3px",
                      }}
                    >
                      .
                    </span>
                    دیشب
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    columnGap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "linear-gradient(to bottom,#2AC9FA,#1F65EB)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9468 2.15403C12.2494 1.62586 12.0685 0.951264 11.5428 0.647274C11.0171 0.343283 10.3456 0.525016 10.043 1.05318L9.51525 1.97442L8.98749 1.05318C8.68491 0.525016 8.01344 0.343283 7.48772 0.647274C6.962 0.951264 6.78111 1.62586 7.08369 2.15403L8.24802 4.18643L4.56524 10.6149H1.59831C0.991728 10.6149 0.5 11.1089 0.5 11.7183C0.5 12.3277 0.991728 12.8217 1.59831 12.8217H11.9324C12.023 12.5825 12.1184 12.1721 12.0169 11.7949C11.8644 11.2279 11.3 10.6149 10.3542 10.6149H7.0997L11.9468 2.15403Z"
                        fill="white"
                      />
                      <path
                        d="M5.13641 14.0419C4.94902 13.8328 4.52917 13.4987 4.16102 13.3888C3.59967 13.2211 3.17413 13.3263 2.95942 13.4179L2.14132 14.846C1.83874 15.3741 2.01963 16.0487 2.54535 16.3527C3.07107 16.6567 3.74254 16.475 4.04512 15.9468L5.13641 14.0419Z"
                        fill="white"
                      />
                      <path
                        d="M15.7295 12.8217H17.4017C18.0083 12.8217 18.5 12.3277 18.5 11.7183C18.5 11.1089 18.0083 10.6149 17.4017 10.6149H14.4653L11.1575 4.84108C10.9118 5.07567 10.4407 5.67498 10.3695 6.35446C10.278 7.228 10.4152 7.96361 10.8271 8.6839C12.2118 11.1056 13.5987 13.5262 14.9854 15.9468C15.288 16.475 15.9594 16.6567 16.4852 16.3527C17.0109 16.0487 17.1918 15.3741 16.8892 14.846L15.7295 12.8217Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      width: "calc(100% - 36px)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.main",
                        fontSize: "13px",
                        fontWeight: "600",
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
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            dispaly: "flex",
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
                              d="M7.53834 0.560159C7.70914 0.149512 8.29086 0.149513 8.46166 0.560159L10.2632 4.8917C10.3353 5.06481 10.4981 5.1831 10.685 5.19808L15.3612 5.57298C15.8045 5.60852 15.9843 6.16177 15.6465 6.45111L12.0837 9.50304C11.9413 9.62501 11.8791 9.8164 11.9226 9.99878L13.0111 14.562C13.1143 14.9946 12.6437 15.3366 12.2642 15.1047L8.26063 12.6594C8.10062 12.5617 7.89938 12.5617 7.73937 12.6594L3.73584 15.1047C3.35629 15.3366 2.88567 14.9946 2.98886 14.562L4.07736 9.99878C4.12086 9.8164 4.05868 9.62501 3.91628 9.50304L0.353469 6.4511C0.0157003 6.16177 0.195464 5.60852 0.638791 5.57298L5.31505 5.19808C5.50194 5.1831 5.66475 5.06481 5.73675 4.8917L7.53834 0.560159Z"
                              fill="#344054"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            color: "#344054",
                            fontSize: "14px",
                            fontWeight: "600",
                            marginInlineStart: 0.25,
                          }}
                        >
                          4.0
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "#344054",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        234,000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            p: "15px",
          }}
        >
          <Box
            sx={{
              pt: "5px",
            }}
          >
            <Link href="/">
              <Typography
                sx={{
                  color: "#1DA1F2",
                  fontSize: { xs: "13px", md: "15px" },
                  fontWeight: "500",
                }}
              >
                مشاهده بیشتر
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ScriptSidebar;
