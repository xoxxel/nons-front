"use client";
import { Box, Typography } from "@mui/material";
import NotifCard from "./notifCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NotificationsEmptyState from "../emptyState";

const NotificationsMain = ({
  notifications,
}: {
  notifications: NotificationModel[];
}) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("type");
  const [filteredNotifs, setFilteredNotifs] = useState<NotificationModel[]>([]);
  const [isFiltered,setIsFiltered] = useState(false)

  useEffect(() => {
    if (filter) {
      setFilteredNotifs(
        notifications?.filter(
          (notification) => notification?.notification_type === filter
        )
      );
      setIsFiltered(true)
    }
  }, [searchParams]);

  return (
    <Box>
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
            fontWeight: "600",
            my: 3,
            fontSize: "16px",
          }}
        >
          مشاهده همه
        </Typography>
        <Box sx={{color:"text.main",ml:2}}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6.5C12.5523 6.5 13 6.05228 13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5C11 6.05228 11.4477 6.5 12 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 20.5C12.5523 20.5 13 20.0523 13 19.5C13 18.9477 12.5523 18.5 12 18.5C11.4477 18.5 11 18.9477 11 19.5C11 20.0523 11.4477 20.5 12 20.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: { lg: "30px 25px", md: "15px 12px" },
          bgcolor: "background.element",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "0.5px solid",
          borderColor: "border.secondary",
        }}
      >
        {!filter
          ? notifications?.length > 0 ? notifications?.map((notification) => (
              <NotifCard
                notification={notification}
                notRead={!notification?.is_seen}
              />
            )) : <NotificationsEmptyState />
          : isFiltered && filteredNotifs?.length > 0 ?  filteredNotifs?.map((notification) => (
              <NotifCard
                notification={notification}
                notRead={!notification?.is_seen}
              />
            )) : <NotificationsEmptyState />}
      </Box>
    </Box>
  );
};

export default NotificationsMain;
