import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const EarningBanner = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ mt: { md: 24, xs: 7 }, pb: { md: 6, xs: 3 } }}
    >
      <Box
        sx={{
          width: "100%",
          height: { sm: "265px", xs: "161px" },
          borderRadius: "7px",
          background: `url(images/backk.png), linear-gradient(113.01deg, rgba(173, 252, 66, 0.4) -6.56%, #ADFC42 65.5%), #A7F242`,
          backgroundSize: "cover",
          boxShadow: "0px 4px 4px 0px #0000001F",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pr: 1.5,
            py: { sm: 3.5, xs: 2.5 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { sm: "32px", xs: "15px" },
                fontWeight: "600",
                color: "black.main",
              }}
            >
              کسب درآمد با نونز
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: "21px", xs: "13px" },
                color: "black.main",
                width: { sm: "fit-content", xs: "60%" },
                pt: { sm: 2.5, xs: 1 },
              }}
            >
              همین امروز تجارت خودتو شروع کن!
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: { sm: "183px", xs: "82px" },
              height: { sm: "48px", xs: "22px" },
              backgroundColor: "black.main",
              borderRadius: { sm: "8px", xs: "4px" },
              pr: "14px",
              color: "#A7F242",
              fontSize: { sm: "18px", xs: "8px" },
              fontWeight: "600",
              boxShadow: "box-shadow: 0px 1px 2px 0px #1018280D !important",
              ":hover": {
                backgroundColor: "black.main !important",
              },
            }}
          >
            بیشتر بدانید
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: {
              lg: "calc(100% + 113px)",
              md: "calc(100% + 80px)",
              xs: "calc(100% + 30px)",
            },
            bottom: "-1px",
            left: "0px",
            pl: { sm: 2, xs: 1 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: { lg: "252px", md: "240px", sm: "252px", xs: "130px" },
              display: "flex",
            }}
          >
            <Image
              src="/images/characterEarningBanner.png"
              alt="characterEarningBanner"
              fill
              quality={100}
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EarningBanner;
