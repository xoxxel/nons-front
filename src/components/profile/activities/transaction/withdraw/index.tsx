import { Box, Typography } from "@mui/material";
import Badge from "../badge";
import Image from "next/image";
import CopyCode from "../copyCode";
import ThousandSeparator from "@/utils/thousandSeparator";
import ActivityModel from "@/models/Activity";
import jalaliDate from "@/utils/jalaliDate";

const WithdrawingCard = ({
  open,
  activity,
  onDetailClick,
}: {
  open: boolean;
  activity: ActivityModel;
  onDetailClick: (id:number)=>void
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        py: "10px",
        px: "10px",
      }}
    >
      <Box
        sx={{
          width: "25%",
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
            }}
          >
            <svg
              width="14"
              height="19"
              viewBox="0 0 14 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.5V17.5M7 17.5L13 11.5M7 17.5L1 11.5"
                stroke="#FC5D6D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              sx={{
                color: "text.main",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              برداشت
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              {activity?.transaction?.status_change === "direct-withraw" && "واریز به حساب"}
              {activity?.transaction?.status_change === "buy" && "خرید محصول"}
              {activity?.transaction?.status_change === "cancel-sell" && "لغو سفارش"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
          {open && (
        <Box sx={{ mx: 1 }}>
            <Typography
              sx={{
                color: "icon.main",
                fontSize: "13px",
                fontWeight: "400",
                animation: "appearLater 0.2s ease",
              }}
            >
              {jalaliDate(activity?.date_created,"YYYY/MM/DD")}
            </Typography>
        </Box>
          )}
        <Box sx={{ mx: 1 }}>
          <CopyCode code={activity?.code} />
        </Box>
        <Box
          sx={{
            mx: 1,
            width:"80px",
            display:"flex",
            justifyContent:"center",
          }}
        >
          <Badge status={activity?.transaction?.status_transaction} />
        </Box>
        <Box
          sx={{
            mx: 1,
          }}
        >
          <Typography
            sx={{
              color: "#FF6666",
              fontSize: "13px",
              fontWeight: "500",
              direction: "ltr",
            }}
          >
            {`- ${ThousandSeparator(activity?.transaction?.value)}`}
          </Typography>
        </Box>
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
          onClick={()=>onDetailClick(activity?.id)}
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

export default WithdrawingCard;
