import { Box, Typography } from "@mui/material";
import Link from "next/link";
const OrderCompletionContent = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "text.main",
          }}
        >
          فرم تکمیل سفارش
        </Typography>
        <Typography
          sx={{
            mt: { md: "10px", xs: "5px" },
            fontWeight: "500",
            color: "text.main",
            lineHeight: 2,
          }}
        >
          <span>
            برای پردازش سفارش ممکن است به اطلاعات مهمی نیاز باشد ، قبل از ارسال
            هرگونه اطلاعات مهم باید
          </span>{" "}
          <Link href="/">
            <span style={{ textDecoration: "underline" }}>
              درباره امنیت حساب خود بدانید
            </span>
          </Link>
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "600",
            color: "text.main",
          }}
        >
          دستورالعمل ها
        </Typography>
        <Typography
          sx={{
            mt: { md: "10px", xs: "5px" },
            fontWeight: "500",
            color: "text.main",
            lineHeight: 2,
            fontSize: { md: "16px", xs: "13px" },
          }}
        >
          لطفا اطلاعات حساب اکتیویژن خود را ارسال کنید و تا دریافت پیام تکمیل
          سفارش وارد بازی نشوید
        </Typography>
      </Box>
      <Box sx={{ mt: 3, color: "text.main" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "text.secondary",
          }}
        >
          یادداشت
        </Typography>
        <textarea
          placeholder="در اینجا بنویسید ..."
          style={{
            marginTop: "10px",
            width: "100%",
            minHeight: "125px",
            borderRadius: "7px",
            backgroundColor: "rgba(255,255,255,0.085)",
            border: "none",
            paddingTop: "16px",
            paddingRight: "16px",
            color: "inherit",
            outline: "none",
            resize: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderCompletionContent;
