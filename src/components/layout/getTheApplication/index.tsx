import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const GetTheApplication = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          minHeight: "90px",
          backgroundColor: "background.element",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: { sm: "space-between", xs: "center" },
          flexWrap: "wrap",
          pr: { sm: 10, xs: 0 },
          pl: { sm: 4, xs: 0 },
          p: { sm: "0", xs: "15px !important" },
        }}
      >
        <Box>
          <Link href={"/"}>
            <Typography
              color="link.main"
              sx={{
                fontSize: { sm: "18px", xs: "16px" },
                fontWeight: "600",
                textAlign: { sm: "start", xs: "center" },
                color: "primary.main",
              }}
            >
              دریافت اپلیکیشن نونز
            </Typography>
          </Link>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "14px",
              textAlign: { sm: "start", xs: "center" },
              mt: 1,
            }}
          >
            تجربه کاربری خود را با اپلیکیشن نونز ارتقاع دهید
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            mt: { sm: 0, xs: 2 },
          }}
        >
          <Box>
            <Link href={"/"}>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  width: { md: "149px", sm: "110px", xs: "135px" },
                  height: "40px",
                }}
              >
                <Image
                  fill
                  loading="lazy"
                  quality={100}
                  alt="googleplay"
                  src={"/images/icons/googleplay.png"}
                />
              </Box>
            </Link>
          </Box>
          <Box sx={{ mr: { md: 2, xs: 1 } }}>
            <Link href={"/"}>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  width: { md: "149px", sm: "110px", xs: "132px" },
                  height: "40px",
                }}
              >
                <Image
                  fill
                  loading="lazy"
                  quality={100}
                  alt="appstore"
                  src={"/images/icons/appstore.png"}
                />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default GetTheApplication;
