"use client";
import PaymentMethod from "@/components/profile/products/productsMenu/boostBox/paymentMethod";
import OrderModel from "@/models/Order";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const PaymentType = ({
  order,
  paymentMethod,
  setPaymentMethod,
}: {
  order:OrderModel
  paymentMethod: "" | "wallet" | "bank";
  setPaymentMethod: React.Dispatch<
    React.SetStateAction<"" | "wallet" | "bank">
  >;
}) => {
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {" "}
      <PaymentMethod
        isPaymentMethodOpen={isPaymentMethodOpen}
        setIsPaymentMethodOpen={setIsPaymentMethodOpen}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        onSubmit={() => setIsPaymentMethodOpen(false)}
        loading={loading}
        withoutPayment
      />
      <Box
        onClick={() => setIsPaymentMethodOpen(true)}
        sx={{
          width: "100%",
          minHeight: "42px",
          border: "1px dashed rgba(254, 194, 1, 1)",
          borderRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "text.main",
          }}
        >
          روش پرداخت
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "text.main",
              ml: 1,
            }}
          >
            {paymentMethod === "bank"
              ? "پرداخت امن زیبال"
              : "پرداخت از کیف پول نونز"}
          </Typography>
          {paymentMethod === "bank" ? (
            <svg
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.7169 5.48202L29.8903 10.6554C30.2078 10.9729 30.2078 11.4772 29.8903 11.776L21.5793 20.1057C21.2618 20.4232 20.7575 20.4232 20.4587 20.1057L15.2853 14.9323C14.9678 14.6148 14.9678 14.1105 15.2853 13.8117L23.5963 5.48202C23.9138 5.16452 24.4181 5.16452 24.7169 5.48202Z"
                fill="#3A3AE4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.716 16.5197L15.7331 18.5554C16.0506 18.8729 16.0506 19.3772 15.7331 19.676L12.1285 23.2619C11.811 23.5794 11.3067 23.5794 11.0079 23.2619L8.99087 21.2261C8.67337 20.9086 8.67337 20.4044 8.99087 20.1056L12.5954 16.501C12.8942 16.2022 13.3985 16.2022 13.716 16.5197Z"
                fill="#3A3AE4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.28314 18.5368L1.10977 13.3634C0.792268 13.0459 0.792268 12.5417 1.10977 12.2429L9.43945 3.8945C9.75695 3.577 10.2612 3.577 10.56 3.8945L15.7334 9.06786C16.0509 9.38536 16.0509 9.88963 15.7334 10.1884L7.4224 18.5181C7.1049 18.8543 6.60064 18.8543 6.28314 18.5368Z"
                fill="#3A3AE4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3024 7.49899L15.2853 5.46326C14.9678 5.14576 14.9678 4.64149 15.2853 4.34267L18.8899 0.738124C19.2074 0.420625 19.7116 0.420625 20.0104 0.738124L22.0275 2.77385C22.345 3.09135 22.345 3.59562 22.0275 3.89444L18.4229 7.49899C18.1241 7.81649 17.6199 7.81649 17.3024 7.49899Z"
                fill="#3A3AE4"
              />
            </svg>
          ) : (
            <Image
              src="/images/logo-mobile.png"
              width={24}
              height={24}
              alt="nons wallet"
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default PaymentType;
