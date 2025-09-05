import Cookies from "@/utils/cookie";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Deposit = ({
  setStatus,
  setOpen,
  withBackground,
  onClose,
}: {
  setStatus?: React.Dispatch<
    React.SetStateAction<"deposit" | "withdraw" | "none">
  >;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  withBackground?: boolean;
  onClose?:()=>void
}) => {
  const router = useRouter();
  const [chargeAmount, setChargeAmount] = useState("");
  const [shownValue, setShownValue] = useState("");
  const amounts = ["50000", "100000", "200000", "500000", "1000000", "3000000"];

  useEffect(() => {
    setShownValue(ThousandSeparator(chargeAmount));
  }, [chargeAmount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setChargeAmount(value);
  };

  const chargeWallet = () => {
    if (parseInt(chargeAmount) === 0) return toast.error("مقداری انتخاب کنید");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/wallet/user-transactions/`,
        {
          value: parseInt(chargeAmount) * 10,
          status_type: "deposite",
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => payTransaction(res?.data?.id))
      .catch((err) =>
        console.error("error submiting a deposit transaction in wallet", err)
      );
  };

  const payTransaction = (id: number | string) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/wallet/pay-transaction/${id}`, "", {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      })
      .then((res) => router.push(res?.data?.data))
      .catch((err) => console.error("error ridirecting to payment gate", err));
  };

  return (
    <Box sx={{ p: "7px", mt: "10px" }}>
      <Box
        sx={{
          bgcolor: withBackground ? "background.element" : "transparent",
          p: "24px 10px",
          borderRadius: "5px",
          boxShadow: withBackground ? "0px -3px 25px 0px #00000021" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "10px",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "text.secondary",
            }}
          >
            افزایش موجودی
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
              onClick={() => {
                setStatus && setStatus("none");
                setOpen && setOpen(false);
                onClose && onClose();
              }}
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
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            color: "text.secondary",
            mb: 0.5,
          }}
        >
          میزان شارژ
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
              onChange={handleChange}
              autoFocus
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
            flexWrap: "wrap",
            flexDirection: "row-reverse",
            gap: "10px",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          {/* buttons  */}
          {amounts?.map((price) => (
            <Button
              key={price}
              onClick={() => setChargeAmount(price)}
              sx={{
                width: "30%",
                border: "0.5px solid",
                borderColor:
                  chargeAmount === price ? "button.main" : "border.main",
                fontSize: "14px",
                fontWeight: "500",
                color: "text.main",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 0.5,
                pt: "7px",
              }}
            >
              {ThousandSeparator(price)}
            </Button>
          ))}
        </Box>
        <Button
          onClick={chargeWallet}
          sx={{
            width: "100%",
            borderRadius: "5px",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            bgcolor: "button.main",
            py: 1,
            mt: 2,
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          تایید و پرداخت
        </Button>
      </Box>
    </Box>
  );
};

export default Deposit;
