"use client";
import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import axios, { AxiosError } from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopStepContext } from "@/context/shopStepsProvider";

const NationalCodeInput = ({
  value,
  onChange,
  getUser,
  disabled,
}: {
  value: string;
  onChange: (arg: string) => void;
  getUser: Function;
  disabled?: boolean;
}) => {
  const [isEdited, setIsEdited] = useState(false);
  const [isError, setIsError] = useState(false);
  const { focusingStep, setFocusingStep } = useContext(ShopStepContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsEdited(true);
  };

  const handleSubmit = () => {
    if (!isEdited) {
      setIsEdited(true);
      if (inputRef?.current) inputRef?.current?.focus();
    } else {
      if (!disabled) {
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
      }
    }
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
    getUser();
  };

  const handleAuthError = (error: AxiosError<{ msg: string }>) => {
    if (error.response) {
      const errorMessage = error.response.data.msg;
      console.log(errorMessage);
      if (errorMessage === "کابر قبلا احرازهویت شده") {
        setIsError(false);
        handleSuccessfulAuth();
      } else if (
        errorMessage === "خطا در انجام درخواست" ||
        errorMessage ===
          "کاربر عزیز شماره موبایل و کدملی شما با هم تطابق ندارند."
      ) {
        setIsError(true);
      } else {
        toast.error("خطای سرور");
      }
    } else {
      toast.error("خطای شبکه");
    }
  };

  useEffect(() => {
    if (focusingStep === "nationalCode" && !disabled) {
      inputRef?.current?.focus();
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
          کد ملی
        </Typography>
        <InfoButton />
      </Box>
      <Box sx={{ width: "70%" }}>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor:
              focusingStep === "nationalCode" && !disabled
                ? "button.main"
                : "border.main",
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "15px 10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "16px" },
            boxShadow:
              focusingStep === "nationalCode" && !disabled
                ? "var(--mui-palette-button-main) 0px 0px 6px"
                : "none",
          }}
        >
          <input
            type="number"
            name="national_id"
            placeholder="کد ملی"
            value={value}
            ref={inputRef}
            onChange={handleChange}
            onBlur={() => setFocusingStep("")}
            disabled={disabled}
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
            disabled={disabled}
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
        {isError && (
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#FF3E3E",
              mt: 1,
            }}
          >
            کد ملی با مالکیت شماره موبایل مطابقت ندارد
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default NationalCodeInput;
