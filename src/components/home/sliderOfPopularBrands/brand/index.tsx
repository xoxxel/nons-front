import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Brand = ({offerCount,icon,slug}:{offerCount:number,icon:string,slug:string|number}) => {
  return (
    <Link href={`/products/?brand=${slug}`}>
      <Box sx={{ position: "relative", width: "100%", userSelect: "none" }}>
        <Box
          sx={{
            width: "100%",
            height: "129px",
            background:
              "conic-gradient(from 164.53deg at 50% 50%, #FFFFFF 0deg, rgba(201, 201, 201, 0.95) 158.4deg, #B1B1B1 257.4deg, #999999 360deg)",
            boxShadow: "0px 4px 4px 0px #000000",
            borderRadius: "5px",
            backgroundColor: "red",
            opacity: "0.1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            opacity: "1 !important",
            position: "absolute",
            width: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER}/${icon}`}
            width={48}
            height={48}
            alt="brand"
            loading="lazy"
            style={{ opacity: "1 !important"}}
          />
          <Typography
            sx={{ color: "text.main", fontWeight: "400", fontSize: "13px" }}
          >
            {offerCount} پیشنهاد
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default Brand;
