"use client";
import { fetchProductsBySearch } from "@/api/data";
import ProductModel from "@/models/Product";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

const RealtedProducts = ({
  value,
  onSubmit,
  onDelete,
}: {
  value: number[];
  onSubmit: (id: number[]) => void;
  onDelete: (id: number) => void;
}) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [productsLoading, setProductLoading] = useState(false);
  const [searchInputText, setSearchInputText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductModel[]>([]);
  const [confirmedProducts, setConfirmedProducts] = useState<ProductModel[]>(
    []
  );
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  function useOutsideClick<T extends HTMLElement>(
    dropdownRef: RefObject<T>,
    inputRef: RefObject<T>
  ) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          inputRef.current &&
          !inputRef.current.contains(event.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef, inputRef]);
  }

  useOutsideClick(dropdownRef, inputRef);

  const getProducts = () => {
    fetchProductsBySearch(searchInputText)
      .then((res) => setProducts(res?.results))
      .catch((err) =>
        console.error(
          "error on fetching shop products in add product pages products",
          err
        )
      )
      .finally(() => setProductLoading(false));
  };

  useEffect(() => {
    if (!productsLoading) {
      setProductLoading(true);
    }
    const handler = setTimeout(() => {
      getProducts();
    }, 800); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [searchInputText]);

  const handleClickOnProduct = (product: ProductModel) => {
    if (selectedProducts?.some((item) => item?.id === product?.id)) {
      setSelectedProducts((prev) =>
        prev?.filter((item) => item?.id !== product?.id)
      );
    } else {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };

  const handleSubmit = () => {
    handleConfirm();
    const productIDs = selectedProducts?.map((product) => product?.id);
    onSubmit(productIDs);
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 0);
  };

  const handleConfirm = () => {
    setConfirmedProducts(selectedProducts);
  };

  const handleDelete = (id: number) => {
    onDelete(id);
    setConfirmedProducts((prev) =>
      prev?.filter((product) => product?.id !== id)
    );
    setSelectedProducts((prev) =>
      prev?.filter((product) => product?.id !== id)
    );
  };

  return (
    <Box>
      <Box
        ref={inputRef}
        onClick={() => setIsDropdownOpen(true)}
        sx={{
          border: "0.5px solid",
          borderColor: isDropdownOpen ? "button.main" : "border.main",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: "15px 10px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
              width: "100%",
            }}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 6.125L7.5 9.875L11.25 6.125"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Box
              sx={{
                marginInlineStart: 1,
                color: "text.content",
                fontSize: "14px",
                fontWeight: "400",
                width: "100%",
              }}
            >
              <input
                type="text"
                value={searchInputText}
                onChange={(e) => setSearchInputText(e.target.value)}
                placeholder="جستجوی محصول"
                style={{
                  width: "100%",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  color: "inherit",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
              />
            </Box>
          </Box>
          <Button
            onClick={handleSubmit}
            sx={{ bgcolor: "badge.success", color: "badgeText.success" }}
          >
            تایید
          </Button>
        </Box>
      </Box>
      {isDropdownOpen && (
        <Box
          ref={dropdownRef}
          className="scrollbarHidden"
          sx={{
            border: "1px solid",
            borderColor: "border.main",
            px: 2,
            py: 3,
            mt: 1,
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxHeight: "250px",
            overflowY: "scroll",
          }}
        >
          {!productsLoading ? (
            products?.length > 0 ? (
              products?.map((product) => (
                <Box
                  onClick={() => handleClickOnProduct(product)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: selectedProducts?.some(
                      (item) => item?.id === product?.id
                    )
                      ? "hover.main"
                      : "transparent",
                    px: 1,
                    py: 0.5,
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                      width={22}
                      height={22}
                      alt={product?.brand?.title}
                      style={{ borderRadius: "5px" }}
                    />
                    <Typography sx={{ color: "text.content" }}>
                      {product?.title}
                    </Typography>
                  </Box>
                  {selectedProducts?.some(
                    (item) => item?.id === product?.id
                  ) && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6663 5L7.49967 14.1667L3.33301 10"
                        stroke="#0788F5"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Box>
              ))
            ) : (
              <Typography
                sx={{ mx: "auto", color: "text.content", fontsize: "14px" }}
              >
                محصولی یافت نشد!
              </Typography>
            )
          ) : (
            <Box>
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
            </Box>
          )}
        </Box>
      )}

      {confirmedProducts?.map((product) => (
        <Box
          sx={{
            mt: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "5px",
          }}
        >
          <Typography
            sx={{
              color: "#06D6A0",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {product?.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <svg
              onClick={() => handleDelete(product?.id)}
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M5.625 11.125H4.375C2.64911 11.125 1.25 9.72589 1.25 8C1.25 6.27411 2.64911 4.875 4.375 4.875H5.625M9.375 11.125H10.625C12.3509 11.125 13.75 9.72589 13.75 8C13.75 6.27411 12.3509 4.875 10.625 4.875H9.375M4.375 8L10.625 8"
                stroke="#06D6A0"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RealtedProducts;
