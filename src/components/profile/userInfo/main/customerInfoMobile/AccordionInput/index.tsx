"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { BeatLoader } from "react-spinners";

type Props = {
  title: string;
  disabled: boolean;
  value?: string;
  description?: string;
  error?: string;
  open?: boolean;
  loading?: boolean;
  buttonText?: string | undefined;
  onChange?: (arg: string) => void;
  onSubmit?: () => void;
  onOpen?: () => void;
};

const AccordionInput = ({
  children,
  props,
}: {
  props: Props;
  children?: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(props?.value ?? "");
  }, [props?.value]);

  useEffect(() => {
    if (props?.open !== undefined) setIsExpanded(props?.open);
  }, [props?.open]);

  const handleChange = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (props?.onChange) {
      props.onChange(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    if (isExpanded) {
      if (props?.onOpen) props?.onOpen();
    }
  }, [isExpanded]);

  const emptyValueExpandSVG = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 3.125V11.875M3.125 7.5H11.875"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const expandSVG = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.375 11.25L5.625 7.5L9.375 3.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const closeSVG = (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 3.75L3.75 11.25M3.75 3.75L11.25 11.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Accordion
      sx={{
        bgcolor: "transparent",
        backgroundImage: "none",
        color: "icon.main",
        boxShadow: "none",
        "&.Mui-disabled": {
          bgcolor: "transparent",
        },
      }}
      expanded={isExpanded}
      onChange={handleChange}
      disabled={props?.disabled}
    >
      <AccordionSummary
        expandIcon={
          isExpanded ? closeSVG : props.value ? expandSVG : emptyValueExpandSVG
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ minHeight: "55px !important" }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              color: "text.secondary",
            }}
          >{`${props?.title} :`}</Typography>
          {props?.value && (
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                color: "text.secondary",
                mt: 0.25,
              }}
            >
              {props?.value}
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        {props?.description && (
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "500",
              color: "text.secondary",
            }}
          >
            {props?.description}
          </Typography>
        )}
        {children ? (
          children
        ) : (
          <Box>
            <Box
              sx={{
                width: "100%",
                border: "0.5px solid",
                borderColor: "button.main",
                borderRadius: "5px",
                overflow: "hidden",
                mt: "10px",
                color: "text.content",
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`${props?.title} خود را اینجا بنویسید`}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                  color: "inherit",
                }}
              />
            </Box>
          </Box>
        )}
        {props?.error && (
          <Typography
            sx={{
              color: "#FF3E3E",
              fontSize: "11px",
              fontWeight: "500",
              mt: 1,
            }}
          >
            {props?.error}
          </Typography>
        )}
        {props?.onSubmit && (
          <Button
            onClick={() => props?.onSubmit && props.onSubmit()}
            sx={{
              bgcolor: "other.main",
              borderRadius: "5px",
              color: "navigation.main",
              minWidth: "148px",
              minHeight: "33px",
              mt: 3,
              fontSize: "12px",
              fontWeight: "600",
              ": hover": { bgcolor: "other.main" },
            }}
          >
            {props?.loading ? (
              <BeatLoader size={8} color="var(--mui-palette-navigation-main)" />
            ) : (
              props?.buttonText || "تایید"
            )}
          </Button>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionInput;
