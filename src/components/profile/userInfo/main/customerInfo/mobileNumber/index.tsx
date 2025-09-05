"use client";
import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import { useContext, useEffect, useRef, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "@/utils/cookie";
import CountDown from "@/components/login/otp/countDown";
import toast from "react-hot-toast";
import { ShopStepContext } from "@/context/shopStepsProvider";

interface ErrorResponse {
  msg?: string;
}

const MobileNumberInput = ({ currentNumber, onChange }: { currentNumber: string, onChange: () => void }) => {
  const [number, setNumber] = useState(currentNumber ?? "");
  const [otp, setOtp] = useState("");
  const [isOTP, setIsOTP] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [errorText, setErrorText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { focusingStep, setFocusingStep } = useContext(ShopStepContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    inputRef.current?.focus();
    setIsEdited(true);
  };

  const handleSubmitNumber = () => {
    if (!isEdited) {
      inputRef.current?.focus();
      setIsEdited(true);
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp-change-number/`, {
          number: number,
        }, { headers: { Authorization: `Bearer ${Cookies.get("access")}` } })
        .then((res) => {
          handleSuccessfulNumberSubmit(res);
          if (res?.data?.msg) {
            toast.error(res?.data?.msg)
          }
        })
        .catch((err) => handleNumberSubmitError(err));
    }
  };

  const handleSuccessfulNumberSubmit = (res: AxiosResponse) => {
    setIsOTP(true);

  };
  const handleNumberSubmitError = (error: AxiosError) => {
    console.log(error);
  };

  const handleOTPComplete = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/change-number/`,
        {
          number: number,
          otp: otp,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => {

        handleSuccessfulChange();
      })
      .catch((err) => handleOTPError(err));
  };

  const handleOTPError = (error: AxiosError<ErrorResponse>): void => {
    const errorMessage = error?.response?.data?.msg;
    console.log(error)
    if (errorMessage) {
      setErrorText(errorMessage);
    }
  };

  const handleSuccessfulChange = () => {
    toast.success("شماره با موفقیت تغییر یافت")
    setIsEdited(false)
    setIsOTP(false)
    onChange()
  }

  useEffect(() => {
    if (focusingStep === "number") {
      inputRef?.current?.focus()
    }
  }, [focusingStep]);

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
          شماره موبایل
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: "70%" }}>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: focusingStep === "number" ? "button.main" : "border.main",
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "15px 10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "14px" },
            boxShadow: focusingStep === "number" ? "var(--mui-palette-button-main) 0px 0px 6px" : "none",
          }}
        >
          <input
            type="tel"
            name="mobile"
            ref={inputRef}
            placeholder="شماره موبایل"
            value={number}

            onChange={handleChange}
            onBlur={() => setFocusingStep("")}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              width: "100%",
              color: "inherit",
              fontSize: "16px",
            }}
          />
          <Button
            onClick={handleSubmitNumber}
            sx={{
              color: isEdited ? "badgeText.success" : "button.main",
              bgcolor: isEdited ? "badge.success" : "button.info",
              minWidth: "80px",
              ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
            }}
          >
            {isEdited ? isOTP ? "تایید" : "ارسال کد" : currentNumber ? "بروزرسانی" : "افزودن"}
          </Button>
        </Box>
        {/* otp field */}
        {isOTP && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              borderBottom: "0.5px solid",
              borderColor: "border.secondary",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "text.secondary",
                mt: 2,
                pb: 1,
              }}
            >
              کد تایید را وارد کنید <CountDown initialSeconds={120} onSendAgain={handleSubmitNumber} />
            </Typography>
            <input
              type="number"
              autoFocus
              placeholder="کد تایید"
              value={otp}
              onChange={(e) =>
                e.target.value.length <= 4 && setOtp(e.target.value)
              }
              onKeyUp={(e) => e.code === "Enter" && handleOTPComplete()}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "16px",
                fontWeight: "400",
                color: "var(--mui-palette-text-secondary)",
                direction: "ltr",
                paddingTop: "6px",
                letterSpacing: 2,
                width: "80px"
              }}
            />
          </Box>
        )}
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#FF3E3E",
            mt: 1,
          }}
        >
          {errorText}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobileNumberInput;
