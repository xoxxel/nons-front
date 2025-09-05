import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import SupportMenu from "../supportMenu";
import Image from "next/image";
import TicketBadge from "./ticketBadge";
import jalaliDate from "@/utils/jalaliDate";
import TicketListEmptyState from "./emptyState";


const TicketList = ({ tickets }: { tickets: TicketModel[] }) => {
  return (
    <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
      <Box sx={{ mt: 5 }}>
        {/* big title at the top */}
        <Typography
          sx={{
            color: "text.main",
            fontSize: "29px",
            fontWeight: "600",
            mt: 5,
          }}
        >
          پشتیبانی
        </Typography>
        {/* braedcrumb is here */}
        <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
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
          <Grid item lg={4} md={4}>
            <SupportMenu />
          </Grid>
          <Grid item lg={8} md={8}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  py: { md: 1.5, lg: 3 },
                  px: { md: 1.5, lg: 2 },
                  bgcolor: "background.element",
                  border: "0.5px solid",
                  borderColor: "border.secondary",
                  borderRadius: "12px",
                }}
              >
                {tickets?.length > 0 && <Box>
                  <Box
                    sx={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      px: "10px",
                      cursor: "pointer",
                      color: "text.main",
                    }}
                  >
                    <svg
                      width="12"
                      height="19"
                      viewBox="0 0 12 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12.5L6 17.5L11 12.5M1 6.5L6 1.5L11 6.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <Typography
                      sx={{
                        color: "text.main",
                        mx: 1.5,
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      همه
                    </Typography>
                  </Box>
                </Box>}
                {tickets.length > 0 ? <Stack
                  direction="column"
                  rowGap={{ md: "15px", lg: "10px" }}
                  mt={3}
                >
                  {tickets?.map((ticket) => (
                    <Link
                      href={`/profile/support/${ticket?.id}`}
                      key={ticket?.id}
                    >
                      <Box
                        sx={{
                          transition: "0.3s ease",
                          borderRadius: 1,
                          padding: { md: "10px 5px", lg: "10px" },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          ":hover": {
                            bgcolor: "hover.main",
                          },
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
                              bgcolor: "background.secondary",
                              width: "36px",
                              height: "36px",
                              borderRadius: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "icon.main",
                            }}
                          >
                            <svg
                              width="22"
                              height="19"
                              viewBox="0 0 22 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 9.5H4.88197C5.56717 9.5 6.19357 9.88713 6.5 10.5C6.80643 11.1129 7.43283 11.5 8.11803 11.5H13.882C14.5672 11.5 15.1936 11.1129 15.5 10.5C15.8064 9.88713 16.4328 9.5 17.118 9.5H20.5M7.96656 1.5H14.0334C15.1103 1.5 15.6487 1.5 16.1241 1.66396C16.5445 1.80896 16.9274 2.0456 17.2451 2.35675C17.6043 2.7086 17.8451 3.1902 18.3267 4.15337L20.4932 8.4865C20.6822 8.86449 20.7767 9.05348 20.8434 9.25155C20.9026 9.42745 20.9453 9.60847 20.971 9.79226C21 9.99923 21 10.2105 21 10.6331V12.7C21 14.3802 21 15.2202 20.673 15.862C20.3854 16.4265 19.9265 16.8854 19.362 17.173C18.7202 17.5 17.8802 17.5 16.2 17.5H5.8C4.11984 17.5 3.27976 17.5 2.63803 17.173C2.07354 16.8854 1.6146 16.4265 1.32698 15.862C1 15.2202 1 14.3802 1 12.7V10.6331C1 10.2105 1 9.99923 1.02897 9.79226C1.05471 9.60847 1.09744 9.42745 1.15662 9.25155C1.22326 9.05348 1.31776 8.86448 1.50675 8.4865L3.67331 4.15337C4.1549 3.19019 4.3957 2.7086 4.75495 2.35675C5.07263 2.0456 5.45551 1.80896 5.87589 1.66396C6.35125 1.5 6.88969 1.5 7.96656 1.5Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "text.main",
                                fontSize: { md: "14px", lg: "16px" },
                                fontWeight: "600",
                                mx: { md: 1, lg: 1.5 },
                                cursor: "default",
                              }}
                            >
                              {`${ticket?.ticket_code}#`}
                            </Typography>
                            <Typography
                              sx={{
                                color: "text.secondary",
                                fontSize: { md: "12px", lg: "13px" },
                                fontWeight: "400",
                                mx: { md: 1, lg: 1.5 },
                                cursor: "default",
                              }}
                            >
                              {`ایجاد شده در ${jalaliDate(
                                ticket?.date_created,
                                "D MMMM"
                              )}`}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              border: "1.5px solid #7F56D9",
                              width: { md: "55px", lg: "70px" },
                              height: "28px",
                              borderRadius: "5px",
                              display: "flex",
                              alignitems: "center",
                              justifyContent: "center",
                              pt: 0.25,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#6941C6",
                                fontSize: { md: "12px", lg: "14px" },
                                fontWeight: "500",
                              }}
                            >
                              سفارش
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mx: { md: 2, lg: 4 },
                            }}
                          >
                            <Typography
                              sx={{
                                color: "text.main",
                                fontSize: {
                                  md: "12px",
                                  lg: "14px",
                                  xl: "16px",
                                },
                                fontWeight: "500",
                                mx: { md: 0.5, lg: 1 },
                              }}
                            >
                              {ticket?.responder?.name}
                            </Typography>
                            <Box
                              sx={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "100%",
                                overflow: "hidden",
                                position: "relative",
                              }}
                            >
                              <Image
                                src={`${process.env.SERVER}/${ticket?.responder?.image}`}
                                alt="user_image"
                                fill
                              />
                            </Box>
                          </Box>
                          <TicketBadge type={ticket?.status_ticket} />
                        </Box>
                      </Box>
                    </Link>
                  ))}
                </Stack> : <TicketListEmptyState />}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TicketList;
