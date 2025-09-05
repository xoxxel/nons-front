"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import OTPInput from "./otpInput";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "@/utils/cookie";
import { BeatLoader } from "react-spinners";
import CountDown from "./countDown";

const OTP = ({
  step,
  timer,
  inputValue,
  onBack,
}: {
  step: string;
  timer: number;
  inputValue: string;
  onBack: () => void;
}) => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const backUrl = searchParams?.get("back_url")
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  const mobileRegex = new RegExp(/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/);
  const [loading, setLoading] = useState(false);

  const handleSendAgain = () => {
    if (emailRegex.test(inputValue)) {
      setLoading(true)
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp-email/`, {
          email: inputValue,
        })
        .then((res) => handleSuccessfullSubmit())
        .catch((err) => handleLoginError(err)).finally(() => setLoading(false));
    } else if (mobileRegex.test(inputValue) && inputValue?.length === 11) {
      setLoading(true)
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp/`, {
          number: inputValue,
        })
        .then((res) => handleSuccessfullSubmit())
        .catch((err) => handleLoginError(err)).finally(() => setLoading(false));
    } else {
      toast.error("ایمیل یا شماره همراه معتبر وارد کنید")
    }
  };

  const handleSuccessfullSubmit = () => {
    toast.success("کد تایید دوباره ارسال شد")
  }

  const handleSuccessfulLogin = (res: {
    data: { auth: { access: string } };
  }) => {
    Cookies.set("access", res?.data?.auth?.access);
    toast.success("ورود با موفقیت انجام شد");
    router.push(backUrl ? backUrl : "/");
  };

  const handleLoginError = (error: {
    response: { data: { msg?: string } };
  }) => {
    if (error?.response?.data?.msg) {
      toast.error(error?.response?.data?.msg);
    } else {
      toast.error("مشکلی وجود دارد");
    }
    console.log(error);
    setLoading(false);
  };

  const handleOTPComplete = () => {
    if (emailRegex.test(inputValue)) {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/login-email/`, {
          email: inputValue,
          otp,
        })
        .then((res) => handleSuccessfulLogin(res))
        .catch((err) => handleLoginError(err))
        .finally(() => setLoading(false));
    } else if (mobileRegex.test(inputValue) && inputValue?.length === 11) {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/login/`, {
          number: inputValue,
          otp: otp,
        })
        .then((res) => handleSuccessfulLogin(res))
        .catch((err) => handleLoginError(err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <Box
      id="otp-section"
      sx={{
        maxWidth: "100%",
        border: { xs: "0", sm: "0.5px solid" },
        borderColor: { sm: "border.main", xs: "none" },
        p: "20px",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo-mobile.png"
            width={48}
            height={48}
            alt="logo"
            style={{ marginRight: "15px" }}
          />
        </Link>
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: { xs: "16px", md: "24px" },
          color: "text.main",
          mt: { xs: "0", sm: 3.5 },
        }}
      >
        کدتایید
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          color: "text.secondary",
          mt: 1,
        }}
      >
        {emailRegex.test(inputValue)
          ? inputValue
          : `کد تایید 4 رقمی به ${inputValue?.slice(
            7,
            11
          )}***${inputValue?.slice(1, 4)} ارسال شد`}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <OTPInput
          value={otp}
          setValue={setOtp}
          onComplete={handleOTPComplete}
        />
      </Box>
      {/* SEND CODE AGAIN */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            transition: "0.3s ease",
            color: "text.secondary",
            cursor: "default",
          }}
        >
          ارسال دوباره
        </Typography>
        <CountDown initialSeconds={timer || 120} onSendAgain={() => handleSendAgain()} />
      </Box>
      <Button
        sx={{
          bgcolor: "button.main",
          color: "white",
          borderRadius: { xs: "8px", md: "5px" },
          width: "100%",
          py: 1,
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {loading ? <BeatLoader color="white" size={8} /> : "تایید"}
        </Typography>
      </Button>
      <Box
        onClick={() => onBack()}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 1,
          mt: 2,
          color: "icon.main",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: "600", color: "icon.main" }}
        >
          بازگشت
        </Typography>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3334 10H4.66675M4.66675 10L10.5001 15.8334M4.66675 10L10.5001 4.16669"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default OTP;
