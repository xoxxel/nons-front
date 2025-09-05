import { Box, Button, Container, Typography } from "@mui/material";
import CopyText from "./copyText";
import PayAgain from "./payAgain";
import Link from "next/link";

const Callback = ({
  success,
  trackingID,
  orderID,
}: {
  success: string;
  trackingID: string;
  orderID: string;
}) => {
  const state = success === "1";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { sm: 5, xs: 0 },
        mb: { sm: 3, xs: 0 },
      }}
    >
      <Box
        sx={{
          borderRadius: { sm: "25px", xs: "0px" },
          background: {
            sm: "linear-gradient(191.03deg, #465054 21.75%, #3A4246 88.87%)",
            xs: "none",
          },
          border: { sm: "1px solid #333A3E", xs: "none" },
          boxShadow: { sm: "0px 4px 4px 0px #00000024", xs: "none" },
          py: 2,
          px: 2.5,
          width: { lg: "35%", md: "50%", sm: "75%", xs: "100%" },
          height: { sm: "auto", xs: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { sm: "start", xs: "space-between" },
        }}
      >
        <Box>
          {/* back button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Link href="/" >
            <Button
              sx={{
                minWidth: "45px",
                height: "45px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#FFFFFF0D",
                color: "white",
                ":hover": {
                  bgcolor: "#FFFFFF0D",
                },
              }}
            >
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 11.5L1.5 6.5L6.5 1.5"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            </Link>
          </Box>
          {/* status icon and text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "10px",
              gap: 3.5,
            }}
          >
            {state ? (
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50.5" cy="50" r="50" fill="#9FE870" />
                <path
                  d="M83.1135 36.9885L82.099 38.1099L50.9724 69.9603C46.6613 74.3717 39.5652 74.3774 35.248 69.9721L18.3412 52.7202C15.6727 49.9973 15.7264 45.6213 18.4634 42.9672C21.2181 40.296 25.6259 40.3957 28.257 43.1887L43.1154 58.9615L73.0981 27.6639C75.6063 25.0457 79.7214 24.8384 82.48 27.1913C85.4149 29.6947 85.7016 34.128 83.1135 36.9885Z"
                  fill="#3F484D"
                />
              </svg>
            ) : (
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50.5" cy="50" r="50" fill="#E87070" />
                <path
                  d="M45.203 29.1856L46.3328 57.9967C46.4242 60.326 48.339 62.1671 50.67 62.1671C53.001 62.1671 54.9158 60.326 55.0072 57.9967L56.137 29.1856C56.2587 26.0822 53.7758 23.5 50.67 23.5C47.5642 23.5 45.0813 26.0822 45.203 29.1856ZM50.67 76.2C53.8015 76.2 56.34 73.6615 56.34 70.53C56.34 67.3985 53.8015 64.86 50.67 64.86C47.5385 64.86 45 67.3985 45 70.53C45 73.6615 47.5385 76.2 50.67 76.2Z"
                  fill="#3F484D"
                  stroke="#3F484D"
                />
              </svg>
            )}
            <Typography
              sx={{ fontSize: "29px", fontWeight: "600", color: "white" }}
            >
              {state ? "پرداخت موفق" : "پرداخت نا‌موفق"}
            </Typography>
          </Box>
        </Box>
        <Box>
          {/* order code */}
          <CopyText
            text={state ? "" : "پیگیری سفارش"}
            bordered
            code={trackingID}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 7.5,
                width: { sm: "80%", xs: "100%" },
                mb: 6,
              }}
            >
              {state ? (
                <Link href="/profile/orders">
                <Button
                  sx={{
                    minWidth: "100%",
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "7px",
                    bgcolor: "#FFFFFF0D",
                    fontWeight: "600",
                    fontSize: "13px",
                    py: "11px",
                    ":hover": {
                      bgcolor: "#FFFFFF0D",
                    },
                  }}
                >
                  پیگیری سفارش
                </Button>
                </Link>
              ) : (
                <PayAgain orderId={orderID} />
              )}
              <Typography
                sx={{ color: "white", textAlign: "center", fontSize: "11px" }}
              >
                {state
                  ? "ما به زودی رسید خرید را از طریق ایمیل برای شما ارسال میکنیم"
                  : "در صورتی که وجه از حساب شما کسر شده معمولا کمتر از دو ساعت به حساب شما برگشت داده میشود ، در غیر این صورت تماس با ما  بگیرید"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Callback;
