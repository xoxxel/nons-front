import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface namadModel {
  title: string;
  image: string;
}

const Namad = ({
  namad,
  width,
  height,
}: {
  namad: namadModel;
  width: string;
  height: string;
}) => {
  return (
    <Box sx={{ height: { lg: "146px", xs: "116px" } }}>
      <Box
        sx={{
          height: { lg: "110px", xs: "80px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href={"/"}>
          <Box
            sx={{
              display: "flex",
              width: width,
              height: height,

              position: "relative",
            }}
          >
            <Image
              loading="lazy"
              src={namad?.image}
              fill
              alt="enamad-logo"
              objectFit="contain"
              quality={100}
            />
          </Box>
        </Link>
      </Box>
      <Typography
        sx={{
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D9D9D9",
          fontSize: { lg: "18px", xs: "14px" },
        }}
      >
        {namad?.title}
      </Typography>
    </Box>
  );
};

export default Namad;
