"use client";
import { Box, Button, Container } from "@mui/material";
import AccordionInput from "./AccordionInput";
import TagsSelect from "../customerInfo/tagsSelect";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserProvider";
import RefundMethod from "../customerInfo/refundMethod";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import BirthdayInput from "./birthdayInput";
import jalaliDate from "@/utils/jalaliDate";
import NumberInput from "./numberInput";
import NationalCodeInput from "./nationalCodeInput";
import EmailInput from "./emailInput";

interface FormDataType {
  username: string;
  name: string;
  number: string;
  national_id: string;
  // birthdate: string;
  email: string;
  return_option: "" | "Wallet" | "Bank";
  tag: number;
}

type AccordionStatus = {
  username: boolean;
  name: boolean;
  number: boolean;
  national_id: boolean;
  birthdate: boolean;
  email: boolean;
  return_option: boolean;
  tag: boolean;
};

const CustomerInfoMobile = ({ tags }: { tags: BrandModel["tags"] }) => {
  const { user, getUser } = useContext(UserContext);
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    name: "",
    number: "",
    national_id: "",
    // birthdate: "",
    email: "",
    return_option: "",
    tag: 0,
  });

  const [accardionStatus, setAccordionStatus] = useState<AccordionStatus>({
    username: false,
    name: false,
    number: false,
    national_id: false,
    birthdate: false,
    email: false,
    return_option: false,
    tag: false,
  });

  const [loading, setLoading] = useState<keyof AccordionStatus | "">("");

  useEffect(() => {
    setFormData({
      username: user?.username ?? "",
      name: user?.name ?? "",
      number: user?.number ?? "",
      national_id: user?.national_id ?? "",
      // birthdate: "",
      email: user?.email ?? "",
      return_option: user?.return_option ?? "Wallet",
      tag: user?.tag?.id ?? 0,
    });
  }, [user]);

  const handleSuccessfulSubmit = (inputName: keyof AccordionStatus) => {
    toast.success("بروزرسانی با موفقیت انجام شد");
    setLoading("");
    setAccordionStatus((prev) => ({ ...prev, [inputName]: false }));
    getUser();
  };

  const handleSingleFieldUpdate = (name: keyof AccordionStatus, value: any) => {
    setLoading(name);
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API}/user/user/`,
        { [name]: value },
        {
          headers: { Authorization: `Bearer ${Cookies.get("access")}` },
        }
      )
      .then((res) => handleSuccessfulSubmit(name))
      .catch((err) => handleError(err, name)).finally(()=> setLoading(""));
  };

  const handleError = (error: any, key?: string) => {
    setLoading("");
    if (error.response) {
      const errorMessage = error.response.data.msg;
      if (key) {
        const message = error.response.data?.[key];
        if (message) {
          return toast.error(message || "خطای سرور");
        }
      }
      toast.error(errorMessage || "خطای سرور");
    } else {
      toast.error("مشکل سرور");
    }
  };

  const toggleAccordion = (key: keyof AccordionStatus) => {
    setAccordionStatus((prevState) => {
      // Reset all values to false
      const newState = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr as keyof AccordionStatus] = false;
        return acc;
      }, {} as AccordionStatus);
      // Set the specified key to true
      newState[key] = true;
      return newState;
    });
  };

  return (
    <Container sx={{ mt: 4, display: { md: "none", xs: "block" } }}>
      <AccordionInput
        props={{
          title: "نام کاربری",
          open: accardionStatus?.username,
          onOpen: () => toggleAccordion("username"),
          onSubmit: () =>
            handleSingleFieldUpdate("username", formData?.username),
          disabled: Boolean(user?.username),
          value: user?.username ?? "",
          onChange(username) {
            setFormData({ ...formData, username });
          },
          loading: loading === "username",
          description:
            "یک نام کاربری برای خود بنویسید ، این نامی است که دیگران شما را با این نام میشناسند و در آینده نمیتوانید آنرا تغییر دهید",
        }}
      />
      <AccordionInput
        props={{
          title: "نام و نام خانوادگی",
          open: accardionStatus?.name,
          onOpen: () => toggleAccordion("name"),
          onSubmit: () => handleSingleFieldUpdate("name", formData?.name),
          disabled: false,
          value: user?.name ?? "",
          loading: loading === "name",
          onChange(name) {
            setFormData({ ...formData, name });
          },
          description:
            "ما برای تایید هویت به نام واقعی شما نیاز داریم ، این اطلاعات نزد ما محرمانه باقی میماند و در هیچ کجا نمایش داده نمیشود",
        }}
      />
      <NumberInput
        onChange={() => {
          setAccordionStatus((prev) => ({ ...prev, number: false })), getUser();
        }}
        props={{
          title: "شماره موبایل",
          open: accardionStatus?.number,
          onOpen: () => toggleAccordion("number"),
          onSubmit: () => handleSingleFieldUpdate("number", formData?.number),
          disabled: false,
          value: user?.number ?? "",
          description:
            "ما برای تایید هویت و حفاظت از حساب شما به شماره موبایل شما نیاز داریم ، این اطلاعات نزد ما محرمانه باقی میماند و در هیچ کجا نمایش داده نمیشود",
        }}
      />
      <NationalCodeInput
        onChange={() => {
          setAccordionStatus((prev) => ({ ...prev, national_id: false })),
            getUser();
        }}
        props={{
          title: "کد ملی",
          open: accardionStatus?.national_id,
          onOpen: () => toggleAccordion("national_id"),
          disabled: Boolean(user?.national_id),
          value: user?.national_id ?? "",
          loading: loading === "national_id",
          description:
            "ما برای تایید هویت به کد ملی شما نیاز داریم ، کد ملی باید با  مالک شماره موبایل منطبق باشد",
        }}
      />
      <BirthdayInput
        onSubmit={() => {
          setAccordionStatus((prev) => ({ ...prev, birthdate: false })),
            getUser();
        }}
        props={{
          title: "تاریخ تولد",
          open: accardionStatus?.birthdate,
          onOpen: () => toggleAccordion("birthdate"),
          disabled: false,
          value: jalaliDate(user?.birthdate, "YYYY/MM/DD") ?? "",
          loading: loading === "birthdate",
        }}
      />
      <EmailInput
        onChange={() => {
          setAccordionStatus((prev) => ({ ...prev, email: false })), getUser();
        }}
        props={{
          title: "ایمیل",
          open: accardionStatus?.email,
          onOpen: () => toggleAccordion("email"),
          disabled: false,
          value: user?.email ?? "",
        }}
      />
      <AccordionInput
        props={{
          title: "روش استرداد",
          open: accardionStatus?.return_option,
          onOpen: () => toggleAccordion("return_option"),
          onSubmit: () =>
            handleSingleFieldUpdate("return_option", formData?.return_option),
          disabled: false,
          value: user?.return_option === "Bank" ? "حساب بانکی" : "کیف پول",
          loading: loading === "return_option",
          description:
            "انتخاب کنید درصورت لغو سفارش به چه صورت مبلغ پرداختی را دریافت میکنید",
        }}
      >
        <Box sx={{ mt: 1 }}>
          <RefundMethod
            withoutButton
            method={formData?.return_option}
            onChange={(method) =>
              setFormData({ ...formData, return_option: method })
            }
          />
        </Box>
      </AccordionInput>
      <AccordionInput
        props={{
          title: "تگ ها",
          open: accardionStatus?.tag,
          onOpen: () => toggleAccordion("tag"),
          onSubmit: () => handleSingleFieldUpdate("tag", formData?.tag),
          disabled: false,
          value: user?.tag?.title ?? "",
          loading: loading === "tag",
        }}
      >
        <TagsSelect
          data={tags}
          value={formData?.tag || user?.tag?.id || -1}
          onChange={(tagId) => setFormData(() => ({ ...formData, tag: tagId }))}
        />
      </AccordionInput>
    </Container>
  );
};

export default CustomerInfoMobile;
