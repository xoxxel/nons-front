"use client";

import { Box, Typography } from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";

interface Props {
  guaranteeDays: number;
  guaranteeDescripton: string;
  onDescriptionChange: (text: string) => void;
  onDaysChange: (arg: number) => void;
}

const Guarantee = ({
  guaranteeDays,
  guaranteeDescripton,
  onDescriptionChange,
  onDaysChange,
}: Props) => {
  const [isGuaranteeDesFocused, setIsGuaranteeDesFocused] =
    useState<boolean>(false);
  const [isProtectionOpen, setIsProtectionOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const days = [3, 7, 14, 30];

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const handleGuaranteeDesChange = (text: string) => {
    onDescriptionChange(text);
  };

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

  const handledayChange = (days: number) => {
    onDaysChange(days);
    setIsDropdownOpen(false);
  };

  return (
    <Box>
      <Box
        onClick={() => setIsProtectionOpen(!isProtectionOpen)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: "14px",
            height: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "2px",
              borderRadius: "5px",
              bgcolor: "text.main",
            }}
          ></Box>
          <Box
            sx={{
              width: "2px",
              height: "100%",
              borderRadius: "5px",
              bgcolor: "text.main",
              transform: "translateX(7px)",
              display: isProtectionOpen ? "none" : "block",
            }}
          ></Box>
        </Box>
        <Typography
          sx={{
            marginInlineStart: 1,
            color: "text.main",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          ضمانت محصول
        </Typography>
      </Box>
      <Box
        sx={{
          display: isProtectionOpen ? "block" : "none",
        }}
      >
        <Typography
          sx={{
            mt: "10px",
            mb: 3,
            color: "icon.main",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          ضمانت محصول به مخاطبان شما کمک میکند با اطمینان از شما خرید کنند و در
          افزایش نرخ تبدیل مشتریان شما تاثیرگذار است
        </Typography>

        <Box
          ref={inputRef}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          sx={{
            border: "0.5px solid",
            borderColor: isDropdownOpen ? "button.main" : "border.main",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            padding: "15px 10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
            {!guaranteeDays ? (
              <Typography
                sx={{
                  marginInlineStart: 1,
                  color: "text.secondary",
                  fontSize: "14px",
                  fontWeight: "400",
                  width: "100%",
                }}
              >
                انتخاب بازه زمانی
              </Typography>
            ) : (
              <Typography
                sx={{
                  marginInlineStart: 1,
                  color: "text.content",
                  fontSize: "14px",
                  fontWeight: "400",
                  width: "100%",
                }}
              >{guaranteeDays === 1 ? "1 روز (پیش‌فرض)" : `${guaranteeDays} روز`}</Typography>
            )}
          </Box>
        </Box>
        {isDropdownOpen && (
          <Box
            ref={dropdownRef}
            sx={{
              border: "1px solid",
              borderColor: "border.main",
              borderRadius: "5px",
              width: "100%",
              mt: "10px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              onClick={() => handledayChange(1)}
              sx={{
                py: 0.5,
                px: 1,
                borderRadius: "3px",
                cursor: "pointer",
                ":hover": { bgcolor: "hover.main" },
              }}
            >
              <Typography
                sx={{
                  color: "text.content",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >{`1 روز (پیش‌فرض)`}</Typography>
            </Box>
            {days?.map((day) => (
              <Box
                onClick={() => handledayChange(day)}
                sx={{
                  py: 0.5,
                  px: 1,
                  borderRadius: "3px",
                  cursor: "pointer",
                  ":hover": { bgcolor: "hover.main" },
                }}
              >
                <Typography
                  sx={{
                    color: "text.content",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >{`${day} روز`}</Typography>
              </Box>
            ))}
          </Box>
        )}
        <Box
          sx={{
            mt: "5px",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#FF3E3E",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            برداشت وجه محصولات دارای ضمانت پس از زمان ضمانت شده امکانپذیر است
          </Typography>
        </Box>
        <Box
          sx={{
            border: "0.5px solid",
            borderColor: isGuaranteeDesFocused ? "button.main" : "border.main",
            borderRadius: "5px",
            overflow: "hidden",
            color: "text.content",
            padding: "10px",
          }}
        >
          <textarea
            rows={6}
            className="user-instructions"
            placeholder="سیاست های ضمانت محصول را بنویسید..."
            value={guaranteeDescripton}
            onChange={(e) => handleGuaranteeDesChange(e.target.value)}
            onFocus={() => setIsGuaranteeDesFocused(true)}
            onBlur={() => setIsGuaranteeDesFocused(false)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              resize: "none",
              color: "inherit",
              padding: "0px 5px",
              fontSize: "14px",
              fontWeight: "500",
              background: "transparent",
            }}
          />
        </Box>
        <Box
          sx={{
            mt: "5px",
          }}
        >
          <Typography
            sx={{
              color: "#FF3E3E",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            مشتریان خود را از سیاست های ضمانت محصول مطلع کنید
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Guarantee;
