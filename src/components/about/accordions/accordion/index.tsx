"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const ExpandMoreIcon = () => {
  return (
    <Box
      sx={{
        width: { md: "40px", xs: "32px" },
        height: { md: "40px", xs: "32px" },
        bgcolor: "primary.main",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "0.25px solid black !important",
      }}
    >
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 9L12.5 15L18.5 9"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

const JobAccordion = ({
  number,
  title,
  text,
  isOpen,
  onOpen,
}: {
  number: number;
  title: string;
  text: string;
  isOpen: boolean;
  onOpen: (id: number) => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  useEffect(() => {
    setExpanded(isOpen);
  }, [isOpen]);

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      onClick={()=>onOpen(number)}
      sx={{
        borderRadius: "20px !important",
        bgcolor: expanded ? "primary.main" : "background.element", // Change color on expand
        border: "none",
        boxShadow: "none",
        p: 1,
        "&::before": {
          height: "0px",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography
            sx={{
              color: expanded ? "black !important" : "white",
              fontSize: { md: "20px", xs: "14px" },
            }}
            component="span"
          >
            {number < 10 ? `0${number}` : number}
          </Typography>
          <Typography
            sx={{
              color: expanded ? "black !important" : "white",
              fontSize: { md: "20px", xs: "14px" },
            }}
            component="span"
          >
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            color: "black !important",
            textAlign: "start",
            fontSize: { md: "16px", xs: "14px" },
          }}
        >
          {text}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default JobAccordion;
