"use client";
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { UserContext } from "@/context/UserProvider";
import { usePathname } from "next/navigation";
import ThousandSeparator from "@/utils/thousandSeparator";
import LogOut from "@/utils/logOut";

const MobileProfileSidebar = ({
  setIsMobileSideBarOpen,
  isMobileSideBarOpen,
}: {
  setIsMobileSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSideBarOpen: boolean;
}) => {
  const { user } = useContext(UserContext);
  const pathname = usePathname();

  return (
    <>
      <Box
        onClick={() => setIsMobileSideBarOpen(false)}
        sx={{
          position: "fixed",
          top: "0",
          right: "0",
          width: "100%",
          height: "100svh",
          zIndex: "999",
          background: "#232323ad",
          backdropFilter: "blur(4px)",
          transition: "all 0.3s ease",
          visibility: isMobileSideBarOpen ? "visible" : "hidden",
          opacity: isMobileSideBarOpen ? "1" : "0",
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          right: "0",
          width: "240px",
          height: "100svh",
          zIndex: "1000",
          transition: "transform 0.3s 0.3s ease",
          transform: isMobileSideBarOpen ? "translateX(0)" : "translateX(100%)",
          py: "12px",
          px: "6px",
        }}
      >
        <Box
          className="offcanvas__wrapper"
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            bgcolor: "background.main",
            borderRadius: "12px",
            border: "0.5px solid",
            borderColor: "border.main",
            py: 2.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Link href="/profile/settings" onClick={() => setIsMobileSideBarOpen(false)}>
                <Box
                  sx={{
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Image
                      src={user?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${user?.image}` : "/images/boredape.png"}
                      alt="avatar"
                      width={48}
                      height={48}
                      style={{
                        borderRadius: "50px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      mx: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "14px",
                        fontWeight: "600",
                        mb: 0.75,
                      }}
                    >
                      {user?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "12px",
                        fontWeight: "400",
                        direction: "ltr",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      {`${ThousandSeparator(user?.wallet_balance)} IRT`}
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Box
                sx={{
                  width: "100%",
                  height: "0.5px",
                  bgcolor: "border.main",
                  mt: 2,
                  mb: 3,
                }}
              ></Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Link
                  href="/profile/dashboard"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 20V10M12 20V4M6 20V14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        داشبورد
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/dashboard" ? "block" : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                <Link
                  href="/profile/messages"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        پیام ها
                      </Typography>
                    </Box>
                    {user?.message_count > 0 && (
                      <Box
                        sx={{
                          width: "18px",
                          height: "18px",
                          bgcolor: "border.main",
                          borderRadius: "50px",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "13px",
                          pt: "2px",
                        }}
                      >
                        {user?.message_count}
                      </Box>
                    )}
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/messages" ? "block" : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                {user?.is_admin &&
                  <Link
                    href="/profile/arbitration"
                    onClick={() => setIsMobileSideBarOpen(false)}
                  >
                    <Box
                      sx={{
                        padding: "12px 10px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                            display: "flex",
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            mx: 1.5,
                            color: "icon.main",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          داوری
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display:
                            pathname == "/profile/arbitration" ? "block" : "none",
                          height: "100%",
                          width: "5px",
                          bgcolor: "button.main",
                          position: "absolute",
                          top: "0",
                          left: "0",
                        }}
                      ></Box>
                    </Box>
                  </Link>}
                <Link
                  href="/profile/orders"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        سفارشات
                      </Typography>
                    </Box>
                    {user?.order_count > 0 && (
                      <Box
                        sx={{
                          width: "18px",
                          height: "18px",
                          bgcolor: "border.main",
                          borderRadius: "50px",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "13px",
                          pt: "2px",
                        }}
                      >
                        {user?.order_count}
                      </Box>
                    )}
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/orders" ? "block" : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                {user?.has_shop && user?.shop?.status === "is_confirmed" &&
                  <Link
                    href="/profile/products"
                    onClick={() => setIsMobileSideBarOpen(false)}
                  >
                    <Box
                      sx={{
                        padding: "12px 10px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                            display: "flex",
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.5 7.27734L12 11.9996M12 11.9996L3.49997 7.27734M12 11.9996L12 21.4996M21 16.0582V7.94104C21 7.5984 21 7.42708 20.9495 7.27428C20.9049 7.1391 20.8318 7.01502 20.7354 6.91033C20.6263 6.79199 20.4766 6.70879 20.177 6.54239L12.777 2.43128C12.4934 2.27372 12.3516 2.19494 12.2015 2.16406C12.0685 2.13672 11.9315 2.13672 11.7986 2.16406C11.6484 2.19494 11.5066 2.27372 11.223 2.43128L3.82297 6.54239C3.52345 6.70879 3.37369 6.792 3.26463 6.91033C3.16816 7.01502 3.09515 7.1391 3.05048 7.27428C3 7.42708 3 7.5984 3 7.94104V16.0582C3 16.4008 3 16.5721 3.05048 16.7249C3.09515 16.8601 3.16816 16.9842 3.26463 17.0889C3.37369 17.2072 3.52345 17.2904 3.82297 17.4568L11.223 21.5679C11.5066 21.7255 11.6484 21.8042 11.7986 21.8351C11.9315 21.8625 12.0685 21.8625 12.2015 21.8351C12.3516 21.8042 12.4934 21.7255 12.777 21.5679L20.177 17.4568C20.4766 17.2904 20.6263 17.2072 20.7354 17.0889C20.8318 16.9842 20.9049 16.8601 20.9495 16.7249C21 16.5721 21 16.4008 21 16.0582Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            mx: 1.5,
                            color: "icon.main",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          محصولات
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display:
                            pathname == "/profile/products" ? "block" : "none",
                          height: "100%",
                          width: "5px",
                          bgcolor: "button.main",
                          position: "absolute",
                          top: "0",
                          left: "0",
                        }}
                      ></Box>
                    </Box>
                  </Link>}
                <Link
                  href="/profile/wallet"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        کیف پول
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/wallet" ? "block" : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                <Link
                  href="/profile/activities"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12H18L15 21L9 3L6 12H2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        فعالیت های اخیر
                      </Typography>
                    </Box>
                    {/* <Box
                sx={{
                  width: "18px",
                  height: "18px",
                  bgcolor: "border.main",
                  borderRadius: "50px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  pt: "2px",
                }}
              >
                3
              </Box> */}
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/activities" ? "block" : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                <Link
                  href="/profile/notifications"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.3909 18.0153C14.8197 19.6157 13.8699 21.2607 12.2695 21.6895C10.6691 22.1183 9.02414 21.1686 8.59531 19.5682M10.8914 5.74134C11.1956 5.19404 11.2958 4.53254 11.121 3.87994C10.7636 2.54627 9.39275 1.75482 8.05909 2.11217C6.72542 2.46953 5.93397 3.84037 6.29132 5.17404C6.46619 5.82663 6.88372 6.3494 7.42082 6.67128M16.2358 9.44578C15.8788 8.11364 14.9259 6.99968 13.5866 6.34895C12.2474 5.69822 10.6314 5.56402 9.09437 5.97588C7.55729 6.38774 6.22496 7.31191 5.39048 8.5451C4.556 9.77829 4.28773 11.2195 4.64467 12.5516C5.23524 14.7557 5.12057 16.514 4.74761 17.8502C4.32255 19.373 4.11001 20.1345 4.16743 20.2874C4.23312 20.4623 4.28064 20.5103 4.45488 20.5778C4.60717 20.6368 5.24694 20.4654 6.52648 20.1225L18.3915 16.9433C19.6711 16.6004 20.3109 16.429 20.4132 16.3018C20.5304 16.1562 20.5475 16.0909 20.517 15.9065C20.4902 15.7454 19.9255 15.1922 18.7959 14.086C17.8049 13.1153 16.8264 11.6498 16.2358 9.44578Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        اطلاع رسانی
                      </Typography>
                    </Box>
                    {user?.notif_count > 0 && (
                      <Box
                        sx={{
                          width: "18px",
                          height: "18px",
                          bgcolor: "border.main",
                          borderRadius: "50px",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "13px",
                          pt: "2px",
                        }}
                      >
                        {user?.notif_count}
                      </Box>
                    )}
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/notifications"
                            ? "block"
                            : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                <Link
                  href="/profile/bookmarks"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        نشان ها
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display:
                          pathname == "/profile/bookmarks" ? "block" : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
                <Link
                  href="/profile/support"
                  onClick={() => setIsMobileSideBarOpen(false)}
                >
                  <Box
                    sx={{
                      padding: "12px 10px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
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
                          display: "flex",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.64313 5.6429L3.28612 3.28589M3.28612 12.714L5.64315 10.3569M10.3572 10.3569L12.7142 12.7139M12.7142 3.28586L10.3572 5.64289M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992ZM11.3335 7.99992C11.3335 9.84087 9.84111 11.3333 8.00016 11.3333C6.15921 11.3333 4.66683 9.84087 4.66683 7.99992C4.66683 6.15897 6.15921 4.66659 8.00016 4.66659C9.84111 4.66659 11.3335 6.15897 11.3335 7.99992Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          mx: 1.5,
                          color: "icon.main",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        پشتیبانی
                      </Typography>
                    </Box>
                    {/* <Box
                  sx={{
                    width: "18px",
                    height: "18px",
                    bgcolor: "border.main",
                    borderRadius: "50px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "13px",
                    pt: "2px",
                  }}
                >
                  3
                </Box> */}
                    <Box
                      sx={{
                        display:
                          pathname === "/profile/support" ||
                            pathname === "/profile/support/ticket-list" ||
                            pathname === "/profile/support/help-center"
                            ? "block"
                            : "none",
                        height: "100%",
                        width: "5px",
                        bgcolor: "button.main",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    ></Box>
                  </Box>
                </Link>
              </Box>
            </Box>
            <Link
              href="/"
              onClick={() => {
                LogOut();
                setIsMobileSideBarOpen(false);
              }}
            >
              <Box
                sx={{
                  padding: "12px 10px 0 10px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid",
                  borderColor: "border.main",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      color: "icon.main",
                      display: "flex",
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
                        d="M9.66667 10.3333L13 7M13 7L9.66667 3.66667M13 7H5M5 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13H5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      mx: 1.5, pb: 1,
                      color: "icon.main",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    خروج
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileProfileSidebar;
