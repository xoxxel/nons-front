import { Box } from "@mui/material";
import BalanceCard from "./balanceCard";
import DepositAndWithdraw from "./deposit&withdraw";
import MenuTabs from "./menuTabs";

const ActivitiesMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        borderRadius: "12px",
        border: "0.5px solid",
        borderColor: "border.secondary",
      }}
    >
      <BalanceCard />
      <DepositAndWithdraw />
      <MenuTabs />
    </Box>
  );
};

export default ActivitiesMenu;
