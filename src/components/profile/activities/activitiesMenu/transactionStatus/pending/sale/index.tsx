import CopyCode from "@/components/profile/activities/transaction/copyCode";
import ActivityModel from "@/models/Activity";
import convertToTehranTime from "@/utils/convertToTehranTime";
import jalaliDate from "@/utils/jalaliDate";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const WalletTrade = ({
  setDrawerVisibility,
  activity,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  activity: ActivityModel;
}) => {
  const activityStepsPassed =
    activity?.order?.status === "canceled" ||
    activity?.order?.status === "completed"
      ? 4
      : 2;
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
          {activity?.order?.order_type === "boost"
                ? "بوست"
                : activity?.transaction?.status_change !== "buy" &&
                  activity?.transaction?.status_change !== "sell" &&
                  "خرید محصول"}
              {/* buy transactions paid wiyh wallet */}
              {activity?.order?.order_type !== "boost" &&
                activity?.transaction?.status_change === "buy" &&
                "خرید محصول"}
              {/* sell transactions paid wiyh wallet */}
              {activity?.order?.order_type !== "boost" &&
                activity?.transaction?.status_change === "sell" &&
                "فروش محصول"}
              {activity?.transaction?.status_change === "cancel-buy" &&
                "لغو خرید"}
              {activity?.transaction?.status_change === "cancel-sell" &&
                "لغو فروش"}
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                  position: "relative",
                  bgcolor:
                    activity?.transaction?.status_transaction === "successful"
                      ? "#06D6A0"
                      : activity?.transaction?.status_transaction === "failed"
                      ? "#FF6666"
                      : "transparent",
                }}
              >
                {activity?.transaction?.status_transaction === "successful" ? (
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : activity?.transaction?.status_transaction === "in_queue" ? (
                  <Image src="/images/spinner.svg" alt="spinner" fill />
                ) : (
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
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
                {activity?.transaction?.status_transaction === "successful"
                  ? "تراکنش موفق"
                  : activity?.transaction?.status_transaction === "in_queue"
                  ? "در حال پردازش"
                  : "لغو شده"}
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
                {`${
                  activity?.transaction?.status_type === "deposite" ? "+" : "-"
                }${ThousandSeparator(activity?.transaction?.value)} IRT`}
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
                  color: "button.main",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "50px",
                  bgcolor: "button.info",
                }}
              >
                <Typography>
                  {jalaliDate(activity?.date_created, "MMMM D")}
                </Typography>
                <span
                  style={{
                    margin: "0 4px",
                  }}
                >
                  -
                </span>
                <Typography>
                  {convertToTehranTime(`${activity?.date_created}`)}
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
                  {activity?.order?.product?.title}
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
                  {activity?.order?.product?.brand?.tags
                    ?.map((tag) => tag.title)
                    .join(" , ")}
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
                <CopyCode code={activity?.code} />
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
                      fontSize: "14px",
                      fontWeight: "500",
                      mx: 1,
                    }}
                  >
                    {activity?.order?.user?.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${activity?.order?.user?.image}`}
                      alt="خریدار"
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                    {ThousandSeparator(activity?.order?.product?.price)}
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {activity?.order?.status === "completed" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#1A79FE" />
                      <path
                        d="M14 7L8.5 12.5L6 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : activity?.order?.status === "canceled" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#FF6666" />
                      <path
                        d="M13 7L7 13M7 7L13 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <Box
                      sx={{
                        width: "18px",
                        height: "18px",
                        color: "badge.disable",
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
                          d="M16.1431 9.00028C16.1431 9.93829 15.9584 10.8671 15.5994 11.7337C15.2405 12.6003 14.7143 13.3878 14.051 14.051C13.3878 14.7143 12.6003 15.2405 11.7337 15.5994C10.8671 15.9584 9.93829 16.1431 9.00028 16.1431C8.06226 16.1431 7.13344 15.9584 6.26682 15.5994C5.40021 15.2405 4.61279 14.7143 3.94952 14.051C3.28624 13.3878 2.7601 12.6003 2.40114 11.7337C2.04218 10.8671 1.85742 9.93829 1.85742 9.00028C1.85742 8.06226 2.04218 7.13343 2.40114 6.26682C2.7601 5.40021 3.28624 4.61279 3.94952 3.94951C4.61279 3.28624 5.40022 2.7601 6.26683 2.40114C7.13344 2.04218 8.06227 1.85742 9.00028 1.85742C9.9383 1.85742 10.8671 2.04218 11.7337 2.40114C12.6003 2.7601 13.3878 3.28624 14.051 3.94952C14.7143 4.6128 15.2405 5.40022 15.5994 6.26683C15.9584 7.13344 16.1431 8.06227 16.1431 9.00028L16.1431 9.00028Z"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.00028 1.85742C9.93829 1.85742 10.8671 2.04218 11.7337 2.40114C12.6003 2.7601 13.3878 3.28624 14.051 3.94952C14.7143 4.61279 15.2405 5.40022 15.5994 6.26683C15.9584 7.13344 16.1431 8.06227 16.1431 9.00028"
                          stroke="#1A79FE"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  )}
                </Box>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                    mx: 0.75,
                  }}
                >
                  {activity?.order?.status === "processing"
                    ? "در حال پردازش"
                    : activity?.order?.status === "completed"
                    ? "تکمیل شده"
                    : activity?.order?.status === "canceled"
                    ? "لغو شده"
                    : "در حال داوری"}
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
                    bgcolor:
                      activityStepsPassed >= 1
                        ? "button.main"
                        : "background.secondary",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    bgcolor:
                      activityStepsPassed >= 2
                        ? "button.main"
                        : "background.secondary",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    bgcolor:
                      activityStepsPassed >= 3
                        ? "button.main"
                        : "background.secondary",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "0 8px 8px 0",
                    bgcolor:
                      activityStepsPassed >= 4
                        ? "button.main"
                        : "background.secondary",
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  {`${jalaliDate(
                    activity?.order?.last_updated,
                    "DD MMMM ، "
                  )} ${convertToTehranTime(
                    activity?.order?.last_updated)} ${
                    parseInt(jalaliDate(activity?.order?.last_updated, "H")) >
                    12
                      ? "عصر"
                      : "صبح"
                  }`}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Link href="/profile/orders">
              <Button
              onClick={()=>setDrawerVisibility(0)}
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
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletTrade;
