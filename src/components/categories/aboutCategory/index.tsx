"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import CategoryAccordions from "../categoryAccaordions";
import { useState } from "react";

const AboutCategory = ({ brand }: { brand: BrandDetailsModel }) => {
  const [tab, setTab] = useState<"faq" | "guide" | "description">("faq");

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: "12px",
          p: { md: 3, xs: 2 },
        }}
      >
        <Box
          sx={{
            width: "75px",
            height: "75px",
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER}/${brand?.icon}`}
            fill
            alt={brand?.icon}
          />
        </Box>
        <Typography
          sx={{ color: "text.content", fontSize: "29px", fontweight: "600",mt:1 }}
        >
          {`درباره برند ${brand?.title_en}`}
        </Typography>
        <Typography
          sx={{ color: "text.secondary", fontSize: "21px", fontweight: "500" }}
        >
          {brand?.title_fa}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <Button
            onClick={() => setTab("description")}
            sx={{
              px: 3,
              fontWeight: "600",
              bgcolor:
                tab === "description" ? "button.main" : "background.secondary",
              color: tab === "description" ? "white" : "text.content",
              py: 1,
              ":hover": {
                bgcolor:
                  tab === "description"
                    ? "button.main"
                    : "background.secondary",
              },
            }}
          >
            توضیحات برند
          </Button>
          <Button
            onClick={() => setTab("faq")}
            sx={{
              px: 3,
              fontWeight: "600",
              bgcolor: tab === "faq" ? "button.main" : "background.secondary",
              color: tab === "faq" ? "white" : "text.content",
              py: 1,
              ":hover": {
                bgcolor: tab === "faq" ? "button.main" : "background.secondary",
              },
            }}
          >
            سوالات متداول
          </Button>
          <Button
            onClick={() => setTab("guide")}
            sx={{
              px: 3,
              fontWeight: "600",
              bgcolor: tab === "guide" ? "button.main" : "background.secondary",
              color: tab === "guide" ? "white" : "text.content",
              py: 1,
              ":hover": {
                bgcolor:
                  tab === "guide" ? "button.main" : "background.secondary",
              },
            }}
          >
            راهنمای استفاده
          </Button>
        </Box>
        {tab === "description" && (
          <Box
            sx={{
              fontSize: { md: "16px", xs: "13px" },
              lineHeight: 2,
              pt:6,
              pb:3,
              px:10,
              color: "text.main",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: brand?.text }} />
          </Box>
        )}
        {tab === "faq" && <CategoryAccordions faqs={brand?.faqs} />}
        {tab === "guide" && (
          <Box
          sx={{
            fontSize: { md: "16px", xs: "13px" },
            lineHeight: 2,
            pt:6,
            pb:3,
            px:10,
            color: "text.main",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: brand?.giude }} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default AboutCategory;
