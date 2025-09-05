import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const DrawerAccordion = ({
  title,
  icon,
  loading,
  data,
  onSelect,
}: {
  title: string;
  icon?: React.ReactElement;
  loading: boolean;
  data:
    | {
        title: string;
        slug?: string;
        icon?: React.ReactElement;
        link?: string;
      }[]
    | undefined;
  onSelect?: () => void;
}) => {
  return (
    <Accordion
      sx={{
        bgcolor: "none",
        boxShadow: "none",
        color: "text.main",
        fontSize: { md: "16px", xs: "13px" },
        borderBottom: "none",
        borderColor: "background.element",
        width: "100% !important",
        py: "0px !important",
        m: 0,
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          marginBottom: 0, // Set margin bottom to 0
          "& .MuiAccordionDetails-root": {
            marginBottom: 0, // Override margin for details
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <Box sx={{ color: "icon.main", border: "none important" }}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 18L9.5 12L15.5 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        }
        sx={{
          py: 0,
          px: 2,
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(-90deg) !important",
          },
        }}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          sx={{
            color: "icon.main",
            display: "flex",
            alignItems: "canter",
            gap: "10px",
          }}
        >
          {icon}
          <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: "0px !important",
          bgcolor: "background.element",
          marginBottom: 0,
        }}
      >
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
            <CircularProgress size={20} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              px: 2,
              py: 1,
            }}
          >
            {data?.map((item, index) => (
              <Link
                href={item?.slug ? `/${item?.slug}` : item?.link!}
                key={index}
                onClick={onSelect}
              >
                <Box
                  sx={{
                    width: "100%",
                    px: 2,
                    py: 1,
                    bgcolor: "background.element",
                    borderRadius: "8px",
                    display: "flex",
                    gap: 1,
                    color: "text.content",
                  }}
                >
                  {item?.icon!}
                  <Typography sx={{ fontSize: "14px", color: "inherit" }}>
                    {item?.title}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default DrawerAccordion;
