import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const NotLoggedIn = ({onLinkClick}:{onLinkClick?:()=>void}) => {
  return (
    <Box sx={{ mb: 3,mt:2,px:2,borderBottom:"1px solid",pb:3, borderColor:"background.secondary" }}>
      <Typography
        sx={{ color: "text.content", fontSize: "16px", fontWeight: "600" }}
      >
        به جمع ما بپیوندید
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "13px",
          fontWeight: "500",
          my: 3,
        }}
      >
        دسترسی به آرشیو محبوبترین محصولات دیجیتال و راهی جدید برای شروع تجارتی
        ایده آل !
      </Typography>
        <Link href="/login" onClick={onLinkClick}>
        <Button
          sx={{
            bgcolor: "button.main",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "600",
            color:"white",
            px:2,
            ":hover" : {
                bgcolor: "button.main",
            }
          }}
        >
          وارد شوید
        </Button>
        </Link>
    </Box>
  );
};

export default NotLoggedIn;
