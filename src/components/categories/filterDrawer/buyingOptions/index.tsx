import { Box, styled, Switch, Typography } from "@mui/material";

const BuyingItems = ({
  filterOptions,
  setFilterOptions,
}: {
  filterOptions: CategoRyFiltersModel;
  setFilterOptions: React.Dispatch<React.SetStateAction<CategoRyFiltersModel>>;
}) => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 24,
    padding: 0,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 15,
        },
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            transform: "translateX(16px)", // Adjusted for centering
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        width: 16,
        height: 16,
        borderRadius: 12,
        transition: theme.transitions.create(["width"], {
            duration: 200,
        }),
        margin: "2px 0 0 2px", // Center the thumb vertically
    },
    "& .MuiSwitch-track": {
        borderRadius: 50,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,.35)"
                : "rgba(0,0,0,.25)",
        boxSizing: "border-box",
    },
}));


  return (
    <>
    {/* suggested products  */}
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mt:4,mb:1}}>
        <Box sx={{display:"flex",gap:2,alignItems:"center",pr:1,color:"text.main"}}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2849_21668"
            maskUnits="userSpaceOnUse"
            x="0"
            y="6"
            width="13"
            height="21"
          >
            <path
              d="M12.5479 6.00024H0.783203V26.0002H12.5479V6.00024Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2849_21668)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1812 21.8855L9.76749 21.2841L10.8317 20.7806L11.2454 21.3821C12.1651 22.7193 11.7195 24.3666 10.2502 25.0617C9.78449 25.282 9.25055 25.3871 8.70155 25.3668L8.50299 25.3594L8.4563 24.269L8.65486 24.2763C8.98424 24.2885 9.30467 24.2254 9.58405 24.0933C10.4657 23.6762 10.733 22.6878 10.1812 21.8855Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.99647 6.30572C5.2233 6.14142 5.56727 6.15419 5.80891 6.33588C7.08662 7.29663 7.817 8.40602 7.87025 9.65009C7.9235 10.8941 7.28594 11.9528 6.08657 12.8215C5.85974 12.9859 5.51577 12.973 5.27412 12.7914C3.9964 11.8306 3.26606 10.7212 3.2128 9.47718C3.15954 8.23312 3.79707 7.17451 4.99647 6.30572ZM5.45232 7.48017C4.73747 8.11464 4.43624 8.79492 4.46744 9.52376C4.49864 10.2526 4.85917 10.9574 5.63071 11.6471C6.34557 11.0126 6.6468 10.3323 6.6156 9.60351C6.58439 8.87467 6.22387 8.16982 5.45232 7.48017Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.56601 21.1116C3.38024 20.9078 3.36839 20.6309 3.53726 20.4403C4.49386 19.3602 5.67231 18.7706 7.07583 18.8226C8.47933 18.8748 9.71214 19.5539 10.7644 20.7086C10.9501 20.9124 10.962 21.1893 10.7931 21.3799C9.83651 22.4599 8.65808 23.0496 7.25458 22.9975C5.85104 22.9454 4.61826 22.2663 3.56601 21.1116ZM4.86758 20.8248C5.63962 21.5504 6.41756 21.8777 7.20789 21.9071C7.9982 21.9364 8.75051 21.6659 9.46283 20.9954C8.69076 20.2698 7.91283 19.9424 7.12251 19.9131C6.3322 19.8838 5.57985 20.1543 4.86758 20.8248Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.995091 15.9651C0.939527 15.7119 1.09031 15.4729 1.35843 15.3892C2.83368 14.9286 4.23224 14.9808 5.47041 15.6595C6.70292 16.3351 7.43843 17.4461 7.75149 18.8721C7.80706 19.1252 7.65631 19.3642 7.38818 19.4479C5.91292 19.9086 4.51435 19.8564 3.27618 19.1776C2.04367 18.502 1.30815 17.3911 0.995091 15.9651ZM2.34605 16.2909C2.64621 17.2468 3.17506 17.8792 3.88337 18.2675C4.58174 18.6503 5.40276 18.7677 6.40055 18.5463C6.10039 17.5904 5.57154 16.9579 4.86322 16.5696C4.16486 16.1868 3.34384 16.0694 2.34605 16.2909Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.53792 10.5518C1.63099 10.3087 1.9163 10.172 2.21643 10.2267C3.81174 10.5176 5.03999 11.196 5.77767 12.3069C6.51241 13.4133 6.5681 14.6587 6.06147 15.9821C5.96841 16.2253 5.68309 16.362 5.38297 16.3072C3.78765 16.0163 2.5594 15.3379 1.82173 14.2271C1.08698 13.1206 1.03129 11.8753 1.53792 10.5518ZM2.58675 11.4133C2.33793 12.3291 2.46637 13.0915 2.89678 13.7396C3.32142 14.3791 4.00076 14.849 5.01264 15.1206C5.26147 14.2048 5.13303 13.4424 4.70262 12.7943C4.27797 12.1548 3.59864 11.685 2.58675 11.4133Z"
              fill="currentColor"
            />
          </g>
          <mask
            id="mask1_2849_21668"
            maskUnits="userSpaceOnUse"
            x="19"
            y="6"
            width="12"
            height="21"
          >
            <path
              d="M19.1738 6.00024H30.9385V26.0002H19.1738V6.00024Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_2849_21668)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5406 21.8855L21.9544 21.2841L20.8901 20.7806L20.4764 21.3821C19.5567 22.7193 20.0023 24.3666 21.4717 25.0617C21.9373 25.282 22.4713 25.3871 23.0203 25.3668L23.2188 25.3594L23.2655 24.269L23.067 24.2763C22.7376 24.2885 22.4172 24.2254 22.1378 24.0933C21.2562 23.6762 20.9888 22.6878 21.5406 21.8855Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.7252 6.30572C26.4984 6.14142 26.1545 6.15419 25.9128 6.33588C24.6351 7.29663 23.9047 8.40602 23.8515 9.65009C23.7982 10.8941 24.4357 11.9528 25.6352 12.8215C25.862 12.9859 26.206 12.973 26.4476 12.7914C27.7253 11.8306 28.4557 10.7212 28.5089 9.47718C28.5622 8.23312 27.9247 7.17451 26.7252 6.30572ZM26.2694 7.48017C26.9842 8.11464 27.2855 8.79492 27.2543 9.52376C27.2231 10.2526 26.8625 10.9574 26.091 11.6471C25.3762 11.0126 25.0749 10.3323 25.1061 9.60351C25.1373 8.87467 25.4978 8.16982 26.2694 7.48017Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.1557 21.1116C28.3415 20.9078 28.3534 20.6309 28.1845 20.4403C27.2279 19.3602 26.0494 18.7706 24.6459 18.8226C23.2424 18.8748 22.0096 19.5539 20.9574 20.7086C20.7716 20.9124 20.7598 21.1893 20.9286 21.3799C21.8852 22.4599 23.0637 23.0496 24.4672 22.9975C25.8707 22.9454 27.1035 22.2663 28.1557 21.1116ZM26.8542 20.8248C26.0821 21.5504 25.3042 21.8777 24.5139 21.9071C23.7236 21.9364 22.9712 21.6659 22.2589 20.9954C23.031 20.2698 23.8089 19.9424 24.5992 19.9131C25.3896 19.8838 26.1419 20.1543 26.8542 20.8248Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7266 15.9651C30.7821 15.7119 30.6314 15.4729 30.3633 15.3892C28.888 14.9286 27.4895 14.9808 26.2513 15.6595C25.0188 16.3351 24.2832 17.4461 23.9702 18.8721C23.9146 19.1252 24.0654 19.3642 24.3335 19.4479C25.8088 19.9086 27.2073 19.8564 28.4455 19.1776C29.678 18.502 30.4135 17.3911 30.7266 15.9651ZM29.3756 16.2909C29.0755 17.2468 28.5466 17.8792 27.8383 18.2675C27.14 18.6503 26.319 18.7677 25.3211 18.5463C25.6213 17.5904 26.1501 16.9579 26.8585 16.5696C27.5568 16.1868 28.3778 16.0694 29.3756 16.2909Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.1838 10.5518C30.0907 10.3087 29.8054 10.172 29.5053 10.2267C27.91 10.5176 26.6817 11.196 25.944 12.3069C25.2093 13.4133 25.1536 14.6587 25.6602 15.9821C25.7533 16.2253 26.0386 16.362 26.3387 16.3072C27.934 16.0163 29.1623 15.3379 29.9 14.2271C30.6347 13.1206 30.6904 11.8753 30.1838 10.5518ZM29.135 11.4133C29.3838 12.3291 29.2553 13.0915 28.8249 13.7396C28.4003 14.3791 27.721 14.849 26.7091 15.1206C26.4602 14.2048 26.5887 13.4424 27.0191 12.7943C27.4437 12.1548 28.1231 11.685 29.135 11.4133Z"
              fill="currentColor"
            />
          </g>
        </svg>
        <Typography sx={{fontWeight:"500",fontSize:"14px",color:"text.main"}}>محصولات منتخب کاربران</Typography>
        </Box>
        <AntSwitch
              checked={filterOptions.suggestedProducts}
              onChange={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  suggestedProducts: !prev.suggestedProducts,
                }))
              }
            />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "text.main",
            fontSize: "13px",
            fontWeight: "600",
            mb: 3,
          }}
        >
          گزینه های خرید
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mb: 8,
            pr:1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "text.main", fontSize: "13px" }}>
              فروشنده های آنلاین
            </Typography>
            <AntSwitch
              checked={filterOptions.onlineSellers}
              onChange={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  onlineSellers: !prev.onlineSellers,
                }))
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "text.main", fontSize: "13px" }}>
              محصولات ارسال خودکار
            </Typography>
            <AntSwitch
              checked={filterOptions.autoSendings}
              onChange={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  autoSendings: !prev.autoSendings,
                }))
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "text.main", fontSize: "13px" }}>
              محصولات تخفیف دار
            </Typography>
            <AntSwitch
              checked={filterOptions.discountedProducts}
              onChange={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  discountedProducts: !prev.discountedProducts,
                }))
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "text.main", fontSize: "13px" }}>
              محصولات دارای گارانتی
            </Typography>
            <AntSwitch
              checked={filterOptions.productsWithWarranty}
              onChange={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  productsWithWarranty: !prev.productsWithWarranty,
                }))
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BuyingItems;
