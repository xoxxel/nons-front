import CopyCode from "@/components/profile/activities/transaction/copyCode";
import OrderBadge from "@/components/profile/activities/transaction/orderBadge";
import OrderModel from "@/models/Order";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const SoldBoughtCard = ({ order }: { order: OrderModel }) => {
  return (
    <Box
      sx={{
        borderRadius: "5px 5px 0 0",
        border: "0.5px solid",
        borderColor: "border.main",
        p: "10px",
      }}
    >
      <Box
        sx={{
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
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "#F5F5F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_SERVER +
                "/" +
                order?.product?.brand?.icon
              }
              alt="avatar"
              fill
            />
          </Box>
          <Box
            sx={{
              mx: "10px",
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {order?.product?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "icon.main",
              }}
            >
              <CopyCode code={order?.tracking_code} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <OrderBadge status={order?.status} />
          <Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                color: "icon.main",
                mx: { md: 3, lg: 5 },
              }}
            >
              {ThousandSeparator(order?.final_price)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "icon.main",
                mx: 0.75,
              }}
            >
              {order?.product?.shop?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER}/${order?.product?.shop?.image}`}
                alt="avatar"
                width={16}
                height={16}
                style={{
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SoldBoughtCard;
