"use client";

import { UserContext } from "@/context/UserProvider";
import convertToTehranTime from "@/utils/convertToTehranTime";
import Cookies from "@/utils/cookie";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";

const NotifCard = ({
  notRead,
  notification,
}: {
  notRead?: boolean;
  notification: NotificationModel;
}) => {
  const notifDate = convertToTehranTime(notification?.date_created);
  const [isSeen, setIsSeen] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    if (notRead && !isSeen) {
      setIsSeen(true);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/user/notifications/make-seen/${notification?.id}`,
          {},
          { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
        )
        .then(() => {
          setUser((prev) => ({ ...prev, notif_count: prev?.notif_count - 1 }));
        })
        .catch(() => setIsSeen(false));
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: notRead && !isSeen ? "hover.main" : "transparent",
        p: "10px",
        borderRadius: "12px",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", gap: "10px", width: "90%" }}>
        <Box>
          <Image
            src={
              notification?.sender?.image
                ? `${process.env.NEXT_PUBLIC_SERVER}/${notification?.sender?.image}`
                : "/images/boredape.png"
            }
            width={48}
            height={48}
            alt="sender"
            style={{ borderRadius: "50%", pointerEvents: "none" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "16px",
              fontWeight: "600",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {notification?.sender?.name ?? "وبسایت نونز"}
          </Typography>
            <p
              className="notif_text"
              style={{
                color: "var(--mui-palette-icon-main)",
                fontSize: "14px",
                fontWeight: "400",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              dangerouslySetInnerHTML={{ __html: notification?.text }}
            />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box
          sx={{
            width: "7px",
            height: "7px",
            bgcolor: notRead && !isSeen ? "button.main" : "transparent",
            borderRadius: "50%",
          }}
        ></Box>
        <Typography
          sx={{ fontSize: "13px", fontWeight: "400", color: "text.secondary" }}
        >
          {notifDate === convertToTehranTime(new Date().toISOString())
            ? "اکنون"
            : notifDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotifCard;
