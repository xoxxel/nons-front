"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import CopyCode from "../../../transaction/copyCode";
import CopyText from "../../../transaction/copyText";
import { useState } from "react";
import OrderModel from "@/models/Order";
import ThousandSeparator from "@/utils/thousandSeparator";
import jalaliDate from "@/utils/jalaliDate";
import convertToTehranTime from "@/utils/convertToTehranTime";
// import jalaliDate from "@/utils/jalaliDate";

const OrderUnderReview = ({
  setDrawerVisibility,
  formattedDate,
  order,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  formattedDate: (date: string, dateFormat: string) => string;
  order: OrderModel;
}) => {
  const [isProgressBarOpen, setIsProgressBarOpen] = useState<boolean>(false);
  const [isProtectionOpen, setIsProtectionOpen] = useState<boolean>(false);

  // const formattedDate = order?.date_created
  //   ? jalaliDate(new Date(order.date_created), "dd MMMM yyyy - HH:mm")
  //   : "تاریخ نامشخص";

  const [showAll, setShowAll] = useState<boolean>(false);
  const tags = order?.product?.brand?.tags || [];

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <Box>
      <Box
        sx={{
          height: "92px",
          bgcolor: "background.element",
          p: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {order?.tracking_code}
          </Typography>
          <Box
            onClick={() => setDrawerVisibility(0)}
            sx={{
              width: "44px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color:"icon.main"
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            جزیات سفارش
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          py: "10px",
          bgcolor:"background.main"
        }}
      >
        <Box
          sx={{
            p: "25px 30px 0 30px",
          }}
        >
          <Box
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "8px",
              overflow: "hidden",
              mb: "10px",
              position: "relative",
            }}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_SERVER +
                "/" +
                order?.product?.brand?.icon
              }
              alt={order?.product?.brand?.title_en}
              fill
            />
          </Box>
          <Box
            sx={{
              mb: "10px",
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {order?.product?.title}
            </Typography>
          </Box>
          {tags?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                columnGap: "10px",
                rowGap: "5px",
                mb: "10px",
              }}
            >
              {tags.slice(0, showAll ? tags.length : 2).map((tag, index) => (
                <Box
                  key={index}
                  sx={{
                    px: "5px",
                    bgcolor: "badge.disable",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "28px",
                    height: "28px",
                    margin: "2px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "badgeText.disable",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {tag?.title}
                  </Typography>
                </Box>
              ))}

              {tags.length > 2 && !showAll && (
                <Box
                  onClick={handleToggle}
                  sx={{
                    px: "5px",
                    background: "#F2F4F7",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "28px",
                    height: "28px",
                    cursor: "pointer",
                    margin: "2px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    ...
                  </Typography>
                </Box>
              )}
            </Box>
          )}
          <Box
            sx={{
              py: "15px",
              mb: "20px",
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {order?.product?.shop?.title}
              </Typography>
              <Box
                sx={{
                  mx: 0.75,
                  display: "flex",
                }}
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_SERVER +
                    "/" +
                    order?.product?.shop?.image
                  }
                  alt="avatar"
                  width={16}
                  height={16}
                  style={{
                    borderRadius: "50%",
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
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                شماره پیگیری
              </Typography>
              <CopyCode code={order?.tracking_code || ""} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                تاریخ
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {jalaliDate(order?.date_created,"D MMMM - HH:MM")}
                </Typography>
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
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                قیمت
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    border: "0.5px solid",
                    borderColor: "border.main",
                    borderRadius: "5px",
                    padding: "0 3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: 0.75,
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {order?.quantity}
                  </Typography>
                  <Box
                    sx={{
                      mr: 0.5,
                      color:"icon.main",
                    }}
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75 1.25L1.25 7.75M1.25 1.25L7.75 7.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {ThousandSeparator(order?.product?.price)}
                </Typography>
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
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                مبلغ پرداختی
              </Typography>
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {ThousandSeparator(order?.final_price)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Box
              sx={{
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: "icon.main",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                کد فعالسازی
              </Typography>
            </Box>
            <Box
              sx={{
                height: "40px",
                bgcolor: "background.element",
                borderRadius: "8px 0 0 8px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CopyText text={order?.activation_code} />
              <Box
                sx={{
                  position: "absolute",
                  borderRadius: "0 8px 8px 0",
                  bgcolor: "primary.main",
                  width: "4px",
                  height: "100%",
                  right: "-4px",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            onClick={() => setIsProgressBarOpen(!isProgressBarOpen)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
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
                  width: "36px",
                  height: "36px",
                  bgcolor: "background.element",
                  color:"icon.main",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 6.27734L9.99997 10.9996M9.99997 10.9996L1.49997 6.27734M9.99997 10.9996L10 20.4996M19 15.0582V6.94104C19 6.5984 19 6.42708 18.9495 6.27428C18.9049 6.1391 18.8318 6.01502 18.7354 5.91033C18.6263 5.79199 18.4766 5.70879 18.177 5.54239L10.777 1.43128C10.4934 1.27372 10.3516 1.19494 10.2015 1.16406C10.0685 1.13672 9.93146 1.13672 9.79855 1.16406C9.64838 1.19494 9.50658 1.27372 9.22297 1.43128L1.82297 5.54239C1.52345 5.70879 1.37369 5.792 1.26463 5.91033C1.16816 6.01502 1.09515 6.1391 1.05048 6.27428C1 6.42708 1 6.5984 1 6.94104V15.0582C1 15.4008 1 15.5721 1.05048 15.7249C1.09515 15.8601 1.16816 15.9842 1.26463 16.0889C1.37369 16.2072 1.52345 16.2904 1.82297 16.4568L9.22297 20.5679C9.50658 20.7255 9.64838 20.8042 9.79855 20.8351C9.93146 20.8625 10.0685 20.8625 10.2015 20.8351C10.3516 20.8042 10.4934 20.7255 10.777 20.5679L18.177 16.4568C18.4766 16.2904 18.6263 16.2072 18.7354 16.0889C18.8318 15.9842 18.9049 15.8601 18.9495 15.7249C19 15.5721 19 15.4008 19 15.0582Z"
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
                  fontSize: "14px",
                  fontWeight: "600",
                  mx: 1,
                }}
              >
                نوار پیشرفت
              </Typography>
            </Box>
            <Box
              sx={{
                height: "30px",
                color:"icon.main",
                transform: isProgressBarOpen
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7L7 1L1 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: "10px",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: isProgressBarOpen ? "block" : "none",
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: "border.main",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: "15px",
                borderBottom: "0.5px solid",
                borderBottomColor: "border.main",
              }}
            >
              <Box
                sx={{
                  mt: "10px",
                  mb: 0.75,
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  داوری
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  columnGap: "3px",
                  direction: "ltr",
                }}
              >
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "10px 0 0 10px",
                    bgcolor: "button.main",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    background: "#FFDA44",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    bgcolor: "background.secondary",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    height: "8px",
                    borderRadius: "0 10px 10px",
                    bgcolor: "background.secondary",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  mb: "30px",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  در حال بررسی و حل مسئله
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1.5,
                  mb: "20px",
                  border: "0.5px solid",
                  borderColor: "border.main",
                  borderRadius: "65px",
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
                      color: "icon.main",
                    }}
                  >
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 9H1.5M14.5 1V5M6.5 1V5M6.3 21H14.7C16.3802 21 17.2202 21 17.862 20.673C18.4265 20.3854 18.8854 19.9265 19.173 19.362C19.5 18.7202 19.5 17.8802 19.5 16.2V7.8C19.5 6.11984 19.5 5.27976 19.173 4.63803C18.8854 4.07354 18.4265 3.6146 17.862 3.32698C17.2202 3 16.3802 3 14.7 3H6.3C4.61984 3 3.77976 3 3.13803 3.32698C2.57354 3.6146 2.1146 4.07354 1.82698 4.63803C1.5 5.27976 1.5 6.11984 1.5 7.8V16.2C1.5 17.8802 1.5 18.7202 1.82698 19.362C2.1146 19.9265 2.57354 20.3854 3.13803 20.673C3.77976 21 4.61984 21 6.3 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mx: 0.75,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "icon.main",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                    {`${jalaliDate(
                        order?.last_updated,
                        "DD MMMM ، "
                      )} ${convertToTehranTime(order?.last_updated)} ${
                        parseInt(jalaliDate(order?.last_updated, "H")+3) > 12
                          ? "عصر"
                          : "صبح"
                      }`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    width: "100%",
                    height: "44px",
                    bgcolor: "black.main",
                    borderRadius: "5px",
                    color: "icon.main",
                    "&:hover": {
                      bgcolor: "black.main",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    پیگیری سفارش
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: "0 30px",
          }}
        >
          <Box
            sx={{
              py: "10px",
            }}
          >
            <Box
              onClick={() => setIsProtectionOpen(!isProtectionOpen)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
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
                    width: "36px",
                    height: "36px",
                    bgcolor: "background.element",
                    color:"icon.main",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10.5004L8 12.5004L12.5 8.00036M17 11.0004C17 15.9088 11.646 19.4788 9.69799 20.6152C9.4766 20.7444 9.3659 20.809 9.20968 20.8425C9.08844 20.8685 8.91156 20.8685 8.79032 20.8425C8.6341 20.809 8.5234 20.7444 8.30201 20.6152C6.35396 19.4788 1 15.9088 1 11.0004V6.21796C1 5.41845 1 5.01869 1.13076 4.67506C1.24627 4.3715 1.43398 4.10064 1.67766 3.88589C1.9535 3.6428 2.3278 3.50243 3.0764 3.22171L8.4382 1.21103C8.6461 1.13307 8.75005 1.09409 8.85698 1.07864C8.95184 1.06493 9.04816 1.06493 9.14302 1.07864C9.24995 1.09409 9.3539 1.13307 9.5618 1.21103L14.9236 3.22171C15.6722 3.50243 16.0465 3.6428 16.3223 3.88589C16.566 4.10064 16.7537 4.3715 16.8692 4.67506C17 5.01869 17 5.41845 17 6.21796V11.0004Z"
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
                    fontSize: "14px",
                    fontWeight: "600",
                    mx: 1,
                  }}
                >
                  ضمانت
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "30px",
                  color:"icon.main",
                  transform: isProtectionOpen
                    ? "rotate(0deg)"
                    : "rotate(180deg)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7L7 1L1 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: "10px",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: isProtectionOpen ? "block" : "none",
              borderRadius: "12px",
              border: "0.5px solid",
              borderColor: "border.main",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: "15px",
                borderBottom: "0.5px solid",
                borderBottomColor: "border.main",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  در برابر کلاهبرداری و تقلب ایمن بمانید
                </Typography>
              </Box>
              <ol
                style={{
                  padding: "0 15px",
                  listStyleType: "disc",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    پس از تایید سفارش توسط فروشنده خریدار تا مدت تحت پوشش فرصت
                    دارد کالای دریافتی را برسی کند و از اصالت آن مطمئن شود
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    در این مدت مبلغ پرداختی توسط ما قفل میشود و فروشنده قادر به
                    دریافت آن نیست
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    اگر در این مدت مشکلی گزارش نشود،فرض میکنیم هیچ مشکلی وجود
                    ندارد و مبلغ به فروشنده پرداخت میشود
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    ما در نونز سعی داریم از کاربران خود در مقابل کلاهبرداری و
                    تقلب محافظت کنیم و شما موظف هستید درباره امنیت معامله بدانید
                    تا تجربه ای بی نظیر از خرید و فروش را با اطمینان خاطر و
                    آرامش کامل تجربه کنید.
                  </Typography>
                </li>
              </ol>
            </Box>
            <Box
              sx={{
                p: "15px",
                bgcolor: "background.element",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
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
                      display: "flex",
                      color:"icon.main",
                    }}
                  >
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10.5004L8 12.5004L12.5 8.00036M17 11.0004C17 15.9088 11.646 19.4788 9.69799 20.6152C9.4766 20.7444 9.3659 20.809 9.20968 20.8425C9.08844 20.8685 8.91156 20.8685 8.79032 20.8425C8.6341 20.809 8.5234 20.7444 8.30201 20.6152C6.35396 19.4788 1 15.9088 1 11.0004V6.21796C1 5.41845 1 5.01869 1.13076 4.67506C1.24627 4.3715 1.43398 4.10064 1.67766 3.88589C1.9535 3.6428 2.3278 3.50243 3.0764 3.22171L8.4382 1.21103C8.6461 1.13307 8.75005 1.09409 8.85698 1.07864C8.95184 1.06493 9.04816 1.06493 9.14302 1.07864C9.24995 1.09409 9.3539 1.13307 9.5618 1.21103L14.9236 3.22171C15.6722 3.50243 16.0465 3.6428 16.3223 3.88589C16.566 4.10064 16.7537 4.3715 16.8692 4.67506C17 5.01869 17 5.41845 17 6.21796V11.0004Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      mx: 0.75,
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    جزییات ضمانت
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    پوشش زمانی :
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    24 ساعت
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    اعتبار :
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    02:23
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: "0 30px",
          }}
        >
          <Box
            sx={{
              py: "15px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "14px",
                  fontWeight: "600",
                  mb: 0.5,
                }}
              >
                در انتظار داوری
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "text.content",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                سفارش شما در انتظار داوری و حل مسئله است،لطفا هرگونه مستندات و
                مدارک مربوطه را در صفحه گفتگو با خریدار ارسال کنید تا ما موضوع
                را با دقت و بی طرفی حل و فصل کنیم
              </Typography>
            </Box>
            <Box
              sx={{
                mt: "30px",
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  height: "44px",
                  borderRadius: "5px",
                  bgcolor: "button.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": {
                    bgcolor: "button.main",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  پیگیری سفارش
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderUnderReview;
