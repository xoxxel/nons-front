"use client";

import Cookies from "@/utils/cookie";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { RefObject, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const TagsSelect = ({
  data,
  value,
  onChange,
  shop,
  prevValue
}: {
  data: { title: string; id: number }[];
  value: number;
  onChange: (arg: number) => void;
  shop?:boolean;
  prevValue?: number;
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const selectedItem = data?.filter((item) => item?.id === value)?.[0];
  const [isEdited, setIsEdited] = useState(false);

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

  const handleChange = (id: number) => {
    onChange(id);
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!isEdited) {
      setIsEdited(true), setOpen(true);
    } else {
      if(selectedItem){
        if (value === prevValue) {
          return setIsEdited(false)
        }
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/${shop ? "update-shop" : "user"}/`,
          shop? { tags: value } : { tag: value },
          {
            headers: { Authorization: `Bearer ${Cookies.get("access")}` },
          }
        )
        .then((res) => {
          toast.success("تگ شما با موفقیت ثبت شد");
          setIsEdited(false);
        })
        .catch((err) => toast.error("خطای سرور"));}
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: { md: "15px", xs: "10px" },
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
        <Box
          sx={{ width: "100%", cursor: "pointer" }}
          ref={buttonRef}
          onClick={() => {setOpen(true);setIsEdited(true)}}
        >
          {value !== -1 ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: { md: "14px", xs: "12px" } }}
              >
                {selectedItem?.title}
              </Typography>
            </Box>
          ) : (
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                color: "text.secondary",
              }}
            >
              انتخاب تگ
            </Typography>
          )}
        </Box>
        <Button
          onClick={handleSubmit}
          sx={{
            color: isEdited ? "badgeText.success" : "button.main",
            bgcolor: isEdited ? "badge.success" : "button.info",
            minWidth: "80px",
            ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
            display:{md:"block",xs:"none"}
          }}
        >
          {isEdited ? "تایید" : value < 0 ? "افزودن" : "بروزرسانی"}
        </Button>
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {data?.map((item) => (
              <Box
                key={item?.id}
                onClick={() => handleChange(item?.id)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: "6px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  bgcolor: value === item?.id ? "hover.main" : "transparent",
                }}
              >
                <Box
                  sx={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "14px", xs: "12px" },
                      fontWeight: "400",
                      color: "text.main",
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Box>
                {value === item?.id && (
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
        </Box>
      )}
    </>
  );
};

export default TagsSelect;
