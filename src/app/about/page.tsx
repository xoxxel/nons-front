import JobAccordions from "@/components/about/accordions";
import FoundersQoute from "@/components/about/foundersQoute";
import Properties from "@/components/about/properties";
import GamerComments from "@/components/home/gamerComments";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const texts = [
  "سیستم معاملاتی مبتنی بر چت و ارتباط مستقیم با فروشندگان",
  "فهرست بیش از 1000 برند پر طرفدار",
  "سیستم کنترل و نظارت بر معاملات",
  "امنیت بالا در تمامی تراکنش‌ها",
  "امکان برداشت درآمد به صورت ارزی و ریالی",
];

const AboutPage = () => {
  return (
    <>
      {/* lighter area */}
      <Box sx={{ bgcolor: "background.element" }}>
        <Container sx={{ pb: { md: 12, xs: "50px" } }}>
          {/* top section contains header text and blured element with star icons */}
          <Box sx={{ textAlign: "center", pt: { md: 10, xs: 6 } }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ position: "relative", width: "fit-content" }}>
                <Typography
                  sx={{
                    fontSize: { md: "60px", xs: "24px" },
                    fontWeight: 900,
                    color: "white",
                  }}
                >
                  جایی که{" "}
                  <span
                    style={{
                      fontWeight: "inherit",
                      color: "var(--mui-palette-primary-main)",
                    }}
                  >
                    سرگرمی
                  </span>
                  <br /> به تجارت تبدیل میشه
                </Typography>
                {/* big star at top right */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { md: 0, xs: -20 },
                    right: { md: -100, xs: -52 },
                    width: { md: "107px", xs: "55px" },
                    height: { md: "107px", xs: "55px" },
                  }}
                >
                  <svg
                    width="inherit"
                    height="inherit"
                    viewBox="0 0 107 107"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.0906 71.3758C41.1294 68.1256 38.5873 65.5835 35.3371 64.6223L1.29617 54.5551C0.102157 54.202 0.102166 52.5109 1.29617 52.1578L35.3371 42.0906C38.5873 41.1294 41.1294 38.5873 42.0906 35.3371L52.1578 1.29617C52.5109 0.102159 54.202 0.102165 54.5551 1.29617L64.6223 35.3371C65.5835 38.5873 68.1256 41.1294 71.3758 42.0906L105.417 52.1578C106.611 52.5109 106.611 54.202 105.417 54.5551L71.3758 64.6223C68.1256 65.5835 65.5835 68.1256 64.6223 71.3758L54.5551 105.417C54.202 106.611 52.5109 106.611 52.1578 105.417L42.0906 71.3758Z"
                      fill="#B9FD50"
                      fillOpacity="0.25"
                    />
                  </svg>
                </Box>
                {/* star at bottom right */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -120,
                    right: { md: 50, xs: 0 },
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15669 16.8367C8.57997 14.8866 7.05471 13.3613 5.10459 12.7846L1.40263 11.6898C0.686223 11.4779 0.686224 10.4632 1.40263 10.2514L5.10459 9.15655C7.05471 8.57983 8.57997 7.05457 9.15669 5.10445L10.2515 1.40249C10.4634 0.686081 11.478 0.686083 11.6899 1.40249L12.7847 5.10445C13.3614 7.05457 14.8867 8.57983 16.8368 9.15655L20.5388 10.2514C21.2552 10.4632 21.2552 11.4779 20.5388 11.6898L16.8368 12.7846C14.8867 13.3613 13.3614 14.8866 12.7847 16.8367L11.6899 20.5386C11.478 21.255 10.4634 21.255 10.2515 20.5386L9.15669 16.8367Z"
                      fill="#B9FD50"
                      fillOpacity="0.25"
                    />
                  </svg>
                </Box>
                {/* star at bottom left */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -100,
                    left: { md: 0, xs: -40 },
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.10438 11.2244C5.7199 9.92437 4.70306 8.90753 3.40298 8.52305L0.935004 7.79318C0.457401 7.65194 0.457401 6.97548 0.935005 6.83424L3.40298 6.10437C4.70306 5.71989 5.7199 4.70305 6.10438 3.40297L6.83425 0.934992C6.97549 0.457389 7.65195 0.457389 7.79319 0.934992L8.52306 3.40297C8.90754 4.70305 9.92438 5.71989 11.2245 6.10437L13.6924 6.83424C14.17 6.97548 14.17 7.65194 13.6924 7.79318L11.2245 8.52305C9.92438 8.90753 8.90754 9.92437 8.52306 11.2244L7.79319 13.6924C7.65195 14.17 6.97549 14.17 6.83425 13.6924L6.10438 11.2244Z"
                      fill="#B9FD50"
                      fillOpacity="0.25"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{
                color: "#B0B0B0",
                fontSize: { md: "16px", xs: "14px" },
                my: { md: 4, xs: 2.5 },
              }}
            >
              نونز جایی که جرقه های کوچک تبدیل به حرکت های بزرگ میشه، نونز مقصد
              نیست آغازی برای شروع داستان های جدید موفقیت
            </Typography>
            <Button
              sx={{
                bgcolor: "button.main",
                color: "white",
                px: 4,
                py: 1,
                fontWeight: 600,
                fontSize: { md: "16px", xs: "14px" },
                borderRadius: "8px",
                zIndex: 10,
                ":hover": {
                  bgcolor: "button.main",
                },
              }}
            >
              شروع کنید
            </Button>

            {/* blurred element behind */}
            <Box
              sx={{
                bgcolor: "#B9FD5066",
                width: "320px",
                height: "250px",
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: {md:0,xs:"50%"},
                margin: "auto",
                filter: "blur(135px)",
              }}
            ></Box>
          </Box>
          {/* title and infinite slider  */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                mt: { md: 10, xs: 9 },
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: { md: "50px", xs: "0px" },
                  height: "2px",
                  bgcolor: "#B9FD50",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* right cluster */}
                <svg
                  width="24"
                  height="40"
                  viewBox="0 0 24 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_5419_27994"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="40"
                  >
                    <path
                      d="M-1.71661e-05 0H23.5294V40H-1.71661e-05V0Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_5419_27994)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.73378 31.7703L5.56116 30.5674L3.43278 29.5605L2.60528 30.7635C0.765907 33.4378 1.65703 36.7325 4.59578 38.1227C5.52716 38.5632 6.59503 38.7735 7.69303 38.7328L8.09016 38.718L8.18353 36.5372L7.78641 36.5519C7.12766 36.5763 6.48678 36.45 5.92803 36.1858C4.16478 35.3517 3.63003 33.3749 4.73378 31.7703Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.1028 0.61071C14.6492 0.2821 13.9612 0.307638 13.4779 0.671032C10.9225 2.59253 9.46177 4.8113 9.35527 7.29944C9.24877 9.78757 10.5239 11.9048 12.9226 13.6424C13.3763 13.971 14.0642 13.9454 14.5475 13.582C17.103 11.6605 18.5636 9.44175 18.6702 6.95363C18.7767 4.4655 17.5016 2.34828 15.1028 0.61071ZM14.1911 2.95962C15.6208 4.22855 16.2233 5.5891 16.1609 7.04678C16.0985 8.50447 15.3774 9.91415 13.8343 11.2935C12.4046 10.0245 11.8022 8.66395 11.8646 7.20628C11.927 5.7486 12.648 4.33892 14.1911 2.95962Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.9641 30.2229C18.3356 29.8153 18.3593 29.2617 18.0215 28.8803C16.1084 26.7202 13.7514 25.5409 10.9444 25.645C8.13742 25.7493 5.67179 27.1075 3.56729 29.4169C3.19579 29.8245 3.17204 30.3783 3.50979 30.7595C5.42304 32.9197 7.77992 34.0989 10.5869 33.9948C13.394 33.8905 15.8595 32.5323 17.9641 30.2229ZM15.3609 29.6493C13.8168 31.1005 12.2609 31.7552 10.6803 31.8139C9.09967 31.8725 7.59504 31.3315 6.17042 29.9905C7.71454 28.5393 9.27042 27.8847 10.851 27.8259C12.4317 27.7673 13.9364 28.3084 15.3609 29.6493Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.1057 19.9294C23.2168 19.4231 22.9153 18.9451 22.379 18.7777C19.4285 17.8564 16.6314 17.9609 14.1551 19.3182C11.69 20.6695 10.219 22.8914 9.5929 25.7435C9.48178 26.2497 9.78327 26.7276 10.3195 26.8951C13.27 27.8165 16.0672 27.712 18.5435 26.3545C21.0085 25.0032 22.4796 22.7815 23.1057 19.9294ZM20.4038 20.581C19.8035 22.4929 18.7458 23.7577 17.3291 24.5342C15.9324 25.2999 14.2904 25.5347 12.2948 25.0919C12.8951 23.18 13.9528 21.9151 15.3694 21.1385C16.7662 20.3729 18.4082 20.1381 20.4038 20.581Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.0204 9.10287C21.8343 8.61664 21.2636 8.34324 20.6634 8.4527C17.4728 9.03457 15.0163 10.3913 13.5409 12.6131C12.0714 14.8259 11.96 17.3167 12.9733 19.9636C13.1594 20.4498 13.7301 20.7232 14.3303 20.6137C17.5209 20.0318 19.9774 18.6751 21.4528 16.4534C22.9223 14.2404 23.0337 11.7498 22.0204 9.10287ZM19.9227 10.8258C20.4204 12.6576 20.1635 14.1823 19.3027 15.4786C18.4534 16.7576 17.0947 17.6972 15.071 18.2406C14.5733 16.4089 14.8302 14.8841 15.691 13.5878C16.5403 12.3089 17.899 11.3693 19.9227 10.8258Z"
                      fill="#E0E0E0"
                    />
                  </g>
                </svg>
                <Typography
                  sx={{
                    fontSize: { md: "18px", xs: "16px" },
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    color: "#E0E0E0",
                  }}
                >
                  ویژگی های نونز
                </Typography>
                {/* left cluster */}
                <svg
                  width="25"
                  height="40"
                  viewBox="0 0 25 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_5419_27979"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="41"
                  >
                    <path
                      d="M24.0958 0.000488281H0.566406V40.0005H24.0958V0.000488281Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_5419_27979)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.3619 31.7713L18.5345 30.5684L20.6629 29.5615L21.4904 30.7645C23.3297 33.4388 22.4386 36.7335 19.4999 38.1236C18.5685 38.5641 17.5006 38.7745 16.4026 38.7338L16.0055 38.719L15.9121 36.5381L16.3092 36.5529C16.968 36.5773 17.6089 36.451 18.1676 36.1868C19.9309 35.3526 20.4656 33.3759 19.3619 31.7713Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99281 0.611686C9.44647 0.283076 10.1344 0.308615 10.6177 0.672009C13.1731 2.5935 14.6339 4.81228 14.7404 7.30042C14.8469 9.78854 13.5717 11.9058 11.173 13.6433C10.7193 13.972 10.0314 13.9463 9.54812 13.583C6.99269 11.6615 5.532 9.44273 5.42549 6.95461C5.31896 4.46648 6.59401 2.34925 8.99281 0.611686ZM9.90452 2.96059C8.47481 4.22953 7.87235 5.59008 7.93475 7.04776C7.99715 8.50544 8.71821 9.91513 10.2613 11.2944C11.691 10.0255 12.2935 8.66493 12.2311 7.20726C12.1687 5.74958 11.4476 4.33989 9.90452 2.96059Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.13165 30.2234C5.76012 29.8158 5.73642 29.2621 6.07416 28.8808C7.98735 26.7206 10.3443 25.5414 13.1513 25.6455C15.9583 25.7498 18.4239 27.108 20.5284 29.4174C20.8999 29.825 20.9237 30.3788 20.5859 30.76C18.6727 32.9201 16.3158 34.0994 13.5088 33.9953C10.7017 33.891 8.23616 32.5328 6.13165 30.2234ZM8.7348 29.6498C10.2789 31.101 11.8348 31.7556 13.4154 31.8144C14.996 31.873 16.5007 31.332 17.9253 29.991C16.3812 28.5398 14.8253 27.8851 13.2447 27.8264C11.664 27.7678 10.1593 28.3089 8.7348 29.6498Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.989939 19.9303C0.87881 19.4241 1.18038 18.9461 1.71661 18.7787C4.66712 17.8573 7.46424 17.9618 9.94058 19.3192C12.4056 20.6705 13.8766 22.8923 14.5027 25.7445C14.6139 26.2507 14.3124 26.7286 13.7761 26.8961C10.8256 27.8175 8.02846 27.713 5.55212 26.3555C3.08711 25.0042 1.61606 22.7825 0.989939 19.9303ZM3.69186 20.582C4.29218 22.4938 5.34988 23.7587 6.76651 24.5352C8.16324 25.3008 9.80528 25.5357 11.8009 25.0928C11.2005 23.181 10.1428 21.9161 8.72621 21.1395C7.32947 20.3738 5.68743 20.1391 3.69186 20.582Z"
                      fill="#E0E0E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.07548 9.10384C2.26161 8.61762 2.83224 8.34422 3.43249 8.45368C6.62312 9.03554 9.07962 10.3923 10.555 12.614C12.0245 14.8269 12.1358 17.3177 11.1226 19.9645C10.9365 20.4508 10.3658 20.7242 9.76557 20.6147C6.57494 20.0328 4.11844 18.676 2.64309 16.4544C1.1736 14.2414 1.06221 11.7508 2.07548 9.10384ZM4.17314 10.8268C3.67549 12.6585 3.93237 14.1833 4.79319 15.4795C5.64248 16.7585 7.00116 17.6982 9.02492 18.2415C9.52257 16.4099 9.26569 14.885 8.40487 13.5888C7.55558 12.3098 6.19691 11.3702 4.17314 10.8268Z"
                      fill="#E0E0E0"
                    />
                  </g>
                </svg>
              </Box>
              <Box
                sx={{
                  width: { md: "50px", xs: "0px" },
                  height: "2px",
                  bgcolor: "#B9FD50",
                }}
              ></Box>
            </Box>
            <Box
              sx={{ width: "100%", overflow: "hidden", whiteSpace: "nowrap" }}
            >
              <Box className="slider-content">
                {texts?.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      fontSize: { md: "16px", xs: "14px" },
                      color: "#E0E0E0",
                      mx: 2,
                      fontWeight: 700,
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
              <Box aria-hidden className="slider-content">
                {texts?.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      fontSize: { md: "16px", xs: "14px" },
                      color: "#E0E0E0",
                      mx: 2,
                      fontWeight: 700,
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
          {/* nons story, start of the successes */}
          <Box sx={{ mt: { md: 15, xs: 11 } }}>
            <Typography sx={{ color: "primary.main", mb: { md: 1, xs: 2 } }}>
              داستان نونز
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <Box sx={{ width: { md: "40%", xs: "100%" } }}>
                <Typography
                  sx={{
                    background:
                      "linear-gradient(261.91deg, #E0E0E0 15%, #B9FD50 45%)",
                    letterSpacing: "-0.5px",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text", // Use camelCase for React
                    color: "transparent", // Make text color transparent
                    fontSize: { md: "50px", xs: "23px" }, // Adjust font size as needed
                    fontWeight: "900", // Optional: make the text bold
                  }}
                >
                  شروع داستان های موفقیت
                </Typography>
              </Box>
              <Box sx={{ width: { md: "60%", xs: "100%" } }}>
                <Typography
                  sx={{
                    color: "white",
                    lineHeight: 2.2,
                    fontSize: { md: "16px", xs: "14px" },
                  }}
                >
                  طرفداران بازی‌های ویدئویی روز به روز در حال افزایش هستند و
                  سال‌هاست که صنعت گیم به یک تجارت آنلاین گسترده و پایدار تبدیل
                  شده است. این صنعت در سراسر جهان به‌عنوان یک شیوه نوین و سودآور
                  برای درآمدزایی شناخته می‌شود. اما در کشور ما، به طور حرفه ای
                  به این صنعت توجه نشده است و همچنین بستری کارآمد برای گیمرها
                  وجود نداشت. این‌جا بود که "نونز" وارد میدان شد تا با تمرکز به
                  نیازهای گیمرها مرزهای خلاقیت و نوآوری را در صنعت گیم دوباره
                  تعریف کند.
                  <br /> نام "نونز" از عبارت "Nexus of New Stories" به معنی
                  "محلی که داستان‌ها به هم می‌رسند" برگرفته شده است. لوگوی ما،
                  که نمایی از یک ماهی را نشان می‌دهد، نماد اقیانوسی بی‌پایان و
                  بدون محدودیت است، جایی که داستان های موفقیت شروع میشه.
                  <br /> در نونز، ما با توانمندسازی و ارائه خدمات خلاقانه،
                  علاقه‌مندان به بازی‌های ویدئویی را به‌سمت یک درآمد پایدار
                  هدایت می‌کنیم.
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "button.main",
                    borderRadius: "8px",
                    py: 1,
                    px: 4,
                    fontWeight: 600,
                    mt: { md: 5, xs: 4 },
                    width: { sm: "fit-content", xs: "100%" },
                    ":hover": {
                      bgcolor: "button.main",
                    },
                  }}
                >
                  شروع کنید
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* dark area */}
      <Box sx={{ width: "100%", bgcolor: "background.main" }}>
        <Container>
          {/* titles and aliens qoute */}
          <Box sx={{ mt: 6 }}>
            <Box sx={{ textAlign: { md: "center", xs: "start" } }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { md: "16px", xs: "14px" },
                }}
              >
                درباره نونز
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { md: "50px", xs: "23px" },
                  fontWeight: 900,
                  mt: "10px",
                }}
              >
                نونز چطور کار میکنه؟
              </Typography>
            </Box>
            {/* aliens qoute */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                gap: 2,
                mt: 4,
              }}
            >
              <Box sx={{ width: "fit-content" }}>
                <Box
                  sx={{
                    width: { md: "264px", xs: "139px" },
                    height: { md: "228px", xs: "120px" },
                    position: "relative",
                  }}
                >
                  <Image src="/images/alien.png" fill alt="alien" />
                </Box>
              </Box>
              <Box
                sx={{
                  bgcolor: "background.element",
                  p: { md: 6, xs: 2 },
                  width: "100%",
                  borderRadius: "16px",
                  position: "relative",
                  mr: { md: 4, xs: 0 },
                  zIndex: 1,
                  mt: { mt: 12, xs: 3 },
                }}
              >
                <Box
                  sx={{
                    width: { md: "150px", xs: "60px" },
                    height: { md: "75px", xs: "35px" },
                    borderRadius: "8px",
                    bgcolor: "background.element",
                    zIndex: 0,
                    transform: { md: "skew(-45deg)", xs: "skew(45deg)" },
                    position: "absolute",
                    top: 0,
                    right: { md: 0, xs: 120 },
                    rotate: { md: "0deg", xs: "90deg" },
                  }}
                ></Box>
                <Typography
                  sx={{
                    zIndex: 10,
                    position: "relative",
                    color: "white",
                    lineHeight: 2.5,
                    fontSize: { md: "16px", xs: "14px" },
                  }}
                >
                  در دنیای امروز، بازی‌های ویدئویی به یک شیوه پایدار درآمدی
                  تبدیل شده و گیمرها به بستری امن و کارآمد برای تجارت دیجیتال
                  اقلام و آیتم‌های بازی نیاز دارند. نونز با بهره‌گیری از فناوری
                  پیشرفته و شناخت عمیق از نیازهای گیمرها، بستری امن، یکپارچه و
                  متمرکز برای تبادل و تجارت محصولات دیجیتالی فراهم کرده .<br />{" "}
                  ما در نونز با ارائه ابزارهای خلاقانه و آموزش‌های کاربردی،
                  گیمرها را در مسیر تبدیل بازی و سرگرمی به یک مسیر موفقیت مالی
                  واقعی همراهی می‌کنیم. علاوه بر این، نونز این امکان را برای
                  کاربران فراهم می‌آورد که درآمدهای خود را به‌صورت رمز ارز و
                  ارزهای جهانی دریافت کنند، که این ویژگی به آن‌ها کمک می‌کند تا
                  در دنیای تجارت دیجیتال بدون محدودیت‌های جغرافیایی فعالیت کنند.
                  <br />
                  نونز تنوعی از خدمات با فهرستی غنی از برندهای محبوب در
                  پلتفرم‌های مختلف را ارائه کرده است. از جمله خدمات ما می‌توان
                  به خرید و فروش اکانت‌های استیم،خرید و فروش اکانت پلی استیشن و
                  خرید و فروش بازی‌های موبایلی اشاره کرد. همچنین، خرید و فروش جم
                  و سکه‌های بازی‌ های محبوبی مانند فری فایر، کال آف دیوتی
                  موبایل، و خرید و فروش آیتم‌های فورتنایت و صدها عنوان بازی
                  محبوب که در فهرست محصولات نونز وجود دارد .<br /> علاوه بر این،
                  در نونز امکان خرید و فروش گیفت کارت و تبدیل آن به پول نقد نیز
                  فراهم شده است. ما فهرست کاملی از انواع گیفت کارت‌ها، از جمله
                  گیفت کارت استیم،گیفت کارت آیتونز و گیفت کارت پلی استیشن را در
                  اختیار کاربران قرار داده‌ایم. همچنین، با بیش از 250 ابزار هوش
                  مصنوعی قدرتمند مانند ChatGPT و MidJourney، نونز آرشیوی جامع و
                  کامل از ابزارهای هوش مصنوعی برای خرید و فروش ابزارهای هوش
                  مصنوعی و تبادل اشتراک‌ها ارائه می‌دهد.
                  <br /> نونز به‌عنوان نخستین پلتفرم تجارت الکترونیک در کشور که
                  خدمات فینتک را به گیمرها ارائه می‌دهد، فرصتی نوین را برای
                  آن‌ها فراهم کرده است تا از مرزهای بازی‌ها فراتر بروند و به
                  آینده‌ای روشن دست یابند.
                  <br />
                  <br />
                  <br /> با نونز، شما داستان موفقیت خود را می‌سازید.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* why you have to choose nons? */}
          <Box sx={{ mt: { md: 15, xs: "50px" } }}>
            <Box sx={{ mb: { md: 10, xs: 4.5 } }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { md: "16px", xs: "14px" },
                }}
              >
                ویژگی های نونز
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "50px", xs: "23px" },
                  color: "white",
                  fontWeight: 900,
                  my: 2,
                }}
              >
                چرا نونز را انتخاب کنید؟
              </Typography>
              <Typography
                sx={{ color: "white", fontsize: { md: "16px", xs: "14px" } }}
              >
                نونز، پلتفرم امن، بدون کارمزد و 24 ساعته که شما را در مسیر
                موفقیت همراهی می‌کند
              </Typography>
            </Box>
            {/* cards */}
            <Box sx={{ px: { md: 6, xs: 0 } }}>
              <Properties />
            </Box>
          </Box>
          {/* founders qoutes */}
          <Box sx={{ mt: { md: 15, xs: 7 } }}>
            <Box sx={{ color: "primary.main" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "54px", xs: "48px" },
                    fontWeight: "600",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "inherit",
                  }}
                >
                  Quote
                </Typography>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.619 10.0801L26.2356 14.1603L20.391 27.7244L25.7945 39.1932C24.7653 40.59 23.4787 41.9501 21.9348 43.2734C20.4645 44.5968 19.1044 45.479 17.8546 45.9201C16.0166 45.626 14.1052 44.7438 12.1202 43.2734C10.1352 41.7296 8.66484 40.0019 7.70911 38.0904V30.9224C8.37077 29.2315 9.3265 27.173 10.5763 24.7469C11.8261 22.2473 13.2597 19.7109 14.8771 17.1378C16.4945 14.4912 18.0751 12.1386 19.619 10.0801ZM48.291 14.1603L42.4463 27.7244L47.8499 39.1932C46.8207 40.59 45.5341 41.9501 43.9902 43.2734C42.5199 44.5968 41.1598 45.479 39.91 45.9201C38.072 45.626 36.1606 44.7438 34.1756 43.2734C32.1906 41.7296 30.7202 40.0019 29.7645 38.0904V30.9224C30.4262 29.2315 31.3819 27.173 32.6317 24.7469C33.8815 22.2473 35.3151 19.7109 36.9325 17.1378C38.5499 14.4912 40.1305 12.1386 41.6744 10.0801L48.291 14.1603Z"
                    fill="#9FE870"
                  />
                </svg>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { md: "46px", xs: "23px" },
                  fontWeight: 800,
                  color: "white",
                  mt: 4,
                  mb: 1,
                }}
              >
                نقل قول های سازندگان
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: { md: "16px", xs: "14px" } }}
              >
                ما با باور به قدرت ایده ها و تلاش تیمی مسیری را آغاز کردیم که
                تنها یک هدف داشت، ایجاد تغییر مثبت در زندگی شما
              </Typography>
            </Box>
            <FoundersQoute />
          </Box>
        </Container>
      </Box>
      {/* lighter area again */}
      <Box sx={{ bgcolor: "background.element" }}>
        <Container>
          {/* growing without borders (with cubes) */}
          <Box
            sx={{
              pt: { md: 25, xs: 12 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: { md: 20, xs: 5.5 },
                position: "relative",
                flexDirection: { md: "row", xs: "column-reverse" },
              }}
            >
              <Box sx={{ width: "100%", zIndex: 1 }}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { md: "16px", xs: "14px" },
                  }}
                >
                  آینده نگری
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: { md: "60px", xs: "23px" },
                    mt: { md: 2, xs: 1 },
                    mb: { md: 4, xs: 2 },
                  }}
                >
                  رشد بدون مرز
                </Typography>
                <Typography
                  sx={{
                    color: "#B0B0B0",
                    fontSize: { md: "16px", xs: "14px" },
                    lineHeight: 2.2,
                  }}
                >
                  در نونز، هدف ما خلق فرصت‌های جدید و تبدیل آن‌ها به مسیری
                  پایدار برای رشد شخصی و اقتصادی است. ما به توسعه فردی و اجتماعی
                  فکر میکنیم و تمام تلاش خود را برای فراهم کردن ابزارها و منابع
                  نوین جهت تبدیل فرصت‌های تجارت دیجیتال به موفقیت به کار
                  می‌بریم. در نونز، با نوآوری و بهبود مستمر در تلاشیم تا نقشی
                  پیشرو و بی‌رقیب در این صنعت ایفا کنیم. هدف ما ایجاد یک
                  اکوسیستم است که هیچ مرزی برای رشد و موفقیت وجود ندارد.
                </Typography>
                <Box sx={{ textAlign: "end" }}>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "button.main",
                      borderRadius: "8px",
                      py: 1,
                      px: 2,
                      fontWeight: 600,
                      fontSize: { md: "16px", xs: "14px" },
                      mt: 5,
                      width: { sm: "fit-content", xs: "100%" },
                      ":hover": {
                        bgcolor: "button.main",
                      },
                    }}
                  >
                    به ما ملحق شوید
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { md: "550px", xs: "345px" },
                    maxWidth: { md: "550px", xs: "345px" },
                    position: "relative",
                  }}
                >
                  <Image src="/images/cubes.png" fill alt="cubes" />
                </Box>
              </Box>
              {/* \/\/\/\/ blurred items here \/\/\/\/  */}
              {/* blurred element at top right */}
              <Box
                sx={{
                  width: "150px",
                  height: "150px",
                  bgcolor: "#FF3BEB33",
                  position: "absolute",
                  borderRadius: "50%",
                  top: { md: 0, xs: -50 },
                  right: { md: 0, xs: -70 },
                  zIndex: 0,
                  filter: "blur(40px)",
                }}
              ></Box>
              {/* blurred element at top left */}
              <Box
                sx={{
                  width: "110px",
                  height: "110px",
                  bgcolor: "#3B5CFF80",
                  position: "absolute",
                  borderRadius: "50%",
                  top: { md: -100, xs: 150 },
                  left: { md: 100, xs: 40 },
                  zIndex: 0,
                  filter: "blur(40px)",
                  opacity: { md: 1, xs: 0.7 },
                }}
              ></Box>
              {/* blurred element at bottom left */}
              <Box
                sx={{
                  width: "110px",
                  height: "110px",
                  bgcolor: "#FF3BEB80",
                  position: "absolute",
                  borderRadius: "50%",
                  bottom: { md: 0, xs: "calc(100% - 500px)" },
                  left: { md: 100, xs: 0 },
                  zIndex: 0,
                  filter: { md: "blur(40px)", xs: "blur(60px)" },
                  opacity: { md: 1, xs: 0.7 },
                }}
              ></Box>
            </Box>
          </Box>
          {/* making future together */}
          <Box sx={{ pt: { md: 20, xs: 11 } }}>
            <Box
              sx={{
                width: { md: "60%", xs: "100%" },
                mx: "auto",
                textAlign: { md: "center", xs: "start" },
              }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: { md: "16px", xs: "14px" },
                }}
              >
                همکاری با ما
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { md: "40px", xs: "23px" },
                  fontWeight: 900,
                  my: 2,
                }}
              >
                باهم آینده را بسازیم
              </Typography>
              <Typography
                sx={{ color: "#E0E0E0", fontSize: { md: "16px", xs: "14px" } }}
              >
                اگر به دنیای بازی علاقه داری و می‌خواهی در یک تیم خلاق و نوآور
                رشد کنی، نونز به دنبال توست! ما به دنبال افراد پرانرژی و خلاق
                هستیم که می‌خواهند در دنیای بازی و تجارت آنلاین تغییر ایجاد
                کنند. به تیم نونز بپیوند و همراه با ما به سوی موفقیت قدم بردار!
              </Typography>
              <Box sx={{ mt: {md:10,xs:5} }}>
                <JobAccordions />
              </Box>
            </Box>
            <Box sx={{ mt: {md:15,xs:7},pb:{md:0,xs:10} }}>
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
                  نظرات کاربران
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 400, color: "#E0E0E0", mt: 1 }}>
                کاربران واقعی از تجربه خود درباره نونز چه میگویند
              </Typography>
              <GamerComments withoutTitles />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
