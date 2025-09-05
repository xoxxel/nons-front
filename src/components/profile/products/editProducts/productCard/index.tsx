"use client";

import ProductModel from "@/models/Product";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ProductCard = ({
  product,
  onSelect,
  onRemove,
  onPriceChangeDone,
}: {
  product: ProductModel;
  onSelect: (arg: number, arg2: string) => void;
  onRemove: (arg: number) => void;
  onPriceChangeDone: (arg: number, arg2: string) => void;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [newPrice, setNewPrice] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setNewPrice(ThousandSeparator(value));
    value?.length > 0 ? setIsEdited(true) : setIsEdited(false);
  };

  const handleCheck = (id: number) => {
    if (isSelected) {
      setIsSelected(false);
      onRemove(id);
      setNewPrice("")
      setIsEdited(false)
    } else {
      // setIsSelected(true);
      // const price = newPrice.replaceAll(",", "");
      // onSelect(id, price);
    }
  };

  const handlePenClick = () => {
    setIsEditing(true);
    setIsSelected(true);

    !isSelected && onSelect(product?.id, "");
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    const price = newPrice.replaceAll(",", "");
    onPriceChangeDone(product?.id,price)
    if (!isEdited) {
      onRemove(product?.id);
      setIsSelected(false);
    }
  };

  return (
    <Box
      sx={{
        p: "10px",
        borderBottom: "0.5px solid",
        borderBottomColor: "border.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width:"100%",
          overflow:"hidden"
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alihnitems: "center", }}>
          <Box
            onClick={() => handleCheck(product?.id)}
            sx={{
              border: "1px solid",
              borderColor: isSelected ? "button.main" : "#D0D5DD",
              width: "20px",
              height: "20px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: "1px",
            }}
          >
            {isSelected && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
                  stroke="#0961DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Box>
        </Box>
        <Box sx={{width:"100%",overflow:"hidden"}}>
        <Typography
          sx={{
            color: "text.main",
            fontSize: {md:"16px",xs:"13px"},
            fontWeight: "500",
            mx: 1.5,
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",width:"calc(100% - 10px)",overflow:"hidden"
          }}
        >
          {product?.title}
        </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mx: "20px",
            display: "flex",
            justifyContent: "flex-end",
            color: "icon.main",
          }}
        >
          <Box sx={{ height: "24px" }}>
            {isEditing || isEdited ? (
              <Box sx={{ color: "text.main",fontSize: {md:"16px",xs:"13px"},}}>
                <input
                  type="text"
                  autoFocus
                  value={newPrice}
                  onChange={handleChange}
                  onFocus={() => setIsEditing(true)}
                  onBlur={handleInputBlur}
                  style={{
                    maxWidth: "100px",
                    width: "100px", 
                    direction: "ltr",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "inherit",
                    fontSize: "inherit",
                    fontWeight: "600",
                  }}
                />
              </Box>
            ) : (
              <Box
                onClick={handlePenClick}
                sx={{ color: "icon.main", cursor: "pointer" }}
              >
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99998 15.6662H16.5M1.5 15.6662H2.89545C3.3031 15.6662 3.50693 15.6662 3.69874 15.6202C3.8688 15.5793 4.03138 15.512 4.1805 15.4206C4.34869 15.3175 4.49282 15.1734 4.78107 14.8852L15.25 4.4162C15.9404 3.72585 15.9404 2.60656 15.25 1.9162C14.5597 1.22585 13.4404 1.22585 12.75 1.9162L2.28105 12.3852C1.9928 12.6734 1.84867 12.8175 1.7456 12.9857C1.65422 13.1348 1.58688 13.2974 1.54605 13.4675C1.5 13.6593 1.5 13.8631 1.5 14.2708V15.6662Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: "102px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            sx={{
              color: "icon.main",
              fontSize: {md:"16px",xs:"13px"},
              fontWeight: "400",
            }}
          >
            {ThousandSeparator(product?.price)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
