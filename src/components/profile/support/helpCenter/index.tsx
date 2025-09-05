"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SupportMenu from "../supportMenu";
import Image from "next/image";
import QuickAccess from "../quickAccess";

const HelpCenter = () => {
  const [openAccardionIndex1, setOpenAccardionIndex1] = useState<number | null>(
    null
  );

  const handleAccardionToggle1 = (index: number) => {
    if (openAccardionIndex1 === index) {
      setOpenAccardionIndex1(null);
    } else {
      setOpenAccardionIndex1(index);
    }
  };

  const [openAccardionIndex2, setOpenAccardionIndex2] = useState<number | null>(
    null
  );

  const handleAccardionToggle2 = (index: number) => {
    if (openAccardionIndex2 === index) {
      setOpenAccardionIndex2(null);
    } else {
      setOpenAccardionIndex2(index);
    }
  };

  const [openAccardionIndex3, setOpenAccardionIndex3] = useState<number | null>(
    null
  );

  const handleAccardionToggle3 = (index: number) => {
    if (openAccardionIndex3 === index) {
      setOpenAccardionIndex3(null);
    } else {
      setOpenAccardionIndex3(index);
    }
  };

  const mainSections = [
    {
      id: 1,
      title: "چطور فروش و تجارت در نونز باید شروع کنم؟",
      text: "برای شروع فروش و تجارت در نونز، ابتدا یک حساب کاربری ایجاد کنید و اطلاعات کامل خود را وارد نمایید. سپس، محصولات خود را با دقت انتخاب کرده و قیمت‌گذاری مناسب انجام دهید. محتوای جذابی شامل توضیحات و تصاویر با کیفیت برای هر محصول بارگذاری کنید",
    },
    {
      id: 2,
      title: "چطور فروشم را افزایش بدم؟",
      text: "برای افزایش فروش خود، ابتدا روی شناسایی و درک مشتریان هدف خود تمرکز کنید. از طریق تحلیل داده‌ها و بازخوردها، نیازها و خواسته‌های آن‌ها را شناسایی کنید. سپس، محتوای تبلیغاتی جذاب و متناسب با این نیازها ایجاد کنید و از شبکه‌های اجتماعی و دیگر کانال‌های دیجیتال برای تبلیغ محصولات خود استفاده کنید.",
    },
    {
      id: 3,
      title: "چطور به فروشنده ها اعتماد کنم؟",
      text: "برای ایجاد اعتماد به فروشندگان، می‌توانید مدارک و مجوزهای آن‌ها را بررسی کنید و نظرات و تجربیات سایر خریداران را مطالعه کنید. ارتباط مستقیم با فروشنده و طرح سوالات، همچنین انجام یک خرید کوچک قبل از سفارش‌های بزرگ می‌تواند به شما در ارزیابی آن‌ها کمک کند",
    },
  ];

  const sections = [
    {
      id: 1,
      title: "فروشنده",
      short_text: "کارمزد . قوانین . امنیت معامله و ...",
      accardions: [
        {
          id: 1,
          title: "کارمزد",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 2,
          title: "قوانین",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 3,
          title: "امنیت معامله",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
      ],
      icon: `<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.75 11.5C5.16421 11.5 5.5 11.8358 5.5 12.25V20.5H18.5V12.25C18.5 11.8358 18.8358 11.5 19.25 11.5C19.6642 11.5 20 11.8358 20 12.25V22H4V12.25C4 11.8358 4.33579 11.5 4.75 11.5Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 21.25C2 20.8358 2.33579 20.5 2.75 20.5H21.25C21.6642 20.5 22 20.8358 22 21.25C22 21.6642 21.6642 22 21.25 22H2.75C2.33579 22 2 21.6642 2 21.25Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.75 16.25C8.75 15.2835 9.5335 14.5 10.5 14.5H13.5C14.4665 14.5 15.25 15.2835 15.25 16.25V21.25C15.25 21.6642 14.9142 22 14.5 22C14.0858 22 13.75 21.6642 13.75 21.25V16.25C13.75 16.1119 13.6381 16 13.5 16H10.5C10.3619 16 10.25 16.1119 10.25 16.25V21.25C10.25 21.6642 9.91421 22 9.5 22C9.08579 22 8.75 21.6642 8.75 21.25V16.25Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.35547 4.56414C3.8659 3.03286 5.29892 2 6.91303 2H17.0885C18.7026 2 20.1356 3.03286 20.646 4.56415L21.646 7.56415C22.4555 9.99239 20.6481 12.5 18.0885 12.5C18.0738 12.5 18.0592 12.4996 18.0446 12.4987C18.0301 12.4996 18.0155 12.5 18.0008 12.5C16.7741 12.5 15.685 11.911 15.0008 11.0004C14.3166 11.911 13.2275 12.5 12.0008 12.5C10.7741 12.5 9.68499 11.911 9.00082 11.0004C8.31665 11.911 7.22752 12.5 6.00082 12.5C5.98608 12.5 5.97145 12.4996 5.95693 12.4987C5.9424 12.4996 5.92777 12.5 5.91303 12.5C3.35344 12.5 1.54605 9.99239 2.35547 7.56415L3.35547 4.56414ZM5.95693 11.0013C5.97145 11.0004 5.98608 11 6.00082 11C7.24346 11 8.25082 9.99264 8.25082 8.75V3.5H6.91303C5.94456 3.5 5.08475 4.11972 4.77849 5.03849L3.77849 8.03849C3.29285 9.49543 4.37728 11 5.91303 11C5.92777 11 5.9424 11.0004 5.95693 11.0013ZM9.75082 3.5V8.75C9.75082 9.99264 10.7582 11 12.0008 11C13.2435 11 14.2508 9.99264 14.2508 8.75V3.5H9.75082ZM15.7508 3.5V8.75C15.7508 9.99264 16.7582 11 18.0008 11C18.0155 11 18.0301 11.0004 18.0446 11.0013C18.0592 11.0004 18.0738 11 18.0885 11C19.6242 11 20.7087 9.49543 20.223 8.03849L19.223 5.03849C18.9168 4.11972 18.0569 3.5 17.0885 3.5H15.7508Z"
        fill="currentColor"
      />
    </svg>`,
    },
    {
      id: 2,
      title: "کاربر",
      short_text: "کارمزد . قوانین . امنیت معامله و ...",
      accardions: [
        {
          id: 1,
          title: "کارمزد",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 2,
          title: "قوانین",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 3,
          title: "امنیت معامله",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
      ],
      icon: ` <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19C17 17.6044 17 16.9067 16.8278 16.3389C16.44 15.0605 15.4395 14.06 14.1611 13.6722C13.5933 13.5 12.8956 13.5 11.5 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`,
    },
    {
      id: 3,
      title: "آکادمی",
      short_text: "افزایش فروش . تجارت و ...",
      accardions: [
        {
          id: 1,
          title: "کارمزد",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 2,
          title: "قوانین",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 3,
          title: "امنیت معامله",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
      ],
      icon: `<svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 12.4996V9.494C16 9.31452 16 9.22479 15.9727 9.14556C15.9485 9.0755 15.9091 9.01168 15.8572 8.95873C15.7986 8.89886 15.7183 8.85873 15.5578 8.77846L11 6.49958M3 7.49958V14.3062C3 14.6781 3 14.8641 3.05802 15.0269C3.10931 15.1708 3.1929 15.3011 3.30238 15.4077C3.42622 15.5283 3.59527 15.6057 3.93335 15.7607L10.3334 18.694C10.5786 18.8064 10.7012 18.8626 10.8289 18.8848C10.9421 18.9045 11.0579 18.9045 11.1711 18.8848C11.2988 18.8626 11.4214 18.8064 11.6666 18.694L18.0666 15.7607C18.4047 15.6057 18.5738 15.5283 18.6976 15.4077C18.8071 15.3011 18.8907 15.1708 18.942 15.0269C19 14.8641 19 14.6781 19 14.3062V7.49958M1 6.49958L10.6422 1.67846C10.7734 1.61287 10.839 1.58008 10.9078 1.56717C10.9687 1.55574 11.0313 1.55574 11.0922 1.56717C11.161 1.58008 11.2266 1.61287 11.3578 1.67846L21 6.49958L11.3578 11.3207C11.2266 11.3863 11.161 11.4191 11.0922 11.432C11.0313 11.4434 10.9687 11.4434 10.9078 11.432C10.839 11.4191 10.7734 11.3863 10.6422 11.3207L1 6.49958Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`,
    },
    {
      id: 4,
      title: "عمومی",
      short_text: "حریم شخصی . واریز و برداشت و ...",
      accardions: [
        {
          id: 1,
          title: "کارمزد",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 2,
          title: "قوانین",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
        {
          id: 3,
          title: "امنیت معامله",
          text: "امنیت معامله‌ها یکی از اولویت‌های ماست. با استفاده از فناوری‌های مدرن و سیستم‌های پیشرفته‌ی رمزنگاری، تمامی اطلاعات شما کاملاً ایمن باقی می‌ماند.",
        },
      ],
      icon: `<svg
      width="22"
      height="10"
      viewBox="0 0 22 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4.53472C10.2335 3.82176 11.7663 3.82176 12.9999 4.53472M7.82843 2.17157C9.39052 3.73366 9.39052 6.26633 7.82843 7.82843C6.26634 9.39052 3.73367 9.39052 2.17157 7.82843C0.609477 6.26634 0.609477 3.73367 2.17157 2.17157C3.73366 0.609477 6.26633 0.609477 7.82843 2.17157ZM19.8284 2.17157C21.3905 3.73366 21.3905 6.26633 19.8284 7.82843C18.2663 9.39052 15.7337 9.39052 14.1716 7.82843C12.6095 6.26634 12.6095 3.73367 14.1716 2.17157C15.7337 0.609477 18.2663 0.609477 19.8284 2.17157Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <QuickAccess />
      <Box
        sx={{
          mt: { xs: 0, md: 5 },
        }}
      >
        {/* big title at the top */}
        <Typography
          sx={{
            color: "text.main",
            fontSize: "29px",
            fontWeight: "600",
            mt: 5,
            display: { xs: "none", md: "flex" },
          }}
        >
          پشتیبانی
        </Typography>
        {/* braedcrumb is here */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            mt: 1,
            mb: 5,
          }}
        >
          <Link href="/profile">
            <Typography
              sx={{
                color: "button.main",
                fontWeight: "600",
              }}
            >
              profile
            </Typography>
          </Link>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Link href="/support">
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: "500",
              }}
            >
              support
            </Typography>
          </Link>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: "500",
            }}
          >
            help-center
          </Typography>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid
            item
            lg={4}
            md={4.5}
            xs={12}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <SupportMenu />
          </Grid>
          <Grid item lg={8} md={7.5} xs={12}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  p: "10px",
                  bgcolor: { xs: "transparent", md: "background.element" },
                  border: "0.5px solid",
                  borderColor: { xs: "transparent", md: "border.secondary" },
                  borderRadius: { xs: "0px", md: "12px" },
                  mb: { xs: "150px", md: "0px" },
                }}
              >
                <Box
                  sx={{
                    height: "56px",
                    bgcolor: "background.secondary",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    px: 3,
                    color: "text.secondary",
                  }}
                >
                  <label
                    htmlFor="search"
                    style={{
                      display: "flex",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="موضوع یا کلمه را جستجو کنید"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      padding: "0 8px",
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "inherit",
                    }}
                  />
                </Box>
                <Box mt={4}>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                      mb: 1.5,
                    }}
                  >
                    موضوع پیشنهادی
                  </Typography>
                  <Box
                    sx={{
                      p: "0 10px",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 1.5,
                    }}
                  >
                    {mainSections.map((section, index) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          onClick={() => handleAccardionToggle1(index)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                color: "text.main",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              {section.title}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              height: "30px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "0.3s ease",
                              transform:
                                openAccardionIndex1 === index
                                  ? "rotate(-90deg)"
                                  : "rotate(0deg)",
                              color: "text.main",
                            }}
                          >
                            <svg
                              width="8"
                              height="14"
                              viewBox="0 0 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 13L1 7L7 1"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            my: openAccardionIndex1 === index ? 2 : 0,
                            overflow: "hidden",
                            lineHeight: 2,
                            maxHeight:
                              openAccardionIndex1 === index
                                ? `${section.text.length * 1.5}px`
                                : "0px",
                            transition: "all 0.313s ease",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.secondary",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {section.text}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "text.main",
                        fontSize: "20px",
                        fontWeight: "600",
                        py: 3,
                      }}
                    >
                      موضوعات
                    </Typography>
                    <Stack direction="column" rowGap="10px">
                      {sections.map((section, index) => (
                        <Box
                          key={section.id}
                          sx={{
                            border: "0.5px solid",
                            borderColor: "border.main",
                            borderRadius: 1,
                            padding: "15px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            onClick={() => handleAccardionToggle2(index)}
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "5px",
                                  bgcolor: "background.secondary",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "icon.main",
                                }}
                              >
                                <div
                                  className="flex"
                                  dangerouslySetInnerHTML={{
                                    __html: section.icon,
                                  }}
                                ></div>
                              </Box>
                              <Typography
                                sx={{
                                  mt: 1.5,
                                  mb: 1,
                                  color: "icon.main",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}
                              >
                                {section.title}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "text.secondary",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                }}
                              >
                                {section.short_text}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "30px",
                                cursor: "pointer",
                                transition: "0.3s ease",
                                transform:
                                  openAccardionIndex2 === index
                                    ? "rotate(-90deg)"
                                    : "rotate(0deg)",
                                color: "text.main",
                              }}
                            >
                              <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 13L1 7L7 1"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              my: openAccardionIndex2 === index ? 2 : 0,
                              overflow: "hidden",
                              lineHeight: 2,
                              transition: "all 0.313s ease",
                              height:
                                openAccardionIndex2 === index ? `auto` : "0px",
                            }}
                          >
                            {section.accardions.map((item, index) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Box
                                  onClick={() => handleAccardionToggle3(index)}
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: "text.main",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      {item.title}
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: "60px",
                                      height: "30px",
                                      cursor: "pointer",
                                      transition: "0.3s ease",
                                      transform:
                                        openAccardionIndex3 === index
                                          ? "rotate(-90deg)"
                                          : "rotate(0deg)",
                                      color: "text.main",
                                    }}
                                  >
                                    <svg
                                      width="6"
                                      height="10"
                                      viewBox="0 0 8 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7 13L1 7L7 1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    my: openAccardionIndex3 === index ? 1 : 0,
                                    overflow: "hidden",
                                    maxHeight:
                                      openAccardionIndex3 === index
                                        ? `${
                                            section.accardions[index].text
                                              .length * 1.5
                                          }px`
                                        : "0px",
                                    transition: "all 0.313s ease",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: "text.secondary",
                                      fontSize: "12px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {item.text}
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HelpCenter;
