"use client"
import { Box, Button, Typography } from "@mui/material";
import JobAccordion from "./accordion";
import { useState } from "react";

const jobs = [
  {
    title: "تولید کننده محتوا",
    text: "اگر علاقه‌مند به تولید محتوای جذاب و خلاقانه هستید، نونز به دنبال شماست! به ما بپیوندید و با تولید محتوای آموزشی، نقد و بررسی بازی‌ها و مطالب جذاب دیگر، به گسترش جامعه گیمینگ کمک کنید.",
  },
  {
    title: "استریمر",
    text: "اگر علاقه‌مند به تولید محتوای جذاب و خلاقانه هستید، نونز به دنبال شماست! به ما بپیوندید و با تولید محتوای آموزشی، نقد و بررسی بازی‌ها و مطالب جذاب دیگر، به گسترش جامعه گیمینگ کمک کنید.",
  },
  {
    title: "طراح گرافیک و UI/UX",
    text: "اگر علاقه‌مند به تولید محتوای جذاب و خلاقانه هستید، نونز به دنبال شماست! به ما بپیوندید و با تولید محتوای آموزشی، نقد و بررسی بازی‌ها و مطالب جذاب دیگر، به گسترش جامعه گیمینگ کمک کنید.",
  },
  {
    title: "بازاریاب دیجیتال",
    text: "اگر علاقه‌مند به تولید محتوای جذاب و خلاقانه هستید، نونز به دنبال شماست! به ما بپیوندید و با تولید محتوای آموزشی، نقد و بررسی بازی‌ها و مطالب جذاب دیگر، به گسترش جامعه گیمینگ کمک کنید.",
  },
  {
    title: "توسعه‌دهنده و برنامه‌نویس",
    text: "اگر علاقه‌مند به تولید محتوای جذاب و خلاقانه هستید، نونز به دنبال شماست! به ما بپیوندید و با تولید محتوای آموزشی، نقد و بررسی بازی‌ها و مطالب جذاب دیگر، به گسترش جامعه گیمینگ کمک کنید.",
  },
  {
    title: "مدیر جامعه (Community Manager)",
    text: "اگر علاقه‌مند به تولید محتوای جذاب و خلاقانه هستید، نونز به دنبال شماست! به ما بپیوندید و با تولید محتوای آموزشی، نقد و بررسی بازی‌ها و مطالب جذاب دیگر، به گسترش جامعه گیمینگ کمک کنید.",
  },
];

const JobAccordions = () => {

  const [expandedID,setExpandedID] = useState(0)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {jobs?.map((job, index) => (
        <JobAccordion
          key={index}
          title={job?.title}
          text={job?.text}
          number={index + 1}
          isOpen={index + 1 === expandedID}
          onOpen={(id)=> setExpandedID(id)}
        />
      ))}
      <Box
        sx={{
          display: {md:"flex",xs:"block"},
          justifyContent: "space-between",
          alignItems: "center",
          my:1,
          textAlign:{md:"center",xs:"start"}
        }}
      >
        <Typography sx={{color:"white",fontSize:{md:"16px",xs:"14px"}}}> با یک کلیک، فرصت‌های جدید را آغاز کنید</Typography>
        <Button
          sx={{
            color: "white",
            bgcolor: "button.main",
            borderRadius: "8px",
            py: 1,
            px: 2,
            mt:{md:0,xs:2},
            fontWeight: 600,
            fontSize: {md:"16px",xs:"14px"},
            width:{md:"fit-content",xs:"100%"},
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          ارسال درخواست
        </Button>
      </Box>
    </Box>
  );
};

export default JobAccordions;
