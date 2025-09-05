import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CopyCode from "../copyCode";
import OrderModel from "@/models/Order";
import ThousandSeparator from "@/utils/thousandSeparator";
import OrderBadge from "../orderBadge";
import jalaliDate from "@/utils/jalaliDate";
import CopyText from "../copyText";

const OrderCard = ({
  open,
  order,
  isOrderSeller,
  setDrawerVisibility,
}: {
  open?: boolean;
  order: OrderModel;
  isOrderSeller?: boolean;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const formattedDate = order?.date_created
    ? jalaliDate(order?.date_created, "YYYY/MM/DD")
    : "تاریخ نامشخص";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10%",
        py: "12px",
        px: "10px",
      }}
    >
      <Box
        sx={{
          width: open ? "35%" : "30%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            sx={{
              minWidth: "36px",
              height: "36px",
              borderRadius: "7px",
              bgcolor: "background.secondary",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position:"relative",
              overflow:"hidden"
            }}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_SERVER +
                "/" +
                order?.product?.brand?.icon
              }
              alt={order?.product?.brand?.title || ""}
              fill
            />
            {/* <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12.5"
                r="10.5"
                fill="url(#paint0_linear_4983_39813)"
              />
              <path
                d="M13.8351 6.99052C14.062 6.5944 13.9264 6.08845 13.5321 5.86046C13.1378 5.63246 12.6342 5.76876 12.4073 6.16489L12.0114 6.85581L11.6156 6.16489C11.3887 5.76876 10.8851 5.63246 10.4908 5.86046C10.0965 6.08845 9.96083 6.5944 10.1878 6.99052L11.061 8.51482L8.29893 13.3362H6.07373C5.6188 13.3362 5.25 13.7067 5.25 14.1637C5.25 14.6208 5.6188 14.9913 6.07373 14.9913H13.8243C13.8923 14.8119 13.9638 14.5041 13.8877 14.2212C13.7733 13.7959 13.35 13.3362 12.6407 13.3362H10.1998L13.8351 6.99052Z"
                fill="white"
              />
              <path
                d="M8.7273 15.9064C8.58676 15.7496 8.27188 15.4991 7.99576 15.4166C7.57475 15.2908 7.25559 15.3697 7.09457 15.4384L6.48099 16.5095C6.25405 16.9056 6.38972 17.4116 6.78401 17.6395C7.1783 17.8675 7.6819 17.7312 7.90884 17.3351L8.7273 15.9064Z"
                fill="white"
              />
              <path
                d="M16.6721 14.9913H17.9263C18.3812 14.9913 18.75 14.6208 18.75 14.1637C18.75 13.7067 18.3812 13.3362 17.9263 13.3362H15.7239L13.2431 9.00581C13.0589 9.18175 12.7055 9.63123 12.6521 10.1408C12.5835 10.796 12.6864 11.3477 12.9953 11.8879C14.0339 13.7042 15.074 15.5197 16.114 17.3351C16.341 17.7312 16.8446 17.8675 17.2389 17.6395C17.6332 17.4116 17.7688 16.9056 17.5419 16.5095L16.6721 14.9913Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4983_39813"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AC9FA" />
                  <stop offset="1" stop-color="#1F65EB" />
                </linearGradient>
              </defs>
            </svg> */}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              className="line-clamp-1"
              sx={{
                color: "text.main",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {order?.product?.title}
            </Typography>
            <CopyCode code={order?.tracking_code || ""} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: open ? "65%" : "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
          <OrderBadge status={order?.status} />
        </Box>
        <Box
          sx={{
            mx: 1,
          }}
        >
          <Typography
            sx={{
              color: "icon.main",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            {ThousandSeparator(order?.final_price || "")}
            {`${isOrderSeller ? "+" : "-"}`}
          </Typography>
        </Box>
        {open && (
          <Box
            sx={{
              mx: 1,
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
                  color: "text.main",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {order?.product?.shop?.title}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "16px",
                  height: "16px",
                  borderRadius: "100%",
                  marginInlineStart: 0.5,
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER}/${order?.product?.shop?.image}`}
                  alt="shop"
                  fill
                />
              </Box>
            </Box>
          </Box>
        )}
        {open && (
          <Box
            sx={{
              mx: 1,
            }}
          >
            <Typography
              sx={{ color: "#027A48", fontSize: "13px", fontWeight: "500" }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "13px",
                  fontWeight: "400",
                  animation: "appearLater 0.2s ease",
                }}
              >
                {formattedDate}
              </Typography>
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            cursor: "pointer",
            color: "icon.main",
            width: "48px",
            height: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
          onClick={()=> setDrawerVisibility(order?.id)}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99967 11.3337C10.4599 11.3337 10.833 10.9606 10.833 10.5003C10.833 10.0401 10.4599 9.66699 9.99967 9.66699C9.53944 9.66699 9.16634 10.0401 9.16634 10.5003C9.16634 10.9606 9.53944 11.3337 9.99967 11.3337Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.833 11.3337C16.2932 11.3337 16.6663 10.9606 16.6663 10.5003C16.6663 10.0401 16.2932 9.66699 15.833 9.66699C15.3728 9.66699 14.9997 10.0401 14.9997 10.5003C14.9997 10.9606 15.3728 11.3337 15.833 11.3337Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16634 11.3337C4.62658 11.3337 4.99967 10.9606 4.99967 10.5003C4.99967 10.0401 4.62658 9.66699 4.16634 9.66699C3.7061 9.66699 3.33301 10.0401 3.33301 10.5003C3.33301 10.9606 3.7061 11.3337 4.16634 11.3337Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCard;
