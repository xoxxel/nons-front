"use client";
import { Box, Container } from "@mui/material";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";

type MessageType = {
  sender: "user" | "admin";
  text: string;
  file: string | null;
  date_created:Date
};

const ChatTextBox = ({
  setTextBoxHeight,
  ticketId,
  onMessageSend,
}: {
  setTextBoxHeight: any;
  ticketId: number;
  onMessageSend: (arg: MessageType) => void;
}) => {
  const [openEmoji, setOpenEmoji] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const textareaRef = useRef<any>(null);
  const modalRef = useRef<any>(null);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const onEmojiClick = (emoji: any) => {
    if (emoji) {
      setValue((prevInput) => prevInput + emoji);
    }
  };

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenEmoji(false);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextBoxHeight(textareaRef.current.scrollHeight);
    }
  }, [value]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSendMessage = () => {
    const formData = new FormData();
    formData.append("text", value);
    formData.append("ticket", ticketId?.toString());

    if (file) {
      formData.append("file", file);
    }

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/ticket/create-message/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res)
        onMessageSend({
          text: res?.data?.text,
          file: res?.data?.file?.replace("https://admin.nons.ir", ""),
          sender: "user",
          date_created: res?.data?.date_created,
        });setValue(""),setFile(null)}
      )
      .catch((err) => console.log("err:", err));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Box>
      {openEmoji && (
        <Container sx={{ mb: "10px" }}>
          <Box ref={modalRef} sx={{ width: { sm: "fit-content", xs: "100%" } }}>
            <EmojiPicker
              autoFocusSearch={false}
              lazyLoadEmojis
              style={{ width: "100% !important" }}
              open={openEmoji}
              onEmojiClick={(e) => onEmojiClick(e.emoji)}
            />
          </Box>
        </Container>
      )}

      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          bgcolor: "background.secondary",
          py: "14px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                color: "text.main",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.main",
                }}
              >
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  id="file"
                  style={{
                    display: "none",
                  }}
                />
                <label
                  htmlFor="file"
                  style={{
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9331 9.89897L11.224 18.9146C9.01602 20.9648 5.4362 20.9648 3.22824 18.9146C1.02027 16.8643 1.02027 13.5402 3.22824 11.49L12.9374 2.47435C14.4093 1.10751 16.7959 1.10751 18.2679 2.47434C19.7398 3.84118 19.7398 6.05726 18.2679 7.42409L8.93949 16.0862C8.2035 16.7696 7.01023 16.7696 6.27424 16.0862C5.53825 15.4027 5.53825 14.2947 6.27424 13.6113L14.4604 6.00988"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
              </Box>
              <textarea
                rows={1}
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder="اینجا بنویسید..."
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  width: "100%",
                  resize: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "inherit",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  mx: 1.5,
                  color: "text.main",
                }}
              >
                <svg
                  onClick={() => setOpenEmoji(!openEmoji)}
                  style={{ cursor: "pointer" }}
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="10.7693"
                    cy="9.99996"
                    rx="8.30128"
                    ry="7.70833"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.17944 11.875C7.17944 13.0256 8.78663 13.9583 10.7692 13.9583C12.7517 13.9583 14.3589 13.0256 14.3589 11.875"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="8.30124"
                    cy="7.70833"
                    rx="0.897436"
                    ry="0.833333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    stroke-linejoin="round"
                  />
                  <ellipse
                    cx="13.2373"
                    cy="7.70833"
                    rx="0.897436"
                    ry="0.833333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onClick={handleSendMessage}
                sx={{
                  display: "flex",
                  color :"text.main"
                }}
              >
                <svg
                  style={{ cursor: "pointer" }}
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.41853 10.7348C2.76638 10.4321 2.76638 9.56801 3.41853 9.26527L18.2515 2.37949C18.8398 2.10639 19.532 2.50358 19.532 3.11427L16.3208 9.27384C16.0817 9.73251 16.0817 10.2676 16.3208 10.7262L19.532 16.8858C19.532 17.4965 18.8398 17.8937 18.2515 17.6206L3.41853 10.7348Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.9424 10H9.21161"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ChatTextBox;
