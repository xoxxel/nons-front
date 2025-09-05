import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LoginWithPassword = () => {
  return (
    <Box
      sx={{
        border: "0.5px solid",
        borderColor: "border.main",
        p: "20px",
        borderRadius: "15px",
        width: "375px",
      }}
    >
      <Link href="/">
        <Image
          src="/images/logo-mobile.png"
          width={48}
          height={48}
          alt="logo"
          style={{ marginRight: "15px" }}
        />
      </Link>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          color: "#101828",
          mt: 3.5,
          mb: 3,
        }}
      >
        رمز عبور
      </Typography>
      <Typography sx={{ color: "#344054", mb: 0.5 }}>
        رمز عبور خود را وارد کنید
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: "#D0D5DD",
          borderRadius: "8px",
          display: "flex",
          gap: 1,
          p: "10px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 11V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15.8C3 14.1198 3 13.2798 3.32698 12.638C3.6146 12.0735 4.07354 11.6146 4.63803 11.327C5.27976 11 6.11984 11 7.8 11H16.2C17.8802 11 18.7202 11 19.362 11.327C19.9265 11.6146 20.3854 12.0735 20.673 12.638C21 13.2798 21 14.1198 21 15.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21Z"
            stroke="#8899A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box sx={{display:"flex",alignItems:"center",gap:0.5,my:2}}>
        <Typography sx={{color:"text.secondary"}}>رمز عبور فراموش کردید؟</Typography>
        <Typography sx={{color:"button.main"}}>بازیابی رمز عبور</Typography>
      </Box>
      <Button
        sx={{
          width: "100%",
          bgcolor: "button.main",
          fontWeight: "600",
          py: 1.5,
          color: "white",
          borderRadius: "5px",
          ":hover": { bgcolor: "button.main" },
        }}
      >
        تایید
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "600", color: "#344054" }}
        >
          بازگشت
        </Typography>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3334 10H4.66675M4.66675 10L10.5001 15.8334M4.66675 10L10.5001 4.16669"
            stroke="#344054"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default LoginWithPassword;
