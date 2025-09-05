"use client";

import { Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    family: "",
    number: "",
    email: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  const mobileRegex = new RegExp(/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData?.name?.replaceAll(" ","")) {
        return toast.error("نام خود را وارد کنید")
    }
    if(!formData?.family?.replaceAll(" ","")) {
        return toast.error("نام خانوادگی خود را وارد کنید")
    }
    if(!emailRegex.test(formData?.email)) {
        return toast.error("ایمیل معتبر وارد کنید")
    }
    if(!mobileRegex.test(formData?.number)) {
        return toast.error("شماره همراه معتبر وارد کنید")
    }
    if(!formData?.text?.replaceAll(" ","")) {
        return toast.error("پیام خود را بنویسید.")
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/settings/contact/`, formData)
      .then(
        () => (
          toast.success("درخواست شما با موفقیت ثبت شد."),
          setFormData({
            name: "",
            family: "",
            number: "",
            email: "",
            text: "",
          })
        )
      )
      .catch((err) => toast.error("خطا در ارسال درخواست."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", gap: "14px" }}>
          <Box
            sx={{
              borderRadius: "5px",
              border: "1px solid",
              borderColor: "#FFFFFF33",
              p: 1.5,
              width: "100%",
              bgcolor: "#FFFFFF0D",
              fontWeight: { md: "500", xs: "400 !important" },
              color: "white",
            }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                width: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              borderRadius: "5px",
              border: "1px solid",
              borderColor: "#FFFFFF33",
              p: 1.5,
              width: "100%",
              bgcolor: "#FFFFFF0D",
              fontWeight: { md: "500", xs: "400 !important" },
              color: "white",
            }}
          >
            <input
              type="text"
              name="family"
              value={formData.family}
              onChange={handleChange}
              placeholder="نام خانوادگی"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                width: "100%",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: "5px",
            border: "1px solid",
            borderColor: "#FFFFFF33",
            p: 1.5,
            width: "100%",
            bgcolor: "#FFFFFF0D",
            fontWeight: { md: "500", xs: "400 !important" },
            color: "white",
          }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "inherit",
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            border: "1px solid",
            borderColor: "#FFFFFF33",
            p: 1.5,
            width: "100%",
            bgcolor: "#FFFFFF0D",
            fontWeight: { md: "500", xs: "400 !important" },
            color: "white",
          }}
        >
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="شماره موبایل"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "inherit",
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            border: "1px solid",
            borderColor: "#FFFFFF33",
            p: 1.5,
            width: "100%",
            bgcolor: "#FFFFFF0D",
            fontWeight: { md: "500", xs: "400 !important" },
            color: "white",
          }}
        >
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="متن پیام"
            rows={4}
            className="scrollbarHidden"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "inherit",
              width: "100%",
              height: "100%",
              resize: "none",
            }}
          />
        </Box>
        <Button
          type="submit"
          sx={{
            bgcolor: "button.main",
            color: "white",
            borderRadius: "8px",
            py: 1.5,
            fontWeight: "600",
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          ارسال پیام
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
