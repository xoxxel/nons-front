"use client";

import { Box, Button, Drawer, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CopyCode from "../../transaction/copyCode";
import Badge from "../../transaction/badge";
import ActivityModel from "@/models/Activity";
import ThousandSeparator from "@/utils/thousandSeparator";
import jalaliDate from "@/utils/jalaliDate";

interface MobileTransactionProps {
  type: "deposit" | "withdraw" | "trade";
  activity: ActivityModel;
}

const MobileTransaction = ({ type, activity }: MobileTransactionProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isIncome = !(
    activity?.order?.order_type === "boost" ||
    activity?.transaction?.status_change === "buy" ||
    activity?.transaction?.status_change === "cancel-sell" ||
    activity?.transaction?.status_change === "direct-withraw"
  );

  return (
    <>
      <Box
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "8.5px 10px",
          borderRadius: "8px",
        }}
      >
        {/* logo name and date in this section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "7px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "hover.main",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {type === "trade" ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER}/${activity?.order?.product?.brand?.icon}`}
                fill
                alt={activity?.order?.product?.brand?.title}
              />
            ) : type === "deposit" ? (
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 20.5V4.5M12.5 4.5L6.5 10.5M12.5 4.5L18.5 10.5"
                  stroke="#06D6A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 1.5V17.5M7.5 17.5L13.5 11.5M7.5 17.5L1.5 11.5"
                  stroke="#FF6666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              sx={{ color: "text.main", fontWeight: "600", fontSize: "13px" }}
            >
              {type === "trade"
                ? activity?.order?.product?.brand?.title
                : type === "deposit"
                ? "افزایش موجودی"
                : "برداشت موجودی"}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              {jalaliDate(activity?.date_created, "YYYY/MM/DD")}
            </Typography>
          </Box>
        </Box>
        {type === "trade" ? (
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: isIncome ? "#027A48" : "#B42318",
              direction: "ltr",
              pl: 0.5,
            }}
          >
            {activity?.order?.order_type === "boost"
              ? `- ${ThousandSeparator(activity?.order?.final_price)}`
              : activity?.transaction?.status_change === "sell" ||
                activity?.transaction?.status_change === "cancel-buy" ||
                activity?.transaction?.status_change === "direct-deposite"
              ? `+ ${ThousandSeparator(activity?.transaction?.value)}`
              : `- ${ThousandSeparator(activity?.transaction?.value)}`}
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#B42318",
              direction: "ltr",
              pl: 0.5,
            }}
          >
            {type === "deposit"
              ? `+ ${ThousandSeparator(activity?.transaction?.value)}`
              : `- ${ThousandSeparator(activity?.transaction?.value)}`}
          </Typography>
        )}
      </Box>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="bottom"
        sx={{
          "& .MuiPaper-root": { borderRadius: "35px 35px 0 0", mb: "70px" },
          "& .MuiBackdrop-root": { bgcolor: "transparent" },
          zIndex: 0,
        }}
      >
        <Box sx={{ width: "100%", p: "20px 17px" }}>
          {type === "deposit" && (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    sx={{
                      color: "text.main",
                      fontSize: "13px",
                      fontWeight: "600",
                      mb: 1,
                    }}
                  >
                    افزایش موجودی
                  </Typography>
                  <CopyCode code={activity?.code} />
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Typography
                      sx={{
                        color: "text.content",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      فروشگاه نونز
                    </Typography>
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        position: "relative",
                        borderRadius:"50px",
                        overflow:"hidden"
                      }}
                    >
                      <Image src="/images/shopavatar.jpg" fill alt="shop" />
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#027A48",
                    direction: "ltr",
                    pl: 0.5,
                  }}
                >
                  {`+ ${ThousandSeparator(activity?.price)}`}
                </Typography>
              </Box>
              {/* badge and time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: 2,
                }}
              >
                <Badge status={activity?.transaction?.status_transaction} />
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {jalaliDate(activity?.date_created, "YYYY/MM/DD HH:MM")}
                </Typography>
              </Box>
              {/* button */}
              <Button
                sx={{
                  border: "0.5px solid #666666",
                  width: "100%",
                  borderRadius: "5px",
                  color: "text.secondary",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                جزییات تراکنش
              </Button>
            </>
          )}
          {type === "withdraw" && (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    sx={{
                      color: "text.main",
                      fontSize: "13px",
                      fontWeight: "600",
                      mb: 1,
                    }}
                  >
                    برداشت وجه
                  </Typography>
                  <CopyCode code={activity?.code} />
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "text.secondary",
                      animation: "appearLater 0.3s forwards",
                    }}
                  >
                    واریز به حساب بانکی
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "text.secondary",
                      animation: "appearLater 0.3s forwards",
                    }}
                  >
                    6037-5559****2245
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#B42318",
                    direction: "ltr",
                    pl: 0.5,
                  }}
                >
                  {`- ${ThousandSeparator(activity?.price)}`}
                </Typography>
              </Box>
              {/* badge and time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: 2,
                }}
              >
                <Badge status={activity?.transaction?.status_transaction} />
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {jalaliDate(activity?.date_created,"YYYY/MM/DD HH:MM")}
                </Typography>
              </Box>
              {/* button */}
              <Button
                sx={{
                  border: "0.5px solid #666666",
                  width: "100%",
                  borderRadius: "5px",
                  color: "text.secondary",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                جزییات تراکنش
              </Button>
            </>
          )}
          {type === "trade" && (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    sx={{
                      color: "text.main",
                      fontSize: "13px",
                      fontWeight: "600",
                      mb: 1,
                    }}
                  >
                    {/* {`${type === "buy" ? "خرید" : "فروش"} ${text}`} */}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "text.secondary",
                      animation: "appearLater 0.3s forwards",
                    }}
                  >
                    گیفت کارت , آمریکا
                  </Typography>
                  <CopyCode code="6519626" />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      animation: "appearLater 0.3s forwards",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#344054",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      فروشگاه نونز
                    </Typography>
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image src="/images/shopavatar.jpg" fill alt="shop" />
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#B42318",
                    direction: "ltr",
                    pl: 0.5,
                  }}
                >
                  -234,000
                </Typography>
              </Box>
              {/* badge and time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: 2,
                }}
              >
                <Badge />
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {jalaliDate(activity?.date_created,"YYYY/MM/DD HH:MM")}
                </Typography>
              </Box>
              {/* button */}
              <Button
                sx={{
                  border: "1px solid black",
                  width: "100%",
                  borderRadius: "8px",
                  color: "text.secondary",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                جزییات تراکنش
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default MobileTransaction;
