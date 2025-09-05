import { Box, Container, CircularProgress, Skeleton } from "@mui/material";
import MessageModel from "@/models/Message";
import { useEffect, useRef, useState } from "react";
import DateBox from "@/components/profile/support/chat/main/date";
import TextChat from "@/components/profile/support/chat/main/text";
import TextChatSkeleton from "@/components/skeletons/textChat";

const MainChat = ({
  textBoxHeight,
  messages,
  userId,
  fLoading, hasProduct
}: {
  textBoxHeight: string;
  messages: MessageModel[];
  userId: number;
  fLoading: boolean,
  hasProduct: boolean
}) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [messageIdsWithDifferentDates, setMessageIdsWithDifferentDates] = useState<number[]>([]);


  const getMessageIdsWithDifferentDates = (messages: MessageModel[]) => {
    const messageIds: number[] = [];
    let lastDate: string | null = null;

    messages?.forEach((message) => {
      if (message.timestamp) {
        const currentDate = message.timestamp.toString().split("T")[0];
        if (currentDate !== lastDate) {
          messageIds.push(message.id);
          lastDate = currentDate;
        }
      }
    });

    return messageIds;
  };


  useEffect(() => {
    setMessageIdsWithDifferentDates(getMessageIdsWithDifferentDates(messages));
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);


  return (
    <Container>
      <Box
        sx={{
          height: `100svh`,
          pt: `calc(${hasProduct ? "155px" : "114px"} + ${textBoxHeight}px)`,

          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <Box
          ref={chatContainerRef}
          sx={{
            height: "100%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {
            fLoading ?
              <>
                <TextChatSkeleton isLast={false} sender="left" />
                <TextChatSkeleton isLast={false} sender="right" />
                <TextChatSkeleton isLast={false} sender="left" />
                <TextChatSkeleton isLast={false} sender="right" />
                <TextChatSkeleton isLast={false} sender="left" />
                <TextChatSkeleton isLast={false} sender="right" />
                <TextChatSkeleton isLast={false} sender="left" /></>
              :
              messages.map((message, index) => (
                <Box key={message.id}>
                  {messageIdsWithDifferentDates.includes(message.id) && (
                    <DateBox date={message.timestamp} />
                  )}
                  <TextChat
                    textType={message?.text_type}
                    text={message.content}
                    isSender={userId === message.sender?.id}
                    date={message?.timestamp || `2024-12-15T${message?.time}.651470Z`}
                    isLast={index + 1 === messages.length}
                    file={message?.file?.length > 0 ? message?.file?.[0] === "/" ? message?.file : "/" + message?.file : null}
                  />


                </Box>
              ))}
          <div />
        </Box>
      </Box>
    </Container>
  );
};

export default MainChat;
