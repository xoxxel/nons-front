"use client";

import { UserContext } from "@/context/UserProvider";
import OrderModel from "@/models/Order";
import Cookies from "@/utils/cookie";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import PaymentType from "../paymentType";

const PayOrder = ({
  order,
  paymentMethod,
  setPaymentMethod,
}: {
  order: OrderModel;
  paymentMethod: "" | "wallet" | "bank";
  setPaymentMethod: React.Dispatch<React.SetStateAction<"" | "wallet" | "bank">>
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);
  const { getUser } = useContext(UserContext);
  // const payUserOrder = () => {
  //   axios
  //     .post(`${process.env.NEXT_PUBLIC_API}/cart/pay-order/${order?.id}`, "", {
  //       headers: { Authorization: `Bearer ${Cookies.get("access")}` },
  //     })
  //     .then((res) => router.push(res?.data?.data))
  //     .catch((err) =>
  //       console.error("Error on ridrecting to payment gateway", err)
  //     );
  // };

  const updateOrder = (id: number, payment: "wallet" | "bank") => {
    return axios.patch(
      `${process.env.NEXT_PUBLIC_API}/cart/update-order/${id}`,
      { payment, product: order?.product?.id },
      {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      }
    );
  };

  const payOrder = (id: number) => {

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/pay-order/${id}`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => router.push(res?.data?.data))
      .catch((err) => {
        toast.error(err?.response?.data?.msg || "اووپس، مشکلی در پرداخت وجود داره😬")
      })
      .finally(() => setLoading(false));
  };
  const payOrderWithWallet = (id: number) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/pay-order-wallet/${id}`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => handleSuccessfulPay())
      .catch((err) => toast.error(err?.response?.data?.msg || "اووپس، مشکلی در پرداخت وجود داره 😬")
      )
      .finally(() => setLoading(false));
  };

  const submitPayOrder = (id: number) => {
    setLoading(true);
    if (!paymentMethod) {
      return toast.error("نحوه پرداخت را انتخاب کنید");
    } else if (order?.payment === paymentMethod) {
      paymentMethod === "bank" ? payOrder(id) : payOrderWithWallet(id);
    } else {
      const method = paymentMethod === "bank" ? "bank" : "wallet";
      updateOrder(id, method)
        .then((res) =>
          res?.data?.payment === "wallet"
            ? payOrderWithWallet(id)
            : payOrder(id)
        )
        .catch((err) => console.log(err));
    }
  };

  const handleSuccessfulPay = () => {
    toast.success("خرید شما با موفقیت انجام شد");
    getUser();
    router.push(
      `callback?success=1&status=3&trackId=${order?.tracking_code}&orderId=99`
    );
  };

  return (
    <Box sx={{ mt: { md: "40px", xs: "25px" } }}>
      {/* <PaymentMethod
        isPaymentMethodOpen={isPaymentMethodOpen}
        setIsPaymentMethodOpen={setIsPaymentMethodOpen}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        onSubmit={() => submitPayOrder(order?.id)}
        loading={loading}
      /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "500",
            color: "text.main",
          }}
        >
          مبلغ پرداختی
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "21px", xs: "16px" },
            fontWeight: "600",
            color: "text.main",
            my: "10px",
          }}
        >
          {`${ThousandSeparator(order?.product?.price)} تومان`}
        </Typography>
      </Box>
      <Button
        onClick={() => submitPayOrder(order?.id)}
        sx={{
          width: "100%",
          height: "53px",
          bgcolor: "button.main",
          borderRadius: "7px",
          boxShadow: "0px 1px 2px 0px #1018280D",
          color: "#fff",
          ":hover": { bgcolor: "button.main" },
        }}
      >
        {loading ? <BeatLoader size={10} color="white" /> : "پرداخت"}
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
        <Box sx={{ width: "22px" }}>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.57726 14.3141L11.4228 14.3141L11.2906 15.6353C11.173 16.8121 10.1827 17.7083 9.00001 17.7083C7.81732 17.7083 6.82706 16.8121 6.70937 15.6353L6.57726 14.3141Z"
              fill="white"
            />
            <path
              d="M5.1245 10.5575C5.69106 11.4919 6.26381 12.4366 6.47287 13.4808L11.5271 13.4808C11.7362 12.4366 12.3089 11.4919 12.8755 10.5575C13.036 10.2928 13.196 10.0289 13.347 9.76387C13.7626 9.03474 14 8.19091 14 7.29163C14 4.5302 11.7614 2.29163 9 2.29163C6.23858 2.29163 4 4.5302 4 7.29163C4 8.19091 4.23741 9.03474 4.65297 9.76387C4.80405 10.0289 4.96403 10.2928 5.1245 10.5575Z"
              fill="#FFE600"
              fillOpacity="0.25"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.22759 4.69444C7.94378 4.89092 7.87299 5.28026 8.06947 5.56406L9.26549 7.29164H7.54168C7.30018 7.29164 7.0803 7.43077 6.97688 7.649C6.87347 7.86723 6.90503 8.12551 7.05795 8.31242L8.93295 10.6041C9.15153 10.8712 9.5453 10.9106 9.81245 10.692C10.0796 10.4735 10.119 10.0797 9.9004 9.81253L8.86058 8.54164H10.4583C10.6908 8.54164 10.9041 8.41262 11.012 8.20671C11.1198 8.0008 11.1045 7.75202 10.9722 7.56089L9.09721 4.85255C8.90073 4.56875 8.51139 4.49796 8.22759 4.69444Z"
              fill="white"
            />
          </svg>
        </Box>
        <Typography
          sx={{
            fontSize: { md: "14px", xs: "9px" },
            fontWeight: "500",
            color: "text.main",
            mr: { md: 1, xs: 0.5 },
          }}
        >
          تا شما تائید نکنید که فروشنده به تعهدات خود عمل کرده است او قادر به
          دریافت وجه نیست
        </Typography>
      </Box>
    </Box>
  );
};

export default PayOrder;
