"use client";
import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import { useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";

const UsernameInput = ({
  value,
  disable,
  onChange,
  onSuccess,
}: {
  value: string;
  disable: boolean;
  onChange: (arg: string) => void;
  onSuccess: Function;
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [error, setError] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("حروف و اعداد انگلیسی مجاز است");
  const regex = /^[a-zA-Z0-9]*$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("حروف و اعداد انگلیسی مجاز است");
    onChange(e?.target?.value);
    setIsEdited(true);
    !regex.test(e?.target?.value) ? setError(true) : setError(false);
    if (isEdited && e?.target?.value === "") {
      setMessage("نام کاربری نمی تواند خالی باشد");
      setError(true);
    }
  };

  const handleSubmit = () => {
    setIsInputFocus(true);
    if (!isEdited) {
      if (inputRef?.current) inputRef.current?.focus();
      setIsEdited(true);
    } else {
      if (!value) {
        setError(true);
        return false;
      }
      if (regex.test(value)) {
        axios
          .patch(
            `${process.env.NEXT_PUBLIC_API}/user/user/`,
            { username: value },
            {
              headers: { Authorization: `Bearer ${Cookies.get("access")}` },
            }
          )
          .then((res) => handleSuccessfulUpdate())
          .catch((err) => handleError(err, err?.response?.data?.username[0]));
      }
    }
  };

  const handleError = (error: AxiosError, errorText: string) => {
    if (errorText) {
      setMessage(errorText);
      setError(true);
      return false;
    } else {
      toast.error("خطای سرور");
    }
  };

  const handleSuccessfulUpdate = () => {
    toast.success("نام کاربری ثبت شد");
    setIsInputFocus(false);
    onSuccess();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2.5 }}>
        <Typography
          sx={{
            fontSize: { lg: "16px", xs: "14px" },
            fontWeight: "400",
            color: "text.main",
          }}
        >
          نام کاربری{" "}
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
            name="username"
            placeholder="نام کاربری"
            ref={inputRef}
            value={value}
            onChange={handleChange}
            disabled={disable}
            onFocus={() => setIsInputFocus(true)}
            onBlur={() => setIsInputFocus(false)}
            autoComplete="off"
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
            disabled={disable}
            onClick={handleSubmit}
            sx={{
              color: isEdited ? "badgeText.success" : "button.main",
              bgcolor: isEdited ? "badge.success" : "button.info",
              minWidth: "80px",
              ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
            }}
          >
            {isEdited ? "تایید" : value ? "بروزرسانی" : "افزودن"}
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

export default UsernameInput;
