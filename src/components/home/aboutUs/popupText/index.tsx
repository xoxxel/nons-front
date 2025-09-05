"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

const PopupText = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: { md: "none", xs: "flex" },
        flexDirection: "column",
        gap: 2,
        fontSize: "13px",
        fontWeight: "400",
      }}
    >
      {open ? (
        <Typography sx={{ color: "text.main", lineHeight: "2" }}>
          هدف ما ایجاد یک محیط امن و مطمئن برای کاربران است تا بتوانند با خیالی
          آسوده معاملات خود را انجام دهند.ما از کاربران خود در برابر کلاهبرداری
          ها حفاظت میکنیم و یک پلتفرم امن با امکان خرید مستقیم از فروشنده و
          گفتگوی آنلاین قبل از خرید را فراهم کرده ایم.همچنین ضمانت برگشت پول به
          شما این اطمینان را میدهد که در صورت بروز هرگونه مشکل پول شما به طور
          کامل بازگردانده خواهد شد.با ما خرید و فروش در دنیای گیمینگ را به سطحی
          جدید ببرید و از امنیت و اطمینانا لذت ببرید
        </Typography>
      ) : (
        <Typography sx={{ color: "text.main", lineHeight: "2" }}>
          نونز یک بازار تجارت گیمینگ است که به شما امکان خرید و فروش سکه ها ،
          آیتم ها و اکانت های بازی های ویدئویی را بدون هیچ کارمزدی میدهد.
        </Typography>
      )}
      <Typography
        onClick={() => setOpen(!open)}
        sx={{ color: "primary.main", textDecoration: "underline" }}
      >
        {open? "کمتر" : "مشاهده بیشتر"}
      </Typography>
    </Box>
  );
};

export default PopupText;
