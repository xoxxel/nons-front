import { Box } from "@mui/material";
import Image from "next/image";

const Banner = ({banner}:{banner:string}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "426px", md: "300px", sm: "250px", xs: "142px" },
        position: "relative",
        borderRadius: "9px",
        overflow: "hidden",
      }}
    >
      <Image
        fill
        alt="banner"
        src={`${process.env.NEXT_PUBLIC_SERVER}/${banner}`}
        quality={100}
        priority
        style={{ borderRadius: "9px" }}
      />
    </Box>
  );
};

export default Banner;
