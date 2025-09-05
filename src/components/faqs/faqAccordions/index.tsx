import React from "react";
import { Container, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import an icon for the arrow
import { useState } from "react";
import FaqSkeleton from "@/components/skeletons/faqAccordions";
import FAQModel from "@/models/FAQ";

const FaqAccordion = ({ loading, faqs }: { loading: boolean, faqs: FAQModel[] }) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <Box
                className="products_accordion"
                sx={{
                    "& > .Mui-expanded": {
                        borderColor: "primary.main",
                    },
                    "& > *": {
                        transition: "border 0.2s",
                        // borderColor: "background.element",
                        borderRadius: "0px !important",
                    },
                }}
            >
                {
                    loading ?
                        Array(8).fill(5).map(() => (
                            <FaqSkeleton />
                        ))
                        :
                        faqs?.map((faq, index) => (

                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    boxShadow: "none",
                                    position: "unset",
                                    borderRight: expanded === `panel${index}` ? "3px solid" : "none",
                                    borderColor: "primary.main",
                                    borderBottom: expanded === `panel${index}` ? "none" : "0.5px solid",
                                    borderBottomColor: "border.main",
                                    borderRadius: "5px !important",
                                    pb: "5px",
                                    backgroundImage: "none",
                                    backgroundColor: expanded === `panel${index}` ? "background.secondary" : "background.main",

                                }}
                            >
                                <AccordionSummary
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{
                                        backgroundColor: expanded === `panel${index}` ? "background.secondary" : "background.main",
                                        backdropFilter: "blur(1px)",
                                        color: expanded === `panel${index}` ? "primary.main" : "text.main",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        display: "flex",
                                        alignItems: "center",
                                        borderRadius: "5px 5px 0px 0px",
                                        width: "100%",
                                        "& > .MuiAccordionSummary-content": {
                                            justifyContent: "space-between",
                                        }
                                    }}
                                >

                                  {faq?.question}
                                    <Box
                                        sx={{
                                            transition: "all 0.2s",
                                            marginRight: "8px",
                                            backgroundColor: expanded === `panel${index}` ? "transparent" : "primary.main",
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "65px", display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transform: expanded === `panel${index}` ? "rotate(90deg)" : "rotate(0deg)"
                                        }}
                                    >
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.75 12.5L1.25 7L6.75 1.5" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        backgroundColor: "background.secondary",
                                        fontSize: { md: "17px", xs: "13px" },
                                        fontWeight: "400",
                                        lineHeight: 2,
                                        pt: 1,
                                        pb: 4,
                                        color: "text.main",
                                        borderRadius: "0px 0px 5px 5px",
                                    }}
                                >
                                    {faq?.answer}
                                </AccordionDetails>
                            </Accordion>
                        ))}
            </Box>
        </Container>
    );
};

export default FaqAccordion;
