import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SelectedPlatform = ({
  gradient,
  image,
  title,
  text,
  slug,
}: {
  gradient: string;
  image: string;
  title: string;
  text: string;
  slug:string|number
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "291px", xs: "158px" },
        borderRadius: "7px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.12)",
        background: `url(images/backk.png), ${gradient}`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          height: "100%",
          pr: { md: "20px", xs: "10px" },
          pt: { md: "30px", xs: "9px" },
          pb: { md: 6, xs: 2.5 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { md: "29px", xs: "14px" },
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              maxWidth: { md: "calc(100% - 20px)", xs: "calc(100% - 70px)" },
              fontSize: { md: "16px", xs: "12px" },
              color: "#FFFFFF",
              lineHeight: 2,
              mt: "10px",
            }}
          >
            {text}
          </Typography>
        </Box>
        <Link href={`/products/?platform=${slug}`}>
          <Button
            variant="contained"
            sx={{
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important",
              width: { md: "155px", xs: "84px" },
              height: { md: "53px", xs: "29px" },
              borderRadius: { md: "12px", xs: "8px" },
              fontSize: { md: "16px", xs: "8px" },
              backgroundColor: "button.main",
              ":hover": {
                backgroundColor: "button.main",
              },
              color: "#FFFFFF",
            }}
          >
            مشاهده آرشیو
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          height: { md: "calc(100% + 70px)", xs: "calc(100% + 10px)" },
          width: "auto",
          position: "absolute",
          top: { md: "-35px", xs: "-5px" },
          left: { md: "-30px", xs: "-15px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: { md: "250px", xs: "100px" },
            height: "100%",
          }}
        >
          <Image
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "100%",
            }}
            width={158}
            height={158}
            alt="platform"
            quality={100}
            src={process.env.NEXT_PUBLIC_SERVER + "/" + image}
            objectFit="cover"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectedPlatform;
