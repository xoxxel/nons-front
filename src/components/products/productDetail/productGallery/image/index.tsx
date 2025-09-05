import { Box } from "@mui/material";
import Image from "next/image";

const GalleryImg = ({onOpen,image}:{onOpen:Function,image:string}) => {
  return (
    <Box
    onClick={()=>onOpen()}
      sx={{
        position: "relative",
        width: "100%",
        height: { md: "220px", sm: "170px", xs: "100px" },
      }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER}/${image}`}
        alt="img"
        fill
        style={{ borderRadius: "7px" }}
      />
    </Box>
  );
};

export default GalleryImg;
