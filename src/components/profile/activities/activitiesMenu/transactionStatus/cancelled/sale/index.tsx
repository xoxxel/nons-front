import CopyCode from "@/components/profile/activities/transaction/copyCode";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const WalletSaleCancelled = ({
  setDrawerVisibility,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignitems: "center",
          justifyContent: "space-between",
          width: "100%",
          p: "15px",
          bgcolor: "background.element",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "text.secondary",
            display: "flex",
            alignItems: "center",
          }}
        >
          فروش محصول
        </Typography>
        <Box
          onClick={() => setDrawerVisibility(0)}
          sx={{
            color: "text.main",
            cursor: "pointer",
            width: "34px",
            height: "34px",
            // background: "#F5F5F5",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              d="M13 1L1 13M1 1L13 13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          p: "24px 15px",
          bgcolor: "background.main",
        }}
      >
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#E87070",
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
                    d="M26 2L2 26M2 2L26 26"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "20px",
                  mb: "5px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                لغو شده
              </Typography>
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "32px",
                  fontWeight: "600",
                  direction: "ltr",
                  textAlign: "center",
                }}
              >
                -1,500,000 IRT
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  my: "20px",
                  px: "20px",
                  height: "26px",
                  background: "#EFF8FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#175CD3",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "50px",
                }}
              >
                <Typography>25 آبان</Typography>
                <span
                  style={{
                    margin: "0 4px",
                  }}
                >
                  -
                </span>
                <Typography>2:45</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                px: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  نام محصول
                </Typography>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  اسپاتیفای
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  برچسب
                </Typography>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                    direction: "ltr",
                  }}
                >
                  گیفت کارت , آمریکا
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  شماره پیگیری
                </Typography>
                <CopyCode code="2874262" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  خریدار
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                      mx: 1,
                    }}
                  >
                    حسین امیری
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Image
                      src="/images/shopavatar.jpg"
                      alt="avatar"
                      width={16}
                      height={16}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  قیمت
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      border: "0.25px solid",
                      borderColor: "border.main",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: 0.5,
                      px: 0.5,
                      py: 0.25,
                      color : "icon.main"
                    }}
                  >
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "14px",
                        fontWeight: "500",
                        mx: 0.25,
                      }}
                    >
                      1
                    </Typography>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75 1.25L1.25 7.75M1.25 1.25L7.75 7.75"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    1,500,000
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                px: "20px",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#E87070",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7M1 1L7 7"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                    mx: 0.75,
                  }}
                >
                  لغو شده
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  columnGap: "3px",
                  mb: 1,
                  direction: "ltr",
                }}
              >
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "8px 0 0 8px",
                    background: "#0961DC",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    background: "#0961DC",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    background: "#0961DC",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "0 8px 8px 0",
                    background: "#0961DC",
                  }}
                ></Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#475467",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  سفارش در تاریخ 12 آبان توسط مدیریت لغو شده
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                sx={{
                  width: "100%",
                  bgcolor: "button.main",
                  height: "44px",
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "button.main",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  مشاهده سفارش
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletSaleCancelled;
