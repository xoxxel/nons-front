"use client";
import { Box, Container } from "@mui/material";
import DateBox from "./date";
import TextChat from "./text";
import FeedbackRating from "../feedback";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  sender: string;
  text: string;
  file: string | null;
  ticket: number;
  date_created: Date;
}

interface MainChatProps {
  textBoxHeight: string;
  ticket: TicketModel;
  newMessages: Message[];
}

const MainChat: React.FC<MainChatProps> = ({
  textBoxHeight,
  ticket,
  newMessages,
}) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(true);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const getMessageIdsWithDifferentDates = (messages: Message[]) => {
    const messageIds: number[] = [];
    let lastDate: string | null = null;

    ticket?.messages?.length > 0 &&
      messages?.forEach((message) => {
        const currentDate = message?.date_created?.toString().split("T")[0];

        if (currentDate !== lastDate) {
          messageIds.push(message.id);
          lastDate = currentDate;
        }
      });

    return messageIds;
  };

  const messageIdsWithDifferentDates = getMessageIdsWithDifferentDates(
    ticket?.messages || []
  );

  useEffect(() => {
    setTimeout(() => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    }, 50);
  }, [ticket?.messages, newMessages]);

  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          pt: {
            md: `calc(120px + ${textBoxHeight}px + 28px)`,
            xs: `calc(250px + ${textBoxHeight}px + 28px)`,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <Box
          id="chatBox"
          ref={chatBoxRef}
          sx={{
            height: "fit-content",
            overflowY: "scroll",
            pt: "40px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            position: "relative",
          }}
        >
          {ticket?.messages?.map((message, index) => (
            <Box key={message.id}>
              {messageIdsWithDifferentDates.includes(message.id) && (
                <DateBox date={message.date_created} />
              )}
              <TextChat
              textType="message"
                text={message.text}
                isSender={message.sender !== "admin"}
                date={message.date_created}
                isLast={index + 1 === ticket.messages.length}
                file={message.file}
              />
            </Box>
          ))}
          {newMessages.map((message, index) => (
            <TextChat
              textType="message"
              key={message.id}
              text={message.text}
              isSender={message.sender !== "admin"}
              date={message.date_created}
              isLast={index + 1 === newMessages.length}
              file={message.file}
            />
          ))}
          {(ticket.status_ticket === "close" && !ticket?.comment) && (
            <FeedbackRating id={ticket?.id} responderName={ticket?.responder?.name} />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MainChat;
