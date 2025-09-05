"use client";
import { ShopStepContext } from "@/context/shopStepsProvider";
import { UserContext } from "@/context/UserProvider";
import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect } from "react";

const Confirmations = ({withoutButtons}:{withoutButtons?:boolean}) => {
  const { user,setIsSeller } = useContext(UserContext);
  const { focusingStep, setFocusingStep } = useContext(ShopStepContext);
  const makeConfirmationsArray = () => {
    const data = [
      {
        title: "شماره موبایل",
        stepName: "number",
        isPassed: false,
        priority: 0,
        isNextStep: false,
      },
      {
        title: "ایمیل",
        stepName: "email",
        isPassed: false,
        priority: 1,
        isNextStep: false,
      },
      {
        title: "کد ملی",
        stepName: "nationalCode",
        isPassed: false,
        priority: 2,
        isNextStep: false,
      },
      {
        title: "انتخاب نام فروشگاه",
        stepName: "shopName",
        isPassed: false,
        priority: 3,
        isNextStep: false,
      },
    ];

    if (user?.number) data[0].isPassed = true;
    if (user?.email) data[1].isPassed = true;
    if (user?.national_id) data[2].isPassed = true;
    data[3].isPassed = user?.has_shop;

    // Sort the data array
    data.sort((a, b) => {
      if (a.isPassed === b.isPassed) {
        return a.priority - b.priority; // Sort by priority if isPassed is the same
      }
      return a.isPassed ? -1 : 1; // Sort isPassed: true first
    });

    const nextStep = data?.findIndex((item) => !item?.isPassed);
    if (nextStep !== -1) data[nextStep].isNextStep = true;

    return data;
  };

  const confirmationsStep = makeConfirmationsArray();

  useEffect(()=>{
    if(focusingStep === "shopName") {
      setIsSeller(true)
    }
  },[focusingStep])

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4, mb: 1 }}
    >
      {confirmationsStep?.map((step) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {step?.isPassed ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="#4C5357"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2291_1421)">
                <path
                  d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                  stroke="#4C5357"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2291_1421">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              color: "text.secondary",
            }}
          >
            {step?.title}
          </Typography>
          {(!withoutButtons && step?.isNextStep) && (
            <Button
            onClick={()=> setFocusingStep(step?.stepName)}
              sx={{
                color: "button.main",
                border: "2px solid",
                borderColor: "button.main",
                py: 0,
                minWidth: "10px",
              }}
            >
              تایید
            </Button>
          )}
        </Box>
      ))}
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          color: "text.secondary",
          textDecoration: "underline",
        }}
      >
        درباره احراز هویت بدانید
      </Typography>
    </Box>
  );
};

export default Confirmations;
