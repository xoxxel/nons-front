"use client";

import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { ShopStepContext } from "@/context/shopStepsProvider";

type InputType = {
  title: string;
  placeHolder: string;
  value: string;
  onChange: (arg: string) => void;
};

const CupleInput = ({
  firstInput,
  secondInput,
  getUser,
  firstInputDisabled,
  secondInputDisabled
}: {
  firstInput: InputType;
  secondInput: InputType;
  getUser: Function;
  firstInputDisabled: boolean,
  secondInputDisabled: boolean
}) => {
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [firstInFocus, setFirstInFocus] = useState(false);
  const [secondInFocus, setSecondInFocus] = useState(false);
  const [isNameEdited, setIsNameEdited] = useState(false);
  const [isEnNameEdited, setIsEnNameEdited] = useState(false);
  const { focusingStep, setFocusingStep } = useContext(ShopStepContext)
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setShowSecondInput(firstInFocus || secondInFocus);
  }, [firstInFocus, secondInFocus]);

  useEffect(() => {
    if (focusingStep === "shopName") {
      firstInputRef?.current?.focus()
    }
  }, [focusingStep])

  const handleFirstInputSubmit = () => {
    if (!isNameEdited) {
      setIsNameEdited(true);
      if (firstInputRef?.current) {
        firstInputRef?.current?.focus();
      }
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/update-shop/`,
          {
            title: firstInput?.value,
          },
          { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
        )
        .then(() => handleSuccessfulSubmit("fa"))
        .catch((err) => {
          toast.error("خطا");
        });
    }
  };

  const handleSecondInputSubmit = () => {
    if (!isEnNameEdited) {
      setIsEnNameEdited(true);
      if (secondInputRef?.current) {
        secondInputRef?.current?.focus();
      }
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/update-shop/`,
          {
            title_en: secondInput?.value,
          },
          { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
        )
        .then(() => handleSuccessfulSubmit("en"))
        .catch((err) => {
          toast.error("خطا");
        });
    }
  };

  const handleSuccessfulSubmit = (input: "en" | "fa") => {
    toast.success("نام فروشگاه شما با موفقیت بروز شد");
    getUser();
    if (input === "fa") {
      setIsNameEdited(false)
    } else {
      setIsEnNameEdited(false)
      setFirstInFocus(false)
      setTimeout(() => {
        setShowSecondInput(false)
      }, 500);
    }
  }

  return (
    <Box>
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
            {firstInput.title}
          </Typography>
          <InfoButton />
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: focusingStep === "shopName" ? "button.main" : "border.main",
            borderRadius: "5px",
            width: { lg: "70%", md: "65%" },
            display: "flex",
            alignItems: "center",
            padding: "15px 10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "16px" },
            boxShadow: focusingStep === "shopName" ? "var(--mui-palette-button-main) 0px 0px 6px" : "none",
          }}
        >

          <input
            type="text"
            value={firstInput.value}
            placeholder={firstInput.placeHolder}
            ref={firstInputRef}
            onChange={(e) => firstInput.onChange(e.target.value)}
            disabled={firstInputDisabled}
            onFocus={() => {
              setFirstInFocus(true);
              setIsNameEdited(true);
            }}
            onBlur={() => {
              setFocusingStep("")
              setTimeout(() => {
                if (!secondInFocus) setFirstInFocus(true);
              }, 0);
            }}
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
            disabled={firstInputDisabled}
            onClick={handleFirstInputSubmit}
            sx={{
              color: isNameEdited ? "badgeText.success" : "button.main",
              bgcolor: isNameEdited ? "badge.success" : "button.info",
              minWidth: "80px",
              ":hover": {
                bgcolor: isNameEdited ? "badge.success" : "button.info",
              },
            }}
          >
            {isNameEdited
              ? "تایید"
              : firstInput?.value
                ? "بروزرسانی"
                : "افزودن"}
          </Button>
        </Box>
      </Box>
      {/* {showSecondInput && ( */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mt: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "16px", xs: "14px" },
            fontWeight: "400",
            color: "text.main",
          }}
        >
          {secondInput?.title}
        </Typography>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: focusingStep === "shopName" ? "button.main" : "border.main",
            borderRadius: "5px",
            width: { lg: "70%", md: "65%" },
            display: "flex",
            alignItems: "center",
            padding: "15px 10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "16px" },
            boxShadow: focusingStep === "shopName" ? "var(--mui-palette-button-main) 0px 0px 6px" : "none",
          }}
        >
          <input
            type="text"
            value={secondInput.value}
            ref={secondInputRef}
            placeholder={secondInput.placeHolder}
            onChange={(e) => secondInput.onChange(e.target.value)}
            disabled={secondInputDisabled}
            onFocus={() => {
              setSecondInFocus(true);
              setIsEnNameEdited(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                if (!firstInFocus && !isEnNameEdited) setSecondInFocus(false);
              }, 0);
            }}
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
            onClick={handleSecondInputSubmit}
            disabled={secondInputDisabled}

            sx={{
              color: isEnNameEdited ? "badgeText.success" : "button.main",
              bgcolor: isEnNameEdited ? "badge.success" : "button.info",
              minWidth: "80px",
              ":hover": {
                bgcolor: isEnNameEdited ? "badge.success" : "button.info",
              },
            }}
          >
            {isEnNameEdited
              ? "تایید"
              : secondInput?.value
                ? "بروزرسانی"
                : "افزودن"}
          </Button>
        </Box>
      </Box>
      {/* )} */}
    </Box>
  );
};

export default CupleInput;
