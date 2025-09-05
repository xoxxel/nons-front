import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Reply = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: { xs: "0px", md: "12px" },
          padding: "15px",
          mb: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#344054",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            پاسخ دهید
          </Typography>
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
            }}
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 7H1M1 7L7 13M1 7L7 1"
                stroke="#344054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: { xs: "0px", md: "12px" },
          padding: "15px",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "35px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "12px",
            }}
          >
            <Box
              sx={{
                width: { xs: "35px", md: "48px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "35px", md: "48px" },
                  height: { xs: "35px", md: "48px" },
                  borderRadius: "100%",
                  position: "relative",
                  overflow: "hidden",
                  background: "#D4B2AF",
                }}
              >
                <Image
                  src="/images/avatar2.jpg"
                  alt="avatar"
                  fill
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  pt: "10px",
                  width: "100%",
                  height: {
                    xs: "calc(100% - 35px)",
                    md: "calc(100% - 48px)",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "1.5px",
                    height: "100%",
                    background: "#9fe870",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: {
                  xs: "calc(100% - 35px)",
                  md: "calc(100% - 48px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "40px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "text.main",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: "500",
                    }}
                  >
                    aghabazi
                  </Typography>
                  <Typography
                    sx={{
                      color: "#344054",
                      fontSize: "13px",
                      fontWeight: "400",
                      mx: 1,
                    }}
                  >
                    سه ساعت پیش
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                      stroke="#344054"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                      stroke="#344054"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                      stroke="#344054"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
              <Box
                sx={{
                  mb: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#344054",
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: "500",
                  }}
                >
                  گیم پلی و ببین و از بازی لذت ببر
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "15px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/game.jpg"
                  alt="game"
                  fill
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "12px",
            }}
          >
            <Box
              sx={{
                width: { xs: "35px", md: "48px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "35px", md: "48px" },
                  height: { xs: "35px", md: "48px" },
                  borderRadius: "100%",
                  position: "relative",
                  overflow: "hidden",
                  background: "#D4B2AF",
                }}
              >
                <Image
                  src="/images/avatar.png"
                  alt="avatar"
                  fill
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  pt: "10px",
                  width: "100%",
                  height: {
                    xs: "calc(100% - 35px)",
                    md: "calc(100% - 48px)",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "1.5px",
                    height: "100%",
                    background: "#9fe870",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: {
                  xs: "calc(100% - 35px)",
                  md: "calc(100% - 48px)",
                },
              }}
            >
              <Box
                sx={{
                  pt: "18px",
                  pr: { xs: "0px", md: "7px" },
                  pl: { xs: "0px", md: "15px" },
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "500",
                    mb: "10px",
                  }}
                >
                  abbasjadidi
                </Typography>
                <input
                  type="text"
                  placeholder="پاسخ به aghabazi"
                  style={{
                    width: "100%",
                    color: "#344054",
                    fontSize: "14px",
                    fontWeight: "500",
                    background: "transparent",
                    border: "0",
                    outline: "0",
                  }}
                />
                <Box
                  sx={{
                    mt: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
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
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.27209 18.7279L9.86863 12.1314C10.2646 11.7354 10.4627 11.5373 10.691 11.4632C10.8918 11.3979 11.1082 11.3979 11.309 11.4632C11.5373 11.5373 11.7354 11.7354 12.1314 12.1314L18.6839 18.6839M13 13L15.8686 10.1314C16.2646 9.73535 16.4627 9.53735 16.691 9.46316C16.8918 9.3979 17.1082 9.3979 17.309 9.46316C17.5373 9.53735 17.7354 9.73535 18.1314 10.1314L21 13M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM5.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 6.96533C7.5 6.48805 7.5 6.24941 7.59974 6.11618C7.68666 6.00007 7.81971 5.92744 7.96438 5.9171C8.13038 5.90525 8.33112 6.03429 8.73261 6.29239L13.4532 9.32706C13.8016 9.55102 13.9758 9.663 14.0359 9.80539C14.0885 9.9298 14.0885 10.0702 14.0359 10.1946C13.9758 10.337 13.8016 10.449 13.4532 10.6729L8.73261 13.7076C8.33112 13.9657 8.13038 14.0948 7.96438 14.0829C7.81971 14.0726 7.68666 13.9999 7.59974 13.8838C7.5 13.7506 7.5 13.512 7.5 13.0347V6.96533Z"
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8Z"
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49999 1L4.49999 19M15.5 1L12.5 19M18.5 6H1.5M17.5 14H0.5"
                          stroke="#344054"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.95686 10.7344C2.30471 10.4317 2.30471 9.56765 2.95686 9.2649L17.7898 2.37913C18.3781 2.10602 19.0703 2.50321 19.0703 3.1139L15.8592 9.27347C15.62 9.73215 15.62 10.2672 15.8592 10.7259L19.0703 16.8854C19.0703 17.4961 18.3781 17.8933 17.7898 17.6202L2.95686 10.7344Z"
                          stroke="#344054"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M15.4805 10H8.7497"
                          stroke="#344054"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Reply;
