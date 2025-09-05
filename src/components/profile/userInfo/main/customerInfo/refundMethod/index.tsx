"use client";

import Cookies from "@/utils/cookie";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

type FormDataType = {
  username: string;
  name: string;
  mobile: string;
  national_id: string;
  birthdate: Date | string;
  email: string;
  tag: number;
  return_option: "Wallet" | "Bank" | "";
};

const RefundMethod = ({
  method,
  onChange,
  withoutButton
}: {
  method: "Wallet" | "Bank" | "";
  onChange: (arg: "Wallet" | "Bank") => void;
  withoutButton?:boolean
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
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
          setIsOpen(false);
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

  const setMethod = (method: "Wallet" | "Bank") => {
    onChange(method);
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!isEdited) {
      setIsEdited(true), setIsOpen(true);
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/user/user/`,
          { return_option: method },
          {
            headers: { Authorization: `Bearer ${Cookies.get("access")}` },
          }
        )
        .then((res) => {
          handleSuccessfulChange();
        })
        .catch((err) => toast.error("خطای سرور"));
    }
  };

  const handleSuccessfulChange = () => {
    toast.success("روش استرداد با موفقیت ثبت شد");
    setIsEdited(false), setIsOpen(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        onClick={() => {
          setIsOpen(true);
          setIsEdited(true);
        }}
        ref={buttonRef}
        sx={{
          border: "0.5px solid",
          borderColor: "border.main",
          borderRadius: "5px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "15px 10px",
          justifyContent: "space-between",
        }}
      >
        {
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {method === "Bank" ? (
              <Box sx={{ color: "text.main", height: "20px" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6.99904V14.999M7.5 6.99904V14.999M12.5 6.99904V14.999M17 6.99904V14.999M1 16.599L1 17.399C1 17.9591 1 18.2391 1.10899 18.453C1.20487 18.6412 1.35785 18.7942 1.54601 18.89C1.75992 18.999 2.03995 18.999 2.6 18.999H17.4C17.9601 18.999 18.2401 18.999 18.454 18.8901C18.6422 18.7942 18.7951 18.6412 18.891 18.453C19 18.2391 19 17.9591 19 17.399V16.599C19 16.039 19 15.759 18.891 15.5451C18.7951 15.3569 18.6422 15.2039 18.454 15.108C18.2401 14.999 17.9601 14.999 17.4 14.999H2.6C2.03995 14.999 1.75992 14.999 1.54601 15.108C1.35785 15.2039 1.20487 15.3569 1.10899 15.5451C1 15.759 1 16.039 1 16.599ZM9.65291 1.07617L2.25291 2.72062C1.80585 2.81997 1.58232 2.86964 1.41546 2.98985C1.26829 3.09588 1.15273 3.23994 1.08115 3.40661C1 3.59557 1 3.82455 1 4.28252L1 5.39904C1 5.9591 1 6.23912 1.10899 6.45303C1.20487 6.6412 1.35785 6.79418 1.54601 6.89005C1.75992 6.99904 2.03995 6.99904 2.6 6.99904H17.4C17.9601 6.99904 18.2401 6.99904 18.454 6.89005C18.6422 6.79418 18.7951 6.6412 18.891 6.45303C19 6.23912 19 5.9591 19 5.39904V4.28252C19 3.82455 19 3.59557 18.9188 3.40661C18.8473 3.23994 18.7317 3.09588 18.5845 2.98985C18.4177 2.86964 18.1942 2.81997 17.7471 2.72062L10.3471 1.07617C10.2176 1.04739 10.1528 1.033 10.0874 1.02726C10.0292 1.02216 9.97077 1.02216 9.91264 1.02726C9.8472 1.033 9.78244 1.04739 9.65291 1.07617Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            ) : (
              <Image
                src="/images/logo-mobile.png"
                width={24}
                height={24}
                alt="nons"
              />
            )}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: method === "" ? "text.secondary" : "text.main",
              }}
            >
              {method === "Bank" ? "حساب بانکی" : "کیف پول نونز"}
            </Typography>
            {method === "" && (
              <Box
                sx={{
                  fontSize: "12px",
                  color: "button.main",
                  border: "1px solid",
                  borderColor: "button.main",
                  padding: "2px 8px",
                  borderRadius: "5px",
                }}
              >
                پیشفرض
              </Box>
            )}
          </Box>
        }
        {!withoutButton && <Button
          onClick={handleSubmit}
          sx={{
            color: isEdited ? "badgeText.success" : "button.main",
            bgcolor: isEdited ? "badge.success" : "button.info",
            minWidth: "80px",
            ":hover": { bgcolor: isEdited ? "badge.success" : "button.info" },
          }}
        >
          {isEdited ? "تایید" : method === "" ? "افزودن" : "بروزرسانی"}
        </Button>}
      </Box>
      {isOpen && (
        <Box
          ref={dropdownRef}
          sx={{
            width: "100%",
            border: "0.5px solid",
            borderColor: "border.main",
            mt: "5px",
            borderRadius: "5px",
            p: "10px 14px",
          }}
        >
          {/* nons wallet */}
          <Box
            onClick={() => setMethod("Wallet")}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              borderRadius: "5px",
              p: "10px 16px",
              cursor: "pointer",
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Image
                src="/images/logo-mobile.png"
                width={24}
                height={24}
                alt="nons-wallet"
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: {md:"16px",xs:"13px"},
                    fontWeight: "600",
                    color: "text.secondary",
                  }}
                >
                  کیف پول نونز
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "16px", height: "16px" }}>
              {method === "Wallet" ? (
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
                    d="M11.3327 5.5L6.74935 10.0833L4.66602 8"
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
                    borderRadius: "50px",
                    border: "1px solid",
                    borderColor: "text.secondary",
                  }}
                ></Box>
              )}
            </Box>
          </Box>
          {/* bank account */}
          <Box
            onClick={() => setMethod("Bank")}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              borderRadius: "5px",
              p: "10px 16px",
              cursor: "pointer",
              mt: 1,
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box sx={{ width: "24px", height: "24px", color: "icon.main" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {md:"16px",xs:"13px"},
                    fontWeight: "600",
                    color: "text.secondary",
                  }}
                >
                  حساب بانکی
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "16px", height: "16px" }}>
              {method === "Bank" ? (
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
                    d="M11.3327 5.5L6.74935 10.0833L4.66602 8"
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
                    borderRadius: "50px",
                    border: "1px solid",
                    borderColor: "text.secondary",
                  }}
                ></Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RefundMethod;
