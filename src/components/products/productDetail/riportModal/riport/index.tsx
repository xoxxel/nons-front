"use client";
import { Box, Button, Typography } from "@mui/material";

const RiportComponent = ({ handleClose }: { handleClose: Function }) => {
  return (
    <Box
      sx={{
        width: "240px",
        background: "linear-gradient(179.42deg, #394246 0.5%, #2B3235 69.42%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.14)",
        borderRadius: "7px",
        border: "1px solid #394448",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          py: "8px",
          px: "14px",
        }}
      >
        <Typography
          sx={{ color: "text.main", fontSize: "13px", fontWeight: "500" }}
        >
          گزارش تخلف محصول
        </Typography>
        <Box
          sx={{
            p: "4.5px",
            border: "1px solid #FFFFFF",
            display: "flex",
            borderRadius: "4px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.30699 3.70139H12.0281C12.3232 3.70139 12.4707 3.70139 12.557 3.76343C12.6323 3.81756 12.6813 3.90088 12.6921 3.99298C12.7044 4.09854 12.6328 4.22752 12.4894 4.48548L11.6014 6.08397C11.5494 6.17752 11.5234 6.22429 11.5132 6.27383C11.5042 6.31767 11.5042 6.36289 11.5132 6.40673C11.5234 6.45626 11.5494 6.50304 11.6014 6.59659L12.4894 8.19508C12.6328 8.45303 12.7044 8.58201 12.6921 8.68757C12.6813 8.77967 12.6323 8.86299 12.557 8.91713C12.4707 8.97917 12.3232 8.97917 12.0281 8.97917H7.38338C7.0139 8.97917 6.82916 8.97917 6.68804 8.90726C6.56391 8.84401 6.46298 8.74309 6.39973 8.61895C6.32783 8.47783 6.32783 8.29309 6.32783 7.92361V6.34028M4.0188 12.9375L1.37991 2.38194M2.36952 6.34028H7.25144C7.62092 6.34028 7.80566 6.34028 7.94678 6.26837C8.07091 6.20512 8.17184 6.1042 8.23509 5.98006C8.30699 5.83894 8.30699 5.6542 8.30699 5.28472V2.11806C8.30699 1.74858 8.30699 1.56384 8.23509 1.42271C8.17184 1.29858 8.07091 1.19766 7.94678 1.13441C7.80566 1.0625 7.62092 1.0625 7.25144 1.0625H2.40197C1.94114 1.0625 1.71072 1.0625 1.55313 1.15799C1.415 1.24167 1.31237 1.37312 1.26468 1.52742C1.21027 1.70347 1.26616 1.92701 1.37793 2.37408L2.36952 6.34028Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          py: "10px",
          px: "6px",
          gap: "5px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "5px",
            p: "2px 6px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#A0E1E1",
            }}
          >
            محتوای متن غیر اخلاقی
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "5px",
            p: "2px 6px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#A0E1E1",
            }}
          >
            محتوا کپی
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "5px",
            p: "2px 6px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#A0E1E1",
            }}
          >
            دارای اطلاعات تماس
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "5px",
            p: "2px 6px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#A0E1E1",
            }}
          >
            محصول مشکوک
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "5px",
            p: "2px 6px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#A0E1E1",
            }}
          >
            محصول غیر واقعی
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          py: "7px",
          px: 1,
          background: "rgba(255, 255, 255, 0.05)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "button.main",
            ":hover": {
              backgroundColor: "button.main",
            },
            borderRadius: "8px",
            color: "#FFFFFF",
            boxShadow: "none",
            padding: "5.5px 9px 5.5px 9px !important",
          }}
        >
          ارسال گزارش
        </Button>
        <Button
          onClick={() => handleClose()}
          sx={{
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "transparent",
            },
            borderRadius: "8px",
            color: "#FFFFFF",
            boxShadow: "none",
            padding: "5.5px 9px 5.5px 9px !important",
          }}
        >
          انصراف
        </Button>
      </Box>
    </Box>
  );
};

export default RiportComponent;
