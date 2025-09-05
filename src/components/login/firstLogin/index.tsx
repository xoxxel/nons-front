"use client";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import LoginNavBar from "../navBar";

type loginProps = {
  setStep: React.Dispatch<React.SetStateAction<"login" | "otp" | "password">>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setAuthVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

const FirstLogin = ({
  setStep,
  setTimer,
  inputValue,
  setInputValue,
  setAuthVisibility,
}: loginProps) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  const mobileRegex = new RegExp(/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/);
  const [loading, setLoading] = useState(false);
  const isMd = useMediaQuery("(min-width:900px)");

  const handlePhoneNumberSubmit = (res: { data: { timer?: number } }) => {
    setStep("otp");
    if (res?.data?.timer) {
      setTimer(res?.data?.timer);
    } else {
      setTimer(120);
    }
    if (!isMd) setAuthVisibility(true);
  };

  const handleSubmit = () => {
    const inputValueWithoutSpace = inputValue?.replaceAll(" ","");
    if (emailRegex.test(inputValueWithoutSpace)) {
      setLoading(true);
    
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp-email/`, {
          email: inputValueWithoutSpace,
        })
        .then((res) => handlePhoneNumberSubmit(res))
        .catch((err) => handleLoginError(err))
        .finally(() => setLoading(false));
    } else if (mobileRegex.test(inputValueWithoutSpace) && inputValueWithoutSpace?.length === 11) {
      setLoading(true);
      
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/send-otp/`, {
          number: inputValueWithoutSpace,
        })
        .then((res) => handlePhoneNumberSubmit(res))
        .catch((err) => handleLoginError(err))
        .finally(() => setLoading(false));
    } else {
      toast.error("ایمیل یا شماره همراه معتبر وارد کنید");
    }
  };

  const handleLoginError = (error: AxiosError<{ msg: string }>) => {
    if (error.response) {
      toast.error(error.response.data.msg || "مشکلی وجود دارد");
    } else {
      toast.error("خطای سرور");
    }
  };

  return (
    <Box
      sx={{
        border: { sm: "0.5px solid", xs: "none" },
        borderColor: { sm: "border.main", xs: "none" },
        p: "20px",
        borderRadius: "15px",
        width: { xs: "100%", sm: "unset" },
      }}
    >
      <LoginNavBar text="ورود به حساب" />
      <Link href="/">
        <Box
          sx={{
            mr: { xs: 0, sm: "15px" },
          }}
        >
          <Image
            src="/images/logo-mobile.png"
            width={48}
            height={48}
            alt="logo"
          />
        </Box>
      </Link>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          color: "text.main",
          mt: 3.5,
        }}
      >
        ورود به حساب
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          color: "text.secondary",
          mt: 1,
        }}
      >
        به اولین بازار تجارت الکترونیک کشور خوش آمدید
      </Typography>
      {/* google buuton and number or email input */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* google */}
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            borderColor: "#D0D5DD",
            boxShadow: "0 1px 2px rgba(16, 24, 40, 0.05)",
            borderRadius: "8px",
            gap: 1.5,
            mt: 4,
            p: "10px 14px",
            color: "text.main",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2914_26093)">
              <path
                d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                fill="#4285F4"
              />
              <path
                d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                fill="#34A853"
              />
              <path
                d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                fill="#FBBC04"
              />
              <path
                d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_2914_26093">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography
            sx={{
              color: "text.main",
              fontWeight: "600",
            }}
          >
            ورود با گوگل
          </Typography>
        </Button>
        {/* or */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box sx={{ width: "100%", height: "1px", bgcolor: "#EAECF0" }}></Box>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "500",
            }}
          >
            یا
          </Typography>
          <Box sx={{ width: "100%", height: "1px", bgcolor: "#EAECF0" }}></Box>
        </Box>
        {/* input  */}
        <Box
          sx={{
            border: "1px solid",
            borderColor: "#D0D5DD",
            borderRadius: "8px",
            boxShadow: "0 1px 2px rgba(16, 24, 40, 0.05)",
            p: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "text.secondary",
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
              d="M4 21C4 19.6044 4 18.9067 4.17224 18.3389C4.56004 17.0605 5.56046 16.06 6.83886 15.6722C7.40665 15.5 8.10444 15.5 9.5 15.5H14.5C15.8956 15.5 16.5933 15.5 17.1611 15.6722C18.4395 16.06 19.44 17.0605 19.8278 18.3389C20 18.9067 20 19.6044 20 21M7.5 7.5C7.5 9.98528 9.51472 12 12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5Z"
              stroke="#8899A6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="ایمیل یا شماره موبایل خود را وارد کنید"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => e.code === "Enter" && handleSubmit()}
            autoFocus
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              width: "100%",
              fontSize: "16px",
              fontWeight: "400",
              color: "inherit",
            }}
          />
        </Box>
      </Box>
      <Button
        onClick={handleSubmit}
        sx={{
          color: "white",
          bgcolor: "button.main",
          borderRadius: "5px",
          fontWeight: "600",
          width: "100%",
          py: { xs: "10px", md: 1.5 },
          height: "46px",
          mt: 2,
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        {loading ? <BeatLoader color="white" size={8} /> : "ادامه"}
      </Button>
    </Box>
  );
};

export default FirstLogin;
