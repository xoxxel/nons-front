import { Box, Typography } from "@mui/material";
import Image from "next/image";

const QouteCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.element",
        borderRadius: "25px",
        p: { md: 5, xs: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                width: { md: "56px", xs: "49px" },
                height: { md: "56px", xs: "49px" },
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image src="/images/founder.png" fill alt="founder" />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontsize: { md: "24px", xs: "17px" },
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Behrouz Ghaemi
              </Typography>
              <Typography
                sx={{
                  fontsize: { md: "21px", xs: "17px" },
                  fontWeight: "400",
                  color: "#B0B0B0",
                }}
              >
                founder
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              width: { md: "40px", xs: "24px" },
              height: { md: "40px", xs: "24px" },
              position: "relative",
            }}
          >
            <Image src="/images/logo-mobile.png" fill alt="logo" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2, mb: "10px" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: { md: "18px", xs: "16px" },
            fontweight: 400,
            lineHeight: 2,
          }}
        >
          ما نونز را با عشق و علاقه ساختیم تا جایی باشد برای شروع داستان های
          موفقیت شما
        </Typography>
        <Typography sx={{ color: "#B0B0B0", mt: "10px", fontSize:{md:"16px",xs:"12px"} }}>
          8:50 PM · Dec 03, 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default QouteCard;
