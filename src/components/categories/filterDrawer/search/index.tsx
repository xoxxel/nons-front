"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

type DataProps = { image?: string; title: string; id: number; icon?: string };

type SearchProps<T extends boolean> = {
  title?: string;
  WithoutTopTitle?: boolean;
  bordered?: boolean;
  data: DataProps[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  selectedItems: number[];
  withoutIcons?: boolean;
  searchable?: T;
} & (T extends true
  ? { onSearch: (query: string) => void }
  : { onSearch?: never });

const Search = <T extends boolean>({
  title,
  WithoutTopTitle,
  bordered,
  data,
  setSelectedItems,
  selectedItems,
  withoutIcons,
  searchable,
  onSearch, // This will conditionally require onSearch based on searchable
}: SearchProps<T>) => {
  const [open, setOpen] = useState(false);
  const [pickedItems, setPickedItems] = useState<DataProps[]>([]);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Update pickedItems whenever selectedItems change
    const orderedItems = selectedItems
      ?.map((id) => data?.find((item) => item.id === id))
      ?.filter((item): item is DataProps => item !== undefined); // Filter out undefined values

      setPickedItems(orderedItems);
  }, [selectedItems, data]);

  useEffect(() => {
    if (open) {
      // Update pickedItems when dropdown opens
      const orderedItems = selectedItems
        ?.map((id) => data?.find((item) => item.id === id))
        ?.filter((item): item is DataProps => item !== undefined);
      setPickedItems(orderedItems);
    }
  }, [open, selectedItems, data]);

  function useOutsideClick<T extends HTMLElement>(
    dropdownRef: RefObject<T>,
    buttonRef: RefObject<T>
  ) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setTimeout(() => {
            setOpen(false);
          }, 100);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef, buttonRef]);
  }

  useOutsideClick(dropdownRef, buttonRef);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (onSearch && searchable) {
      onSearch(e.target.value);
    }
  };

  return (
    <Box>
      {!WithoutTopTitle && (
        <Typography
          sx={{
            color: "text.main",
            mb: 2,
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
      )}
      <Box
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: "border.main",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <Box
          onClick={() => setOpen(true)}
          ref={buttonRef}
          sx={{ width: "100%", p: "12px" }}
        >
          {!searchable ? (
            <Box>
              {selectedItems?.length === 0 ? (
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "13px",
                    zIndex: 9,
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  {`${title} مورد نظر خود را انتخاب کنید`}
                </Typography>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    transition: "all 0.3s ease",
                  }}
                >
                  {pickedItems?.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        borderRadius: "5px",
                        p: "4px 8px",
                        bgcolor: bordered ? "background.main" : "#2F3537",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        border: bordered ? "0.5px solid" : "none",
                        borderColor: "border.main",
                      }}
                    >
                      {!withoutIcons && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER}/${item?.icon}`}
                          width={22}
                          height={22}
                          alt="picked item"
                          style={{ objectFit: "contain" }}
                        />
                      )}
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "400",
                          color: bordered ? "text.main" : "white",
                        }}
                      >
                        {item?.title}
                      </Typography>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          setPickedItems(
                            pickedItems.filter(
                              (picked) => picked.id !== item.id
                            )
                          );
                          setSelectedItems(
                            selectedItems.filter((number) => number !== item.id)
                          );
                        }}
                      >
                        <path
                          d="M11.75 4.25L4.25 11.75M4.25 4.25L11.75 11.75"
                          stroke="#848686"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ) : (
            <input
              type="text"
              placeholder={`جستجوی ${title}`}
              value={searchTerm}
              onChange={handleSearchInputChange}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                width: "100%",
                color: "var(--mui-palette-text-content)",
              }}
            />
          )}
        </Box>
        <Box
          id="closeSVG"
          sx={{
            color: "text.secondary",
            height: "20px",
            ml: "12px",
            rotate: open ? "180deg" : "0deg",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
      {open && (
        <Box
          ref={dropdownRef}
          className="scrollbarHidden"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            bgcolor: "background.element",
            gap: 1.5,
            mt: 1,
            p: "10px 6px",
            border: bordered ? "0.5px solid" : "none",
            borderColor: "border.main",
            maxHeight:"300px",
            overflowY:"scroll",
          }}
        >
          {data?.map((item, index) => (
            <Box
              key={index}
              onClick={() =>
                setSelectedItems(
                  selectedItems.includes(item.id)
                    ? selectedItems.filter((brandID) => brandID !== item.id)
                    : [...selectedItems, item.id]
                )
              }
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "2px 6px",
                bgcolor: selectedItems.includes(item.id)
                  ? bordered
                    ? "background.main"
                    : "#2F3537"
                  : "transparent",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {!withoutIcons && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER}/${item.icon}`}
                    width={22}
                    height={22}
                    alt={item.title}
                    style={{ objectFit: "contain" }}
                  />
                )}
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: "400",
                    color: selectedItems.includes(item.id)
                      ? bordered
                        ? "text.main"
                        : "white"
                      : "text.main",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              {selectedItems.includes(item.id) && (
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1668 5L8.00016 14.1667L3.8335 10"
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
      )}
    </Box>
  );
};

export default Search;
