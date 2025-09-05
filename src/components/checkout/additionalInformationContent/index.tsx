import OrderModel from "@/models/Order";
import { Box, Button, Typography } from "@mui/material";

const AdditionalInformationContent = ({ order }: { order: OrderModel }) => {
  return (
    <Box>
      <Typography sx={{ color: "text.main", fontWeight: "600" }}>
        اطلاعات تکمیلی
      </Typography>
      <Box
        sx={{
          mt: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "4.5px",
              height: "4.5px",
              borderRadius: "100%",
              backgroundColor: "#FFFFFF",
            }}
          ></Box>
          <Typography sx={{ color: "text.main", fontWeight: "500", mr: 1 }}>
            {order?.product?.region?.length > 0 &&
              order?.product?.region?.length === 1 ? `ریجن ${order?.product?.region?.[0]?.title}` : "مالتی ریجن"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "4.5px",
              height: "4.5px",
              borderRadius: "100%",
              backgroundColor: "#FFFFFF",
            }}
          ></Box>
          <Typography sx={{ color: "text.main", fontWeight: "500", mr: 1 }}>
            {`دسته بندی ${order?.product?.category?.title}`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "4.5px",
              height: "4.5px",
              borderRadius: "100%",
              backgroundColor: "#FFFFFF",
            }}
          ></Box>
          <Typography sx={{ color: "text.main", fontWeight: "500", mr: 1 }}>
            برچسب
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          gap: "10px",
          mt: "10px",
        }}
      >
        {order?.product?.brand?.tags?.map((tag) => (
          <Box
            key={tag?.id}
            sx={{
              minWidth: "65px",
              height: "28px",
              color: "text.main",
              borderColor: "#FFFFFF",
              px: 1,
              border: "0.5px solid",
              borderRadius: "4px",
            }}
          >
            {tag?.title}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdditionalInformationContent;
