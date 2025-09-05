import Profile from "@/components/categories/card/profile";
import ProductModel from "@/models/Product";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const StartChat = ({
  handleOpenChat,
  handleOpenShare,
  handleOpenRiport,
  shop,
}: {
  handleOpenChat: Function;
  handleOpenShare: Function;
  handleOpenRiport: Function;
  shop: ProductModel["shop"];
}) => {
  const md = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ maxWidth: { md: "400px", xs: "250px" } }}>
        <Box
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "background.main",
            pb: "20px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                height: { md: "160px", xs: "100px" },
                width: "100%",
                background: `url(/images/shopback.png), #52FF00`,
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                bottom: { md: "-40px", xs: "-24px" },
                right: { md: "19px", xs: "13px" },
              }}
            >
              <Box
                sx={{
                  height: { md: "80px", xs: "48px" },
                  width: { md: "80px", xs: "48px" },
                }}
              >
                <Profile
                  image={shop?.image}
                  height="100%"
                  width="100%"
                  verified={shop?.is_authenticated}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: { md: "40px", xs: "10px" } }}>
            <Box sx={{ mt: "19px", mr: { md: "19px", xs: "13px" } }}>
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: { md: "16px", xs: "14px" },
                  fontWeight: "600",
                }}
              >
                {shop?.title}
              </Typography>
              <Box
                sx={{
                  width: "fit-content",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  gap: "6px",
                  p: "2px 8px 2px 6px",
                  mt: { md: "10px", xs: "5px" },
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", fontWeight: "500", color: "#A0E1E1" }}
                >
                   {shop?.is_online ? "online" :"offline"}
                </Typography>
{shop?.is_online  &&
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#00FF47",
                    borderRadius: "100%",
                  }}
                ></Box>}
              </Box>
            </Box>
            <Box sx={{ mt: { md: 3, xs: 2 }, px: { md: 7, xs: 2.5 } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
                    border: "1px solid #4A5256",
                    borderRadius: "12px",
                    backgroundColor: "background.main",
                    py: { md: "25px", xs: "15px" },
                    px: { md: "17px", xs: "8px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "14px", xs: "11px" },
                      fontWeight: "400",
                      color: "#FFFFFF",
                    }}
                  >
                    {shop?.welcome_message}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      mt: { md: 4, xs: 2.2 },
                    }}
                  >
                    <Button
                      onClick={() => handleOpenChat()}
                      sx={{
                        width: "195px",
                        height: "40px",
                        backgroundColor: "button.main",
                        color: "#FFFFFF",
                        fontSize: { md: "16px", xs: "13px" },
                        fontWeight: "600px",
                        borderRadius: "7px",
                        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                        ":hover": {
                          backgroundColor: "button.main",
                        },
                      }}
                    >
                      شروع گفتگو
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  onClick={() => handleOpenRiport()}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {md ? (
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.39434 4.98144H13.3635C13.6783 4.98144 13.8356 4.98144 13.9277 5.04762C14.008 5.10536 14.0603 5.19423 14.0718 5.29247C14.0849 5.40507 14.0085 5.54265 13.8556 5.8178L12.9084 7.52286C12.8529 7.62264 12.8252 7.67254 12.8143 7.72537C12.8047 7.77214 12.8047 7.82037 12.8143 7.86714C12.8252 7.91997 12.8529 7.96987 12.9084 8.06965L13.8556 9.77471C14.0085 10.0499 14.0849 10.1874 14.0718 10.3C14.0603 10.3983 14.008 10.4872 13.9277 10.5449C13.8356 10.6111 13.6783 10.6111 13.3635 10.6111H8.40915C8.01504 10.6111 7.81799 10.6111 7.66745 10.5344C7.53504 10.4669 7.42739 10.3593 7.35993 10.2268C7.28323 10.0763 7.28323 9.87925 7.28323 9.48514V7.79626M4.82026 14.8333L2.00545 3.57403M3.06104 7.79626H8.26841C8.66252 7.79626 8.85958 7.79626 9.01011 7.71956C9.14252 7.65209 9.25017 7.54444 9.31764 7.41203C9.39434 7.2615 9.39434 7.06444 9.39434 6.67033V3.29255C9.39434 2.89844 9.39434 2.70139 9.31764 2.55085C9.25017 2.41844 9.14252 2.31079 9.01011 2.24333C8.85958 2.16663 8.66252 2.16663 8.26841 2.16663H3.09565C2.60409 2.16663 2.35832 2.16663 2.19021 2.26848C2.04288 2.35774 1.93341 2.49795 1.88254 2.66254C1.8245 2.85033 1.88412 3.08876 2.00334 3.56564L3.06104 7.79626Z"
                        stroke="#989C9F"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.21989 3.47981H10.6929C10.9683 3.47981 11.106 3.47981 11.1866 3.53771C11.2568 3.58824 11.3026 3.666 11.3126 3.75196C11.3241 3.85049 11.2573 3.97087 11.1235 4.21163L10.2947 5.70355C10.2462 5.79086 10.2219 5.83452 10.2124 5.88075C10.204 5.92167 10.204 5.96387 10.2124 6.00479C10.2219 6.05103 10.2462 6.09468 10.2947 6.182L11.1235 7.67392C11.2573 7.91467 11.3241 8.03506 11.3126 8.13358C11.3026 8.21954 11.2568 8.29731 11.1866 8.34783C11.106 8.40574 10.9683 8.40574 10.6929 8.40574H6.35786C6.01301 8.40574 5.84058 8.40574 5.70887 8.33862C5.59301 8.27959 5.49882 8.18539 5.43978 8.06953C5.37267 7.93782 5.37267 7.7654 5.37267 7.42055V5.94277M3.21758 12.1002L0.754615 2.24833M1.67825 5.94277H6.23471C6.57955 5.94277 6.75198 5.94277 6.88369 5.87566C6.99955 5.81663 7.09375 5.72243 7.15278 5.60657C7.21989 5.47486 7.21989 5.30243 7.21989 4.95759V2.00203C7.21989 1.65718 7.21989 1.48476 7.15278 1.35305C7.09375 1.23719 6.99955 1.14299 6.88369 1.08396C6.75198 1.01685 6.57955 1.01685 6.23471 1.01685H1.70854C1.27843 1.01685 1.06338 1.01685 0.916285 1.10597C0.787368 1.18407 0.69158 1.30676 0.647072 1.45077C0.596289 1.61508 0.648449 1.82372 0.75277 2.24098L1.67825 5.94277Z"
                        stroke="#989C9F"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { md: "13px", xs: "10px" },
                      fontWeight: "500",
                      mr: "7px",
                    }}
                  >
                    گزارش تخلف فروشنده
                  </Typography>
                </Box>
                <Box onClick={() => handleOpenShare()} sx={{ display: "flex" }}>
                  {md ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.31941 8.43926L9.61005 10.7609M9.60377 4.35593L5.31941 6.6776M13.1154 3.4751C13.1154 4.4416 12.2717 5.2251 11.2308 5.2251C10.19 5.2251 9.3462 4.4416 9.3462 3.4751C9.3462 2.5086 10.19 1.7251 11.2308 1.7251C12.2717 1.7251 13.1154 2.5086 13.1154 3.4751ZM5.57697 7.55843C5.57697 8.52493 4.7332 9.30843 3.69235 9.30843C2.65151 9.30843 1.80774 8.52493 1.80774 7.55843C1.80774 6.59193 2.65151 5.80843 3.69235 5.80843C4.7332 5.80843 5.57697 6.59193 5.57697 7.55843ZM13.1154 11.6418C13.1154 12.6083 12.2717 13.3918 11.2308 13.3918C10.19 13.3918 9.3462 12.6083 9.3462 11.6418C9.3462 10.6753 10.19 9.89176 11.2308 9.89176C12.2717 9.89176 13.1154 10.6753 13.1154 11.6418Z"
                        stroke="#989C9F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.31941 8.43926L9.61005 10.7609M9.60377 4.35593L5.31941 6.6776M13.1154 3.4751C13.1154 4.4416 12.2717 5.2251 11.2308 5.2251C10.19 5.2251 9.3462 4.4416 9.3462 3.4751C9.3462 2.5086 10.19 1.7251 11.2308 1.7251C12.2717 1.7251 13.1154 2.5086 13.1154 3.4751ZM5.57697 7.55843C5.57697 8.52493 4.7332 9.30843 3.69235 9.30843C2.65151 9.30843 1.80774 8.52493 1.80774 7.55843C1.80774 6.59193 2.65151 5.80843 3.69235 5.80843C4.7332 5.80843 5.57697 6.59193 5.57697 7.55843ZM13.1154 11.6418C13.1154 12.6083 12.2717 13.3918 11.2308 13.3918C10.19 13.3918 9.3462 12.6083 9.3462 11.6418C9.3462 10.6753 10.19 9.89176 11.2308 9.89176C12.2717 9.89176 13.1154 10.6753 13.1154 11.6418Z"
                        stroke="#989C9F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StartChat;
