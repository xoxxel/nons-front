import { Box, Typography } from "@mui/material";
import ProfileTabs from "../tabs";
import QuickAccess from "../quickAccess";
import SwapableUserProfile from "../userProfile&Info";

const ProfilePostsMobile = () => {

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <QuickAccess />
      <Box
        sx={{
          // bgcolor: "background.element",
          py: "15px",
          px: "10px",
        }}
      >
        <Box>
          <SwapableUserProfile />
        </Box>
        <ProfileTabs />
        <Box
          sx={{
            mt: 3,
            mb: 10,
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Box
                sx={{
                  p: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s ease",
                  ":hover": {
                    bgcolor: "hover.main",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 8.75H4.25C2.17893 8.75 0.5 7.07107 0.5 5C0.5 2.92893 2.17893 1.25 4.25 1.25H5.75M10.25 8.75H11.75C13.8211 8.75 15.5 7.07107 15.5 5C15.5 2.92893 13.8211 1.25 11.75 1.25H10.25M4.25 5L11.75 5"
                          stroke="#8899A6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                    <Typography
                      sx={{
                        mx: 0.5,
                        color: "#8899A6",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      عکس
                    </Typography>
                    <span
                      style={{
                        margin: "0 4px",
                        color: "#8899A6",
                      }}
                    >
                      .
                    </span>
                    <Typography
                      sx={{
                        color: "#8899A6",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      دیشب
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        color: "icon.main",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.81509 9.53488C1.71295 9.37315 1.66188 9.29229 1.63329 9.16756C1.61182 9.07387 1.61182 8.92613 1.63329 8.83244C1.66188 8.70771 1.71295 8.62685 1.81509 8.46512C2.65915 7.12863 5.17155 3.75 9.0003 3.75C12.8291 3.75 15.3415 7.12863 16.1855 8.46512C16.2877 8.62685 16.3387 8.70771 16.3673 8.83244C16.3888 8.92613 16.3888 9.07387 16.3673 9.16756C16.3387 9.29229 16.2877 9.37315 16.1855 9.53488C15.3415 10.8714 12.8291 14.25 9.0003 14.25C5.17155 14.25 2.65915 10.8714 1.81509 9.53488Z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.0003 11.25C10.2429 11.25 11.2503 10.2426 11.2503 9C11.2503 7.75736 10.2429 6.75 9.0003 6.75C7.75766 6.75 6.7503 7.75736 6.7503 9C6.7503 10.2426 7.75766 11.25 9.0003 11.25Z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "400",
                        mx: 0.5,
                      }}
                    >
                      13K
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.main",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    فصل جدید بازی کال آف دیوتی منتشر شده و تمام محصولات جدید
                    برای فروش در دسترسه
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePostsMobile;
