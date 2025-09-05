import { Box } from "@mui/material";

type BadgeType = "in_queue" | "successful" | "failed";
const Badge = ({ status }: { status?: BadgeType }) => {
  return (
    <Box
      sx={{
        bgcolor:
          status === "successful"
            ? "badge.success"
            : status === "failed"
            ? "badge.danger"
            : "badge.info",
        textAlign: "center",
        color:
          status === "successful"
            ? "badgeText.success"
            : status === "failed"
            ? "badgeText.danger"
            : "badgeText.info",
        py: 0.25,
        px: "12px",
        borderRadius: "5px",
        fontSize: "13px",
        fontWeight: "500",
        width:"fit-content",
        whiteSpace:"nowrap",
      }}
    >
      {status === "successful"
        ? "موفق"
        : status === "failed"
        ? "نا موفق"
        : "در صف انجام"}
    </Box>
  );
};

export default Badge;
