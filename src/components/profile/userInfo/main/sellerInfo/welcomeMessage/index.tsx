"use client";

import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import { RefObject, useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";

const WelcomeMessage = ({
  message,
  onChange,
  prevMessage,
}: {
  message: string;
  onChange: (arg: string) => void;
  prevMessage?: string;
}) => {
  const [writable, setWritable] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const inputRef = useRef(null);

  function useOutsideClick<T extends HTMLElement>(inputRef: RefObject<T>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (
          inputRef.current &&
          !inputRef.current.contains(event.target as Node)
        ) {
          setWritable(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [inputRef]);
  }

  useOutsideClick(inputRef);

  const handleSubmit = () => {
    if (!isEdited) {
      setIsEdited(true);
    } else {
      if (message === prevMessage) {
        setIsEdited(false)
        setWritable(false)
        return 0;
      }
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/update-shop/`,
          {
            welcome_message: message,
          },
          { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
        )
        .then(() => handleSuccessfulSubmit())
        .catch((err) => {
          toast.error("خطا");
        });
    }
  };

  const handleSuccessfulSubmit = () => {
    toast.success("وضعیت فروشگاه شما با موفقیت بروز شد");
    setIsEdited(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{
            fontSize: { lg: "16px", xs: "14px" },
            fontWeight: "400",
            color: "text.main",
          }}
        >
          پیام خوش آمد گویی
        </Typography>
        <InfoButton />
      </Box>
      <Box
        onClick={() => !isEdited && setWritable(true)}
        sx={{
          border: "0.5px solid",
          borderColor: writable ? "button.main" : "border.main",
          borderRadius: "5px",
          width: { lg: "70%", md: "65%" },
          display: "flex",
          alignItems: "center",
          padding: "15px 10px",
          color: "text.main",
          fontSize: { xs: "13px", md: "16px" },
          gap: 1,
        }}
      >
        {writable ? (
          <input
            ref={inputRef}
            type="text"
            placeholder="پیام خوش‌آمد گویی"
            autoFocus
            value={message}
            multiple
            onChange={(e) => {
              onChange(e.target.value);
              !isEdited && setIsEdited(true);
            }}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              width: "100%",
              fontSize: "inherit",
              fontWeight: "400",
              color: "inherit",
            }}
          />
        ) : message ? (
          <Typography
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              overflow: "hidden",
              fontSize: "16px",
              fontWeight: "400",
              color: "inherit",
            }}
          >
            {message}
          </Typography>
        ) : (
          <Typography
            sx={{ fontSize: "16px", color: "text.secondary", width: "100%" }}
          >
            پیام خوش‌آمد گویی
          </Typography>
        )}
        <Button
          onClick={handleSubmit}
          sx={{
            color: isEdited ? "badgeText.success" : "button.main",
            bgcolor: isEdited ? "badge.success" : "button.info",
            minWidth: "80px",
            ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
          }}
        >
          {isEdited ? "تایید" : message ? "بروزرسانی" : "افزودن"}
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeMessage;
