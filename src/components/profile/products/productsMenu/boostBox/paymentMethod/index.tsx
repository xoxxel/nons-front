"use client";

import { UserContext } from "@/context/UserProvider";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { BeatLoader } from "react-spinners";

const PaymentMethod = ({
  paymentMethod,
  isPaymentMethodOpen,
  setIsPaymentMethodOpen,
  setPaymentMethod,
  onSubmit,
  loading,
  withoutPayment
}: {
  paymentMethod: "" | "wallet" | "bank";
  isPaymentMethodOpen: boolean;
  setIsPaymentMethodOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentMethod: React.Dispatch<
    React.SetStateAction<"" | "wallet" | "bank">
  >;
  onSubmit: () => void;
  loading?: boolean;
  withoutPayment?: boolean;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      setIsPaymentMethodOpen(false);
    }
  };

  const { user } = useContext(UserContext);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          zIndex: "999",
          background: "rgba(0,0,0,0.7)",
          transition: "visibility 0.3s ease,opacity 0.3s ease",
          visibility: isPaymentMethodOpen ? "visible" : "hidden",
          opacity: isPaymentMethodOpen ? 1 : 0,
        }}
      >
        <Box
          onClick={handleClick}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: { xs: "flex-end", md: "unset" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "350px" },
              width: "100%",
              p: "24px",
              margin: { xs: "unset", md: "auto" },
              mb: { xs: "72px", md: "auto" },
              borderRadius: { xs: "35px 35px 0 0", md: "11px" },
              bgcolor: "background.main",
              transition: "transform 0.3s ease",
              transform: isPaymentMethodOpen
                ? "translateY(0)"
                : { xs: "translateY(100%)", md: "translateY(-50px)" },
            }}
          >
            <Box
              sx={{
                py: "8px",
                px: "10px",
                mb: { xs: "40px", md: 7 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "13px",
                    fontWeight: "600",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  انتخاب روش پرداخت
                </Typography>
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "18px",
                    fontWeight: "600",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  روش پرداخت
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    cursor: "pointer",
                    color: "icon.main",
                  }}
                  onClick={() => setIsPaymentMethodOpen(false)}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.75 1.25L1.25 11.75M1.25 1.25L11.75 11.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    alignItems: "center",
                    cursor: "pointer",
                    color: "icon.main",
                  }}
                  onClick={() => setIsPaymentMethodOpen(false)}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.625 7.5H1.375M1.375 7.5L7.5 13.625M1.375 7.5L7.5 1.375"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "13px",
                  fontWeight: "500",
                  display: { xs: "none", md: "block" },
                }}
              >
                روش پرداخت را انتخاب کنید
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                mb: { xs: "10px", md: "42px" },
              }}
            >
              <label
                htmlFor="wallet"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPaymentMethod("wallet");
                }}
              >
                <Box
                  sx={{
                    border: "0.5px solid",
                    borderColor:
                      paymentMethod == "wallet" ? "button.main" : "border.main",
                    borderRadius: "8px",
                    py: "8px",
                    px: "10px",
                    transition: "0.313s ease",
                    ":hover": {
                      bgcolor: "hover.main",
                      borderColor: "transparent",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="wallet"
                      checked={paymentMethod == "wallet"}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          کیف پول
                        </Typography>
                        <Typography
                          sx={{
                            color: "icon.main",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {`${ThousandSeparator(user?.wallet_balance)} IRT`}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "45px",
                          height: "45px",
                          border: "0.5px solid",
                          borderRadius: "7px",
                          borderColor: "border.main",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginInlineStart: 1,
                          bgcolor: "background.element",
                          color: "icon.main",
                        }}
                      >
                        <svg
                          width="25"
                          height="26"
                          viewBox="0 0 25 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 8.49991V4.12573C17.5 3.08605 17.5 2.56621 17.281 2.24675C17.0896 1.96763 16.7933 1.77803 16.4597 1.72126C16.0779 1.65628 15.6059 1.87412 14.6619 2.30981L3.57377 7.4274C2.73188 7.81596 2.31094 8.01024 2.00263 8.31155C1.73007 8.57793 1.52202 8.90309 1.39438 9.2622C1.25 9.66839 1.25 10.132 1.25 11.0592V17.2499M18.125 16.6249H18.1375M1.25 12.4999L1.25 20.7499C1.25 22.15 1.25 22.8501 1.52248 23.3849C1.76217 23.8553 2.14462 24.2377 2.61502 24.4774C3.1498 24.7499 3.84987 24.7499 5.25 24.7499H19.75C21.1501 24.7499 21.8502 24.7499 22.385 24.4774C22.8554 24.2377 23.2378 23.8553 23.4775 23.3849C23.75 22.8501 23.75 22.15 23.75 20.7499V12.4999C23.75 11.0998 23.75 10.3997 23.4775 9.86493C23.2378 9.39453 22.8554 9.01208 22.385 8.77239C21.8502 8.49991 21.1501 8.49991 19.75 8.49991L5.25 8.49991C3.84987 8.49991 3.1498 8.49991 2.61502 8.77239C2.14462 9.01207 1.76217 9.39453 1.52248 9.86493C1.25 10.3997 1.25 11.0998 1.25 12.4999ZM18.75 16.6249C18.75 16.9701 18.4702 17.2499 18.125 17.2499C17.7798 17.2499 17.5 16.9701 17.5 16.6249C17.5 16.2797 17.7798 15.9999 18.125 15.9999C18.4702 15.9999 18.75 16.2797 18.75 16.6249Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </label>
              <label
                htmlFor="bank"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPaymentMethod("bank");
                }}
              >
                <Box
                  sx={{
                    border: "0.5px solid",
                    borderColor:
                      paymentMethod == "bank" ? "button.main" : "border.main",
                    borderRadius: "8px",
                    py: "8px",
                    px: "10px",
                    transition: "0.313s ease",
                    ":hover": {
                      bgcolor: "hover.main",
                      borderColor: "transparent",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="bank"
                      checked={paymentMethod == "bank"}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        پرداخت امن زیبال
                      </Typography>
                      <Box
                        sx={{
                          width: "45px",
                          height: "45px",
                          border: "0.5px solid",
                          borderRadius: "7px",
                          borderColor: "border.main",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginInlineStart: 1,
                        }}
                      >
                        <svg
                          width="31"
                          height="23"
                          viewBox="0 0 31 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.7166 4.98226L29.89 10.1556C30.2075 10.4731 30.2075 10.9774 29.89 11.2762L21.579 19.6059C21.2615 19.9234 20.7572 19.9234 20.4584 19.6059L15.285 14.4325C14.9675 14.115 14.9675 13.6108 15.285 13.3119L23.596 4.98226C23.9135 4.66477 24.4178 4.66477 24.7166 4.98226Z"
                            fill="#3A3AE4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.7152 16.0198L15.7323 18.0555C16.0498 18.373 16.0498 18.8773 15.7323 19.1761L12.1277 22.762C11.8102 23.0795 11.306 23.0795 11.0071 22.762L8.99008 20.7263C8.67258 20.4088 8.67258 19.9045 8.99008 19.6057L12.5946 16.0011C12.8934 15.7023 13.3977 15.7023 13.7152 16.0198Z"
                            fill="#3A3AE4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.28259 18.0367L1.10922 12.8633C0.791719 12.5458 0.791719 12.0416 1.10922 11.7427L9.4389 3.39437C9.7564 3.07688 10.2607 3.07688 10.5595 3.39437L15.7329 8.56774C16.0504 8.88524 16.0504 9.3895 15.7329 9.68833L7.42185 18.018C7.10435 18.3542 6.60009 18.3542 6.28259 18.0367Z"
                            fill="#3A3AE4"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.3021 6.99899L15.285 4.96326C14.9675 4.64576 14.9675 4.14149 15.285 3.84267L18.8896 0.238124C19.2071 -0.0793748 19.7113 -0.0793748 20.0101 0.238124L22.0272 2.27385C22.3447 2.59135 22.3447 3.09562 22.0272 3.39444L18.4226 6.99899C18.1238 7.31649 17.6196 7.31649 17.3021 6.99899Z"
                            fill="#3A3AE4"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </label>
            </Box>
            <Box
              sx={{
                display: "flex",
                columnGap: "10px",
              }}
            >
              <Button
                onClick={onSubmit}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: { xs: "36px", md: "44px" },
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "600",
                  bgcolor: "button.main",
                  "&:hover": {
                    bgcolor: "button.main",
                  },
                }}
              >
                {loading ? (
                  <BeatLoader color="white" size={10} />
                ) : (
                  !withoutPayment ? "ادامه و پرداخت" : "تایید"
                )}
              </Button>
              <Button
                onClick={() => setIsPaymentMethodOpen(false)}
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "50%",
                  height: "44px",
                  border: "0.5px solid",
                  borderColor: "text.main",
                  borderRadius: "8px",
                  color: "text.main",
                  fontSize: "16px",
                  fontWeight: "600",
                  background: "transparent",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              >
                لغو
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentMethod;
