import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import PopupText from "./popupText";
import Drawer from "./drawer";

const MainPageAbout = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          bgcolor: { md: "transparent", xs: "background.element" },
          padding: "20px 10px",
          borderRadius: { md: "0px", xs: "12px" },
          boxShadow: { md: "none", xs: "0px 4px 4px 0px rgba(0, 0, 0, 0.12)" },
        }}
      >
        {/* top section that has to text elements (one of them outlined) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Box sx={{ color: "primary.main" }}>
            <Typography
              sx={{
                fontSize: { md: "45px", xs: "24px" },
                fontWeight: "600",
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "inherit",
              }}
            >
              Join the
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "text.main",
              fontWeight: "600",
              fontSize: { md: "32px", xs: "24px" },
              textShadow: "5px 4px 8px #2e2e2d",
            }}
          >
            ! Champions Today
          </Typography>
        </Box>
        {/* second section that has image and text */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            paddingX: { md: "30px", xs: "0px" },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { md: "350px", xs: "291px" },
              height: { md: "260px", xs: "216px" },
            }}
          >
            <Image
              src="/images/aboutBanner.png"
              fill
              alt="about"
              loading="lazy"
            />
          </Box>
          {/* left side section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: { md: "60%", xs: "100%" },
              alignSelf: "start",
            }}
          >
            {/* titles of the secion apeared here */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: "600",
                  fontSize: { md: "45px", xs: "24px" },
                  textShadow: "5px 4px 8px #2e2e2d",
                }}
              >
                به جمع قهرمانان
              </Typography>
              <Box sx={{ color: "primary.main" }}>
                <Typography
                  sx={{
                    fontSize: { md: "32px", xs: "24px" },
                    fontWeight: "600",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "inherit",
                  }}
                >
                  ملحق شوید
                </Typography>
              </Box>
            </Box>
            {/* desktop text (around 900 px) */}
            <Typography
              sx={{
                color: "text.main",
                lineHeight: "2.5",
                display: { md: "block", xs: "none" },
              }}
            >
              هدف ما ایجاد یک محیط امن و مطمئن برای کاربران است تا بتوانند با
              خیالی آسوده معاملات خود را انجام دهند.ما از کاربران خود در برابر
              کلاهبرداری ها حفاظت میکنیم و یک پلتفرم امن با امکان خرید مستقیم از
              فروشنده و گفتگوی آنلاین قبل از خرید را فراهم کرده ایم.همچنین ضمانت
              برگشت پول به شما این اطمینان را میدهد که در صورت بروز هرگونه مشکل
              پول شما به طور کامل بازگردانده خواهد شد.با ما خرید و فروش در دنیای
              گیمینگ را به سطحی جدید ببرید و از امنیت و اطمینانا لذت ببرید
            </Typography>
            {/* mobile text with see more (under 900 px) */}
            <PopupText />
            <Box
              sx={{
                display: "flex",
                gap: 3,
                // pr: 2,
              }}
            >
              <Drawer />
              <Box
                sx={{
                  color: "text.main",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ textDecoration: "underline" }}>
                  سوالات متداول
                </Typography>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.58333 6.66663L6.39824 9.66324C6.20058 9.84921 6.20059 10.1507 6.39825 10.3367L9.58333 13.3333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.333 10H7.08301"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainPageAbout;
