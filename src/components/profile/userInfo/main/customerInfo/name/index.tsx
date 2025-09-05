"use client";
import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import { useRef, useState } from "react";
import Cookies from "@/utils/cookie";
import axios from "axios";
import toast from "react-hot-toast";

const NameInput = ({
  value,
  onChange,
  onSuccess,
}: {
  value: string;
  onChange: (arg: string) => void;
  onSuccess: Function;
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [error, setError] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState(
    "نام و نام خانوادگی شناسنامه ای خود را وارد کنید"
  );

  const handleSubmit = () => {
    if (!isEdited) {
      inputRef.current?.focus();
      setIsEdited(true);
    } else {
      if (value) {
        axios
          .patch(
            `${process.env.NEXT_PUBLIC_API}/user/user/`,
            {
              name: value,
            },
            {
              headers: { Authorization: `Bearer ${Cookies.get("access")}` },
            }
          )
          .then((res) => handleSuccessfulSubmit())
          .catch((err) => console.log("خطای سرور"));
      }
    }
  };

  const handleSuccessfulSubmit = () => {
    setIsEdited(false);
    toast.success("نام شما با موفقیت ثبت شد");
    onSuccess();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setMessage("نام و نام خانوادگی شناسنامه ای خود را وارد کنید");
    onChange(e.target.value);
  };

  // const handleSuccessfulUpdate = () => {
  //   toast.success("نام کاربری با موفقیت ثبت شد");
  //   setIsInputFocus(false);
  //   setError(false);
  //   onSuccess();
  // };

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
          نام و نام خانوادگی
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: "70%" }}>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "15px 10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "16px" },
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
            value={value}
            ref={inputRef}
            onChange={handleChange}
            onFocus={() => {
              setIsInputFocus(true), setIsEdited(true);
            }}
            onBlur={() => setIsInputFocus(false)}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              width: "100%",
              color: "inherit",
              fontSize: "inherit",
            }}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              color: isEdited ? "badgeText.success" : "button.main",
              bgcolor: isEdited ? "badge.success" : "button.info",
              minWidth: "80px",
              ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
            }}
          >
            {isEdited ? "تایید" : value === "" ? "افزودن" : "بروزرسانی"}
          </Button>
        </Box>
        {isInputFocus && (
          <Typography
            sx={{
              mt: 1,
              color: error ? "#FF3E3E" : "text.secondary",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default NameInput;
