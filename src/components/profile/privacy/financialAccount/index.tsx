"use client";
import { fetchAccountTypes } from "@/api/data";
import { AccountContext } from "@/context/accountProvider";
import Cookies from "@/utils/cookie";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type accountType = {
  id: number;
  title: string;
  image: string;
};

const FinancialAccount = () => {
  const { account, updateAccount } = useContext(AccountContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [accountTypes, setAccountTypes] = useState<accountType[]>([]);
  const [selectedType, setSelectedType] = useState<accountType>(
    {} as accountType
  );
  const [accountType, setAccountType] = useState<"Rial" | "Forign">("Rial");
  const [cardNumber, setCardNumber] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [isFirstTime, setIsFirstTime] = useState(
    Object.values(account ?? {}).every(
      (value) =>
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
    )
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAccountTypes()
      .then((res) => setAccountTypes(res))
      .catch((err) => console.error("error fetchin account types", err));
  }, []);

  useEffect(() => {
    setIsFirstTime(
      Object.values(account ?? {}).every(
        (value) =>
          value === null ||
          value === "" ||
          (Array.isArray(value) && value.length === 0)
      )
    );
  }, [accountTypes]);

  useEffect(() => {
    setSelectedType(accountTypes?.[0]);
  }, [account]);

  const handleSubmitAccount = () => {
    setLoading(true);
    const RialAccount = {
      card: cardNumber,
      status: "IRT",
    };

    const ForignAccount = {
      url: accountAddress,
      status: "USD",
      account_type: selectedType?.id,
    };

    if (isFirstTime) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/wallet/account/create/`,
          accountType === "Rial" ? RialAccount : ForignAccount,
          { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
        )
        .then((res) => handleSuccessfulSubmit())
        .catch((err) => handleError());
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/wallet/account/detail/`,
          accountType === "Rial" ? RialAccount : ForignAccount,
          { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
        )
        .then((res) => handleSuccessfulSubmit())
        .catch((err) => handleError());
    }
  };

  const handleSuccessfulSubmit = () => {
    setIsFirstTime(false);
    setLoading(false);
    setIsExpanded(false);
    updateAccount();
    toast.success("حساب شما با موفقیت ثبت شد");
  };

  const handleError = () => {
    setLoading(false);
    toast.error("مشکلی وجود دارد");
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmitAccount();
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {isExpanded && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              onClick={() => setAccountType("Rial")}
              sx={{
                width: "20px",
                height: "20px",
                border: "1px solid",
                borderColor:
                  accountType === "Rial" ? "button.main" : "border.main",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {accountType === "Rial" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ margin: "0px 2px" }}
                >
                  <path
                    d="M11.6673 3.5L5.25065 9.91667L2.33398 7"
                    stroke="#0961DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Box>
            <Typography
              sx={{ color: "text.main", fontSize: "16px", fontWeight: "600" }}
            >
              حساب ریالی
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              onClick={() => setAccountType("Forign")}
              sx={{
                width: "20px",
                height: "20px",
                border: "1px solid",
                borderColor:
                  accountType === "Forign" ? "button.main" : "border.main",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {accountType === "Forign" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ margin: "0px 2px" }}
                >
                  <path
                    d="M11.6673 3.5L5.25065 9.91667L2.33398 7"
                    stroke="#0961DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Box>
            <Typography
              sx={{ color: "text.main", fontSize: "16px", fontWeight: "600" }}
            >
              حساب ارزی
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          gap: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            overflow: "hidden",
          }}
        >
          {!isExpanded && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                width: "100%",
              }}
            >
              <Box sx={{ width: "36px", height: "36px" }}>
                <Image
                  src={
                    account?.status === "USD"
                      ? `${process.env.NEXT_PUBLIC_SERVER}/${account?.account_type?.image}`
                      : "/images/icons/account.png"
                  }
                  width={36}
                  height={36}
                  alt="account"
                />
              </Box>
              <Typography
                sx={{
                  color: "text.main",
                  textOverflow: "ellipsis",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {account?.status === "USD" ? account?.url : account?.card}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
                color: "text.main",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {/* {account?.status === "USD" ? account?.url : account?.card} */}
            </Typography>
          </Box>
          {isExpanded && accountType === "Rial" && (
            <Box
              sx={{
                color: "text.main",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src="/images/icons/account.png"
                width={36}
                height={36}
                alt="account"
              />

              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e)}
                autoFocus
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "inherit",
                }}
              />
            </Box>
          )}
          {isExpanded && accountType === "Forign" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                onClick={() => setIsDropdownOpen(true)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "text.main",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 6.125L8 9.875L11.75 6.125"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER}/${
                    selectedType?.image || accountTypes?.[0]?.image
                  }`}
                  width={20}
                  height={20}
                  alt="account"
                />
              </Box>
              <Box
                sx={{
                  color: "text.main",
                }}
              >
                <input
                  type="text"
                  value={accountAddress}
                  onChange={(e) => setAccountAddress(e.target.value)}
                  onKeyUp={(e) => handleKeyUp(e)}
                  autoFocus
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "inherit",
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
        <Button
          onClick={() => {
            setIsExpanded(true), isExpanded && handleSubmitAccount();
          }}
          sx={{
            color: isExpanded ? "badgeText.success" : "button.main",
            fontSize: "14px",
            fontWeight: "400",
            borderRadius: "5px",
            height: "28px",
            bgcolor: isExpanded ? "badge.success" : "button.info",
            ":hover": {
              bgcolor: isExpanded ? "badge.success" : "button.info",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={20} />
          ) : isExpanded ? (
            "تایید"
          ) : isFirstTime ? (
            "افزودن"
          ) : (
            "بروزرسانی"
          )}
        </Button>
      </Box>
      {isDropdownOpen && (
        <Box
          sx={{
            width: "100%",
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            mt: 1,
            p: "10px 14px",
          }}
        >
          {accountTypes?.map((accountType) => (
            <Box
              key={accountType?.id}
              onClick={() => {
                setSelectedType(accountType);
                setIsDropdownOpen(false);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
                borderRadius: "5px",
                cursor: "pointer",
                ":hover": {
                  bgcolor: "#F5F5F5",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER}/${accountType?.image}`}
                  width={20}
                  height={20}
                  alt={accountType?.title}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "text.secondary",
                  }}
                >
                  {accountType?.title}
                </Typography>
              </Box>
              <Box sx={{ color: "border.main", height: "16px" }}>
                {selectedType?.id === accountType?.id ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="7.5"
                      fill="#0961DC"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="7.5"
                      stroke="#0961DC"
                    />
                    <path
                      d="M11.3327 5.5L6.74935 10.0833L4.66602 8"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="7.5"
                      stroke="currentColor"
                    />
                  </svg>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FinancialAccount;
