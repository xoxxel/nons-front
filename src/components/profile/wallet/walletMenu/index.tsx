import { Box } from "@mui/material";
import BalanceCard from "../../activities/activitiesMenu/balanceCard";
import WalletActions from "./actions";

const WalletMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        border: "0.5px solid",
        borderColor: "border.secondary",
        borderRadius: "12px",
      }}
    >
      <BalanceCard />
      <WalletActions />
    </Box>
  );
};

export default WalletMenu;
