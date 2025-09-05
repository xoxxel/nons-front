"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

const DropDownWithIcon = ({
  data,
  value,
  onChange,
  onSearch,
  loading,
}: {
  data: { icon: string; title: string; title_en?: string; id: number }[];
  value:
    | { icon: string; title: string; title_en?: string; id: number }
    | undefined;
  onChange: (itemID: number) => void;
  onSearch: (searchText: string) => void;
  loading?: boolean;
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
    onChange(0);
  };

  const handleSelect = (item: {
    icon: string;
    title: string;
    title_en?: string;
    id: number;
  }) => {
    onChange(item?.id);
    setSearchTerm(item?.title_en || item?.title);
    setOpen(false);
  };

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        ref={buttonRef}
        sx={{
          width: "100%",
          py: "15px",
          px: "10px",
          border: "0.5px solid",
          borderColor: open ? "button.main" : "border.main",
          borderRadius: "5px",
          color: "text.main",
          display: "flex",
          alignItems: "center",
          gap: "10px",
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {value && (
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER}/${value?.icon}`}
              width={22}
              height={22}
              alt={value?.title}
              style={{ borderRadius: "3px" }}
            />
          )}
          {/* <Typography>
              {selectedItem?.title_en || selectedItem?.title}
            </Typography> */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="جستجوی برند ها"
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--mui-palette-text-content)",
            }}
          />
        </Box>
      </Box>
      {open && (
        <Box
          ref={dropdownRef}
          className="scrollbarHidden"
          sx={{
            border: "0.5px solid",
            borderColor: "border.main",
            mt: "10px",
            borderRadius: "8px",
            p: "10px",
            maxHeight: "280px",
            overflowY: "scroll",
          }}
        >
          {!loading ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {data?.map((item) => (
                <Box
                  key={item?.id}
                  onClick={() => handleSelect(item)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: "6px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    bgcolor:
                      value?.id === item?.id ? "hover.main" : "transparent",
                  }}
                >
                  <Box
                    sx={{ display: "flex", gap: "12px", alignItems: "center" }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER}/${item?.icon}`}
                      width={22}
                      height={22}
                      alt={item?.title}
                      style={{ borderRadius: "3px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "text.main",
                      }}
                    >
                      {item?.title_en ?? item?.title}
                    </Typography>
                  </Box>
                  {value?.id === item?.id && (
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
              ))}
            </Box>
          ) : (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            ></Box>
          )}
        </Box>
      )}
    </>
  );
};

export default DropDownWithIcon;
