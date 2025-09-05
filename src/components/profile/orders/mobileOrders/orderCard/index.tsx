import Badge from "@/components/profile/activities/transaction/badge";
import CopyCode from "@/components/profile/activities/transaction/copyCode";
import OrderBadge from "@/components/profile/activities/transaction/orderBadge";
import OrderModel from "@/models/Order";
import { Box, Typography } from "@mui/material";
import ThousandSeparator from "@/utils/thousandSeparator";
import jalaliDate from "@/utils/jalaliDate";
import Image from "next/image";

const OrderCard = ({
  order,
  isOrderSeller,
  setDrawerVisibility,
}: {
  order: OrderModel;
  isOrderSeller: boolean;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const formattedDate = order?.date_created
    ? jalaliDate(order.date_created, "dd MMMM yyyy - HH:mm")
    : "تاریخ نامشخص";
  return (
    <Box
      onClick={() => setDrawerVisibility(order?.id)}
      sx={{
        width: "100%",
        p: "10px",
        display: "flex",
        justifyContent: "space-between",
        height: "fit-content",
        borderBottom: "0.5px solid",
        borderColor: "border.main",
        pb: 2.5,
      }}
    >
      {/* right side of card */}
      <Box sx={{ display: "flex", gap: "7px" }}>
        <Box
          sx={{
            width: "45px",
            height: "45px",
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "7px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_SERVER + "/" + order?.product?.brand?.icon
            }
            width={28}
            height={28}
            alt={order?.product?.brand?.title}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "600", color: "text.main" }}
          >
            {order?.product?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "text.secondary",
            }}
          >
            {order?.product?.category?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "text.secondary",
            }}
          >
            قیمت : {""}
            {ThousandSeparator(order?.final_price)}
            {`${isOrderSeller ? "+" : "-"}`}
          </Typography>
          <CopyCode code={order?.tracking_code || ""} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "text.secondary",
              }}
            >
              {order?.product?.shop?.title}
            </Typography>
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER}/${order?.product?.shop?.image}`}
              width={16}
              height={16}
              alt="shop"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
      {/* left side of card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minHeight: "100%",
          alignItems: "end",
        }}
      >
        <OrderBadge status={order?.status} />
        <Typography
          sx={{ fontSize: "13px", fontWeight: "400", color: "text.secondary" }}
        >
          {formattedDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderCard;
