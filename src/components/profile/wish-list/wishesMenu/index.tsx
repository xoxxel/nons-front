import { Box, Typography } from "@mui/material";
import Image from "next/image";

const WishesMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: {lg:"15px",md:"10px"},
        bgcolor: "background.element",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#E9ECEF",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          p: "8px 12px",
          gap: 1,
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2413_2773)">
            <path
              d="M10.5 10.5L8.325 8.325M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2413_2773">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          type="text"
          placeholder="جستجو"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
        />
      </Box>
      <Box sx={{ px: {lg:"10px",md:"4px"} }}>
        <Typography
          sx={{ color: "text.secondary", fontSize: "14px", mt: 4, mb: "20px" }}
        >
          محصولاتی که اخیرا مشاهده کرده اید
        </Typography>
        <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
        {Array(5).fill(0).map(()=><Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                width: "45px",
                height: "45px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
                borderColor: "border.main",
              }}
            >
              <Image
                src="/images/spotify.png"
                width={30}
                height={30}
                alt="spotify"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{ color: "text.main", fontWeight: "600", fontSize: "13px" }}
              >
                اسپاتیفای
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                2:35 امروز
              </Typography>
            </Box>
          </Box>
          <Typography sx={{color:"text.secondary",fontSize:"14px",fontWeight:"500"}}>234,000</Typography>
        </Box>)}
        </Box>
      </Box>
    </Box>
  );
};

export default WishesMenu;
