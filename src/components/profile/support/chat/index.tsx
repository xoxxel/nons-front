"use client";
import { Box,useColorScheme } from "@mui/material";
import ChatHead from "./head";
import ChatTextBox from "./textBox";
import MainChat from "./main";
import { useState } from "react";

const Chat = ({ ticket }: { ticket: TicketModel }) => {
  const [textBoxHeight, setTextBoxHeight] = useState<string>("");
  const [newMessages, setNewMessages] = useState<TicketModel["messages"]>([]);

  const handleNewMessage = (message: any) => {
    setNewMessages([...newMessages, message]);
  };
  
  const mode = useColorScheme().mode;

  return (
    <Box
  sx={{
    minHeight: {md:"100vh",xs:"calc(100vh - 200px)"},
    width: "100%",
    position: "relative",
    borderRadius: { xs: "0px", md: "8px 8px 0 0" },
    border: "0.5px solid",
    borderColor: { xs: "transparent", md: "border.secondary" },
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url('/images/chatBack${mode === "light" ? "3" : "2"}.png')`,
      backgroundBlendMode: "soft-light",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.30, // Set your desired opacity here
      zIndex: 1,
    },
    bgcolor: "background.chat",
    zIndex: 0,
  }}
>
      <ChatHead ticket={ticket} />
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "15px",
          right: 0,
          left: 0,
          px: "15px",
          zIndex: 9,
        }}
      >
        <MainChat
          textBoxHeight={textBoxHeight}
          ticket={ticket}
          newMessages={newMessages}
        />
        {ticket?.status_ticket !== "close" && <ChatTextBox
          setTextBoxHeight={setTextBoxHeight}
          ticketId={ticket?.id}
          onMessageSend={(message) => handleNewMessage(message)}
        />}
      </Box>
    </Box>
  );
};

export default Chat;
