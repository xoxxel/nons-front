"use client";

import { UserContext } from "@/context/UserProvider";
import ChatRoomModel from "@/models/ChatRoom";
import getTimeAgo from "@/utils/getTimeAgo";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const MessageCard = ({
  notRead = false,
  message,
  arbitration
}: {
  notRead?: boolean;
  message: ChatRoomModel;
  arbitration?: boolean
}) => {
  const { user } = useContext(UserContext);
  const [contact, setContact] = useState<ChatRoomModel["seller"] | null>(
    null
  );

  const [userType, setUserType] = useState<"seller" | "customer" | null>()

  useEffect(() => {
    // Determine the contact based on the user role
    if (user?.id === message?.seller?.id) {
      setContact(message?.customer);
      setUserType("customer")
    } else {
      setContact(message?.seller);
      setUserType("seller")
    }
  }, [user, message]);


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: notRead ? "hover.main" : "transparent",
        p: "10px",
        borderRadius: "12px",
        height: "100%",
        width: "100%",
      }}
    >
      {contact && (
        <>
          <Box sx={{ position: "relative" }}>
            <Image
              src={(!contact?.image && !contact?.shop?.image) || arbitration ? "/images/boredape.png" : `${process.env.NEXT_PUBLIC_SERVER}/${userType === "seller" ? contact?.shop?.image : contact?.image}`}
              width={48}
              height={48}
              alt="sender"
              style={{ borderRadius: "50%", pointerEvents: "none", marginLeft: "10px" }}
            />
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: contact?.is_online
                  ? "primary.main"
                  : "primary.grey.700",
                borderRadius: "100px", position: "absolute", bottom: "19px", right: "1.5px",
              }}
            ></Box>
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
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                {arbitration ? `فروشگاه ${message?.seller?.shop?.name} + ${message?.customer?.name}` : userType === "seller" ? contact?.shop?.name : contact?.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "end"
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "text.secondary",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getTimeAgo(message?.last_message?.timestamp?.toString())}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {message?.last_message?.sender?.id == user?.id && (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0px" }}
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2378 3L4.73779 8.5L2.23779 6"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {message?.last_message?.is_seen && (
                    <svg
                      style={{ marginRight: "-6px" }}
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2378 3L4.73779 8.5L2.23779 6"
                        stroke="#666666"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </Box>
              )}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "16px",
                    fontWeight: "400",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap", width: "80%"

                  }}
                >
                  {message?.last_message?.content}
                </Typography>
                {notRead && (
                  <Box
                    sx={{
                      px: "10px",
                      py: "4px",
                      color: "white",
                      bgcolor: "button.main",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px" }}>
                      {message.unseen_messages}
                    </Typography>
                  </Box>
                )}</Box>
            </Box>
          </Box>

        </>
      )}

    </Box>
  );
};

export default MessageCard;
