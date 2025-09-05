"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import RealtedProducts from "./relatedProducts";
import Guarantee from "./guarantee";

type AdditionalInformationsType = {
  related_products: number[];
  instructions: string;
  guarantee_days: number;
  guarantee_description: string;
};

const AdditionalInformation = ({
  data,
  setData,
}: {
  data: AdditionalInformationsType;
  setData: React.Dispatch<React.SetStateAction<AdditionalInformationsType>>;
}) => {
  const [isRelatedProductOpen, setIsRelatedProductOpen] =
    useState<boolean>(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState<boolean>(false);
  const [isInstructionsFocused, setIsInstructionsFocused] =
    useState<boolean>(false);

  const doneTask =
    (data?.related_products?.length > 0
      ? 1
      : 0) + (data?.instructions
      ? 1
      : 0) + (data?.guarantee_days
      ? 1
      : 0);

  const handleInstructionChange = (text: string) => {
    setData((prev) => ({ ...prev, instructions: text }));
  };

  const handleGuaranteeDesChange = (text: string) => {
    setData((prev) => ({ ...prev, guarantee_description: text }));
  };

  const handleGuaranteeDaysChange = (days: number) => {
    setData((prev) => ({ ...prev, guarantee_days: days }));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignitems: "center" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "900", color: "text.main" }}
          >
            اطلاعات تکمیلی
          </Typography>
          <Box
            sx={{
              fontWeight: "400",
              color: "#06D6A0",
              border: "0.5px solid",
              borderColor: "#06D6A0",
              px: 0.5,
              borderRadius: "5px",
            }}
          >
            اختیاری
          </Box>
        </Box>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "900", color: "text.main" }}
        >
          {`${doneTask}/3`}
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "end", mt: 4 }}
      >
        <Box sx={{ width: { lg: "70%", md: "65%", xs: "100%" } }}>
          <Box>
            <Box
              onClick={() => setIsRelatedProductOpen(!isRelatedProductOpen)}
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
                    display: isRelatedProductOpen ? "none" : "block",
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
                محصولات مرتبط
              </Typography>
            </Box>
            <Box
              sx={{
                display: isRelatedProductOpen ? "block" : "none",
              }}
            >
              <Typography
                sx={{
                  mt: "10px",
                  mb: 4,
                  color: "icon.main",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                محصولات مرتبط را پیوند دهید و مشتریان خود را از تنوع محصولات خود
                مطلع کنید
              </Typography>
              <RealtedProducts
                value={data?.related_products}
                onSubmit={(ids) =>
                  setData((prev) => ({ ...prev, related_products: ids }))
                }
                onDelete={(id) =>
                  setData((prev) => ({
                    ...prev,
                    related_products: prev?.related_products?.filter(
                      (item) => item !== id
                    ),
                  }))
                }
              />
            </Box>
          </Box>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Box
              onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
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
                    display: isInstructionsOpen ? "none" : "block",
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
                دستورالعمل های استفاده
              </Typography>
            </Box>
            <Box
              sx={{
                display: isInstructionsOpen ? "block" : "none",
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
                دستورالعمل های استفاده به مشتریان شما کمک میکند با کاربرد محصول
                شما بهتر آشنا شوند و تاثیر چشمگیری در فروش شما خواهد داشت
              </Typography>
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: isInstructionsFocused
                    ? "button.main"
                    : "border.main",
                  p: "10px",
                  borderRadius: "5px",
                  color: "text.content",
                }}
              >
                <textarea
                  rows={8}
                  className="user-instructions"
                  value={data?.instructions}
                  onFocus={() => setIsInstructionsFocused(true)}
                  onBlur={() => setIsInstructionsFocused(false)}
                  onChange={(e) => handleInstructionChange(e.target.value)}
                  style={{
                    color: "inherit",
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    resize: "none",
                    border: "none",
                    outline: "none",
                  }}
                />
              </Box>
              <Box
                sx={{
                  mt: "5px",
                  display: "flex",
                  justifyContent: "flex-end",
                  px: "5px",
                }}
              >
                <Typography
                  sx={{
                    color: "icon.main",
                    fontSize: "14px",
                    fontWeight: "400",
                    visibility: data?.instructions?.length
                      ? "visible"
                      : "hidden",
                  }}
                >
                  {`${data?.instructions?.length} کاراکتر`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Guarantee
              guaranteeDays={data?.guarantee_days}
              guaranteeDescripton={data?.guarantee_description}
              onDescriptionChange={(text) => handleGuaranteeDesChange(text)}
              onDaysChange={(days) => handleGuaranteeDaysChange(days)}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdditionalInformation;
