"use client";
import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../../infoButton";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import DatePicker, { DateObject, DatePickerRef } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

const CustomArrow = ({
  direction,
  handleClick,
  disabled,
}: {
  direction?: "right" | "left";
  handleClick?: () => void;
  disabled?: boolean;
}) => {

  return (
    <Box
      onClick={handleClick}
      sx={{
        color: "text.main",
        rotate: direction === "right" ? "0deg" : "180deg",
        height: "24px",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" />
      </svg>
    </Box>
  );
};

const BirthdayInput = ({ value }: { value: Date }) => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [isEdited, setIsEdited] = useState(false);
  const datePickerRef = useRef<DatePickerRef | null>(null);

  function handleChange(value: DateObject) {
    setBirthDate(value.toDate());
    setIsEdited(true)
  }

  const handleSubmit = () => {
    if (!isEdited) {
      if (datePickerRef.current) datePickerRef.current.openCalendar();
      setIsEdited(true)
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/user/`,
          { birthdate: birthDate },
          {
            headers: { Authorization: `Bearer ${Cookies.get("access")}` },
          }
        )
        .then((res) => handleSuccessfulSubmit())
        .catch((err) => toast.error("خطای سرور"));
    }
  };

  const handleSuccessfulSubmit = ()=> {
    toast.success("تاریخ تولد شما با موفقیت ثبت شد");
    setIsEdited(false)
  }

  useEffect(()=> {
    if(value) setBirthDate(new Date(value))
  },[value])

  return (
    <>
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
            تاریخ تولد
          </Typography>
          <InfoButton />
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            padding: "15px 10px",
            color: "text.main",
            fontSize: { xs: "13px", md: "16px" },
          }}
        >
          <Box sx={{ width: "100%", color: "text.main" }}>
            <DatePicker
              className="birthdate-calendar"
              ref={datePickerRef}
              value={birthDate}
              onChange={handleChange}
              calendar={persian}
              locale={persian_fa}
              arrow={false}
              digits={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
              placeholder="تاریخ تولد"
              renderButton={<CustomArrow />}
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                color: "inherit",
                fontSize:"16px",
              }}
            />
          </Box>
          <Button
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
      </Box>
    </>
  );
};

export default BirthdayInput;
