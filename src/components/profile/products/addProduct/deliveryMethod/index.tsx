"use client";

import InfoButton from "@/components/profile/userInfo/main/infoButton";
import Cookies from "@/utils/cookie";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

type ActivatiionCodeType = {
  id: number;
  code: string;
  product: number;
};

const DeliveryMethod = ({
  value,
  onChange,
  codes,
  onCodeAdd,
  onCodeRemove,
  message,
  onMessageChange,
  alreadyExistedCodes,
}: {
  value: boolean;
  onChange: (arg: boolean) => void;
  codes: string[];
  onCodeAdd: (code: string) => void;
  onCodeRemove: (code: string) => void;
  message: string;
  onMessageChange: (arg: string) => void;
  alreadyExistedCodes?: ActivatiionCodeType[];
}) => {
  const [activationCode, setActivationCode] = useState("");
  const [submittedActivationCode, setSubmittedActivationCode] = useState<
  ActivatiionCodeType[]
  >(alreadyExistedCodes ?? []);
  const [loading, setLoading] = useState(0);

  const handleAddCode = () => {
    if (activationCode && !codes?.includes(activationCode)) {
      onCodeAdd(activationCode);
      setActivationCode("");
    }
    if (codes?.includes(activationCode)) {
      setActivationCode("");
    }
  };

  const handleExistedCodeDelete = (id: number) => {
    setLoading(id)
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API}/products/dashboard/delete-activation-code/${id}`,
        {
          headers: { Authorization: `Bearer ${Cookies?.get("access")}` },
        }
      )
      .then((res) => handleSuccessFullDelete(id))
      .catch((err) => console.log(err)).finally(()=>setLoading(0));
  };

  const handleSuccessFullDelete = (id:number) => {
    const codes = submittedActivationCode?.filter((item)=> item?.id !== id);
    setSubmittedActivationCode(codes)
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        // alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              color: "text.main",
              fontWeight: "400",
              fontSize: { md: "16px", xs: "13px" },
            }}
          >
            روش تحویل
          </Typography>
          <InfoButton />
        </Box>
      </Box>
      <Box sx={{ width: { lg: "70%", md: "65%",xs:"100%" } }}>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Box sx={{ display: "flex", gap: 1, alihnitems: "center" }}>
            <Box
              onClick={() => onChange(false)}
              sx={{
                border: "1px solid",
                borderColor: !value ? "button.main" : "#D0D5DD",
                width: "20px",
                height: "20px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pl: "1px",
              }}
            >
              {!value && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
                    stroke="#0961DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Box>
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: "600",
                color: "text.main",
              }}
            >
              عادی
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alihnitems: "center" }}>
            <Box
              onClick={() => onChange(true)}
              sx={{
                border: "1px solid",
                borderColor: value ? "button.main" : "#D0D5DD",
                width: "20px",
                height: "20px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pl: "2px",
              }}
            >
              {value && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
                    stroke="#0961DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Box>
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: "600",
                color: "text.main",
              }}
            >
              خودکار
            </Typography>
          </Box>
        </Box>
        {value && (
          <Box sx={{ mt: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "icon.main",
                borderBottom: "1px solid",
                borderColor: "border.main",
                pb: 0.5,
              }}
            >
              <input
                type="text"
                placeholder="کدهای فعالسازی"
                autoFocus
                value={activationCode}
                onChange={(e) => setActivationCode(e.target.value)}
                onKeyUp={(e) => e.code === "Enter" && handleAddCode()}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "inherit",
                  width: "100%",
                }}
              />
              <Button
                onClick={() => handleAddCode()}
                sx={{
                  bgcolor: "button.info",
                  color: "button.main",
                  borderRadius: "5px",
                  ":hover": { bgcolor: "button.info" },
                }}
              >
                افزودن
              </Button>
            </Box>
            {(codes?.length > 0 || submittedActivationCode?.length > 0) && (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "text.secondary",
                    }}
                  >
                    کدهای فعالسازی
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "icon.main",
                    }}
                  >
                    {`موجودی ${
                      codes?.length + submittedActivationCode?.length
                    } عدد`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "0.5px solid",
                    borderColor: "border.secondary",
                    borderRadius: "8px",
                    p: "10px",
                    mt: "5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {codes?.map((code) => (
                    <Box
                      sx={{
                        p: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "icon.main",
                        borderRadius: "5px",
                        ":hover": {
                          bgcolor: "hover.main",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "inherit",
                        }}
                      >
                        {code}
                      </Typography>
                      <svg
                        onClick={() => onCodeRemove(code)}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="white"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  ))}
                  {submittedActivationCode?.map((item) => (
                    <Box
                      key={item?.code}
                      sx={{
                        p: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "icon.main",
                        borderRadius: "5px",
                        ":hover": {
                          bgcolor: "hover.main",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "inherit",
                        }}
                      >
                        {item?.code}
                      </Typography>
                      {loading === item?.id ? <BeatLoader size={5} color="var(--mui-palette-icon-main)" /> :<svg
                        onClick={() => handleExistedCodeDelete(item?.id)}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="white"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>}
                    </Box>
                  ))}
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  هر خط یک کد فعالسازی محسوب میشود و با هر خرید یک کد به طور
                  خودکار برای خریدار ارسال میشود
                </Typography>
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "text.secondary",
                }}
              >
                پیام بعد از خرید
              </Typography>
              <Box sx={{ mt: "5px" }}>
                <textarea
                  className="productDescribtionField"
                  value={message}
                  onChange={(e) => onMessageChange(e.target.value)}
                  placeholder="پیام بعد از خرید محصول را اینجا بنویسید..."
                  aria-controls="off"
                  rows={4}
                  style={{
                    width: "100%",
                    resize: "none",
                    borderColor: "var(--mui-palette-border-main)",
                    color: "var(--mui-palette-text-secondary)",
                    fontSize: "14px",
                    fontWeight: "400",
                    borderRadius: "5px",
                    outline: "none",
                    background: "transparent",
                    padding: "10px",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "text.secondary",
                  mt: 0.5,
                  mb: 2,
                }}
              >
                پیام بعد از خرید همراه کدهای فعالسازی ارسال میشود، این پیام ممکن
                است پیام تشکر از خریدار و یا دستورالعمل های استفاده باشد
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DeliveryMethod;
