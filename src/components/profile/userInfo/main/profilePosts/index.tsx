import { Box, Typography } from "@mui/material";

const ProfilePosts = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1.5,
          color: "text.main",
        }}
      >
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12.5L6 17.5L11 12.5M1 6.5L6 1.5L11 6.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Typography
          sx={{
            color: "text.main",
            fontSize: "16px",
            fontWeight: "500",
            mx: 1.5,
          }}
        >
          پست ها
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Box
              sx={{
                p: "10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "0.3s ease",
                ":hover": {
                  bgcolor: "hover.main",
                },
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  flexBasis: "40%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
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
                <Box>
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
              <Box
                sx={{
                  width: "40%",
                  flexBasis: "40%",
                  display: "flex",
                  justifyContent: "flex-end",
                  columnGap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "110px",
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
                <Box
                  sx={{
                    color: "icon.main",
                    width: "48px",
                    height: "30px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.875C8.48325 2.875 8.875 2.48325 8.875 2C8.875 1.51675 8.48325 1.125 8 1.125C7.51675 1.125 7.125 1.51675 7.125 2C7.125 2.48325 7.51675 2.875 8 2.875Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.125 2.875C14.6082 2.875 15 2.48325 15 2C15 1.51675 14.6082 1.125 14.125 1.125C13.6418 1.125 13.25 1.51675 13.25 2C13.25 2.48325 13.6418 2.875 14.125 2.875Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.875 2.875C2.35825 2.875 2.75 2.48325 2.75 2C2.75 1.51675 2.35825 1.125 1.875 1.125C1.39175 1.125 1 1.51675 1 2C1 2.48325 1.39175 2.875 1.875 2.875Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ProfilePosts;
