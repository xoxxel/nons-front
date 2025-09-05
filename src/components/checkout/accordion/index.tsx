import OrderModel from "@/models/Order";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const CheckoutAccordion = ({ order }: { order: OrderModel }) => {
  return (
    <Box
      className="products_accordion"
      sx={{
        mt: { md: "10px", xs: "0px" },
        borderRadius: "5px",
        bgcolor: "background.secondary",
        py: "7px",
        px: 0,
      }}
    >
      <Accordion
        sx={{
          boxShadow: "none",
          position: "unset",
          backgroundColor: "transparent",
          backgroundImage: "none",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            color: "text.main",
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "500",
          }}
        >
          سوالات متداول
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "text.main",
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "400",
            lineHeight: 2,
            pt: 1,
            pb: 4,
          }}
        >
          {
            order?.faq?.map((item)=>
              <>
              <Typography sx={{mb:2,fontWeight:"600"}}>{item?.question}</Typography>
              <Typography>{item?.answer}</Typography>
              </>
            )
          }
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: "none",
          position: "unset",
          backgroundColor: "transparent",
          backgroundImage: "none",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            color: "text.main",
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "500",
          }}
        >
          راهنمای استفاده
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "text.main",
            fontSize: { md: "16px", xs: "13px" },
            fontWeight: "400",
            lineHeight: 2,
            pt: 1,
            pb: 4,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: order?.guide || "" }} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CheckoutAccordion;
