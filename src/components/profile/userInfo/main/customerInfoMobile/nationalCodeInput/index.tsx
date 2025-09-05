"use client";

import { Box, Typography } from "@mui/material";
import AccordionInput from "../AccordionInput";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";

type Props = {
  title: string;
  disabled: boolean;
  value?: string;
  description?: string;
  error?: string;
  open?: boolean;
  loading?: boolean;
  onChange?: (arg: string) => void;
  onSubmit?: () => void;
  onOpen?: () => void;
};

const NationalCodeInput = ({ props,onChange }: { props: Props,onChange:()=>void }) => {

    const [isError, setIsError] = useState(false);
    const [value,setValue] = useState("")
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
  
    const handleSubmit = () => {
          axios
            .post(
              `${process.env.NEXT_PUBLIC_API}/user/authorize-number/`,
              { national_id: value },
              {
                headers: { Authorization: `Bearer ${Cookies.get("access")}` },
              }
            )
            .then((res) => handleSuccessfulAuth())
            .catch((err) => handleAuthError(err));
    };
  
    const handleSuccessfulAuth = () => {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/user/`,
          {
            national_id: value,
          },
          {
            headers: { Authorization: `Bearer ${Cookies.get("access")}` },
          }
        )
        .then((res) => handleSuccessfulSubmit())
        .catch((err) => toast.error("خطای سرور"));
    };
  
    const handleSuccessfulSubmit = () => {
      toast.success("کد ملی شما با موفقیت ثبت شد");
      setIsError(false);
      onChange()
    };
  
    const handleAuthError = (error: AxiosError<{ msg: string }>) => {
      if (error.response) {
        const errorMessage = error.response.data.msg;
        if (errorMessage === "کابر قبلا احرازهویت شده") {
          setIsError(false);
          handleSuccessfulAuth();
        } else if (errorMessage === "خطا در انجام درخواست") {
          setIsError(true);
        } else {
          toast.error("خطای سرور");
        }
      } else {
        toast.error("خطای شبکه");
      }
    };

  return (
    <AccordionInput props={{...props,onSubmit: ()=> handleSubmit()}}>
      <Box sx={{ width: "100%",mt:"10px" }}>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor:"button.main",
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            color: "text.main",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          <input
            type="number"
            name="national_id"
            placeholder="کد ملی"
            value={value}
            onChange={handleChange}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              width: "100%",
              color: "inherit",
              fontSize: "inherit",
            }}
          />
        </Box>
        {isError && (
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: "400",
              color: "#FF3E3E",
              mt: 1,
            }}
          >
            کد ملی با مالکیت شماره موبایل مطابقت ندارد
          </Typography>
        )}
      </Box>
    </AccordionInput>
  );
};

export default NationalCodeInput;
