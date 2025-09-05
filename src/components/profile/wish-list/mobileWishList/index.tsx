import { Box } from "@mui/material";
import MobileWishCard from "./wishCard";

const MobilewidhList = () => {
  return (
    <Box sx={{mt:2,px:"15px", display:{md:"none",xs:"flex"},flexDirection:"column",gap:2,mb:"85px"}}>
      <MobileWishCard />
      <MobileWishCard />
      <MobileWishCard />
      <MobileWishCard />
      <MobileWishCard />
      <MobileWishCard />
      <MobileWishCard />
    </Box>
  );
};

export default MobilewidhList;
