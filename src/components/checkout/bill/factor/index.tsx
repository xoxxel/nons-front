import OrderModel from "@/models/Order";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";

const Factor = ({order}:{order:OrderModel}) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          mt: { md: "0px", xs: "30px" },
          color: "text.main",
        }}
      >
        صورتحساب
      </Typography>
      <Box sx={{ my: 1, px: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px dashed",
            borderBottomColor: "border.main",
            py: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            قیمت واحد
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            {`${ThousandSeparator(order?.product?.price)} تومان`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px dashed",
            borderBottomColor: "border.main",
            py: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            تعداد
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", color: "text.main" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "text.main",
              }}
            >
              1
            </Typography>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                clip-path="url(#clip0_370_12358)"
                filter="url(#filter0_d_370_12358)"
              >
                <path
                  d="M9.81714 8.31714L17.1828 15.6828"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.81717 15.6828L17.1829 8.31714"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_370_12358"
                  x="0.5"
                  y="0"
                  width="26"
                  height="26"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_370_12358"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_370_12358"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_370_12358">
                  <rect
                    width="14.7125"
                    height="16.4002"
                    fill="currentColor"
                    transform="translate(14.0967 1) rotate(45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px dashed",
            borderBottomColor: "border.main",
            py: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            جمع جزء
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            {`${ThousandSeparator(order?.product?.price)} تومان`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px dashed",
            borderBottomColor: "border.main",
            py: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            کد تخفیف
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "underline",
              cursor: "pointer",
              color: "#FFFFFF",
            }}
          >
            اگر کد تخفیف دارید اینجا کلیک کنید
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            جمع کل فاکتور
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "text.main" }}
          >
            {`${ThousandSeparator(order?.product?.price)} تومان`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Factor;
