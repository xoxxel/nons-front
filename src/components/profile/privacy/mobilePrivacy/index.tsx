import { Box, Container, Typography } from "@mui/material";
import FinancialAccount from "../financialAccount";

const PrivacyMobile = ({ userAccount }: { userAccount: AccountType }) => {
  return (
    <Container sx={{ mt: 4, display: { md: "none", xs: "block" } }}>
      <Box sx={{mt:"10px"}}>
        <Typography sx={{fontSize:"12px",fontWeight:"400",color:"text.secondary",mb:1}}>حساب بانکی :</Typography>
      <FinancialAccount />
      </Box>
    </Container>
  );
};

export default PrivacyMobile;
