"use client";

import { Box, Button, Typography } from "@mui/material";
import PaymentMethod from "../../productsMenu/boostBox/paymentMethod";
import ProductSelection from "../../productsMenu/boostBox/chooseProduct";
import BoostPowerRange from "../../productsMenu/boostBox/boostPowerRange";
import BoostDescriptions from "../../productsMenu/boostBox/BoostDescriptions";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserProvider";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import ThousandSeparator from "@/utils/thousandSeparator";
import { BeatLoader } from "react-spinners";
import MenuTabs from "../../productsMenu/menuTabs";

const BoostMenu = ({ updateBoosts }: { updateBoosts: () => void }) => {
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
  const [loading, setLoading] = useState(false);
  const [freeBoostLoading, setFreeBoostLoading] = useState(false);
  const router = useRouter();
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    if (Math.floor(position) === 10) {
      setPrice(0);
    } else {
      setPrice(Math.floor(position));
    }
  }, [position]);

  const submitBoostOreder = () => {
    setLoading(true);
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
      .finally(() => setLoading(false));
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
      .finally(() => setLoading(false));
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
      .finally(() => setLoading(false));
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
    <Box
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        borderRadius: "12px",
      }}
    >
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        isPaymentMethodOpen={isPaymentMethodOpen}
        setIsPaymentMethodOpen={setIsPaymentMethodOpen}
        onSubmit={submitBoostOreder}
        loading={loading}
      />
      <Box
        sx={{
          width: "100%",
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "12px",
          p: "15px",
        }}
      >
        <Box
          sx={{
            // px: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            انتخاب محصول
          </Typography>
          <Box
            sx={{
              display: "flex",
              color: "icon.main",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        {/* choose product */}
        <Box sx={{ my: 3 }}>
          <ProductSelection
            value={selectedProduct}
            onChange={(product) => {
              setSelectedProduct(product?.id);
              setSelectedProductBrand(product?.brand?.id);
            }}
          />
        </Box>
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
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
          sx={{ fontSize: "16px", fontWeight: "600", color: "text.secondary" }}
        >
          {`مدت زمان بوست ${
            price ? "24" : "2"
          } ساعت`}
        </Typography>
        <Box sx={{ mt: 4, mb: 6 }}>
          <BoostDescriptions />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            color: "text.main",
            mb: 1,
            pl: 1,
          }}
        >
          {price === 0 ? "رایگان" : ThousandSeparator(price * 1000)}
        </Box>
        <Button
          onClick={() =>
            price > 0 ? setIsPaymentMethodOpen(true) : submitFreeBoostOreder()
          }
          sx={{
            width: "100%",
            py: 1.5,
            fontWeight: "600",
            bgcolor: "button.main",
            borderRadius: "5px",
            color: "white",
            minHeight: "50px",
            ":hover": { bgcolor: "button.main" },
          }}
        >
          {freeBoostLoading ? (
            <BeatLoader color="white" size={10} />
          ) : (
            "فعالسازی"
          )}
        </Button>
        {selectedProductBrand > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "button.main",
              fontSize: "14px",
              mt: 1,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2678_21122)">
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
        )}
      </Box>
      <MenuTabs />
    </Box>
  );
};

export default BoostMenu;
