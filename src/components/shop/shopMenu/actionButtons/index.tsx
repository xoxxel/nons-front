"use client";
import ChatDrawer from "@/components/products/productDetail/startChatModal/chatDrawer";
import { UserContext } from "@/context/UserProvider";
import Cookies from "@/utils/cookie";
import ShareLink from "@/utils/share";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const ShareAndChatButtons = ({ shop }: { shop: ShopModel }) => {
  const [roomName, setRoomName] = useState("");
  const [openChat, setOpenChat] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useContext(UserContext);

  const createChatRoom = async () => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/chat/create-room/`,
        {
          seller: shop.user?.id,
          customer: user?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        }
      )
      .then((res) => {
        setRoomName(res.data.room_name);
        setOpenChat(true);
      })
      .catch((err) => {
        toast.error("مشکل سرور");
        console.log(err);
      });
  };

  const handleOpenChat = async () => {
    if (!Cookies.get("access")) return router.push("/login");
    createChatRoom();
  };

  return (
    <>
    <ChatDrawer open={openChat} roomName={roomName} handleClose={()=> setOpenChat(false)} />
    <Box sx={{ display: "flex", gap: 2, mt: { md: 12, xs: 6 } }}>
      <Button
        onClick={() => ShareLink(`/shop/${shop?.title_en}`)}
        sx={{
          minWidth: "44px !important",
          height: "44px",
          borderRadius: "5px",
          bgcolor: "background.secondary",
          color: "icon.main",
          border: "0.5px solid",
          borderColor: "border.main",
          ":hover": {
            bgcolor: "background.secondary",
          },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z"
            stroke="currentcolor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <Button
      onClick={handleOpenChat}
      disabled={user?.id === shop?.user?.id}
        sx={{
          width: "100%",
          height: "44px",
          borderRadius: "5px",
          bgcolor: "button.main",
          color: "white",
          fontWeight: "600",
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        گفتگو
      </Button>
    </Box>
    </>
  );
};

export default ShareAndChatButtons;
