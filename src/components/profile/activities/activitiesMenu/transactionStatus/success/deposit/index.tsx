import CopyCode from "@/components/profile/activities/transaction/copyCode";
import convertToTehranTime from "@/utils/convertToTehranTime";
import jalaliDate from "@/utils/jalaliDate";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";

const WalletDepositSuccess = ({
  setDrawerVisibility,
  data,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  data: WalletTransactionModel;
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignitems: "center",
          justifyContent: "space-between",
          width: "100%",
          bgcolor: "background.secondary",
          p: "15px",
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
          واریز وجه
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
          bgcolor: "background.element",
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
                {`-${ThousandSeparator(data?.value)} IRT`}
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
                <Typography>{jalaliDate(data?.date, "D MMMM")}</Typography>
                <span
                  style={{
                    margin: "0 4px",
                  }}
                >
                  -
                </span>
                <Typography>
                  {convertToTehranTime(`${data?.date}T${data?.time}`)}
                </Typography>
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    کارمزد
                  </Typography>
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
                      0
                    </Typography>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.29134 1.70898L1.70801 9.29232M3.06217 2.52148C3.06217 2.82064 2.81966 3.06315 2.52051 3.06315C2.22135 3.06315 1.97884 2.82064 1.97884 2.52148C1.97884 2.22233 2.22135 1.97982 2.52051 1.97982C2.81966 1.97982 3.06217 2.22233 3.06217 2.52148ZM9.02051 8.47982C9.02051 8.77897 8.778 9.02148 8.47884 9.02148C8.17969 9.02148 7.93717 8.77897 7.93717 8.47982C7.93717 8.18066 8.17969 7.93815 8.47884 7.93815C8.778 7.93815 9.02051 8.18066 9.02051 8.47982Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  0,00
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    مالیات بر ارزش افزوده
                  </Typography>
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
                      10
                    </Typography>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.29134 1.70898L1.70801 9.29232M3.06217 2.52148C3.06217 2.82064 2.81966 3.06315 2.52051 3.06315C2.22135 3.06315 1.97884 2.82064 1.97884 2.52148C1.97884 2.22233 2.22135 1.97982 2.52051 1.97982C2.81966 1.97982 3.06217 2.22233 3.06217 2.52148ZM9.02051 8.47982C9.02051 8.77897 8.778 9.02148 8.47884 9.02148C8.17969 9.02148 7.93717 8.77897 7.93717 8.47982C7.93717 8.18066 8.17969 7.93815 8.47884 7.93815C8.778 7.93815 9.02051 8.18066 9.02051 8.47982Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                    direction: "ltr",
                  }}
                >
                  {`-${ThousandSeparator(data?.value * 0.1)} IRT`}
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
                  روش پرداخت
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
                      fontSize: "14px",
                      fontWeight: "400",
                      mx: 1,
                    }}
                  >
                    پرداخت امن زیبال
                  </Typography>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6614 4.39925L22.7101 8.44797C22.9586 8.69645 22.9586 9.09109 22.7101 9.32495L16.2058 15.8438C15.9573 16.0923 15.5627 16.0923 15.3288 15.8438L11.2801 11.7951C11.0316 11.5466 11.0316 11.152 11.2801 10.9181L17.7844 4.39925C18.0329 4.15077 18.4275 4.15077 18.6614 4.39925Z"
                      fill="#3A3AE4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0523 13.0378L11.6308 14.631C11.8793 14.8795 11.8793 15.2741 11.6308 15.508L8.80987 18.3143C8.56139 18.5628 8.16675 18.5628 7.93289 18.3143L6.35433 16.7212C6.10585 16.4727 6.10585 16.078 6.35433 15.8442L9.17528 13.0232C9.40914 12.7894 9.80378 12.7894 10.0523 13.0378Z"
                      fill="#3A3AE4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.23508 14.6163L0.186358 10.5675C-0.0621194 10.3191 -0.0621194 9.92442 0.186358 9.69056L6.70524 3.15706C6.95372 2.90858 7.34836 2.90858 7.58222 3.15706L11.6309 7.20578C11.8794 7.45426 11.8794 7.8489 11.6309 8.08276L5.12668 14.6016C4.8782 14.8647 4.48356 14.8647 4.23508 14.6163Z"
                      fill="#3A3AE4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8587 5.97747L11.2801 4.38429C11.0316 4.13581 11.0316 3.74117 11.2801 3.50731L14.1011 0.686358C14.3495 0.437881 14.7442 0.437881 14.978 0.686358L16.5566 2.27954C16.8051 2.52801 16.8051 2.92266 16.5566 3.15652L13.7357 5.97747C13.5018 6.22595 13.1072 6.22595 12.8587 5.97747Z"
                      fill="#3A3AE4"
                    />
                  </svg>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  مبلغ پرداختی
                </Typography>
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "14px",
                    fontWeight: "600",
                    direction: "ltr",
                  }}
                >
                  {`-${ThousandSeparator(data?.value * 1.1)} IRT`}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              p: "15px",
            }}
          >
            <Box
              sx={{
                border: "0.5px solid",
                borderColor: "#848686",
                borderRadius: "5px",
                height: "44px",
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                دانلود فاکتور
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletDepositSuccess;
