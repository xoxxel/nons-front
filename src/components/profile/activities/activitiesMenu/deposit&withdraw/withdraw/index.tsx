"use client";
import FinancialAccount from "@/components/profile/privacy/financialAccount";
import { UserContext } from "@/context/UserProvider";
import Cookies from "@/utils/cookie";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Withdraw = ({
  setStatus,
  withoutShadow,
  onClose
}: {
  setStatus?: React.Dispatch<
    React.SetStateAction<"deposit" | "withdraw" | "none">
  >;
  withoutShadow?: boolean;
  onClose?:()=>void
}) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [shownValue, setShownValue] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    setShownValue(ThousandSeparator(withdrawAmount));
  }, [withdrawAmount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setWithdrawAmount(value);
  };

  const handleWithdraw = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/wallet/user-transactions/`,
        { value: withdrawAmount, status_type: "withdraw" },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => toast.success("درخواست شما با موفقیت ثبت شد"))
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{ p: "7px", mt: "10px" }}>
      <Box
        sx={{
          p: "24px 20px",
          borderRadius: "5px",
          boxShadow: withoutShadow ? "none" : "0px -3px 25px 0px #00000021",
        }}
      >
        {/* Title and close button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "text.secondary",
            }}
          >
            برداشت از حساب
          </Typography>
          <Box
            sx={{
              minWidth: "25px",
              color: "icon.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {setStatus && setStatus("none"),onClose && onClose()}}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>

        {/* Choose amount */}
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "500", color: "text.main" }}
          >
            انتخاب مبلغ
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                color: "text.main",
                my: 1,
              }}
            >
              IRT
            </Typography>
            <Box
              sx={{
                color: "text.main",
                marginInlineStart: 0.5,
              }}
            >
              <input
                type="text"
                value={shownValue}
                placeholder="0"
                autoFocus
                onChange={handleChange}
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  width: "180px",
                  background: "transparent",
                }}
              />
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
              sx={{ fontSize: "14px", fontWeight: "400", color: "button.main" }}
            >
              موجودی شما {ThousandSeparator(user?.wallet_balance)}
            </Typography>
            <Typography
              onClick={() => setWithdrawAmount(`${user?.wallet_balance}`)}
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "button.main",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              انتخاب همه
            </Typography>
          </Box>
        </Box>

        {/* User account */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "text.main" }}
          >
            واریز به حساب
          </Typography>
          <Box sx={{ my: 1 }}>
            <FinancialAccount />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4996 6.12563V8.62563M7.4996 11.1256H7.50585M6.63418 2.93296L1.49362 11.8121C1.20849 12.3046 1.06593 12.5508 1.087 12.7529C1.10538 12.9292 1.19774 13.0894 1.34108 13.1936C1.50543 13.3131 1.78997 13.3131 2.35905 13.3131H12.6402C13.2092 13.3131 13.4938 13.3131 13.6581 13.1936C13.8015 13.0894 13.8938 12.9292 13.9122 12.7529C13.9333 12.5508 13.7907 12.3046 13.5056 11.8121L8.36503 2.93296C8.08092 2.44223 7.93887 2.19687 7.75354 2.11446C7.59188 2.04258 7.40733 2.04258 7.24567 2.11446C7.06033 2.19687 6.91828 2.44223 6.63418 2.93296Z"
                stroke="#0961DC"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "button.main" }}
            >
              کارمزد 0 مالیات بر ارزش افزوده 10% محاسبه میشود
            </Typography>
          </Box>
        </Box>

        {/* Withdraw button */}
        <Button
          onClick={handleWithdraw}
          sx={{
            color: "white",
            bgcolor: "button.main",
            width: "100%",
            borderRadius: "5px",
            py: 1,
            mt: 4,
            ":hover": { bgcolor: "button.main" },
          }}
        >
          برداشت
        </Button>

        {/* Description */}
        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "text.secondary",
            }}
          >
            توضیحات
          </Typography>
          <Box sx={{ pr: 2.5 }}>
            <ul>
              <Box
                sx={{
                  color: "text.main",
                }}
              >
                <li style={{ marginTop: "16px", color: "inherit" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "text.main",
                    }}
                  >
                    زمان پردازش حداقل 2 ساعت و حداکثر 48 ساعت می باشد (به
                    استثناء ایام تعطیل)
                  </Typography>
                </li>
              </Box>
              <Box
                sx={{
                  color: "text.main",
                }}
              >
                <li style={{ marginTop: "16px", color: "inherit" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "text.main",
                    }}
                  >
                    دریافت کننده وجه موظف است جهت حفظ امنیت حساب کاربری خود نسبت
                    به فعالسازی تایید دو مرحله ای حساب اقدام نماید.
                  </Typography>
                </li>
              </Box>
            </ul>
          </Box>
        </Box>

        {/* Current price of some currencies */}
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "text.main",
              mb: "10px",
            }}
          >
            نرخ لحظه ای ارز
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "text.main",
              mt: 0.5,
            }}
          >
            نرخ تبدیل با نرخ هنگام ثبت درخواست محاسبه میشود
          </Typography>
          <Box className="currencies" sx={{ marginTop: "32px", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                پلتفرم
              </Typography>
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                قیمت هر واحد
              </Typography>
            </Box>
            <Box>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor:
                        index % 2 == 0 ? "background.secondary" : "transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: "4px",
                      px: "10px",
                    }}
                  >
                    <Box>
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          width="15"
                          height="18"
                          viewBox="0 0 15 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.50042 12.197C6.75811 12.8229 5.7951 13.2008 4.74277 13.2008C2.39524 13.2008 0.492188 11.3204 0.492188 9.00078C0.492188 6.68119 2.39524 4.80078 4.74277 4.80078C5.7951 4.80078 6.75811 5.17864 7.50042 5.80454C8.24273 5.17864 9.20574 4.80078 10.2581 4.80078C12.6056 4.80078 14.5086 6.68119 14.5086 9.00078C14.5086 11.3204 12.6056 13.2008 10.2581 13.2008C9.20574 13.2008 8.24273 12.8229 7.50042 12.197Z"
                            fill="#ED0006"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.49805 12.1978C8.41219 11.4274 8.99186 10.281 8.99186 9.00078C8.99186 7.72058 8.41219 6.57416 7.49805 5.8038C8.24024 5.17834 9.20291 4.80078 10.2548 4.80078C12.6024 4.80078 14.5054 6.68119 14.5054 9.00078C14.5054 11.3204 12.6024 13.2008 10.2548 13.2008C9.20291 13.2008 8.24024 12.8232 7.49805 12.1978Z"
                            fill="#ED0006"
                          />
                        </svg>
                        {/* Replace with actual platform name and price */}
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          Platform {index + 1}
                        </Typography>
                      </div>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {ThousandSeparator(Math.floor(Math.random() * 1000000))}
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Withdraw;
