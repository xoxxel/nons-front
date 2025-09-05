"use client";

import { Box, Container } from "@mui/material";
import MobileNotifCard from "./mobileNotifCard";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import QuickAccess from "./quickAccess";
import NotificationsEmptyState from "../emptyState";
import axios from "axios";
import { UserContext } from "@/context/UserProvider";
import Cookies from "@/utils/cookie";

const MobileNotifications = ({
  notifications,
}: {
  notifications: NotificationModel[];
}) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("type");
  const [filteredNotifs, setFilteredNotifs] = useState<NotificationModel[]>();
  const [isAllNotifSeen, setIsAllNotifSeen] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleAllSeen = () => {
    if(!isAllNotifSeen){
      setIsAllNotifSeen(true)
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/notifications/make-all-seen/`,
        {},
        {headers: {Authorization: `Bearer ${Cookies?.get("access")}`}}
      )
      .then(() => setUser((prev) => ({ ...prev, notif_count: 0 }))).catch(()=> setIsAllNotifSeen(false));}
  };

  useEffect(() => {
    if (filter) {
      setFilteredNotifs(
        notifications?.filter(
          (notification) => notification?.notification_type === filter
        )
      );
    }
  }, [searchParams]);

  return (
    <Container sx={{ display: { md: "none", xs: "block" } }}>
      {/* <Box
        sx={{
          bgcolor: "button.main",
          borderRadius: "3px",
          display: "flex",
          alignItems: "center",
          p: "2.5px 5px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", py: 0.3 }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.875 2.5H4.875C3.8249 2.5 3.29985 2.5 2.89877 2.70436C2.54596 2.88413 2.25913 3.17096 2.07936 3.52377C1.875 3.92485 1.875 4.4499 1.875 5.5V10.125C1.875 11.1751 1.875 11.7001 2.07936 12.1012C2.25913 12.454 2.54596 12.7409 2.89877 12.9206C3.29985 13.125 3.8249 13.125 4.875 13.125H9.5C10.5501 13.125 11.0751 13.125 11.4762 12.9206C11.829 12.7409 12.1159 12.454 12.2956 12.1012C12.5 11.7001 12.5 11.1751 12.5 10.125V8.125M12.5758 2.42417C13.3081 3.15641 13.3081 4.34359 12.5758 5.07583C11.8436 5.80806 10.6564 5.80806 9.92417 5.07583C9.19194 4.34359 9.19194 3.15641 9.92417 2.42417C10.6564 1.69194 11.8436 1.69194 12.5758 2.42417Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "500", color: "white" }}
          >
            علامت گذاری همه به عنوان خوانده شده
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            borderRight: "0.5px solid white",
            pr: 1,
            pl: 0.5,
          }}
        >
          <Typography
            sx={{ fontSize: "13px", fontWeight: "500", color: "white" }}
          >
            اعمال
          </Typography>
        </Box>
      </Box> */}
      {(notifications?.length > 0 && !filter) ||
      (filter && filteredNotifs && filteredNotifs?.length > 0) ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            mb: 20,
            mt: "10px",
          }}
        >
          {!filter
            ? notifications?.map((notification) => (
                <MobileNotifCard
                  notification={notification}
                  notRead={!notification?.is_seen && !isAllNotifSeen}
                />
              ))
            : filteredNotifs?.map((notification) => (
                <MobileNotifCard
                  notification={notification}
                  notRead={!notification?.is_seen && !isAllNotifSeen}
                />
              ))}
        </Box>
      ) : (
        <NotificationsEmptyState />
      )}
      <QuickAccess onAllSeen={handleAllSeen} />
    </Container>
  );
};

export default MobileNotifications;
