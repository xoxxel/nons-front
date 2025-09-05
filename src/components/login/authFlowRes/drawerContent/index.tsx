"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import OTPInput from "../../otp/otpInput";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import CountDown from "../../otp/countDown";

const LoginDrawerContent = ({
  step,
  inputValue,
  timer,
}: {
  step: "login" | "otp" | "password";
  inputValue: string;
  timer:number,
}) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter();
  const searchParams = useSearchParams();
  const backUrl = searchParams?.get("back_url")
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  const handleOTPComplete = () => {
    if (emailRegex.test(inputValue)) {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/login-email/`, {
          email: inputValue,
          otp,
        })
        .then((res) => handleSuccessfulLogin(res))
        .catch((err) => console.log(err))
        .catch(() => setLoading(false));
    } else {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/login/`, {
          number: inputValue,
          otp: otp,
        })
        .then((res) => handleSuccessfulLogin(res))
        .catch((err) => handleLoginError(err))
        .catch(() => setLoading(false));
    }
  };

  const handleSuccessfulLogin = (res: {
    data: { auth: { access: string } };
  }) => {
    setLoading(false)
    Cookies.set("access", res?.data?.auth?.access);
    toast.success("ورود با موفقیت انجام شد");
    router.push(backUrl ? backUrl : "/");
  };

  const handleLoginError = (error: AxiosError<{ msg: string }>) => {
    setLoading(false)
    if (error.response) {
      toast.error(error.response.data.msg || "مشکلی وجود دارد");
    } else {
      toast.error("خطای سرور");
    }
  };

  const handleSendAgain = () => {
    if (emailRegex.test(inputValue)) {
      setLoading(true)
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp-email/`, {
          email: inputValue,
        })
        .then((res) => handleSuccessfullSubmit())
        .catch((err) => handleLoginError(err)).finally(()=> setLoading(false));
    } else {
      setLoading(true)
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp/`, {
          number: inputValue,
        })
        .then((res) => handleSuccessfullSubmit())
        .catch((err) => handleLoginError(err)).finally(()=> setLoading(false));
    }
  };

  const handleSuccessfullSubmit = ()=> {
    toast.success("کد تایید دوباره ارسال شد")
  }

  return step == "otp" ? (
    <Box
      id="otp-section"
      sx={{
        maxWidth: "100%",
        border: { sm: "0.5px solid", xs: "none" },
        borderColor: { sm: "border.main", xs: "none" },
        p: { xs: "0", sm: "20px" },
        borderRadius: "15px",
        mt:2,
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
        {emailRegex.test(inputValue) ? inputValue : `کد تایید 4 رقمی به ${inputValue?.slice(7, 11)}***${inputValue?.slice(
          1,
          4
        )} ارسال شد`}
        </Typography>
      <Box
        sx={{
          mt: { xs: 3, sm: 4 },
        }}
      >
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
          }}
        >
          ارسال دوباره
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "button.main",
            direction: "ltr",
          }}
        >
          <CountDown initialSeconds={timer} onSendAgain={handleSendAgain} />
        </Typography>
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
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 1,
          mt: 2,
          color: "icon.main",
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
  ) : step == "password" ? (
    <Box
      sx={{
        border: { sm: "0.5px solid", xs: "none" },
        borderColor: { sm: "border.main", xs: "none" },
        p: { xs: "0", sm: "20px" },
        borderRadius: "15px",
        width: { xs: "100%", sm: "375px" },
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
          fontSize: "24px",
          color: "text.main",
          mt: { xs: "0", sm: 3.5 },
          mb: { xs: 7, sm: 4 },
        }}
      >
        رمز عبور
      </Typography>
      <Typography sx={{ color: "text.main", mb: 0.5 }}>
        رمز عبور خود را وارد کنید
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: "#D0D5DD",
          borderRadius: "8px",
          boxShadow: "0 1px 2px rgba(16, 24, 40, 0.05)",
          display: "flex",
          gap: 1,
          p: "10px",
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
            d="M7 11V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15.8C3 14.1198 3 13.2798 3.32698 12.638C3.6146 12.0735 4.07354 11.6146 4.63803 11.327C5.27976 11 6.11984 11 7.8 11H16.2C17.8802 11 18.7202 11 19.362 11.327C19.9265 11.6146 20.3854 12.0735 20.673 12.638C21 13.2798 21 14.1198 21 15.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21Z"
            stroke="#8899A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, my: 2 }}>
        <Typography sx={{ color: "text.secondary" }}>
          رمز عبور فراموش کردید؟
        </Typography>
        <Typography sx={{ color: "button.main" }}>بازیابی رمز عبور</Typography>
      </Box>
      <Button
        sx={{
          width: "100%",
          bgcolor: "button.main",
          fontWeight: "600",
          py: 1.5,
          color: "white",
          borderRadius: "5px",
          ":hover": { bgcolor: "button.main" },
        }}
      >
        تایید
      </Button>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          gap: 1,
          mt: 2,
          color: "icon.main",
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
  ) : null;
};

export default LoginDrawerContent;
