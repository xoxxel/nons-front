"use client";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ProductSelection from "../../productsMenu/boostBox/chooseProduct";
import BoostPowerRange from "../../productsMenu/boostBox/boostPowerRange";
import BoostDescriptions from "../../productsMenu/boostBox/BoostDescriptions";
import { useContext, useEffect, useState } from "react";
import ThousandSeparator from "@/utils/thousandSeparator";
import ReportUpdate from "../reportUpdate";
import PaymentMethod from "../../productsMenu/boostBox/paymentMethod";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserProvider";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const MobileBoosts = ({
  boosts,
  loading,
  updateBoosts,
}: {
  boosts: BoostModel[];
  loading: boolean;
  updateBoosts: () => void;
}) => {
  const [position, setPosition] = useState<number>(10);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] =
    useState<boolean>(false);
  const [price, setPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedProductBrand, setSelectedProductBrand] = useState(0);
  const [productPosition, setProductPosition] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"" | "wallet" | "bank">(
    ""
  );
  const [boostCounts, setBoostCounts] = useState<
    { boost_amount: number; count: number }[]
  >([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [freeBoostLoading, setFreeBoostLoading] = useState(false);
  const [openDropDownIndex, setOpenDropDownIndex] = useState<number | null>(
    null
  );
  const [status, setStatus] = useState<string>("");
  const [isReportUpdateOpen, setIsReportUpdateOpen] = useState<boolean>(false);
  const router = useRouter();
  const { getUser } = useContext(UserContext);

  const handleDropDownOpen = (index: number) => {
    if (index === openDropDownIndex) {
      setOpenDropDownIndex(null);
    } else {
      setOpenDropDownIndex(index);
    }
  };

  useEffect(() => {
    if (Math.floor(position) === 10) {
      setPrice(0);
    } else {
      setPrice(Math.floor(position));
    }
  }, [position]);

  const submitBoostOreder = () => {
    setButtonLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/submit-order/`,
        {
          final_price: price * 1000,
          order_type: "boost",
          product: selectedProduct,
          payment: paymentMethod,
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => {
        paymentMethod === "wallet"
          ? PayOrderWithWallet(res?.data?.id)
          : PayOrder(res?.data?.id);
      })
      .catch((err) => console.log(err))
      .finally(() => setButtonLoading(false));
  };

  const submitFreeBoostOreder = () => {
    setFreeBoostLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/submit-order/`,
        {
          final_price: 10000,
          order_type: "boost",
          product: selectedProduct,
          payment: "wallet",
        },
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => successFullFreeBoost())
      .catch((err) => console.log(err))
      .finally(() => setFreeBoostLoading(false));
  };

  const PayOrder = (id: number) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/pay-order/${id}`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => router.push(res?.data?.data))
      .catch((err) => console.log(err))
      .finally(() => setButtonLoading(false));
  };
  const PayOrderWithWallet = (id: number) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/cart/pay-order-wallet/${id}`,
        {},
        { headers: { Authorization: `Bearer ${Cookies.get("access")}` } }
      )
      .then((res) => successFullPayWithWallet())
      .catch((err) => console.log(err))
      .finally(() => setButtonLoading(false));
  };

  const successFullPayWithWallet = () => {
    toast.success("خرید شما با موفقیت انجام شد");
    setPosition(0);
    setSelectedProduct(0);
    setSelectedProductBrand(0);
    setIsPaymentMethodOpen(false);
    getUser();
    updateBoosts();
  };

  const successFullFreeBoost = () => {
    toast.success("بوست با موفقیت انجام شد");
    setSelectedProduct(0);
    setSelectedProductBrand(0);
    updateBoosts();
  };

  const getBoostedProductsByBrand = (id: number) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/products/dashboard/product-boost-count/${id}`
      )
      .then((res) => {
        setBoostCounts(res?.data), findProductPosition(res?.data);
      })
      .catch((err) => console.log(err));
  };

  const findProductPosition = (
    data: { boost_amount: number; count: number }[]
  ) => {
    const boostPower = price * 1000 || 10000;
    const morePowered = data?.filter(
      (boostCount) => boostCount?.boost_amount > boostPower
    );
    const morePoweredCounts =
      morePowered?.reduce((total, item) => total + item.count, 0) || 0;
    setProductPosition(morePoweredCounts + 1);
  };

  useEffect(() => {
    if (selectedProductBrand > 0)
      getBoostedProductsByBrand(selectedProductBrand);
  }, [selectedProduct]);

  useEffect(() => {
    findProductPosition(boostCounts);
  }, [position, selectedProductBrand]);

  return (
    <>
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        isPaymentMethodOpen={isPaymentMethodOpen}
        setIsPaymentMethodOpen={setIsPaymentMethodOpen}
        loading={buttonLoading}
        onSubmit={submitBoostOreder}
      />
      <ReportUpdate
        status={status}
        isReportUpdateOpen={isReportUpdateOpen}
        setIsReportUpdateOpen={setIsReportUpdateOpen}
      />
      <Box sx={{ display: { xs: "block", md: "none" }, mb: "170px" }}>
        <Box
          sx={{
            py: "40px",
            px: "30px",
          }}
        >
          <Box
            sx={{
              // bgcolor: "background.element",
              mb: "10px",
              p: "10px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              انتخاب محصول
            </Typography>
            <Box sx={{ mt: "10px", mb: 3 }}>
              <ProductSelection
                value={selectedProduct}
                onChange={(product) => {
                  setSelectedProduct(product?.id);
                  setSelectedProductBrand(product?.brand?.id);
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "background.element",
              mb: "10px",
              p: "10px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                color: "text.main",
                mb: 5,
              }}
            >
              انرژی
            </Typography>
            <BoostPowerRange position={position} setPosition={setPosition} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: "400", color: "text.main" }}
              >
                200K
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "400", color: "text.main" }}
              >
                10K
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#06D6A0",
              }}
            >
              {`مدت زمان بوست ${
                price
                  ? "24"
                  : "2"
              } ساعت`}
            </Typography>
          </Box>
          <Box>
            <BoostDescriptions />
          </Box>
        </Box>
        <Box
          sx={{
            padding: "15px",
            mb: "42px",
          }}
        >
          <Box
            sx={{
              color: "text.main",
              px: "10px",
              mb: "14px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <svg
                width="10"
                height="16"
                viewBox="0 0 12 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.5L6 17.5L11 12.5M1 6.5L6 1.5L11 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "text.main",
                fontSize: "13px",
                fontWeight: "500",
                mx: 1.5,
              }}
            >
              همه
            </Typography>
          </Box>
          <Box
            id="boost__wrapper"
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "background.element",
              borderRadius: "5px",
            }}
          >
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "150px",
                }}
              >
                <CircularProgress size={15} />
              </Box>
            ) : (
              boosts?.map((boost, index) => (
                <Box
                  key={boost?.id}
                  className="boost__card"
                  sx={{
                    p: "10px",
                    borderBottom: "0.5px solid",
                    borderBottomColor: "border.main",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 1,
                      mb: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "45px",
                          height: "45px",
                          border: "0.5px solid",
                          borderColor: "border.main",
                          borderRadius: "7px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER}/${boost?.brand?.icon}`}
                          width={27}
                          height={27}
                          alt={boost?.brand?.title}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: "text.main",
                          fontSize: "13px",
                          fontWeight: "600",
                          mx: 1,
                        }}
                      >
                        {boost?.title}
                      </Typography>
                    </Box>

                    <Box
                      className="dropdown-wrapper"
                      // onClick={() => handleDropDownOpen(index)}
                      sx={{
                        width: "45px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      <svg
                        width="4"
                        height="14"
                        viewBox="0 0 4 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.99967 7.66699C2.36786 7.66699 2.66634 7.36851 2.66634 7.00033C2.66634 6.63214 2.36786 6.33366 1.99967 6.33366C1.63148 6.33366 1.33301 6.63214 1.33301 7.00033C1.33301 7.36851 1.63148 7.66699 1.99967 7.66699Z"
                          stroke="#4C5357"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 7.66699C2.36786 7.66699 2.66634 7.36851 2.66634 7.00033C2.66634 6.63214 2.36786 6.33366 1.99967 6.33366C1.63148 6.33366 1.33301 6.63214 1.33301 7.00033C1.33301 7.36851 1.63148 7.66699 1.99967 7.66699Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 7.66699C2.36786 7.66699 2.66634 7.36851 2.66634 7.00033C2.66634 6.63214 2.36786 6.33366 1.99967 6.33366C1.63148 6.33366 1.33301 6.63214 1.33301 7.00033C1.33301 7.36851 1.63148 7.66699 1.99967 7.66699Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 7.66699C2.36786 7.66699 2.66634 7.36851 2.66634 7.00033C2.66634 6.63214 2.36786 6.33366 1.99967 6.33366C1.63148 6.33366 1.33301 6.63214 1.33301 7.00033C1.33301 7.36851 1.63148 7.66699 1.99967 7.66699Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 3.00033C2.36786 3.00033 2.66634 2.70185 2.66634 2.33366C2.66634 1.96547 2.36786 1.66699 1.99967 1.66699C1.63148 1.66699 1.33301 1.96547 1.33301 2.33366C1.33301 2.70185 1.63148 3.00033 1.99967 3.00033Z"
                          stroke="#4C5357"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 3.00033C2.36786 3.00033 2.66634 2.70185 2.66634 2.33366C2.66634 1.96547 2.36786 1.66699 1.99967 1.66699C1.63148 1.66699 1.33301 1.96547 1.33301 2.33366C1.33301 2.70185 1.63148 3.00033 1.99967 3.00033Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 3.00033C2.36786 3.00033 2.66634 2.70185 2.66634 2.33366C2.66634 1.96547 2.36786 1.66699 1.99967 1.66699C1.63148 1.66699 1.33301 1.96547 1.33301 2.33366C1.33301 2.70185 1.63148 3.00033 1.99967 3.00033Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 3.00033C2.36786 3.00033 2.66634 2.70185 2.66634 2.33366C2.66634 1.96547 2.36786 1.66699 1.99967 1.66699C1.63148 1.66699 1.33301 1.96547 1.33301 2.33366C1.33301 2.70185 1.63148 3.00033 1.99967 3.00033Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 12.3337C2.36786 12.3337 2.66634 12.0352 2.66634 11.667C2.66634 11.2988 2.36786 11.0003 1.99967 11.0003C1.63148 11.0003 1.33301 11.2988 1.33301 11.667C1.33301 12.0352 1.63148 12.3337 1.99967 12.3337Z"
                          stroke="#4C5357"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 12.3337C2.36786 12.3337 2.66634 12.0352 2.66634 11.667C2.66634 11.2988 2.36786 11.0003 1.99967 11.0003C1.63148 11.0003 1.33301 11.2988 1.33301 11.667C1.33301 12.0352 1.63148 12.3337 1.99967 12.3337Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 12.3337C2.36786 12.3337 2.66634 12.0352 2.66634 11.667C2.66634 11.2988 2.36786 11.0003 1.99967 11.0003C1.63148 11.0003 1.33301 11.2988 1.33301 11.667C1.33301 12.0352 1.63148 12.3337 1.99967 12.3337Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.99967 12.3337C2.36786 12.3337 2.66634 12.0352 2.66634 11.667C2.66634 11.2988 2.36786 11.0003 1.99967 11.0003C1.63148 11.0003 1.33301 11.2988 1.33301 11.667C1.33301 12.0352 1.63148 12.3337 1.99967 12.3337Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: "10",
                          top: "0px",
                          left: "0px",
                          width: "235px",
                          bgcolor: "background.element",
                          borderRadius: "0 8px 8px 8px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          py: "10px",
                          px: "14px",
                          transition: "all 0.3s ease",
                          transform:
                            openDropDownIndex == index
                              ? "translateY(0px)"
                              : "translateY(25px)",
                          opacity: openDropDownIndex == index ? "1" : "0",
                          visibility:
                            openDropDownIndex == index ? "visible" : "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "5px",
                          }}
                        >
                          <Box
                            onClick={() => {
                              setStatus("report");
                              setIsReportUpdateOpen(true);
                            }}
                            sx={{
                              borderRadius: "5px",
                              py: "10px",
                              px: "7px",
                              ":hover": {
                                background: "#F5F5F5",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                color: "text.secondary",
                                fontSize: "14px",
                                fontWeight: "600",
                              }}
                            >
                              گزارش
                            </Typography>
                          </Box>
                          <Box
                            onClick={() => {
                              setStatus("update");
                              setIsReportUpdateOpen(true);
                            }}
                            sx={{
                              borderRadius: "5px",
                              py: "10px",
                              px: "7px",
                              ":hover": {
                                background: "#F5F5F5",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                color: "text.secondary",
                                fontSize: "14px",
                                fontWeight: "600",
                              }}
                            >
                              بروزرسانی
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
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
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            color: "#4C5357",
                            display: "flex",
                            mx: 0.5,
                          }}
                        >
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.61342 5.9761C1.52262 5.83234 1.47723 5.76046 1.45182 5.6496C1.43273 5.56632 1.43273 5.43498 1.45182 5.35171C1.47723 5.24084 1.52262 5.16896 1.61341 5.0252C2.36369 3.83721 4.59693 0.833984 8.00027 0.833984C11.4036 0.833984 13.6369 3.83721 14.3871 5.0252C14.4779 5.16896 14.5233 5.24084 14.5487 5.35171C14.5678 5.43498 14.5678 5.56632 14.5487 5.6496C14.5233 5.76046 14.4779 5.83234 14.3871 5.9761C13.6369 7.16409 11.4036 10.1673 8.00027 10.1673C4.59693 10.1673 2.36369 7.16409 1.61342 5.9761Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.00027 7.50065C9.10484 7.50065 10.0003 6.60522 10.0003 5.50065C10.0003 4.39608 9.10484 3.50065 8.00027 3.50065C6.8957 3.50065 6.00027 4.39608 6.00027 5.50065C6.00027 6.60522 6.8957 7.50065 8.00027 7.50065Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: "12px",
                            fontWeight: "500",
                            mx: 0.5,
                          }}
                        >
                          {boost?.views}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mx: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            color: "#4C5357",
                            display: "flex",
                          }}
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.50016 9.50065C5.29102 9.50065 3.50016 7.70979 3.50016 5.50065V1.79695C3.50016 1.52105 3.50016 1.3831 3.54037 1.27264C3.60777 1.08746 3.75364 0.941588 3.93882 0.874189C4.04928 0.833984 4.18723 0.833984 4.46313 0.833984H10.5372C10.8131 0.833984 10.951 0.833984 11.0615 0.874189C11.2467 0.941588 11.3926 1.08746 11.46 1.27264C11.5002 1.3831 11.5002 1.52105 11.5002 1.79695V5.50065C11.5002 7.70979 9.7093 9.50065 7.50016 9.50065ZM7.50016 9.50065V11.5007M11.5002 2.16732H13.1668C13.4775 2.16732 13.6328 2.16732 13.7553 2.21806C13.9186 2.28573 14.0484 2.41551 14.1161 2.57886C14.1668 2.70138 14.1668 2.85669 14.1668 3.16732V3.50065C14.1668 4.12063 14.1668 4.43062 14.0987 4.68496C13.9137 5.37514 13.3747 5.91424 12.6845 6.09917C12.4301 6.16732 12.1201 6.16732 11.5002 6.16732M3.50016 2.16732H1.8335C1.52287 2.16732 1.36755 2.16732 1.24504 2.21806C1.08169 2.28573 0.951906 2.41551 0.884243 2.57886C0.833496 2.70138 0.833496 2.85669 0.833496 3.16732V3.50065C0.833496 4.12063 0.833496 4.43062 0.901644 4.68496C1.08658 5.37514 1.62567 5.91424 2.31586 6.09917C2.57019 6.16732 2.88018 6.16732 3.50016 6.16732M4.46313 14.1673H10.5372C10.7008 14.1673 10.8335 14.0347 10.8335 13.871C10.8335 12.5619 9.77225 11.5007 8.46313 11.5007H6.5372C5.22808 11.5007 4.16683 12.5619 4.16683 13.871C4.16683 14.0347 4.29949 14.1673 4.46313 14.1673Z"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            mx: 0.5,
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          {boost?.place}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mx: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            color: "#4C5357",
                            display: "flex",
                          }}
                        >
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00016 5.83398V8.50065L8.66683 9.50065M7.00016 2.83398C3.87055 2.83398 1.3335 5.37104 1.3335 8.50065C1.3335 11.6303 3.87055 14.1673 7.00016 14.1673C10.1298 14.1673 12.6668 11.6303 12.6668 8.50065C12.6668 5.37104 10.1298 2.83398 7.00016 2.83398ZM7.00016 2.83398V0.833984M5.66683 0.833984H8.3335M12.5528 3.22868L11.5528 2.22868L12.0528 2.72868M1.44751 3.22868L2.44751 2.22868L1.94751 2.72868"
                              stroke="currentColor"
                              strokeOpacity="0.2"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            mx: 0.5,
                            fontSize: "12px",
                            fontWeight: 500,
                            direction: "ltr",
                          }}
                        >
                          {boost?.time_remaining}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mx: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          color: "#06D6A0",
                          display: "flex",
                        }}
                      >
                        <svg
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6668 1.16602L9.42108 6.41177C9.15707 6.67578 9.02506 6.80779 8.87284 6.85724C8.73895 6.90075 8.59471 6.90075 8.46082 6.85724C8.3086 6.80779 8.17659 6.67578 7.91258 6.41177L6.08774 4.58693C5.82373 4.32292 5.69173 4.19091 5.53951 4.14145C5.40561 4.09795 5.26138 4.09795 5.12748 4.14145C4.97527 4.19091 4.84326 4.32292 4.57925 4.58693L1.3335 7.83268M14.6668 1.16602H10.0002M14.6668 1.16602V5.83268"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          color: "#06D6A0",
                          mx: 0.5,
                          fontSize: "12px",
                          fontWeight: 500,
                          direction: "ltr",
                        }}
                      >
                        {`${boost?.growth}%`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          py: "10px",
          px: "15px",
          position: "fixed",
          bottom: "70px",
          right: "0px",
          width: "100%",
          // bgcolor: "background.element",
          display: { md: "none", xs: "block" },
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "button.main",
            fontSize: "12px",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2678_21122)">
              <path
                d="M9 11.25C6.51472 11.25 4.5 9.23528 4.5 6.75V2.58333C4.5 2.27295 4.5 2.11775 4.54523 1.99348C4.62105 1.78516 4.78516 1.62105 4.99348 1.54523C5.11775 1.5 5.27295 1.5 5.58333 1.5H12.4167C12.7271 1.5 12.8822 1.5 13.0065 1.54523C13.2148 1.62105 13.3789 1.78516 13.4548 1.99348C13.5 2.11775 13.5 2.27295 13.5 2.58333V6.75C13.5 9.23528 11.4853 11.25 9 11.25ZM9 11.25V13.5M13.5 3H15.375C15.7245 3 15.8992 3 16.037 3.05709C16.2208 3.13321 16.3668 3.27922 16.4429 3.46299C16.5 3.60082 16.5 3.77554 16.5 4.125V4.5C16.5 5.19748 16.5 5.54622 16.4233 5.83234C16.2153 6.6088 15.6088 7.21528 14.8323 7.42333C14.5462 7.5 14.1975 7.5 13.5 7.5M4.5 3H2.625C2.27554 3 2.10082 3 1.96299 3.05709C1.77922 3.13321 1.63321 3.27922 1.55709 3.46299C1.5 3.60082 1.5 3.77554 1.5 4.125V4.5C1.5 5.19748 1.5 5.54622 1.57667 5.83234C1.78472 6.6088 2.3912 7.21528 3.16766 7.42333C3.45378 7.5 3.80252 7.5 4.5 7.5M5.58333 16.5H12.4167C12.6008 16.5 12.75 16.3508 12.75 16.1667C12.75 14.6939 11.5561 13.5 10.0833 13.5H7.91667C6.44391 13.5 5.25 14.6939 5.25 16.1667C5.25 16.3508 5.39924 16.5 5.58333 16.5Z"
                stroke="#0961DC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2678_21122">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          dfyjndtyjntdy
        </Box> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Button
            onClick={() =>
              price > 0 ? setIsPaymentMethodOpen(true) : submitFreeBoostOreder()
            }
            sx={{
              width: "170px",
              py: 1.5,
              fontWeight: "600",
              fontSize: "12px",
              bgcolor: "button.main",
              borderRadius: "5px",
              color: "white",
              ":hover": { bgcolor: "button.main" },
            }}
          >
            {freeBoostLoading ? (
              <BeatLoader color="white" size={10} />
            ) : (
              "فعالسازی"
            )}
          </Button>
          <Typography>
            {Math.floor((position / 100) * (200 - 10) + 10) === 10
              ? "رایگان"
              : ThousandSeparator(
                  Math.floor((position / 100) * (200 - 10) + 10) * 1000
                )}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          pt: "10px",
          pb: "20px",
          px: "15px",
          position: "fixed",
          bottom: "70px",
          right: "0px",
          width: "100%",
          bgcolor: "background.main",
          display: { md: "none", xs: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "button.main",
            fontSize: "12px",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2678_21122)">
              <path
                d="M9 11.25C6.51472 11.25 4.5 9.23528 4.5 6.75V2.58333C4.5 2.27295 4.5 2.11775 4.54523 1.99348C4.62105 1.78516 4.78516 1.62105 4.99348 1.54523C5.11775 1.5 5.27295 1.5 5.58333 1.5H12.4167C12.7271 1.5 12.8822 1.5 13.0065 1.54523C13.2148 1.62105 13.3789 1.78516 13.4548 1.99348C13.5 2.11775 13.5 2.27295 13.5 2.58333V6.75C13.5 9.23528 11.4853 11.25 9 11.25ZM9 11.25V13.5M13.5 3H15.375C15.7245 3 15.8992 3 16.037 3.05709C16.2208 3.13321 16.3668 3.27922 16.4429 3.46299C16.5 3.60082 16.5 3.77554 16.5 4.125V4.5C16.5 5.19748 16.5 5.54622 16.4233 5.83234C16.2153 6.6088 15.6088 7.21528 14.8323 7.42333C14.5462 7.5 14.1975 7.5 13.5 7.5M4.5 3H2.625C2.27554 3 2.10082 3 1.96299 3.05709C1.77922 3.13321 1.63321 3.27922 1.55709 3.46299C1.5 3.60082 1.5 3.77554 1.5 4.125V4.5C1.5 5.19748 1.5 5.54622 1.57667 5.83234C1.78472 6.6088 2.3912 7.21528 3.16766 7.42333C3.45378 7.5 3.80252 7.5 4.5 7.5M5.58333 16.5H12.4167C12.6008 16.5 12.75 16.3508 12.75 16.1667C12.75 14.6939 11.5561 13.5 10.0833 13.5H7.91667C6.44391 13.5 5.25 14.6939 5.25 16.1667C5.25 16.3508 5.39924 16.5 5.58333 16.5Z"
                stroke="#0961DC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2678_21122">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {`محصول در جایگاه ${productPosition} قرار میگیرد`}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Button
            onClick={() =>
              price > 0 ? setIsPaymentMethodOpen(true) : submitFreeBoostOreder()
            }
            sx={{
              width: "170px",
              py: 1.5,
              fontWeight: "600",
              fontSize: "12px",
              bgcolor: "button.main",
              borderRadius: "5px",
              color: "white",
              ":hover": { bgcolor: "button.main" },
            }}
          >
            {freeBoostLoading ? (
              <BeatLoader color="white" size={10} />
            ) : (
              "فعالسازی"
            )}
          </Button>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {price === 0 ? "رایگان" : ThousandSeparator(price * 1000)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MobileBoosts;
