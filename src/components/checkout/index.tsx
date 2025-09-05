"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Breadcrumbs from "../breadcrumbs";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Bill from "./bill";
import PayOrder from "./bill/payOrder";
import OrderConfirmation from "./bill/orderConfirmation/inde";
import Factor from "./bill/factor";
import PaymentType from "./bill/paymentType";
import CheckoutAccordion from "./accordion";
import AdditionalInformationContent from "./additionalInformationContent";
import OrderCompletionContent from "./orderCompletionContent";
import TabButton from "./tabButton";
import OrderModel from "@/models/Order";
import jalaliDate from "@/utils/jalaliDate";

const Checkout = ({ order }: { order: OrderModel }) => {
  const [tabValue, setTabValue] = useState<"1" | "2">("1");
  const toMd = useMediaQuery("(min-width:900px)");
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"" | "wallet" | "bank">(
    order?.payment || ""
  );

  return (
    <Container sx={{ my: { md: 4, xs: 2 }, pb: { xs: "73px", md: "0px" } }}>
      {toMd ? (
        <Breadcrumbs
          breadCrumbs={[
            { title: "ثبت سفارش", link: "/checkout", active: true },
          ]}
        />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box
            onClick={() => router.back()}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "text.main",
                ml: "10px",
                mt: "2px",
              }}
            >
              صورتحساب
            </Typography>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 7H1.5M1.5 7L7.5 13M1.5 7L7.5 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      )}
      <Grid container sx={{ mt: "25px" }}>
        <Grid item lg={6} md={6} xs={12}>
          <Box
            sx={{
              width: "100%",
              height: { md: "130px", xs: "85px" },
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              pl: { md: 3, xs: 0 },
            }}
          >
            <Box sx={{ height: "100%", display: "flex" }}>
              <Box
                sx={{
                  height: "100%",
                  aspectRatio: "1/1",
                  bgcolor: "background.element",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER}/${order?.product?.brand?.icon}`}
                  alt="spotify"
                  width={30}
                  height={30}
                  objectFit="contain"
                />
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "text.main",
                  mr: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "16px", xs: "13px" },
                    color: "text.main",
                  }}
                >
                  {jalaliDate(order?.date_created,"D MMMM YYYY")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "300",
                    mt: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "16px", xs: "13px" },
                      fontWeight: "500",
                      color: "text.main",
                    }}
                  >
                    {`فروشگاه ${order?.product?.shop?.title}`}
                  </Typography>
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "133.33px",
                      overflow: "hidden",
                      position: "relative",
                      mr: "6px",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${order?.product?.shop?.image}`}
                      fill
                      objectFit="cover"
                      alt="avatar"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{
                color: "text.main",
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: "300",
                transform: "rotate(-90deg)",
                position: "relative",
                top: "30px",
              }}
            >
              {order?.tracking_code}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { md: 7.5, xs: 4 },
              pr: "9px",
              py: 0.5,
              borderRight: "5px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: "900",
                color: "text.main",
              }}
            >
              {order?.product?.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "13px" },
                fontWeight: "500",
                color: "text.main",
                mt: "5px",
              }}
            >
              {`${order?.product?.category?.title} ${order?.product?.brand?.title}`}
            </Typography>
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <Factor order={order} />
            <PaymentType order={order} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
          </Box>
          <Box
            sx={{
              maxWidth: { md: "334px", xs: "100%" },
              mr: { md: "20px", xs: "0px" },
              mt: { md: 8, xs: 3 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <TabButton
                content="فرم تکمیل سفارش"
                setTabValue={setTabValue}
                tabValue={tabValue}
                value="1"
              />
              <TabButton
                content="اطلاعات تکمیلی"
                setTabValue={setTabValue}
                tabValue={tabValue}
                value="2"
              />
            </Box>
            <Box sx={{ my: 3 }}>
              {tabValue == "1" ? (
                <OrderCompletionContent />
              ) : (
                <AdditionalInformationContent order={order} />
              )}
            </Box>
            <CheckoutAccordion order={order} />
          </Box>
        </Grid>
        <Grid item lg={4.5} md={6} xs={12}>
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Bill order={order} />
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <PayOrder order={order} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            <OrderConfirmation />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
