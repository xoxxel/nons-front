"use client";

import { fetchShopProducts } from "@/api/data";
import { UserContext } from "@/context/UserProvider";
import ProductModel from "@/models/Product";
import { Box, Skeleton, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";

const ProductSelection = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (arg: ProductModel) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [userProducts, setUserProducts] = useState<ProductModel[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductModel>(
    {} as ProductModel
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { user } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [productsLoading, setProductsLoading] = useState(false);

  const getProducts = (searchTerm: string) => {
    setProductsLoading(true);
    fetchShopProducts(user?.shop?.id, searchTerm, true)
      .then((res) => setUserProducts(res?.results))
      .catch((err) =>
        console.error("Error fetching user products in boost box", err)
      )
      .finally(() => setProductsLoading(false));
  };

  const getProductsWithSearch = (search: string) => {
    if (!productsLoading) {
      setProductsLoading(true);
    }
    const handler = setTimeout(() => {
      getProducts(search);
    }, 800); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
      getProductsWithSearch(e.target.value);
  };

  useEffect(() => {
    const selectedWithProps = userProducts?.find(
      (product) => product?.id === value
    );
    selectedWithProps
      ? setSelectedProduct(selectedWithProps)
      : setSelectedProduct({} as ProductModel);
  }, [value]);

  useEffect(() => {
    onChange(selectedProduct);
    setIsDropdownOpen(false);
    setSearchText(selectedProduct?.title)
  }, [selectedProduct]);

  function useOutsideClick(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClick(dropdownRef);

  return (
    <>
      <Box
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
          getProducts("")
        }}
        sx={{
          width: "100%",
          p: "10px",
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "text.main",
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
          <input
            type="text"
            placeholder="جستجوی محصول"
            value={searchText}
            onChange={handleInputChange}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "inherit",
              fontSize: "13px",
            }}
          ></input>
        </Box>
      </Box>
      {isDropdownOpen && (
        <Box
          ref={dropdownRef}
          className="scrollbarHidden"
          sx={{
            width: "100%",
            p: "10px",
            border: "0.5px solid",
            borderColor: "border.main",
            borderRadius: "5px",
            mt: 1,
            maxHeight: "250px",
            overflowY: "scroll",
          }}
        >
          {!productsLoading ? (
            userProducts.map((product) => (
              <Typography
                sx={{ my: 1, cursor: "pointer", color: "text.content" }}
                onClick={() => setSelectedProduct(product)}
                key={product.id}
              >
                {product?.title}
              </Typography>
            ))
          ) : (
            <Box sx={{display:"flex",flexDirection:"column"}}>
              <Skeleton sx={{ width: "100%", height: "50px" }} />
              <Skeleton sx={{ width: "100%", height: "50px" }} />
              <Skeleton sx={{ width: "100%", height: "50px" }} />
              <Skeleton sx={{ width: "100%", height: "50px" }} />
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default ProductSelection;
