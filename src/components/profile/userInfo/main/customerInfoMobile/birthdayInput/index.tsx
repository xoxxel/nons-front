"use client";
import { Box, Button } from "@mui/material";
import AccordionInput from "../AccordionInput";
import DatePicker, { DateObject, DatePickerRef } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import { useRef, useState } from "react";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import "react-multi-date-picker/styles/layouts/mobile.css";

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

const BirthdayInput = ({
  props,
  onSubmit,
}: {
  props: Props;
  onSubmit: () => void;
}) => {
  const datePickerRef = useRef<DatePickerRef | null>(null);
  const [birthDate, setBirthDate] = useState<Date>();
  const [isEdited, setIsEdited] = useState(false);

  function handleChange(value: DateObject) {
    setBirthDate(value.toDate());
    setIsEdited(true);
  }

  const handleSubmit = () => {
    if (!isEdited) {
      if (datePickerRef.current) datePickerRef.current.openCalendar();
      setIsEdited(true);
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

  const handleSuccessfulSubmit = () => {
    toast.success("تاریخ تولد شما با موفقیت ثبت شد");
    onSubmit()
  };

  return (
    <AccordionInput props={{ ...props, onSubmit: () => handleSubmit() }}>
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
        <Box sx={{ width: "100%", color: "text.main" }}>
          <DatePicker
            className="birthdate-calendar rmdp-mobile"
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
              fontSize: "12px",
              fontWeight: "400",
            }}
          />
        </Box>
      </Box>
    </AccordionInput>
  );
};

export default BirthdayInput;
