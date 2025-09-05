"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TabsSlider = () => {
  const sections = [
    { id: "messages", label: "پیام ها" },
    { id: "activities", label: "فعالیت های اخیر" },
    { id: "tickets", label: "تیکت ها" },
    { id: "notifications", label: "اطلاع رسانی" },
    { id: "views", label: "بازدیدهای اخیر" },
    { id: "orders", label: "سفارشات" },
    { id: "bookmarks", label: "علامت گذاری شده ها" },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sections]);

  const handleScrollToSection = (id : string) => {
    const section = document.getElementById(id);
    
      section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.2}
      breakpoints={{
        0: { slidesPerView: 2.2 },
        600: { slidesPerView: 3.2 },
      }}
    >
      {sections.map((section) => (
        <SwiperSlide key={section.id}>
          <Box
            onClick={() => handleScrollToSection(section.id)}
            sx={{
              cursor: "pointer",
              py: "10px",
              borderBottom: activeSection === section.id ? "3px solid #FF5733" : "3px solid #9FE870",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#344054",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {section.label}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TabsSlider;
