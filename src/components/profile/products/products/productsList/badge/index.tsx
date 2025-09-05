import { Box } from "@mui/material";

const ProductBadge = ({
  status,
  isActive,
}: {
  status: "accepted" | "rejected" | "checking";
  isActive: boolean;
}) => {
  return (
    <Box
      sx={{
        display: (status === "accepted" && isActive) ? "none" : "block",
        px: 1.5,
        py: 0.5,
        borderRadius:"5px",
        fontSize:"14px",
        bgcolor: !isActive
          ? "badge.disable"
          : status === "checking"
          ? "badge.warning"
          : "badge.danger",
        color: !isActive
          ? "badgeText.disable"
          : status === "checking"
          ? "badgeText.warning"
          : "badgeText.danger",
          whiteSpace:"nowrap"
      }}
    >
        {!isActive
          ? "غیر فعال"
          : status === "checking"
          ? "در انتظار تایید"
          : "رد شده"}
    </Box>
  );
};

export default ProductBadge;
