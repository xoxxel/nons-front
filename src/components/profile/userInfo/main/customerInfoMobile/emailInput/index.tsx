"use client";

import { Box, Typography } from "@mui/material";
import AccordionInput from "../AccordionInput";
import CountDown from "@/components/login/otp/countDown";
import { useState } from "react";
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

const EmailInput = ({
  props,
  onChange,
}: {
  props: Props;
  onChange: () => void;
}) => {
  const [email, setEmail] = useState(props?.value ?? "");
  const [otp, setOtp] = useState("");
  const [isOTP, setIsOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setOtp("");
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/send-otp-change-email/`,
        {
          email,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleSuccessfulNumberSubmit(res))
      .catch((err) => handleNumberSubmitError(err))
      .finally(() => setLoading(false));
  };

  const handleSuccessfulNumberSubmit = (res: AxiosResponse) => {
    setIsOTP(true);
    setLoading(false);
  };
  const handleNumberSubmitError = (error: AxiosError) => {
    console.log(error);
    setLoading(false);
  };

  const handleOTPComplete = () => {
    if (!otp) return toast.error("کد تایید را وارد کنید");
    setLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/user/change-email/`,
        {
          email,
          otp: otp,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleSuccessfulChange())
      .catch((err) => handleError(err))
      .finally(() => setLoading(false));
  };

  const handleSuccessfulChange = () => {
    setIsOTP(false);
    setLoading(false);
    toast.success("ایمیل شما با موفقیت تغییر یافت");
    onChange();
  };

  const handleError = (error: AxiosError<{ msg: string }>) => {
    setLoading(false);
    if (error.response) {
      const errorMessage = error.response.data.msg;
      toast.error(errorMessage || "خطای سرور");
    } else {
      toast.error("مشکل سرور");
    }
  };

  return (
    <AccordionInput
      props={{
        ...props,
        onSubmit: isOTP ? () => handleOTPComplete() : () => handleSubmit(),
        buttonText: !isOTP ? "ارسال کد" : undefined,
        loading,
      }}
    >
      <Box sx={{ width: "100%" }}>
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
            fontSize: "12px",
          }}
        >
          <input
            type="email"
            name="mobile"
            placeholder="ایمیل"
            value={email}
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
              <CountDown initialSeconds={120} onSendAgain={handleSubmit} />
            </Typography>
            <input
              type="email"
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
                fontSize: "12px",
                fontWeight: "400",
                color: "var(--mui-palette-text-secondary)",
                direction: "ltr",
                paddingTop: "6px",
                letterSpacing: 2,
                width: "60px",
              }}
            />
          </Box>
        )}
      </Box>
    </AccordionInput>
  );
};

export default EmailInput;
