"use client";
import { Box, Typography } from "@mui/material";
import AccordionInput from "../AccordionInput";
import CountDown from "@/components/login/otp/countDown";
import { useRef, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";

type Props = {
  title: string;
  disabled: boolean;
  value?: string;
  description?: string;
  error?: string;
  open?: boolean;
  onChange?: (arg: string) => void;
  onSubmit?: () => void;
  onOpen?: () => void;
};

interface ErrorResponse {
  msg?: string;
}

const NumberInput = ({
  props,
  onChange,
}: {
  props: Props;
  onChange: () => void;
}) => {
  const [number, setNumber] = useState(props?.value ?? "");
  const [otp, setOtp] = useState("");
  const [isOTP, setIsOTP] = useState(false);
  const [timer, setTimer] = useState(120);
  const [isNumberChangedAfterOTP, setIsNumberChangedAfterOTP] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    if (isOTP) setIsNumberChangedAfterOTP(true);
  };

  const handleSubmitNumber = () => {
    const spaceRemovedNumber = number?.replaceAll(" ", "");
    if (spaceRemovedNumber?.length !== 11) {
      return toast.error("شماره تلفن باید 11 رقم باشد");
    }
    setLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/send-otp-change-number/`,
        {
          number: number,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleSuccessfulNumberSubmit(res))
      .catch((err) => handleNumberSubmitError(err))
      .finally(() => setLoading(false));
  };

  const handleSuccessfulNumberSubmit = (res: AxiosResponse) => {
    setErrorText("");
    setTimer(res?.data?.timer || 120);
    setIsNumberChangedAfterOTP(false);
    setIsOTP(true);
  };
  const handleNumberSubmitError = (error: AxiosError<{ msg: string }>) => {
    const errorMessage = error?.response?.data?.msg;
    if (errorMessage) {
      setErrorText(errorMessage);
    } else {
      toast.error("مشکل سرور");
    }
  };

  const handleOTPComplete = () => {
    if (!otp) return setErrorText("کد تایید را وارد کنید");
    setLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/change-number/`,
        {
          number: number,
          otp: otp,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleSuccessfulChange())
      .catch((err) => handleOTPError(err))
      .finally(() => setLoading(false));
  };

  const handleOTPError = (error: AxiosError<ErrorResponse>): void => {
    const errorMessage = error?.response?.data?.msg;
    setErrorText(errorMessage || "مشکل سرور");
  };

  const handleSuccessfulChange = () => {
    toast.success("شماره با موفقیت تغییر یافت");
    setIsOTP(false);
    setOtp("");
    onChange();
  };

  return (
    <AccordionInput
      props={{
        ...props,
        onSubmit: () => {
          isOTP && !isNumberChangedAfterOTP
            ? handleOTPComplete()
            : handleSubmitNumber();
        },
        loading,
        buttonText: !isOTP ? "ارسال کد" : undefined,
      }}
    >
      <Box sx={{ width: "100%", mt: "10px" }}>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "button.main",
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "14px" },
          }}
        >
          <input
            type="tel"
            name="mobile"
            placeholder="شماره موبایل"
            value={number}
            onChange={handleChange}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              width: "100%",
              color: "inherit",
              fontSize: "12px",
              fontWeight: "400",
            }}
          />
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
                fontSize: "12px",
                fontWeight: "400",
                color: "text.secondary",
                mt: 2,
                pb: 1,
              }}
            >
              کد تایید را وارد کنید{" "}
              <CountDown
                initialSeconds={timer}
                onSendAgain={handleSubmitNumber}
              />
            </Typography>
            <input
              type="number"
              autoFocus
              placeholder="کد تایید"
              value={otp}
              onChange={(e) => {
                e.target.value.length <= 4 && setOtp(e.target.value);
              }}
              onKeyUp={(e) => e.code === "Enter" && handleOTPComplete()}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "12px",
                fontWeight: "400",
                color: "var(--mui-palette-text-secondary)",
                direction: "ltr",
                paddingTop: "6px",
                letterSpacing: 2,
                width: "80px",
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
    </AccordionInput>
  );
};

export default NumberInput;
