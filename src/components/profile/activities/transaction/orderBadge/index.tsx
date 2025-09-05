import OrderModel from "@/models/Order";
import { Box } from "@mui/material";

const OrderBadge = ({ status }: { status?: OrderModel["status"] }) => {
  return (
    <Box
      sx={{
        width: "93px",
        bgcolor:
          status === "completed"
            ? "badge.success"
            : status === "canceled"
            ? "badge.danger"
            : status === "processing" ? "badge.info" : "badge.disable",
        textAlign: "center",
        color:
          status === "completed"
            ? "badgeText.success"
            : status === "canceled"
            ? "badgeText.danger"
            : status === "processing" ? "badgeText.info" : "badgeText.disable",
        py: 0.25,
        borderRadius: "5px",
        fontSize: "13px",
        fontWeight: "500",
      }}
    >
      {status === "completed"
        ? "تکمیل شده"
        : status === "canceled"
        ? "لغو شده"
        : status === "processing"
        ? "در حال پردازش"
        : "داوری"}
    </Box>
  );
};

export default OrderBadge;
