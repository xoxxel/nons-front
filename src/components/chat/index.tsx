"use client";

import { Box, useColorScheme } from "@mui/material";
import ChatHead from "./head";
import ChatTextBox from "./textBox";
import MainChat from "./main";
import { useState, useEffect, useContext } from "react";
import Cookies from "@/utils/cookie";
import { fetchMessagesByRoomName } from "@/api/data";
import MessageModel from "@/models/Message";
import { UserContext } from "@/context/UserProvider";
import RoomDataModel from "@/models/RoomData";
import ProductModel from "@/models/Product";

const Chat = ({
  handleCloseChat,
  room_name,
  arbitration
}: {
  handleCloseChat: Function;
  room_name: string;
  arbitration?: boolean
}) => {
  const [textBoxHeight, setTextBoxHeight] = useState<string>("");
  const [roomData, setRoomData] = useState<RoomDataModel>({} as RoomDataModel);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [message, setMessage] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [seller, setSeller] = useState<RoomDataModel>({} as RoomDataModel);
  const [customer, setCustomer] = useState<RoomDataModel>({} as RoomDataModel);

  const token = Cookies.get("access");
  const wsUrl = `wss://admin.nons.ir/ws/chat/${room_name}/?token=${token}`;
  const { user } = useContext(UserContext);
  const mode = useColorScheme().mode;
  const [time, setTime] = useState<string>("");


  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (roomData && Object.keys(roomData).length > 0) {
      setLoading(false);
    }
  }, [roomData]);

  const getMessages = async () => {
    try {
      const resMessages = await fetchMessagesByRoomName({
        roomName: room_name,
      });
      setMessages(resMessages?.messages);
      setProduct(resMessages?.product);
      setRoomData(
        resMessages?.seller?.id != user?.id
          ? resMessages?.seller?.shop
          : resMessages?.customer
      );
      setSeller(resMessages?.seller?.shop);
      setCustomer(resMessages?.customer);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      if (message) {
        const messageData = {
          message: message.trim(),
          message_type: message ? "text" : fileUrl ? "file" : "unknown",
          is_admin: arbitration
        };
        socket.send(JSON.stringify(messageData));
        setMessage("")
      }
      if (fileUrl) {
        const messageData = {
          file_url: fileUrl,
          message_type: "file",
          sender: {
            id: user?.id,
            name: user?.name,
            image: user?.image,
          },
          time: time
        };
        socket.send(JSON.stringify(messageData));
        setFileUrl("")
        setFile(null)
      }
    } else {
      console.error("WebSocket not open. Current state:", socket?.readyState);
    }
  };

  useEffect(() => {
    if (room_name) {
      const connectWebSocket = () => {
        const newSocket = new WebSocket(wsUrl);

        newSocket.onmessage = (event) => {
          const newMessage = JSON.parse(event.data);
          setMessages((prevMessages) =>
            prevMessages ? [...prevMessages, newMessage] : [newMessage]
          );
        };

        newSocket.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        newSocket.onclose = () => {
          console.log("WebSocket closed. Attempting to reconnect...");
          setTimeout(connectWebSocket, 3000);
        };

        setSocket(newSocket);

        return () => {
          newSocket.close();
        };
      };

      connectWebSocket();
    }
  }, [wsUrl]);

  useEffect(() => {
    getMessages();
  }, [room_name]);

  return (
    <Box sx={{ position: { md: "relative", xs: "absolute" }, top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <Box
        sx={{
          minHeight: `100svh`,
          width: "unset",
          position: "relative",
          borderRadius: { xs: "0px", md: "12px" },
          border: "0.5px solid",
          borderColor: { xs: "transparent", md: "border.main" },
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
            opacity: 0.30,
            zIndex: 1,
          },
          bgcolor: "background.chat",
          zIndex: 0,
        }}
      >
        <ChatHead seller={seller} customer={customer} arbitration={arbitration} handleClose={handleCloseChat} roomData={roomData} loading={loading} product={product} />
        <Box
          sx={{
            width: "100%",
            height: "100%", display: "flex", flexDirection: "column", justifyContent: "end",
            position: "absolute",
            bottom: "6px",
            right: 0,
            left: 0,
            px: "5.5px",
            zIndex: 10,
          }}
        >
          <MainChat
            fLoading={loading}
            textBoxHeight={textBoxHeight}
            messages={messages}
            userId={user?.id}
            hasProduct={Boolean(product)}
          />
          <ChatTextBox
            setTextBoxHeight={setTextBoxHeight}
            sendMessage={sendMessage}
            message={message}
            setMessage={setMessage}
            roomName={room_name}
            setFileUrl={setFileUrl}
            fileUrl={fileUrl}
            file={file}
            setFile={setFile}
            setTime={setTime}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
