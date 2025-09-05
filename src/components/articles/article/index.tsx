import ArticleModel from "@/models/Article";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Article = ({ article }: { article: ArticleModel }) => {
  return (
    <Link href={`/articles/${article?.slug}`}>
      <Box
        className="articleBackground"
        sx={{
          width: "100%",
          borderRadius: "9px",
          boxShadow: "0px 4px 4px 0px #0000001F",
          overflow: "hidden",
          bgcolor: "background.secondary",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "240px",
            overflow: "hidden",
          }}
        >
          <Image
            fill
            alt="article"
            objectFit="cover"
            loading="lazy"
            src={"/images/article.png"}
          />
          <Box
            sx={{
              position: "absolute",
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "7px",
              backdropFilter: "blur(2px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              top: "10px",
              right: "10px",
              gap: 1,
              padding: "10px 18px",
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: "18px", fontWeight: "600" }}
            >
              12
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "14px", fontWeight: "600" }}
            >
              فروردین
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: "10px", pb: "20px", overflow: "hidden" }}>
          <Box sx={{ py: "14px" }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
                color: "text.secondary",
              }}
            >
              بازی های موبایلی - 12 بار دیده شده
            </Typography>
          </Box>
          <Box
            sx={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(76, 82, 85, 0) 5%, #4C5255 23%, #4C5255 76%, rgba(76, 82, 85, 0) 94%)",
            }}
          />
          <Box sx={{ pt: "14px" }}>
            <Typography
              sx={{
                fontSize: { sm: "18px", xs: "16px" },
                fontWeight: "600",
                color: "white",
              }}
            >
              {article?.title}
            </Typography>
            <Typography sx={{ mt: "10px", color: "white", lineHeight: 1.8 }}>
              {article?.short_text}
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                borderRadius: "7px",
                boxShadow: "none !important",
                mt: "20px",
                px: "6px",
                py: 1,
                backgroundColor: "button.main",
                ":hover": {
                  backgroundColor: "button.main",
                },
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "white" }}>
                ادامه مطلب
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66665 9.16659L1.33331 0.833252M1.33331 0.833252V9.16659M1.33331 0.833252H9.66665"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Article;
