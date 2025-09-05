import CopyCode from "@/components/profile/activities/transaction/copyCode";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const WalletPurchaseSuccess = ({
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
          خرید محصول
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
                  background: "#06D6A0",
                }}
              >
                <svg
                  width="30"
                  height="22"
                  viewBox="0 0 30 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.6663 2.5L10.2497 19.9167L2.33301 12"
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
                تراکنش موفق
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
                  فروشگاه
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
                    فروشگاه نونز
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
                      color: "icon.main",
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
                    background: "#0961DC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L3.5 6.5L1 4"
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
                  تکمیل شده
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "icon.main",
                }}
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6.66732H1M9.66667 1.33398V4.00065M4.33333 1.33398V4.00065M4.2 14.6673H9.8C10.9201 14.6673 11.4802 14.6673 11.908 14.4493C12.2843 14.2576 12.5903 13.9516 12.782 13.5753C13 13.1475 13 12.5874 13 11.4673V5.86732C13 4.74721 13 4.18716 12.782 3.75934C12.5903 3.38301 12.2843 3.07705 11.908 2.8853C11.4802 2.66732 10.9201 2.66732 9.8 2.66732H4.2C3.0799 2.66732 2.51984 2.66732 2.09202 2.8853C1.71569 3.07705 1.40973 3.38301 1.21799 3.75934C1 4.18716 1 4.74721 1 5.86732V11.4673C1 12.5874 1 13.1475 1.21799 13.5753C1.40973 13.9516 1.71569 14.2576 2.09202 14.4493C2.51984 14.6673 3.0799 14.6673 4.2 14.6673Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                    mx: 0.5,
                  }}
                >
                  29 فروردین ، 2:35 عصر
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

export default WalletPurchaseSuccess;
