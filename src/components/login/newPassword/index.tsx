import { Box, Button, Typography } from "@mui/material";

const NewPassword = () => {
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
      <Box
        sx={{
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#F5F5F5",
          borderRadius: "8px",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8333 10.4999C19.8333 9.9028 19.6055 9.30568 19.1499 8.85008C18.6943 8.39447 18.0972 8.16667 17.5 8.16667M17.5 17.5C21.366 17.5 24.5 14.366 24.5 10.5C24.5 6.63401 21.366 3.5 17.5 3.5C13.634 3.5 10.5 6.63401 10.5 10.5C10.5 10.8193 10.5214 11.1336 10.5628 11.4415C10.6309 11.948 10.6649 12.2013 10.642 12.3615C10.6181 12.5284 10.5877 12.6184 10.5055 12.7655C10.4265 12.9068 10.2873 13.046 10.009 13.3243L4.04673 19.2866C3.84496 19.4884 3.74407 19.5893 3.67192 19.707C3.60795 19.8114 3.56081 19.9252 3.53224 20.0442C3.5 20.1785 3.5 20.3212 3.5 20.6065V22.6333C3.5 23.2867 3.5 23.6134 3.62716 23.863C3.73901 24.0825 3.91749 24.261 4.13701 24.3728C4.38657 24.5 4.71327 24.5 5.36667 24.5H8.16667V22.1667H10.5V19.8333H12.8333L14.6757 17.991C14.954 17.7127 15.0932 17.5735 15.2345 17.4945C15.3816 17.4123 15.4716 17.3819 15.6385 17.358C15.7987 17.3351 16.052 17.3691 16.5585 17.4372C16.8664 17.4786 17.1807 17.5 17.5 17.5Z"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          color: "#101828",
          mt: 3.5,
          mb: 3,
        }}
      >
        ورود رمز جدید
      </Typography>
      {/* inputs */}
      <Box>
        {/* input */}
        <Box>
          <Typography sx={{ color: "#344054", mb: 0.5 }}>رمز عبور</Typography>
          <Box
            sx={{
              width: "100%",
              border: "1px solid",
              borderColor: "#D0D5DD",
              borderRadius: "8px",
              display: "flex",
              gap: 1,
              p: "10px",
              mb: 2,
            }}
          >
            <input type="password" style={{direction:"ltr", width:"100%",backgroundColor:"transparent",border:"none",outline:"none"}} />
          </Box>
        </Box>
        <Box>
          {/* input */}
          <Typography sx={{ color: "#344054", mb: 0.5 }}>تکرار رمز عبور</Typography>
          <Box
            sx={{
              width: "100%",
              border: "1px solid",
              borderColor: "#D0D5DD",
              borderRadius: "8px",
              display: "flex",
              gap: 1,
              p: "10px",
              mb: 2,
            }}
          >
            <input type="password" style={{direction:"ltr", width:"100%",backgroundColor:"transparent",border:"none",outline:"none"}} />
          </Box>
        </Box>
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
        تغییر رمز عبور
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

export default NewPassword;
