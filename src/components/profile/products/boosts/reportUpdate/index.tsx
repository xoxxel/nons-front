"use client";

import { Box, Button, Typography } from "@mui/material";
import BoostPowerRange from "../../productsMenu/boostBox/boostPowerRange";
import { useState } from "react";
import ThousandSeparator from "@/utils/thousandSeparator";

const ReportUpdate = ({
  status,
  isReportUpdateOpen,
  setIsReportUpdateOpen,
}: {
  status: string;
  isReportUpdateOpen: boolean;
  setIsReportUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      setIsReportUpdateOpen(false);
    }
  };

  const [position, setPosition] = useState<number>(0);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          zIndex: "999",
          background: "rgba(0,0,0,0.7)",
          transition: "visibility 0.3s ease,opacity 0.3s ease",
          visibility: isReportUpdateOpen ? "visible" : "hidden",
          opacity: isReportUpdateOpen ? 1 : 0,
        }}
      >
        <Box
          onClick={handleClick}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: { xs: "flex-end", md: "unset" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "350px" },
              width: "100%",
              margin: { xs: "unset", md: "auto" },
              mb: { xs: "72px", md: "auto" },
              borderRadius: { xs: "35px 35px 0 0", md: "11px" },
              bgcolor: "background.main",
              transition: "transform 0.3s ease",
              transform: isReportUpdateOpen
                ? "translateY(0)"
                : { xs: "translateY(100%)", md: "translateY(-50px)" },
            }}
          >
            {status == "update" ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pt: "24px",
                    px: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: { xs: "0px", md: "8px" },
                      mb: { xs: "0px", md: "10px" },
                    }}
                  >
                    <Box
                      onClick={() => setIsReportUpdateOpen(false)}
                      sx={{
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        visibility: { xs: "hidden", md: "visible" },
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1L1 13M1 1L13 13"
                          stroke="#667085"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        width: { sm: "59px", md: "90px" },
                        height: { xs: "24px", md: "28px" },
                        background: "#F9F5FF",
                        borderRadius: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#6941C6",
                          fontSize: { xs: "12px", md: "16px" },
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        پایان یافته
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.content",
                        fontSize: { xs: "13px", md: "16px" },
                        fontWeight: "600",
                      }}
                    >
                      گیفت کارت 10 دلاری آیتونز
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "12px", md: "14px" },
                        fontWeight: "500",
                      }}
                    >
                      دسته بندی گیفت کارت
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "5px",
                      mb: { xs: "15px", md: "66px" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        انرژی
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        10K
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        بازدید
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        240
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        جایگاه
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: { xs: "12px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        24~32
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        هزینه
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                        }}
                      >
                        رایگان
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#06D6A0",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      تاثیر بوست بر بازدید
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6668 1.66602L9.42108 6.91177C9.15707 7.17578 9.02506 7.30779 8.87284 7.35724C8.73895 7.40075 8.59471 7.40075 8.46082 7.35724C8.3086 7.30779 8.17659 7.17578 7.91258 6.91177L6.08774 5.08693C5.82373 4.82292 5.69173 4.69091 5.53951 4.64145C5.40561 4.59795 5.26138 4.59795 5.12748 4.64145C4.97527 4.69091 4.84326 4.82292 4.57925 5.08693L1.3335 8.33268M14.6668 1.66602H10.0002M14.6668 1.66602V6.33268"
                            stroke="#06D6A0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          color: "#06D6A0",
                          fontSize: "12px",
                          fontWeight: "500",
                          marginInlineStart: 0.5,
                        }}
                      >
                        40%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pt: { xs: "10px", md: "0px" },
                    pb: "10px",
                    px: "15px",
                    bgcolor: { xs: "#fff", md: "transparent" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: 1,
                    }}
                  >
                    <Button
                      sx={{
                        width: { xs: "70%", md: "50%" },
                        height: "44px",
                        bgcolor: "black.main",
                        borderRadius: { xs: "8px", md: "5px" },
                        color: "#fff",
                        fontSize: { xs: "12px", md: "16px" },
                        fontWeight: "600",
                        textAlign: "center",
                        ":hover": {
                          bgcolor: "black.main",
                        },
                      }}
                    >
                      بروزرسانی
                    </Button>
                    <Button
                      sx={{
                        width: { xs: "30%", md: "50%" },
                        height: "44px",
                        borderRadius: { xs: "8px", md: "5px" },
                        color: "text.main",
                        fontSize: { xs: "12px", md: "16px" },
                        fontWeight: "600",
                        textAlign: "center",
                        bgcolor: { xs: "#F4F4F4", md: "#fff" },
                        ":hover": {
                          bgcolor: { xs: "#F4F4F4", md: "#fff" },
                        },
                      }}
                    >
                      تکرار
                    </Button>
                  </Box>
                </Box>
              </>
            ) : status == "report" ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pt: "24px",
                    px: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: { xs: "0px", md: "8px" },
                      mb: { xs: "0px", md: "10px" },
                    }}
                  >
                    <Box
                      onClick={() => setIsReportUpdateOpen(false)}
                      sx={{
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        visibility: { xs: "hidden", md: "visible" },
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1L1 13M1 1L13 13"
                          stroke="#667085"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "34px", md: "90px" },
                        height: { xs: "24px", md: "28px" },
                        background: "#ECFDF3",
                        borderRadius: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#027A48",
                          fontSize: { xs: "12px", md: "16px" },
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        فعال
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.main",
                        fontSize: { xs: "13px", md: "16px" },
                        fontWeight: "600",
                      }}
                    >
                      گیفت کارت 10 دلاری آیتونز
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "12px", md: "14px" },
                        fontWeight: "500",
                      }}
                    >
                      دسته بندی گیفت کارت
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.element",
                      display: "flex",
                      flexDirection: "column",
                      py: "20px",
                      px: "15px",
                      borderRadius: "5px",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "text.main",
                        mb: 5,
                      }}
                    >
                      انرژی
                    </Typography>
                    <BoostPowerRange
                      position={position}
                      setPosition={setPosition}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "text.main",
                        }}
                      >
                        200K
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "text.main",
                        }}
                      >
                        10K
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "16px" },
                        fontWeight: "400",
                        color: "#06D6A0",
                      }}
                    >
                      {`مدت زمان باقی مانده ${
                        Math.floor((position / 100) * (200 - 10) + 10) === 10
                          ? "2"
                          : "24"
                      } ساعت`}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "13px", md: "16px" },
                        fontWeight: "400",
                      }}
                    >
                      هزینه
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        color: "text.main",
                        mb: 1,
                        pl: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", md: "16px" },
                          fontWeight: "400",
                          textAlign: "left",
                          direction: "ltr",
                        }}
                      >
                        {Math.floor((position / 100) * (200 - 10) + 10) === 10
                          ? "رایگان"
                          : ThousandSeparator(
                              Math.floor((position / 100) * (200 - 10) + 10) *
                                1000
                            ) + " IRT"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pt: { xs: "10px", md: "0px" },
                    pb: "10px",
                    px: "15px",
                    bgcolor: { xs: "#fff", md: "transparent" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "button.main",
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: "500",
                      my: 1,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2678_21122)">
                        <path
                          d="M9 11.25C6.51472 11.25 4.5 9.23528 4.5 6.75V2.58333C4.5 2.27295 4.5 2.11775 4.54523 1.99348C4.62105 1.78516 4.78516 1.62105 4.99348 1.54523C5.11775 1.5 5.27295 1.5 5.58333 1.5H12.4167C12.7271 1.5 12.8822 1.5 13.0065 1.54523C13.2148 1.62105 13.3789 1.78516 13.4548 1.99348C13.5 2.11775 13.5 2.27295 13.5 2.58333V6.75C13.5 9.23528 11.4853 11.25 9 11.25ZM9 11.25V13.5M13.5 3H15.375C15.7245 3 15.8992 3 16.037 3.05709C16.2208 3.13321 16.3668 3.27922 16.4429 3.46299C16.5 3.60082 16.5 3.77554 16.5 4.125V4.5C16.5 5.19748 16.5 5.54622 16.4233 5.83234C16.2153 6.6088 15.6088 7.21528 14.8323 7.42333C14.5462 7.5 14.1975 7.5 13.5 7.5M4.5 3H2.625C2.27554 3 2.10082 3 1.96299 3.05709C1.77922 3.13321 1.63321 3.27922 1.55709 3.46299C1.5 3.60082 1.5 3.77554 1.5 4.125V4.5C1.5 5.19748 1.5 5.54622 1.57667 5.83234C1.78472 6.6088 2.3912 7.21528 3.16766 7.42333C3.45378 7.5 3.80252 7.5 4.5 7.5M5.58333 16.5H12.4167C12.6008 16.5 12.75 16.3508 12.75 16.1667C12.75 14.6939 11.5561 13.5 10.0833 13.5H7.91667C6.44391 13.5 5.25 14.6939 5.25 16.1667C5.25 16.3508 5.39924 16.5 5.58333 16.5Z"
                          stroke="#0961DC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2678_21122">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    محصول در جایگاه 10 قرار میگیرد
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: 1,
                    }}
                  >
                    <Button
                      sx={{
                        width: { xs: "70%", md: "50%" },
                        height: "44px",
                        bgcolor: "black.main",
                        borderRadius: { xs: "8px", md: "5px" },
                        color: "#fff",
                        fontSize: { xs: "12px", md: "16px" },
                        fontWeight: "600",
                        textAlign: "center",
                        ":hover": {
                          bgcolor: "navigation.main",
                        },
                      }}
                    >
                      تایید و پرداخت
                    </Button>
                    <Button
                      sx={{
                        width: { xs: "30%", md: "50%" },
                        height: "44px",
                        bgcolor: "background.element",
                        borderRadius: { xs: "8px", md: "5px" },
                        color: "text.main",
                        fontSize: { xs: "12px", md: "16px" },
                        fontWeight: "600",
                        textAlign: "center",
                        ":hover": {
                          bgcolor: "background.element",
                        },
                      }}
                    >
                      گزارش
                    </Button>
                  </Box>
                </Box>
              </>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReportUpdate;
