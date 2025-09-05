"use client";
import { fetchShopProducts } from "@/api/data";
import { UserContext } from "@/context/UserProvider";
import ProductModel from "@/models/Product";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { RefObject, useContext, useEffect, useRef, useState } from "react";

const CopyProductsContent = ({
  onChange,
  product
}: {
  onChange: (arg: ProductModel) => void;
  product:number
}) => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [chosenProduct, setChosenProduct] = useState<ProductModel>({} as ProductModel);
  const [open,setOpen] = useState(false)
  const user = useContext(UserContext);
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    fetchShopProducts(user?.user?.shop?.id, inputValue)
      .then((res) => setProducts(res?.results))
      .catch((err) =>
        console.error(
          "error on fetching shop products in add product pages products",
          err
        )
      );
  }, []);

  useEffect(()=>{
    onChange(chosenProduct)
  },[chosenProduct])
  
  useEffect(()=>{
    if(!product){
      setChosenProduct({} as ProductModel)
    }
  },[product])

  function useOutsideClick<T extends HTMLElement>(
    dropdownRef: RefObject<T>,
    buttonRef: RefObject<T>
  ) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef, buttonRef]);
  }

  useOutsideClick(dropdownRef, buttonRef);

  return (
    <>
      <Box
      ref={buttonRef}
        sx={{
          width: "100%",
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "14px",
          py: 2,
          gap: 2,
          color:"text.content"
        }}
      >
        <input
          type="text"
          placeholder="جستجوی محصول"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={()=>setOpen(true)}
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            width: "100%",
            color:"inherit"
          }}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#848686"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      {open && (
        <Box
        ref={dropdownRef}
          sx={{
            width: "100%",
            border: "0.5px solid",
            borderColor: "border.main",
            mt: 2,
            p: "10px",
            borderRadius: "8px",
          }}
        >
          {products?.map((product) => (
            <Box
            onClick={()=> {setChosenProduct(product),setOpen(false)}}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "7px 6px",
                cursor:"pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px",overflow:"hidden" }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER}/${product?.brand?.icon}`}
                  width={22}
                  height={22}
                  alt={product?.brand?.title}
                  style={{borderRadius: "5px"}}
                />
                <Typography sx={{color:"text.content",fontWeight:"400",fontSize:{md:"14px",xs:"13px"}}}>{product?.title}</Typography>
              </Box>
              {chosenProduct?.id === product?.id && <svg
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
              </svg>}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default CopyProductsContent;
