"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import DescriptionDrawer from "./descriptionDrawer";;
import ProductModel from "@/models/Product";
import ThousandSeparator from "@/utils/thousandSeparator";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import differenceBetweenDates from "@/utils/timeDiffrence";
import { UserContext } from "@/context/UserProvider";

const ProductInformation = ({
  handleOpen,
  product,
}: {
  handleOpen: Function;
  product: ProductModel;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {user} = useContext(UserContext)

  const submitOrder = () => {
    if (product?.quantity) {
      if(product?.shop?.id === user?.shop?.id){
        return toast.error("واقعا می‌خواهی از خودت خرید کنی؟")
      }
      setLoading(true);
      const access = Cookies.get("access");
      if (!access) {
        router.push("/login");
        return toast.error("ابتدا وارد شوید");
      }
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/cart/submit-order/`,
          {
            quantity: 1,
            product: product?.id,
            payment: "bank",
          },
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        )
        .then(() => router.push("/checkout"))
        .catch((err) => handleError(err))
        .finally(() => setLoading(false));
    }
  };

  const handleError = (error: AxiosError<{ msg: string }>) => {
    if (error?.response?.data?.msg) {
      toast.error(error?.response?.data?.msg);
    } else {
      toast.error("خطای سرور");
    }
  };

  const membershipLength = differenceBetweenDates(
    new Date(),
    new Date(product?.shop?.date_created)
  );
  const shownDate = () => {
    if (membershipLength?.years > 0)
      return `${membershipLength?.years} سال ${
        membershipLength?.months > 0 ? ` و ${membershipLength?.months} ماه` : ""
      }`;
    if (membershipLength?.months > 0) return `${membershipLength?.months} ماه`;
    if (membershipLength?.days > 0) return `${membershipLength?.days} روز`;
    if (membershipLength?.hours > 0) return `${membershipLength?.hours} ساعت`;
    if (membershipLength?.minutes > 0)
      return `${membershipLength?.minutes} دقیقه`;
  };

  return (
    <Container sx={{ mt: "10px", mb: { md: 10, xs: 5 } }}>
      <Grid container columnSpacing={{ md: "25px", xs: "0px" }}>
        <Grid item lg={8} md={7} xs={12}>
          <Box sx={{ my: "20px" }}>
            <Box
              sx={{
                background:
                  "linear-gradient(47.57deg, #9FE870 5.84%, #848686 41.94%)",
                p: "1px",
                width: "fit-content",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  background: "#3C464B",
                  borderRadius: "6px",
                  width: "fit-content",
                }}
              >
                <Box
                  sx={{
                    width: { md: "75px", xs: "45px" },
                    height: { md: "75px", xs: "45px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "background.main",
                    borderRadius: "6px",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                    width={30}
                    height={30}
                    alt={product?.title}
                  />
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: { md: "18px", xs: "12px" },
                fontWeight: { md: "600", xs: "300" },
                color: "text.main",
                mt: "10px",
              }}
            >
              {product?.title}
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: 2,
                }}
              >
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L12.0392 5.50505L18.0595 6.21885L13.6086 10.335L14.7901 16.2812L9.5 13.32L4.20993 16.2812L5.39144 10.335L0.940492 6.21885L6.96077 5.50505L9.5 0Z"
                      fill="#FFEB69"
                    />
                  </svg>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "text.main",
                    }}
                  >
                    {product?.score?.toFixed(1)?.toString() ?? "0.0"}
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600, color: "text.main" }}
                >{`${product?.score_count ?? 0} بازخورد`}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Box
                  className="scrollbarHidden"
                  sx={{ display: "flex", gap: "10px", overflowX: "scroll" }}
                >
                  <Box
                    sx={{
                      px: "10px",
                      py: "6px",
                      bgcolor: "background.element",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "icon.main",
                    }}
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 11.5001L11.5 13.5001L16 9.00011M20.5 12.0001C20.5 16.9086 15.146 20.4785 13.198 21.615C12.9766 21.7442 12.8659 21.8087 12.7097 21.8422C12.5884 21.8682 12.4116 21.8682 12.2903 21.8422C12.1341 21.8087 12.0234 21.7442 11.802 21.615C9.85396 20.4785 4.5 16.9086 4.5 12.0001V7.21772C4.5 6.4182 4.5 6.01845 4.63076 5.67482C4.74627 5.37126 4.93398 5.10039 5.17766 4.88564C5.4535 4.64255 5.8278 4.50219 6.5764 4.22146L11.9382 2.21079C12.1461 2.13283 12.25 2.09385 12.357 2.07839C12.4518 2.06469 12.5482 2.06469 12.643 2.07839C12.75 2.09385 12.8539 2.13283 13.0618 2.21079L18.4236 4.22146C19.1722 4.50219 19.5465 4.64255 19.8223 4.88564C20.066 5.10039 20.2537 5.37126 20.3692 5.67482C20.5 6.01845 20.5 6.4182 20.5 7.21772V12.0001Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "inherit",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {`${product?.guarantee_days * 24} ساعت ضمانت`}
                    </Typography>
                  </Box>
                  {product?.auto_send && (
                    <Box
                      sx={{
                        px: "10px",
                        py: "6px",
                        bgcolor: "background.element",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "icon.main",
                      }}
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 2L4.59344 12.6879C4.24463 13.1064 4.07023 13.3157 4.06756 13.4925C4.06524 13.6461 4.13372 13.7923 4.25324 13.8889C4.39073 14 4.66316 14 5.20802 14H12.5L11.5 22L20.4065 11.3121C20.7553 10.8936 20.9297 10.6843 20.9324 10.5075C20.9347 10.3539 20.8663 10.2077 20.7467 10.1111C20.6092 10 20.3368 10 19.792 10H12.5L13.5 2Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "inherit",
                          whiteSpace: "nowrap",
                        }}
                      >
                        ارسال خودکار
                      </Typography>
                    </Box>
                  )}
                  {product?.region?.length > 0 && (
                    <Box
                      sx={{
                        px: "10px",
                        py: "6px",
                        bgcolor: "background.element",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "icon.main",
                      }}
                    >
                      {product?.region?.length === 1 && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.region?.[0]?.icon}`}
                          width={24}
                          height={24}
                          alt={product?.region?.[0]?.title}
                        />
                      )}
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "inherit",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product?.region?.length === 1
                          ? `${product?.region?.[0]?.title}`
                          : "چند منطقه‌ای"}
                      </Typography>
                    </Box>
                  )}
                  <Box
                    sx={{
                      px: "10px",
                      py: "6px",
                      bgcolor: "background.element",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "icon.main",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "inherit",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {`${product?.quantity} عدد موجودی`}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: "10px",
                      py: "6px",
                      bgcolor: "background.element",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "icon.main",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "inherit",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {`${product?.score_count ?? 0} بازخورد`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: "5px" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "text.secondary",
                  fontWeight: "500",
                }}
              >
                توضیحات
              </Typography>
              <Box
                sx={{
                  backgroundColor: {
                    md: "transparent",
                    xs: "background.element",
                  },
                  borderRadius: "7px",
                  mt: { md: "20px", xs: "10px" },
                  pr: { md: "17px", xs: "0px" },
                  p: { md: 0, xs: "10px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "16px", xs: "13px" },
                    fontWeight: "500",
                    color: "text.main",
                    lineHeight: 2.2,
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: product?.text }}
                  ></div>
                </Typography>
                <DescriptionDrawer text={product?.text} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { md: "block", xs: "none" }, mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "10px",
                my: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "12px", color: "text.secondary" }}
              >{`${product?.quantity} عدد موجود`}</Typography>
              <Typography
                sx={{ color: "text.content", fontSize: "18px" }}
              >{`IRT ${ThousandSeparator(product?.price)}`}</Typography>
            </Box>
            <Button
              onClick={submitOrder}
              sx={{
                width: "100%",
                bgcolor: "button.main",
                height: "48.5px",
                color: "white",
                fontWeight: "600",
                py: 1.5,
                borderRadius: "7px",
                ":hover": {
                  bgcolor: "button.main",
                },
              }}
            >
              {loading ? (
                <BeatLoader size={10} color="white" />
              ) : product?.quantity > 0 ? (
                "خرید"
              ) : (
                "ناموجود"
              )}
            </Button>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          {/* <Box
            sx={{
              width: "100%",
              px: { md: "12px", xs: "0px" },
              pt: { md: "12px", xs: "7px" },
              pb: { md: "20px", xs: "15px" },
            }}
          >
            <Box
              sx={{ width: "100%", display: "flex", gap: "10px", mb: "12px" }}
            >
              <Box sx={{ width: "60%" }}>
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "7px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid",
                    borderColor: "border.main",
                    backdropFilter: "blur(2px)",
                    px: "8px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderBottom: "1px solid",
                      borderColor: "border.main",
                      display: "flex",
                      alignItems: "center",
                      py: 1,
                    }}
                  >
                    <svg
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_365_9186)">
                        <path
                          d="M11.2745 1.51875C11.451 1.1246 12.0106 1.1246 12.1871 1.51875L14.4574 6.58733C14.5325 6.75496 14.6934 6.86792 14.8766 6.88156L20.6992 7.31501C21.1529 7.34878 21.3294 7.92172 20.9733 8.20494L16.5934 11.6888C16.4391 11.8116 16.3713 12.0135 16.4204 12.2045L17.7679 17.4502C17.8777 17.8774 17.4207 18.2271 17.037 18.0095L11.9775 15.1399C11.8245 15.0531 11.6371 15.0531 11.4841 15.1399L6.42458 18.0095C6.04087 18.2271 5.58387 17.8774 5.69363 17.4502L7.04117 12.2045C7.09023 12.0135 7.02246 11.8116 6.86814 11.6888L2.48824 8.20494C2.13218 7.92172 2.30867 7.34878 2.76237 7.31501L8.58496 6.88156C8.76813 6.86792 8.92907 6.75496 9.00416 6.58733L11.2745 1.51875Z"
                          fill="#9FE870"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_365_9186">
                          <rect
                            width="21.5385"
                            height="20"
                            fill="white"
                            transform="translate(0.961548)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        sx={{
                          fontSize: { md: "16px", xs: "13px" },
                          fontWeight: "600",
                          color: "text.main",
                          mx: 1,
                        }}
                      >
                        {averageScore}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { md: "13px", xs: "10px" },
                          fontWeight: "600",
                          color: "text.secondary",
                        }}
                      >
                        از {product?.product_comments?.length} بازخورد
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      py: 1,
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "60px",
                        height: "20px",
                        width: "20px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        alt="icon"
                        src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.region?.[0]?.icon}`}
                        fill
                        quality={100}
                        objectFit="cover"
                        loading="lazy"
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: { md: "16px", xs: "13px" },
                        fontWeight: "500",
                        mr: 0.8,
                      }}
                    >
                      {product?.region?.[0]?.title}
                    </Typography>
                  </Box>
                </Box>
                {product?.auto_send && (
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: "7px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid",
                      borderColor: "border.main",
                      backdropFilter: "blur(2px)",
                      display: "flex",
                      alignItems: "center",
                      pr: "10px",
                      py: 1,
                      mt: "10px",
                    }}
                  >
                    <svg
                      width="13"
                      height="18"
                      viewBox="0 0 13 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.43523 0.72741C8.69253 0.849835 8.83445 1.13079 8.78031 1.41055L7.67426 7.12512H12.3334C12.5761 7.12512 12.7969 7.2657 12.8997 7.48567C13.0024 7.70563 12.9684 7.96518 12.8126 8.15133L5.31259 17.1097C5.12967 17.3281 4.82213 17.3952 4.56483 17.2728C4.30753 17.1504 4.1656 16.8694 4.21975 16.5897L5.3258 10.8751H0.666695C0.423926 10.8751 0.20312 10.7345 0.100399 10.5146C-0.00232155 10.2946 0.031629 10.0351 0.187471 9.84891L7.68747 0.890572C7.87039 0.67209 8.17792 0.604985 8.43523 0.72741ZM2.00507 9.62512H6.08336C6.26993 9.62512 6.44674 9.70846 6.56547 9.85237C6.6842 9.99629 6.73243 10.1857 6.69697 10.3689L5.90649 14.453L10.995 8.37512H6.9167C6.73013 8.37512 6.55332 8.29177 6.43459 8.14786C6.31586 8.00395 6.26763 7.81452 6.30308 7.63135L7.09357 3.54719L2.00507 9.62512Z"
                        fill="#848686"
                      />
                    </svg>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: { md: "16px", xs: "13px" },
                        fontWeight: "500",
                        mr: 0.8,
                      }}
                    >
                      ارسال خودکار
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  width: "40%",
                  borderRadius: "7px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid",
                  borderColor: "border.main",
                  backdropFilter: "blur(2px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "13px", xs: "9px" },
                    fontWeight: "500",
                    color: "text.secondary",
                    mr: "5px",
                    mt: "5px",
                  }}
                >
                  {`${product?.quantity} عدد موجود`}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "end",
                    alignItems: "end",
                    px: "9px",
                    pb: product?.auto_send ? "14px" : "0px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "text.main",
                    }}
                  >
                    IRT
                  </Typography>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {ThousandSeparator(product?.price)}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 4px 0px #0000001F",
                  background: `url(/images/shopcardback.png), linear-gradient(100.22deg, rgba(132, 134, 134, 0.4) -33.45%, rgba(32, 32, 32, 0.2) 85.72%), #0D53B6`,
                  backgroundSize: "cover",
                  my: "10px",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Profile
                    verified={product?.shop?.is_authenticated}
                    image={product?.shop?.image}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      my: 1,
                    }}
                  >
                    {product?.shop?.title}
                  </Typography>
                  <Box
                    sx={{
                      height: "22px",
                      borderRadius: "5px",
                      background: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      px: "6px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#A0E1E1",
                        fontWeight: "500",
                      }}
                    >
                      {product?.shop?.is_online ? "online" : "offline"}
                    </Typography>
                    {product?.shop?.is_online && (
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="#00FF47" />
                      </svg>
                    )}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    mt: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "900",
                        color: "#FFFFFF",
                      }}
                    >
                      {shownDate()}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "14px", color: "#FFFFFF", mt: 0.5 }}
                    >
                      تجربه
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "900",
                        color: "#FFFFFF",
                      }}
                    >
                      {product?.shop?.score}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "14px", color: "#FFFFFF", mt: 0.5 }}
                    >
                      امتیاز
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "900",
                        color: "#FFFFFF",
                      }}
                    >
                      {product?.shop?.score_count}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "14px", color: "#FFFFFF", mt: 0.5 }}
                    >
                      بازخورد
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "56px",
                  display: "flex",
                  gap: "10px",
                  mt: "20px",
                }}
              >
                <Button
                  onClick={() => handleOpen()}
                  sx={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: "#48BF21",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "600px",
                    borderRadius: "7px",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    ":hover": {
                      backgroundColor: "#48BF21",
                    },
                  }}
                >
                  گفتگو
                </Button>
                <Button
                  onClick={submitOrder}
                  sx={{
                    width: "60%",
                    height: "100%",
                    backgroundColor: "button.main",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "600px",
                    borderRadius: "7px",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    ":hover": {
                      backgroundColor: "button.main",
                    },
                  }}
                >
                  {loading ? <BeatLoader size={10} color="white" /> : "خرید"}
                </Button>
              </Box>
            </Box>
          </Box> */}
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.element",
          py: { md: "20px", xs: "10px" },
          px: "10px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              width: { md: "75px", xs: "50px" },
              height: { md: "75px", xs: "50px" },
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid",
              borderColor: "border.main",
            }}
          >
            <Image
              src={product?.shop?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${product?.shop?.image}` :  "/images/boredape.png"}
              fill
              alt={product?.shop?.title}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: { md: 1.5, xs: 1 },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "18px", xs: "14px" },
                fontWeight: 600,
                color: "text.content",
              }}
            >{`فروشگاه ${product?.shop?.title}`}</Typography>
            <Typography
              sx={{
                fontSize: { md: "16px", xs: "12px" },
                fontWeight: 500,
                color: "text.content",
              }}
            >{`${shownDate()} حضور در نونز`}</Typography>
          </Box>
        </Box>
        <Box
          onClick={() => handleOpen()}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { md: 1, xs: 0.5 },
            color: "icon.main",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ fontSize: { md: "16px", xs: "12px" }, fontWeight: 600 }}
          >
            ارسال پیام
          </Typography>
          <Box
            sx={{
              height: { md: "24px", xs: "16px" },
              width: { md: "24px", xs: "16px" },
            }}
          >
            <svg
              width="inherit"
              height="inherit"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 24.5L12 16.5L20 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductInformation;
