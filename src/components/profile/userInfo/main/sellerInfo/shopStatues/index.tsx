"use client";

import { Box, Button, Typography } from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";
import InfoButton from "../../infoButton";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import UserModel from "@/models/User";

type dataProps = {
  title: string;
  id: number;
};

const ShopStatus = ({
  data,
  title,
  value,
  onChange,
  onUpdate,
  user,
}: {
  data: dataProps[];
  title: string;
  value: number | string;
  onChange: (arg: number) => void;
  onUpdate: () => void;
  user?:UserModel
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [status, setStatus] = useState<number>(
    typeof value === "string" ? parseInt(value) : value
  );

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

  useEffect(() => {
    onChange(status);
    status !== value && setIsEdited(true);
  }, [status]);

  const handleSubmit = () => {
    if (!isEdited) {
      setIsEdited(true);
      setOpen(true);
    } else {
      const isActive = status == 1 ? true : false;
      if (isActive === user?.shop?.is_active) {
        return setIsEdited(false)
      }
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/update-shop/`,
          {
            is_active: isActive,
          },
          { headers: { Authorization: `Bearer ${Cookies?.get("access")}` } }
        )
        .then(() => handleSuccessfulSubmit())
        .catch((err) => {
          toast.error("خطا");
        });
    }
  };

  const handleSuccessfulSubmit = () => {
    toast.success("وضعیت فروشگاه شما با موفقیت بروز شد");
    onUpdate();
    setIsEdited(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        gap: 1,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
        <Typography
          sx={{
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "400",
            color: "text.main",
          }}
        >
          {title}
        </Typography>
        <InfoButton />
      </Box>
      <Box
        sx={{
          width: { lg: "70%", md: "65%", xs: "100%" },
        }}
      >
        <Box
          ref={dropdownRef}
          sx={{
            border: "0.5px solid",
            borderColor: open ? "button.main" : "border.main",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            padding: "15px 10px",
            color: "text.main",
            cursor: "pointer",
          }}
        >
          <Box
            onClick={() => setOpen(true)}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
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
            <Typography
              sx={{
                color: status ? "text.main" : "text.secondary",
                fontSize: "14px",
                fontWeight: "400",
                width: "100%",
              }}
            >
              {status > 0
                ? data?.filter((item) => item?.id === value)?.[0]?.title
                : `انتخاب ${title}`}
            </Typography>
          </Box>
          <Button
            onClick={handleSubmit}
            sx={{
              color: isEdited ? "badgeText.success" : "button.main",
              bgcolor: isEdited ? "badge.success" : "button.info",
              minWidth: "80px",
              ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
            }}
          >
            {isEdited ? "تایید" : value ? "بروزرسانی" : "افزودن"}
          </Button>
        </Box>
        {open && (
          <Box
            ref={buttonRef}
            sx={{
              border: "0.5px solid",
              borderColor: "border.main",
              borderRadius: "5px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 1.5,
              padding: "10px 14px",
              mt: "5px",
            }}
          >
            {/* row */}
            {data?.map((item) => (
              <Box
                onClick={() => {
                  setStatus(item?.id);
                  setOpen(false);
                }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  p: "10px 7px",
                  bgcolor: value === item?.id ? "hover.main" : "transparent",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "text.main",
                    userSelect: "none",
                  }}
                >
                  {item?.title}
                </Typography>
                {value === item?.id ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="7.5"
                      fill="#0961DC"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="7.5"
                      stroke="#0961DC"
                    />
                    <path
                      d="M11.3332 5.5L6.74984 10.0833L4.6665 8"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      border: "1px solid",
                      borderColor: "border.main",
                      borderRadius: "50px",
                    }}
                  ></Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ShopStatus;
