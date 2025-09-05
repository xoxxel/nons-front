import { Box, Typography } from "@mui/material";
import Image from "next/image";

const FeatureBanner = ({
  backgroundColor,
  image,
  title,
  shortText,
  text,
}: {
  backgroundColor: string;
  image: string;
  title: string;
  shortText: string;
  text: string;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "280px", xs: "140px" },
        position: "relative",
        borderRadius: "12px",
        border: "1px dashed #4B5154",
        background: backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 4px 4px 0px #0000001F",
        px: { md: 3, xs: 1.5 },
      }}
    >
      <Box sx={{ mt: { md: 3, xs: 1.5 } }}>
        <Typography
          sx={{
            fontSize: { md: "29px", xs: "16px" },
            fontWeight: { md: "900", xs: "600" },
            color: "#320707",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "18px", xs: "12px" },
            fontWeight: "500",
            color: "#320707",
            mt: { md: 2, xs: 0.5 },
          }}
        >
          {shortText}
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "18px", xs: "12px" },
            fontWeight: "500",
            color: "#320707",
            mt: { md: 2, xs: 0.5 },
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box sx={{ py: { md: 5, xs: "18px" } }}>
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: { md: "200px", xs: "85px" },
          }}
        >
          <Image
            src={image}
            alt="clock"
            fill
            quality={100}
            objectFit="contain"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureBanner;
