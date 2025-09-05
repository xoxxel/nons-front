"use client";

import { Box, Button, SwipeableDrawer, Typography } from "@mui/material";
import { useState } from "react";

const Drawer = () => {
  const [isDrawerOpen, setIsDraweOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDraweOpen(true)}
        sx={{
          bgcolor: "button.main",
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
          px: 3,
          borderRadius: "7px",
          whiteSpace: "nowrap",
          ":hover": {
            bgcolor: "button.main",
          },
        }}
      >
        درباره ما
      </Button>
      <SwipeableDrawer
      disableSwipeToOpen
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "background.main",
            borderRadius: "15px 15px 0 0",
            px: 2.5,
            pb: 3.25,
            height: { md: "auto", xs: "100%" },
          },
          zIndex:99999999
        }}
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDraweOpen(false)}
        onOpen={() => setIsDraweOpen(true)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "5px",
              width: "170px",
              borderRadius: "80px",
              bgcolor: "#848686",
              mt: 2,
              mb: 3,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 1,
            borderBottom: "0.5px solid #4D5356",
            pb: 2,
            mb: 5,
            color:"text.main"
          }}
        >
          <Typography sx={{ fontWeight: "900", color: "text.main" }}>
            درباره ما
          </Typography>
          <svg
            onClick={() => setIsDraweOpen(false)}
            style={{ cursor: "pointer" }}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5.5L5 15.5M5 5.5L15 15.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        <Box className="scrollbarHidden" sx={{
          display: "flex",
          flexDirection:"column",
          gap:2,
          height:"calc(100% - 126px)",
          overflowY:"auto",
        }}>
        <Typography sx={{ color: "text.main", lineHeight: 2.2 }}>
          نونز با آرم اختصاصی ( ماهی در آب ) اولین بازار تجارت محصولات دیجیتال
          مجازی در کشور و پیشگام در ایجاد بستری یکپارچه برای آموزش ، شتابدهی و
          معامله خدمات الکترونیک جهانی. نونز با نگاهی نوآورانه و چشم انداز جهانی
          زیر ساختی امن و کار آمد را برای کسب و کارهای مجازی ،فریلنسرها و گیمر
          ها فرآهم آورده است.نونز همواره بستری پویا با تکیه بر دانش و تجربه 
          پدید آورده است تا کارفرمایان و خلاقان عرصه تجارت الکترونیک خدمات و
          محصولات خود را در گستره جهانی عرضه کنند. نونز با هدف ایجاد یک اکوسیستم
          کامل برای رشد و بالندگی استعدادهای ملی در حوزه دیجیتال بنا شده است و
          از آموزش و توانمندسازی گرفته تا تسهیل تعاملات تجاری در کنار شماست تا
          در عرصه رقابت جهانی با اتکا به نوآوری و کارآفرینی بدرخشید. داستان ما
          داستان یه ماهیه  داستان ما رویایی آزادانه و بدون محدودیت است ، رویایی
          که در آن هیچ مرز و محدودیتی نباشد .ما آرزو داریم که همه مردم ایران
          بتوانند آزادانه و بدون محدودیت در دنیای دیجیتال مانند ماهی در دریای
          بیکران شنا کنند و به موفقیت و کامیابی دست یابند. در این مسیر ما پل
          ارتباطی میان استعداد های درخشان و بازارهای جهانی هستیم ، با رفع موانع
          و محدودیت ها راهی هموار برای استعداد های این سرزمین به افق های بلند می
          گشاییم و هر آنچه برای موفقیت در دنیای الکترونیک به آن نیاز دارند را
          برای همه مردم ایران فراهم می کنیم.تا مانند ماهی در اعماق دریا آزادانه
          به کشف و کاوش به پردازند و رهاورد تلاش هایشان به ثمر نشانند. در این
          راستا ما خود را متعهد به ارائه راه حل هایی کارساز می دانیم تا هر آنچه
          بر سر راه پیشرفت و ترقی کاربران قرار میگیرد را حذف کنیم تا در عرصه
          تجارت الکترونیک در جهان نام ایران بدرخشد
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => setIsDraweOpen(false)}
            sx={{
              bgcolor: "button.main",
              color: "white",
              width: "256px",
              borderRadius: "9px",
              py: 1,
              ":hover": {
                bgcolor: "button.main",
              },
            }}
          >
            صفحه درباره ما
          </Button>
        </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
