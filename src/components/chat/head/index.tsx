import Profile from "@/components/categories/card/profile";
import ProductModel from "@/models/Product";
import RoomDataModel from "@/models/RoomData";
import getTimeAgo from "@/utils/getTimeAgo";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import Link from "next/link";

const ChatHead = ({
  handleClose,
  roomData,
  loading,
  product,
  arbitration,
  seller,
  customer
}: {
  handleClose: Function;
  roomData: RoomDataModel | undefined;
  loading: boolean;
  product: ProductModel | null;
  arbitration?: boolean;
  seller: RoomDataModel;
  customer: RoomDataModel
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          top: "0px",
          zIndex: 11,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "78px",
            bgcolor: "background.element",
          }}
        >
          <Container sx={{ height: "100% !important" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {loading ? (
                  <Skeleton variant="circular">
                    <Profile />
                  </Skeleton>
                ) : (
                  <Profile image={arbitration ? undefined : roomData?.image} />
                )}
                <Box sx={{ mr: 2 }}>
                  {loading ? (
                    <Skeleton width="150px" height="21px">
                      {" "}
                      <Typography></Typography>
                    </Skeleton>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "text.main",
                        fontWeight: "600",
                      }}
                    >
                      {arbitration ? `فروشگاه ${seller?.name} + ${customer?.name}` : roomData?.name}
                    </Typography>
                  )}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                    {loading ? (
                      <Skeleton width="120px" height="18px">
                        {" "}
                        <Typography></Typography>
                      </Skeleton>
                    ) : (
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {roomData?.is_online
                          ? "آنلاین"
                          : roomData?.last_active &&
                          getTimeAgo(roomData?.last_active)}
                      </Typography>
                    )}
                    {roomData?.is_online && (
                      <Box
                        sx={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "primary.main",
                          borderRadius: "100px",
                          mr: "6px",
                        }}
                      ></Box>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                onClick={() => handleClose()}
                sx={{ display: "flex", cursor: "pointer", color: "text.main" }}
              >
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  color="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 7.5H1.5M1.5 7.5L7.5 13.5M1.5 7.5L7.5 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Container>
        </Box>
        {product?.slug && (
          <Link target="_blank" href={`/products/${product?.slug}`}>
            <Box
              sx={{
                width: "100%",
                height: "40px",
                backgroundColor: "#9EFF71",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0833 6.12484L9.99997 10.06M9.99997 10.06L2.91664 6.12484M9.99997 10.06L10 17.9767M17.5 13.4422V6.67792C17.5 6.39238 17.5 6.24961 17.4579 6.12228C17.4207 6.00964 17.3599 5.90623 17.2795 5.81899C17.1886 5.72038 17.0638 5.65104 16.8142 5.51238L10.6475 2.08645C10.4112 1.95515 10.293 1.8895 10.1679 1.86376C10.0571 1.84098 9.94288 1.84098 9.83213 1.86376C9.70698 1.8895 9.58881 1.95515 9.35248 2.08645L3.18581 5.51238C2.93621 5.65105 2.8114 5.72038 2.72053 5.81899C2.64013 5.90624 2.57929 6.00964 2.54207 6.12228C2.5 6.24962 2.5 6.39238 2.5 6.67792V13.4422C2.5 13.7277 2.5 13.8705 2.54207 13.9978C2.57929 14.1105 2.64013 14.2139 2.72053 14.3011C2.8114 14.3997 2.93621 14.4691 3.18581 14.6077L9.35248 18.0336C9.58881 18.1649 9.70698 18.2306 9.83213 18.2563C9.94288 18.2791 10.0571 18.2791 10.1679 18.2563C10.293 18.2306 10.4112 18.1649 10.6475 18.0336L16.8142 14.6077C17.0638 14.4691 17.1886 14.3997 17.2795 14.3011C17.3599 14.2139 17.4207 14.1105 17.4579 13.9978C17.5 13.8705 17.5 13.7277 17.5 13.4422Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {loading ? (
                  <Skeleton width="120px" height="18px">
                    {" "}
                    <Typography></Typography>
                  </Skeleton>
                ) : (
                  <Typography sx={{ color: "icon.main", fontSize: "13px" }}>
                    {product?.title}
                  </Typography>
                )}
              </Box>

              {loading ? (
                <Skeleton width="80px" height="18px">
                  {" "}
                  <Typography></Typography>
                </Skeleton>
              ) : (
                <Typography sx={{ color: "icon.main", fontSize: "13px" }}>
                  {ThousandSeparator(product?.price)} IRT
                </Typography>
              )}
            </Box>
          </Link>
        )}
      </Box>
    </>
  );
};

export default ChatHead;
