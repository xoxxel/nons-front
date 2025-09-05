"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import CopyCode from "../../../transaction/copyCode";
import CopyText from "../../../transaction/copyText";
import OrderModel from "@/models/Order";
import { useState } from "react";
import ThousandSeparator from "@/utils/thousandSeparator";
import OrderBadge from "../../../transaction/orderBadge";
import jalaliDate from "@/utils/jalaliDate";
import convertToTehranTime from "@/utils/convertToTehranTime";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const OrderPending = ({
  setDrawerVisibility,
  formattedDate,
  onStatusChange,
  order,
  orderType,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  formattedDate: (date: string, dateFormat: string) => string;
  onStatusChange: (order: OrderModel) => void;
  order: OrderModel;
  orderType: "buy" | "sell";
}) => {
  const [isPaymentDetailsOpen, setIsPaymentDetailsOpen] =
    useState<boolean>(false);
  const [isProgressBarOpen, setIsProgressBarOpen] = useState<boolean>(false);
  const [isProtectionOpen, setIsProtectionOpen] = useState<boolean>(false);
  const [isUserGuideOpen, setIsUserGuideOpen] = useState<boolean>(false);
  const [orderCompleteLoading, setOrderCompleteLoading] =
    useState<boolean>(false);
  const [orderCancelLoading, setOrderCancelLoading] =
    useState<boolean>(false);
  const [judgeLoading, setJudgeLoading] = useState<boolean>(false);

  const [showAll, setShowAll] = useState<boolean>(false);
  const tags = order?.product?.brand?.tags || [];

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleComplete = () => {
    setOrderCompleteLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/orders/${order?.id}/buyer-complete/`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleOrderComplete(res))
      .catch((err) => toast.error("مشکلی وجود دارد."))
      .finally(() => setOrderCompleteLoading(false));
  };

  const handleCancelOrder = () => {
    setOrderCancelLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/orders/${order?.id}/seller-cancel/`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleCancelOrderComplete(res))
      .catch((err) => toast.error("مشکلی وجود دارد."))
      .finally(() => setOrderCancelLoading(false));
  };

  const handleJudgementRequest = () => {
    setJudgeLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/orders/${order?.id}/judge/`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleOrderJudgement(res))
      .catch((err) => handleJudgementRequestError(err))
      .finally(() => setJudgeLoading(false));
  };

  const handleOrderComplete = (res: { data: OrderModel }) => {
    onStatusChange(res?.data);
    setDrawerVisibility(0);
    toast.success("سفارش مورد نظر کامل شد.");
  };

  const handleCancelOrderComplete = (res: { data: OrderModel }) => {
    onStatusChange(res?.data);
    setDrawerVisibility(0);
    toast.success("سفارش مورد نظر لغو شد.");
  };

  const handleOrderJudgement = (res: { data: OrderModel }) => {
    onStatusChange(res?.data);
    setDrawerVisibility(0);
    toast.success("درخواست داوری برای سفارش مورد نظر ثبت شد");
  };

  const handleJudgementRequestError = (error: {
    response: { data: { msg: string } };
  }) => {
    if (error?.response?.data?.msg) {
      toast.error(error?.response?.data?.msg);
    } else {
      toast.error("مشکلی وجود دارد.");
      console.log(error);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          height: "92px",
          bgcolor: "background.element",
          p: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {order?.tracking_code}
          </Typography>
          <Box
            onClick={() => setDrawerVisibility(0)}
            sx={{
              width: "44px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "icon.main",
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
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            جزیات سفارش
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          py: "0px",
          bgcolor: "background.main",
        }}
      >
        <Box
          sx={{
            p: "25px 30px 0 30px",
            bgcolor: "background.main",
          }}
        >
          <Box
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "8px",
              overflow: "hidden",
              mb: "10px",
              position: "relative",
            }}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_SERVER +
                "/" +
                order?.product?.brand?.icon
              }
              alt="avatar"
              fill
            />
          </Box>
          <Box
            sx={{
              mb: "10px",
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {order?.product?.title}
            </Typography>
          </Box>
          {tags?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                columnGap: "10px",
                rowGap: "5px",
                mb: "10px",
              }}
            >
              {tags.slice(0, showAll ? tags.length : 2).map((tag, index) => (
                <Box
                  key={index}
                  sx={{
                    px: "5px",
                    bgcolor: "background.element",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "28px",
                    height: "28px",
                    margin: "2px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {tag?.title}
                  </Typography>
                </Box>
              ))}

              {tags.length > 2 && !showAll && (
                <Box
                  onClick={handleToggle}
                  sx={{
                    px: "5px",
                    background: "#F2F4F7",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "28px",
                    height: "28px",
                    cursor: "pointer",
                    margin: "2px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    ...
                  </Typography>
                </Box>
              )}
            </Box>
          )}
          <Box
            sx={{
              py: "15px",
              mb: "20px",
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {order?.product?.shop?.title}
              </Typography>
              <Box
                sx={{
                  mx: 0.75,
                  display: "flex",
                }}
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_SERVER +
                    "/" +
                    order?.product?.shop?.image
                  }
                  alt="avatar"
                  width={16}
                  height={16}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                شماره پیگیری
              </Typography>
              <CopyCode code={order?.tracking_code || ""} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                تاریخ
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {jalaliDate(order?.date_created, "DD MMMM - HH:SS")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                قیمت
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    border: "0.5px solid",
                    borderColor: "border.main",
                    borderRadius: "5px",
                    padding: "0 3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: 0.75,
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {order?.quantity}
                  </Typography>
                  <Box
                    sx={{
                      mr: 0.5,
                      color: "icon.main",
                    }}
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75 1.25L1.25 7.75M1.25 1.25L7.75 7.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {ThousandSeparator(order?.product?.price)}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                مبلغ پرداختی
              </Typography>
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {ThousandSeparator(order?.final_price)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Box
              sx={{
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: "text.content",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                کد فعالسازی
              </Typography>
            </Box>
            <Box
              sx={{
                height: "40px",
                bgcolor: "background.element",
                borderRadius: "8px 0 0 8px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CopyText text={order?.activation_code} />
              <Box
                sx={{
                  position: "absolute",
                  borderRadius: "0 8px 8px 0",
                  background: "#9FE870",
                  width: "4px",
                  height: "100%",
                  right: "-4px",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            onClick={() => setIsProgressBarOpen(!isProgressBarOpen)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "10px",
              cursor: "pointer",
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
                  width: "36px",
                  height: "36px",
                  bgcolor: "background.element",
                  color: "icon.main",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "14px",
                  fontWeight: "600",
                  mx: 1,
                }}
              >
                نوار پیشرفت
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
                  mx: 2,
                }}
              >
                <OrderBadge status={order?.status} />
              </Box>
              <Box
                sx={{
                  height: "30px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "icon.main",
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
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            px: "10px",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: isProgressBarOpen ? "block" : "none",
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: "border.main",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: "15px",
                borderBottom: "0.5px solid",
                borderBottomColor: "border.main",
              }}
            >
              <Box
                sx={{
                  mt: "10px",
                  mb: 0.75,
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  در حال پردازش
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  columnGap: "3px",
                  direction: "ltr",
                }}
              >
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "10px 0 0 10px",
                    bgcolor: "#FFDA44",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    bgcolor: "background.secondary",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    bgcolor: "background.secondary",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "0 10px 10px",
                    bgcolor: "background.secondary",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  mb: "30px",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  در حال بررسی سفارش
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1.5,
                  mb: "20px",
                  border: "0.5px solid",
                  borderColor: "border.main",
                  borderRadius: "65px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                      color: "icon.main",
                    }}
                  >
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 9H1.5M14.5 1V5M6.5 1V5M6.3 21H14.7C16.3802 21 17.2202 21 17.862 20.673C18.4265 20.3854 18.8854 19.9265 19.173 19.362C19.5 18.7202 19.5 17.8802 19.5 16.2V7.8C19.5 6.11984 19.5 5.27976 19.173 4.63803C18.8854 4.07354 18.4265 3.6146 17.862 3.32698C17.2202 3 16.3802 3 14.7 3H6.3C4.61984 3 3.77976 3 3.13803 3.32698C2.57354 3.6146 2.1146 4.07354 1.82698 4.63803C1.5 5.27976 1.5 6.11984 1.5 7.8V16.2C1.5 17.8802 1.5 18.7202 1.82698 19.362C2.1146 19.9265 2.57354 20.3854 3.13803 20.673C3.77976 21 4.61984 21 6.3 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mx: 0.75,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {`${jalaliDate(
                        order?.last_updated,
                        "DD MMMM ، "
                      )} ${convertToTehranTime(order?.last_updated)} ${
                        parseInt(jalaliDate(order?.last_updated, "H") + 3) > 12
                          ? "عصر"
                          : "صبح"
                      }`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    width: "100%",
                    height: "44px",
                    bgcolor: "other.main",
                    borderRadius: "5px",
                    color: "navigation.main",
                    "&:hover": {
                      bgcolor: "other.main",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "navigation.main",
                    }}
                  >
                    پیگیری سفارش
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {orderType === "buy" && <Box
          sx={{
            p: "0 30px",
          }}
        >
          <Box>
            <Box
              onClick={() => setIsPaymentDetailsOpen(!isPaymentDetailsOpen)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
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
                    width: "36px",
                    height: "36px",
                    bgcolor: "background.element",
                    color: "icon.main",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                      d="M4.5 4.5H4.51M15.5 4.5H15.51M4.5 15.5H4.51M11 11H11.01M15.5 15.5H15.51M15 19H19V15M12 14.5V19M19 12H14.5M13.6 8H17.4C17.9601 8 18.2401 8 18.454 7.89101C18.6422 7.79513 18.7951 7.64215 18.891 7.45399C19 7.24008 19 6.96005 19 6.4V2.6C19 2.03995 19 1.75992 18.891 1.54601C18.7951 1.35785 18.6422 1.20487 18.454 1.10899C18.2401 1 17.9601 1 17.4 1H13.6C13.0399 1 12.7599 1 12.546 1.10899C12.3578 1.20487 12.2049 1.35785 12.109 1.54601C12 1.75992 12 2.03995 12 2.6V6.4C12 6.96005 12 7.24008 12.109 7.45399C12.2049 7.64215 12.3578 7.79513 12.546 7.89101C12.7599 8 13.0399 8 13.6 8ZM2.6 8H6.4C6.96005 8 7.24008 8 7.45399 7.89101C7.64215 7.79513 7.79513 7.64215 7.89101 7.45399C8 7.24008 8 6.96005 8 6.4V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H2.6C2.03995 1 1.75992 1 1.54601 1.10899C1.35785 1.20487 1.20487 1.35785 1.10899 1.54601C1 1.75992 1 2.03995 1 2.6V6.4C1 6.96005 1 7.24008 1.10899 7.45399C1.20487 7.64215 1.35785 7.79513 1.54601 7.89101C1.75992 8 2.03995 8 2.6 8ZM2.6 19H6.4C6.96005 19 7.24008 19 7.45399 18.891C7.64215 18.7951 7.79513 18.6422 7.89101 18.454C8 18.2401 8 17.9601 8 17.4V13.6C8 13.0399 8 12.7599 7.89101 12.546C7.79513 12.3578 7.64215 12.2049 7.45399 12.109C7.24008 12 6.96005 12 6.4 12H2.6C2.03995 12 1.75992 12 1.54601 12.109C1.35785 12.2049 1.20487 12.3578 1.10899 12.546C1 12.7599 1 13.0399 1 13.6V17.4C1 17.9601 1 18.2401 1.10899 18.454C1.20487 18.6422 1.35785 18.7951 1.54601 18.891C1.75992 19 2.03995 19 2.6 19Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "14px",
                    fontWeight: "600",
                    mx: 1,
                  }}
                >
                  جزئیات پرداخت
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "icon.main",
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
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>}
        <Box
          sx={{
            px: "10px",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: isPaymentDetailsOpen ? "block" : "none",
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: "border.main",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: "15px",
                borderBottom: "0.5px solid",
                borderBottomColor: "border.main",
              }}
            >
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 0.75,
                }}
              >
                <Box
                  sx={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "100%",
                    background: "#06D6A0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L6 12L1 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  پرداخت موفق
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    px: "20px",
                    height: "26px",
                    bgcolor: "button.info",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#175CD3",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "50px",
                  }}
                >
                  {jalaliDate(order?.date_created, "DD MMMM - HH:SS")}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  mb: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    قیمت جزء
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        border: "0.5px solid",
                        borderColor: "border.main",
                        borderRadius: "5px",
                        padding: "0 3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: 0.75,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "icon.main",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        1
                      </Typography>
                      <Box
                        sx={{
                          mr: 0.5,
                          color: "icon.main",
                        }}
                      >
                        <svg
                          width="7"
                          height="8"
                          viewBox="0 0 7 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.20817 1.29199L0.791504 6.70866M0.791504 1.29199L6.20817 6.70866"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      230,000
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    قیمت کل
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    230,000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    تخفیف
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        border: "0.5px solid",
                        borderColor: "border.main",
                        borderRadius: "5px",
                        padding: "0 3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: 0.75,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "icon.main",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        10
                      </Typography>
                      <Box
                        sx={{
                          mr: 0.5,
                          color: "icon.main",
                        }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29134 1.70898L1.70801 9.29232M3.06217 2.52148C3.06217 2.82064 2.81966 3.06315 2.52051 3.06315C2.22135 3.06315 1.97884 2.82064 1.97884 2.52148C1.97884 2.22233 2.22135 1.97982 2.52051 1.97982C2.81966 1.97982 3.06217 2.22233 3.06217 2.52148ZM9.02051 8.47982C9.02051 8.77897 8.778 9.02148 8.47884 9.02148C8.17969 9.02148 7.93717 8.77897 7.93717 8.47982C7.93717 8.18066 8.17969 7.93815 8.47884 7.93815C8.778 7.93815 9.02051 8.18066 9.02051 8.47982Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "500",
                        direction: "ltr",
                      }}
                    >
                      -23,000
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    کارمزد
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        border: "0.5px solid",
                        borderColor: "border.main",
                        borderRadius: "5px",
                        padding: "0 3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: 0.75,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "icon.main",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        0
                      </Typography>
                      <Box
                        sx={{
                          mr: 0.5,
                          color: "icon.main",
                        }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29134 1.70898L1.70801 9.29232M3.06217 2.52148C3.06217 2.82064 2.81966 3.06315 2.52051 3.06315C2.22135 3.06315 1.97884 2.82064 1.97884 2.52148C1.97884 2.22233 2.22135 1.97982 2.52051 1.97982C2.81966 1.97982 3.06217 2.22233 3.06217 2.52148ZM9.02051 8.47982C9.02051 8.77897 8.778 9.02148 8.47884 9.02148C8.17969 9.02148 7.93717 8.77897 7.93717 8.47982C7.93717 8.18066 8.17969 7.93815 8.47884 7.93815C8.778 7.93815 9.02051 8.18066 9.02051 8.47982Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "500",
                        direction: "ltr",
                      }}
                    >
                      -23,000
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    py: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    مبلغ پرداختی
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    220,000 تومان
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                p: "15px",
                bgcolor: "background.element",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    روش پرداخت
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      پرداخت امن زیبال
                    </Typography>
                    <Box
                      sx={{
                        mx: 0.5,
                      }}
                    >
                      <svg
                        width="30"
                        height="23"
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.5887 4.98226L29.762 10.1556C30.0795 10.4731 30.0795 10.9774 29.762 11.2762L21.451 19.6059C21.1335 19.9234 20.6293 19.9234 20.3304 19.6059L15.1571 14.4325C14.8396 14.115 14.8396 13.6108 15.1571 13.3119L23.4681 4.98226C23.7856 4.66477 24.2898 4.66477 24.5887 4.98226Z"
                          fill="#3A3AE4"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.5873 16.0198L15.6043 18.0555C15.9218 18.373 15.9218 18.8773 15.6043 19.1761L11.9998 22.762C11.6823 23.0795 11.178 23.0795 10.8792 22.762L8.86215 20.7263C8.54465 20.4088 8.54465 19.9045 8.86215 19.6057L12.4667 16.0011C12.7655 15.7023 13.2698 15.7023 13.5873 16.0198Z"
                          fill="#3A3AE4"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.15466 18.0367L0.981288 12.8633C0.663789 12.5458 0.663789 12.0416 0.981288 11.7427L9.31097 3.39437C9.62847 3.07688 10.1327 3.07688 10.4316 3.39437L15.6049 8.56774C15.9224 8.88524 15.9224 9.3895 15.6049 9.68833L7.29392 18.018C6.97642 18.3542 6.47216 18.3542 6.15466 18.0367Z"
                          fill="#3A3AE4"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.1741 6.99899L15.1571 4.96326C14.8396 4.64576 14.8396 4.14149 15.1571 3.84267L18.7616 0.238124C19.0791 -0.0793748 19.5834 -0.0793748 19.8822 0.238124L21.8993 2.27385C22.2168 2.59135 22.2168 3.09562 21.8993 3.39444L18.2947 6.99899C17.9959 7.31649 17.4916 7.31649 17.1741 6.99899Z"
                          fill="#3A3AE4"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    210,000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      کیف پول
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    10,000
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: "0 30px",
          }}
        >
          <Box>
            <Box
              onClick={() => setIsProtectionOpen(!isProtectionOpen)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
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
                    width: "36px",
                    height: "36px",
                    bgcolor: "background.element",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "icon.main",
                  }}
                >
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10.5004L8 12.5004L12.5 8.00036M17 11.0004C17 15.9088 11.646 19.4788 9.69799 20.6152C9.4766 20.7444 9.3659 20.809 9.20968 20.8425C9.08844 20.8685 8.91156 20.8685 8.79032 20.8425C8.6341 20.809 8.5234 20.7444 8.30201 20.6152C6.35396 19.4788 1 15.9088 1 11.0004V6.21796C1 5.41845 1 5.01869 1.13076 4.67506C1.24627 4.3715 1.43398 4.10064 1.67766 3.88589C1.9535 3.6428 2.3278 3.50243 3.0764 3.22171L8.4382 1.21103C8.6461 1.13307 8.75005 1.09409 8.85698 1.07864C8.95184 1.06493 9.04816 1.06493 9.14302 1.07864C9.24995 1.09409 9.3539 1.13307 9.5618 1.21103L14.9236 3.22171C15.6722 3.50243 16.0465 3.6428 16.3223 3.88589C16.566 4.10064 16.7537 4.3715 16.8692 4.67506C17 5.01869 17 5.41845 17 6.21796V11.0004Z"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "14px",
                    fontWeight: "600",
                    mx: 1,
                  }}
                >
                  ضمانت
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "icon.main",
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
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            px: "10px",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: isProtectionOpen ? "block" : "none",
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: "border.main",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: "15px",
                borderBottom: "0.5px solid",
                borderBottomColor: "border.main",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  در برابر کلاهبرداری و تقلب ایمن بمانید
                </Typography>
              </Box>
              <ol
                style={{
                  padding: "0 15px",
                  listStyleType: "disc",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    پس از تایید سفارش توسط فروشنده خریدار تا مدت تحت پوشش فرصت
                    دارد کالای دریافتی را برسی کند و از اصالت آن مطمئن شود
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    در این مدت مبلغ پرداختی توسط ما قفل میشود و فروشنده قادر به
                    دریافت آن نیست
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    اگر در این مدت مشکلی گزارش نشود،فرض میکنیم هیچ مشکلی وجود
                    ندارد و مبلغ به فروشنده پرداخت میشود
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    ما در نونز سعی داریم از کاربران خود در مقابل کلاهبرداری و
                    تقلب محافظت کنیم و شما موظف هستید درباره امنیت معامله بدانید
                    تا تجربه ای بی نظیر از خرید و فروش را با اطمینان خاطر و
                    آرامش کامل تجربه کنید.
                  </Typography>
                </li>
              </ol>
            </Box>
            <Box
              sx={{
                p: "15px",
                bgcolor: "background.element",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
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
                      color: "icon.main",
                    }}
                  >
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10.5004L8 12.5004L12.5 8.00036M17 11.0004C17 15.9088 11.646 19.4788 9.69799 20.6152C9.4766 20.7444 9.3659 20.809 9.20968 20.8425C9.08844 20.8685 8.91156 20.8685 8.79032 20.8425C8.6341 20.809 8.5234 20.7444 8.30201 20.6152C6.35396 19.4788 1 15.9088 1 11.0004V6.21796C1 5.41845 1 5.01869 1.13076 4.67506C1.24627 4.3715 1.43398 4.10064 1.67766 3.88589C1.9535 3.6428 2.3278 3.50243 3.0764 3.22171L8.4382 1.21103C8.6461 1.13307 8.75005 1.09409 8.85698 1.07864C8.95184 1.06493 9.04816 1.06493 9.14302 1.07864C9.24995 1.09409 9.3539 1.13307 9.5618 1.21103L14.9236 3.22171C15.6722 3.50243 16.0465 3.6428 16.3223 3.88589C16.566 4.10064 16.7537 4.3715 16.8692 4.67506C17 5.01869 17 5.41845 17 6.21796V11.0004Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      mx: 0.75,
                      color: "currentColor",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    جزییات ضمانت
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "currentColor",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    پوشش زمانی :
                  </Typography>
                  <Typography
                    sx={{
                      color: "currentColor",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    24 ساعت
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "currentColor",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    اعتبار :
                  </Typography>
                  <Typography
                    sx={{
                      color: "currentColor",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    02:23
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {orderType === "buy" && <Box
          sx={{
            p: "0 30px",
          }}
        >
          <Box>
            <Box
              onClick={() => setIsUserGuideOpen(!isUserGuideOpen)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
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
                    width: "36px",
                    height: "36px",
                    bgcolor: "background.element",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "icon.main",
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
                      d="M11 19L10.8999 18.8499C10.2053 17.808 9.85798 17.287 9.3991 16.9098C8.99286 16.5759 8.52476 16.3254 8.02161 16.1726C7.45325 16 6.82711 16 5.57482 16H4.2C3.07989 16 2.51984 16 2.09202 15.782C1.71569 15.5903 1.40973 15.2843 1.21799 14.908C1 14.4802 1 13.9201 1 12.8V4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1H4.6C6.84021 1 7.96031 1 8.81596 1.43597C9.56861 1.81947 10.1805 2.43139 10.564 3.18404C11 4.03968 11 5.15979 11 7.4M11 19V7.4M11 19L11.1001 18.8499C11.7947 17.808 12.142 17.287 12.6009 16.9098C13.0071 16.5759 13.4752 16.3254 13.9784 16.1726C14.5467 16 15.1729 16 16.4252 16H17.8C18.9201 16 19.4802 16 19.908 15.782C20.2843 15.5903 20.5903 15.2843 20.782 14.908C21 14.4802 21 13.9201 21 12.8V4.2C21 3.07989 21 2.51984 20.782 2.09202C20.5903 1.71569 20.2843 1.40973 19.908 1.21799C19.4802 1 18.9201 1 17.8 1H17.4C15.1598 1 14.0397 1 13.184 1.43597C12.4314 1.81947 11.8195 2.43139 11.436 3.18404C11 4.03968 11 5.15979 11 7.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "14px",
                    fontWeight: "600",
                    mx: 1,
                  }}
                >
                  راهنمای استفاده
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "icon.main",
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
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>}
        <Box
          sx={{
            px: "10px",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: isUserGuideOpen ? "block" : "none",
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: "border.main",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: "15px",
              }}
            ></Box>
          </Box>
        </Box>
        {orderType === "buy" ? (
          <Box>
            <Box
              sx={{
                p: "0 30px",
              }}
            >
              <Box
                sx={{
                  py: "10px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "text.content",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    آیا محصول را دریافت کرده اید ؟
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "text.content",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    اگر محصول را دریافت کرده اید تایید کنید،اگر مشکلی وجود دارد
                    درخواست داوری ارسال کنید
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                p: "0 30px",
              }}
            >
              <Box
                sx={{
                  py: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <Box>
                    <Button
                      onClick={handleComplete}
                      sx={{
                        width: "100%",
                        height: "44px",
                        borderRadius: "5px",
                        bgcolor: "button.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ":hover": {
                          bgcolor: "button.main",
                        },
                      }}
                    >
                      {orderCompleteLoading ? (
                        <BeatLoader size={10} color="white" />
                      ) : (
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          بله،تایید میکنم
                        </Typography>
                      )}
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={handleJudgementRequest}
                      sx={{
                        width: "100%",
                        height: "44px",
                        border: "0.5px solid",
                        borderColor: "border.main",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {judgeLoading ? (
                        <BeatLoader
                          size={10}
                          color="var(--mui-palette-text-main)"
                        />
                      ) : (
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          به داور نیاز دارم
                        </Typography>
                      )}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                p: "0 30px",
                py:2,
              }}
            >
                  <Box>
                    <Button
                      onClick={handleCancelOrder}
                      sx={{
                        width: "100%",
                        height: "44px",
                        borderRadius: "5px",
                        bgcolor: "#E87070",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb:1,
                        ":hover": {
                          bgcolor: "#E87070",
                        },
                      }}
                    >
                      {orderCancelLoading ? (
                        <BeatLoader size={10} color="white" />
                      ) : (
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          لغو سفارش
                        </Typography>
                      )}
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={handleJudgementRequest}
                      sx={{
                        width: "100%",
                        height: "44px",
                        border: "0.5px solid",
                        borderColor: "border.main",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {judgeLoading ? (
                        <BeatLoader
                          size={10}
                          color="var(--mui-palette-text-main)"
                        />
                      ) : (
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          به داور نیاز دارم
                        </Typography>
                      )}
                    </Button>
                  </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OrderPending;
