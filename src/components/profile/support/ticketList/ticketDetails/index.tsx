"use client";

import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import Chat from "../../chat";
import jalaliDate from "@/utils/jalaliDate";
import QuickAccess from "../../quickAccess";
import CopyCode from "@/components/profile/activities/transaction/copyCode";
import TicketBadge from "../ticketBadge";
import { UserContext } from "@/context/UserProvider";

const TicketDetails = ({ ticket }: { ticket: TicketModel }) => {

  const {user} = useContext(UserContext)

  return (
    <Box sx={{ width: "100%" }}>
      <QuickAccess />
      <Box
        sx={{
          mt: { xs: "0px", md: 5 },
          mb: { xs: "150px", md: "0px" },
        }}
      >
        {/* big title at the top */}
        <Typography
          sx={{
            color: "text.main",
            fontSize: "29px",
            fontWeight: "600",
            display: { xs: "none", md: "block" },
            mt: 5,
          }}
        >
          پشتیبانی
        </Typography>
        {/* braedcrumb is here */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            mt: 1,
            mb: 5,
          }}
        >
          <Link href="/profile">
            <Typography
              sx={{
                color: "button.main",
                fontWeight: "600",
              }}
            >
              profile
            </Typography>
          </Link>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Link href="/support">
            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: "500",
              }}
            >
              support
            </Typography>
          </Link>
          <Typography sx={{ color: "text.main" }}>/</Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: "500",
            }}
          >
            ticket-list
          </Typography>
        </Box>
        <Grid container spacing={{ lg: 3, md: 1.5 }} sx={{ maxWidth: "100%" }}>
          <Grid item lg={4} md={4} xs={12} order={{ md: 1, xs: 2 }}>
            <Box
              sx={{
                width: "100%",
                p: "25px 15px",
                bgcolor: { xs: "transparent", md: "background.element" },
                border: "0.5px solid",
                borderColor: { xs: "transparent", md: "border.secondary" },
                borderRadius: { xs: "0px", md: "12px" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: "600",
                  }}
                >
                  جزییات تیکت
                </Typography>
                <Typography
                  sx={{
                    color: "text.low",
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: "400",
                  }}
                >
                  {`ایجاد شده در ${jalaliDate(ticket?.date_created, "D MMMM")}`}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "400",
                    }}
                  >
                    تاریخ پایان :
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "500",
                    }}
                  >
                    {ticket?.status_ticket === "close" ? jalaliDate(ticket?.date_modified, "D MMMM") : "--"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "400",
                    }}
                  >
                    موضوع
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "500",
                    }}
                  >
                    {ticket?.subject?.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "400",
                    }}
                  >
                    نام کاربری
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "500",
                    }}
                  >
                    {user?.username}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "400",
                    }}
                  >
                    شماره سفارش
                  </Typography>
                  <CopyCode code={ticket?.order_code} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "400",
                    }}
                  >
                    فروشنده هستید یا خریدار؟
                  </Typography>
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "500",
                    }}
                  >
                    {ticket?.status_user === "seller" ? "فروشنده" : "خریدار"}
                  </Typography>
                </Box>
                {ticket?.status_ticket !== "waiting" && <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "icon.main",
                      fontSize: { xs: "13px", md: "16px" },
                      fontWeight: "500",
                    }}
                  >
                    {ticket?.responder?.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mx: 1,
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${ticket?.responder?.image}`}
                      alt="avatar"
                      width={16}
                      height={16}
                      style={{
                        borderRadius: "100%",
                      }}
                    />
                  </Box>
                </Box>}
              </Box>
              <Box
                sx={{
                  mt: "20px",
                }}
              >
                <TicketBadge type={ticket?.status_ticket} />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} md={8} xs={12} order={{ md: 2, xs: 1 }}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box></Box>
              <Box>
                <Chat ticket={ticket} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TicketDetails;
