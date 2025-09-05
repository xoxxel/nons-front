import { Box, Button, Typography } from "@mui/material";
import InfoButton from "../userInfo/main/infoButton";
import FinancialAccount from "./financialAccount";

const UserPrivacy = ({ userAccount }: { userAccount: AccountType }) => {
  return (
    <Box
      sx={{
        display: { md: "flex", xs: "none" },
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* password field */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "text.main",
            }}
          >
            رمز عبور
          </Typography>
          <InfoButton />
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              width: "36px",
              minHeight: "36px",
              borderRadius: "5px",
              bgcolor: "background.secondary",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color : "icon.main"
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
                d="M5.51738 14L5.7969 9.07812L1.66495 11.7882L0.182312 9.21181L4.59377 7L0.182312 4.78819L1.66495 2.21181L5.7969 4.92187L5.51738 0H8.47051L8.20315 4.92187L12.3351 2.21181L13.8177 4.78819L9.39412 7L13.8177 9.21181L12.3351 11.7882L8.20315 9.07812L8.47051 14H5.51738Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Button
            sx={{
              color: "button.main",
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "5px",
              bgcolor: "#EFF8FF",
              ":hover": { bgcolor: "#EFF8FF" },
            }}
          >
            افزودن
          </Button>
        </Box>
      </Box>
      {/* bank account field */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "text.main",
            }}>حساب بانکی</Typography>
          <InfoButton />
        </Box>
        <Box sx={{ width: "70%" }}>
          <FinancialAccount />
        </Box>
      </Box>
      {/* login with social media field */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "text.main",
            }}>ورود با سوشیال مدیا</Typography>
          <InfoButton />
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box></Box>
          <Button
            sx={{
              color: "button.main",
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "5px",
              bgcolor: "#EFF8FF",
              ":hover": { bgcolor: "#EFF8FF" },
            }}
          >
            افزودن
          </Button>
        </Box>
      </Box>
      {/* 2fa field */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "text.main",
            }}>تایید دو مرحله ای</Typography>
          <InfoButton />
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box></Box>
          <Button
            sx={{
              color: "button.main",
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "5px",
              bgcolor: "#EFF8FF",
              ":hover": { bgcolor: "#EFF8FF" },
            }}
          >
            افزودن
          </Button>
        </Box>
      </Box>
      {/* social media field */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "text.main",
            }}>شبکه های اجتماعی</Typography>
          <InfoButton />
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box></Box>
          <Button
            sx={{
              color: "button.main",
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "5px",
              bgcolor: "#EFF8FF",
              ":hover": { bgcolor: "#EFF8FF" },
            }}
          >
            افزودن
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserPrivacy;
