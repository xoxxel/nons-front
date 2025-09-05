"use client";

import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import MessageCard from "./messageCard";
import ChatRoomModel from "@/models/ChatRoom";
import Chat from "@/components/chat";
import { UserContext } from "@/context/UserProvider";
import MessagesEmptyState from "./emptyState";
import { useRouter, useSearchParams } from "next/navigation";
import MessagesSearch from "./messagesSearch";
import MessagesSearchSkeleton from "@/components/skeletons/messagesSearch";
import MessageCardSkeleton from "@/components/skeletons/messageCard";


const ProfileMessages = ({ messages, arbitration }: { messages: ChatRoomModel[], arbitration?: boolean }) => {
  const roomParams = useSearchParams().get("room")
  const [activeChatRoom, setActiveChatRoom] = useState<string>(roomParams || "");
  const [messageList, setMessageList] = useState<ChatRoomModel[]>(messages);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { user } = useContext(UserContext);
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const filterMessages = (query: string) => {
    if (!query) {
      setMessageList(messages);
      return;
    }

    const filteredMessages = messages.filter((m) => {
      const contact = m.customer.id === user.id ? m.seller : m.customer;
      return contact?.name?.toLowerCase()?.includes(query.toLowerCase());
    });

    setMessageList(filteredMessages);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterMessages(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      filterMessages(searchQuery);
    }
  };

  useEffect(() => {
    setMessageList(messages);
  }, [messages]);

  useEffect(() => {
    // if (!activeChatRoom) {
    //   router.push(`/profile/messages`)
    // }
  }, [activeChatRoom])

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mt: { md: 5, xs: 0 } }}>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "29px",
              fontWeight: "600",
              mt: 5,
            }}
          >
            {arbitration ? "داوری" : "پیام ها"}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
            <Link href="/">
              <Typography sx={{ color: "button.main" }}>{arbitration ? "home" : "dashboard"}</Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary" }}>{arbitration ? "arbitration" : "messages"}</Typography>
          </Box>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item md={4} xs={12} sx={{ display: { md: "flex", xs: activeChatRoom ? "none" : "flex" } }}>
            <Box
              sx={{
                bgcolor: { md: "background.element", xs: "transparent" },
                width: "100%",
                borderRadius: "12px",
                pt: messages?.length > 0 ? 5 : { md: 5, xs: 0 },
                pb: messages?.length > 0 ? 7 : { md: 7, xs: 0 },
                border: { md: "0.5px solid", xs: "none" },
                borderColor: { md: "border.secondary", xs: "border.secondary" },
                height: "fit-content"
              }}
            >
              {loading ?
                <>
                  <MessagesSearchSkeleton />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      px: 2,
                      mt: 6.5,
                    }}
                  >
                    <MessageCardSkeleton />
                    <MessageCardSkeleton />
                    <MessageCardSkeleton />
                  </Box>
                </>
                :
                messages?.length > 0 ? (
                  <>
                    <MessagesSearch filterMessages={filterMessages} handleKeyPress={handleKeyPress} handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        px: 2,
                        mt: 6.5,
                      }}
                    >
                      {messageList.map((message) => (
                        <Box
                          key={message.room_name}
                          onClick={() => {
                            if (!arbitration)
                              router.push(`/profile/messages/?room=${message.room_name}`);
                            setActiveChatRoom(message.room_name);
                          }}
                          sx={{ cursor: "pointer", overflow: "hidden" }}
                        >
                          <MessageCard
                            arbitration={arbitration ? true : false}
                            notRead={
                              message.last_message?.sender?.id == user?.id
                                ? false
                                : message?.unseen_messages > 0
                                  ? true
                                  : false
                            }
                            message={message}
                          />
                        </Box>
                      ))}
                    </Box>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: { md: "flex", xs: "none" },
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      گفتگویی وجود ندارد
                    </Typography>
                  </Box>
                )}
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            {messages?.length > 0 ? (
              activeChatRoom ? (
                <Box>
                  <Chat
                    handleCloseChat={() => { setActiveChatRoom(""); }}
                    room_name={activeChatRoom}
                    arbitration={arbitration || false}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    minHeight: { md: "500px", xs: "300px" },
                    bgcolor: { md: "background.element", xs: "transparent" },
                    borderRadius: { md: "12px", xs: "0px" },
                    border: { md: "0.5px solid", xs: "none" },
                    borderColor: { md: "border.secondary", xs: "transparent" },
                    display: { md: "flex", xs: "none" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: "text.secondary" }}>
                    هیچ گفتگویی انتخاب نشده
                  </Typography>
                </Box>
              )
            ) : (
              <Box
                sx={{
                  width: "100%",
                  bgcolor: { md: "background.element", xs: "transparent" },
                  borderRadius: { md: "12px", xs: "0px" },
                  border: { md: "0.5px solid", xs: "none" },
                  borderColor: { md: "border.main", xs: "none" },
                  py: 4,
                }}
              >
                <MessagesEmptyState />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileMessages;
