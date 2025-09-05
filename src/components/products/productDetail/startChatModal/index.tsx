"use client";
import { Box, Modal } from "@mui/material";
import StartChat from "./startChat";
import ChatDrawer from "./chatDrawer";
import { useContext, useState } from "react";
import ShareModal from "../shareModal";
import RiportModal from "../riportModal/indx";
import axios from "axios";
import Cookies from "@/utils/cookie";
import { toast } from "react-hot-toast";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/navigation";
import { fetchMessagesByRoomName } from "@/api/data";
import ProductModel from "@/models/Product";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
};

const StartChatModal = ({
  open,
  handleOpen,
  handleClose,
  shop,
  productId
}: {
  open: boolean;
  handleOpen: Function;
  handleClose: Function;
  productId: number;
  shop: ProductModel["shop"];
}) => {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [openRiport, setOpenRiport] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("");

  const router = useRouter();
  const { user } = useContext(UserContext);

  const createChatRoom = async () => {
    if (shop.user?.id === user?.id) {
      return toast.error("واقعا می‌خواهی با خودت چت کنی؟");
    }

    if(!user?.username) {
      toast.error("لطفا ابتدا پروفایل خود را تکمیل کنید!");
      return router.push("/profile/settings")
    }
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/chat/create-room/`,
        {
          seller: shop.user?.id,
          customer: user?.id,
          product_id: productId
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
        handleClose();
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

  const handleCloseChat = () => {
    setOpenChat(false);
  };

  const handleOpenShare = () => {
    setOpenShare(true);
  };

  const handleCloseShare = () => {
    setOpenShare(false);
  };

  const handleOpenRiport = () => {
    setOpenRiport(true);
  };

  const handleCloseRiport = () => {
    setOpenRiport(false);
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box maxWidth="sm" sx={style}>
          <StartChat
            handleOpenChat={handleOpenChat}
            handleOpenShare={handleOpenShare}
            handleOpenRiport={handleOpenRiport}
            shop={shop}
          />
        </Box>
      </Modal>
      <ChatDrawer
        open={openChat}
        handleClose={handleCloseChat}
        roomName={roomName}
      />
      <ShareModal link="" open={openShare} handleClose={handleCloseShare} />
      <RiportModal open={openRiport} handleClose={handleCloseRiport} />
    </Box>
  );
};

export default StartChatModal;
