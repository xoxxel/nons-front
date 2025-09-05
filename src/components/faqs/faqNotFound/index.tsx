import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const FaqNotFound = () => {
    return (
        <Box sx={{ width: "100%", minHeight: "130px", px: { lg: 4, xs: 0 }, mb: 3, mt: { md: 8, xs: 6 } }}>
            <Box sx={{ width: "100%", height: "100%", borderRadius: "16px", backgroundColor: "background.element", p: 4 }}>
                <Box sx={{ width: "100%", height: "100%", flexWrap: "wrap", display: "flex", alignItems: "center", gap: { lg: "0px", xs: 6 }, justifyContent: { lg: "space-between", xs: "center" } }}>
                    <Box >
                        <Typography sx={{ color: "text.main", fontSize: { md: "20px", xs: "17px" }, fontWeight: "600", textAlign: { lg: "start", xs: "center" } }}>سوال خود را پیدا نمیکنید؟</Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: { md: "18px", xs: "14px" }, lineHeight: 2, textAlign: { lg: "start", xs: "center" }, mt: 1 }}>اگر سوالات خود را در فهرست ما پیدا نمیکنید ؟با تیم پشتیبانی ما تماس بگیرید</Typography>
                    </Box>
                    <Box sx={{ width: { lg: "176px", xs: "100%" } }}>
                        <Link href="/" >
                            <Button sx={{
                                width: "100%", height: "44px", bgcolor: "button.main",
                                color: "white",
                                fontSize: "16px", fontWeight: "600",
                                ":hover": {
                                    bgcolor: "button.main",
                                }, borderRadius: "5px"
                            }}>
                                ارسال تیکت
                            </Button>
                        </Link></Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FaqNotFound;