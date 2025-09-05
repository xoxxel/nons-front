import { Box, Button } from "@mui/material";
import MenuTabs from "./menuTabs";
import BoostBox from "./boostBox";
import DashboardProductsFilterMenu from "./filterMenu";

const ProductsMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        borderRadius: "12px",
        border: "0.5px solid",
        borderColor: "border.secondary",
      }}
    >
      {/* search box */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.secondary",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          p: "8px 5px",
          gap: "20px",
        }}
      >
        <DashboardProductsFilterMenu />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            gap: 1,
            color: "text.main",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2413_2773)">
              <path
                d="M10.5 10.5L8.325 8.325M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2413_2773">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            placeholder="جستجو"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "#666666",
            }}
          />
        </Box>
      </Box>
      {/* boost box */}
      <Box sx={{ mt: "20px" }}>
        <BoostBox />
      </Box>
      {/* menu tabs */}
      <MenuTabs />
    </Box>
  );
};

export default ProductsMenu;
