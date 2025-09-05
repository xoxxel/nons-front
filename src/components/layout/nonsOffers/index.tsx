"use client";
import { fetchSuggestedLinks } from "@/api/data";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { title } from "process";
import { useEffect, useRef, useState } from "react";

type LinksType = {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
};

const NonsOffers = () => {
  const [tab, setTab] = useState("tab-0");
  const prevTabIndex = useRef<number>(0);
  const [links, setLinks] = useState<LinksType[]>([]);

  useEffect(() => {
    prevTabIndex.current = parseInt(tab?.[tab?.length - 1]);
  }, [tab]);

  useEffect(() => {
    fetchSuggestedLinks()
      .then((res) => setLinks(res))
      .catch((err) =>
        console.error(
          "error on fetchin suggestion links at the bottom of the main page",
          err
        )
      );
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography
        sx={{
          color: "text.main",
          fontSize: { md: "29px", xs: "16px" },
          fontWeight: "600",
          mb: { md: 6, xs: 3 },
        }}
      >
        پیشنهادات نونز
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "30px",
            height: "100%",
            bgcolor: "red",
            position: "absolute",
            left: 0,
            background:
              "linear-gradient(90deg, var(--mui-palette-background-main) 35%, rgba(255,0,0,0) 100%)",
            top: 0,
            zIndex: 10,
          }}
        ></Box>
        <Box
          className="scrollbarHidden"
          sx={{
            display: "flex !important",
            gap: 1,
            mb: 3,
            pl: 3.5,
            pr: { md: 3, xs: 0 },
            overflowX: "auto",
            "& > button": {
              flexShrink: 0,
              flexGrow: 0,
              flexBasis: "auto",
            },
          }}
        >
          {links?.map((item: LinksType, index: number) => (
            <Button
              key={index}
              onClick={() => setTab(`tab-${index}`)}
              sx={{
                borderRadius: "8px",
                color: tab === `tab-${index}` ? "#FFFFFF" : "text.main",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                bgcolor: tab === `tab-${index}` ? "#2C2C2C" : "transparent",
                boxShadow:
                  tab === `tab-${index}` ? "0px 4px 4px 0px #00000024" : "none",
                ":hover": {
                  bgcolor: tab === `tab-${index}` ? "#2C2C2C" : "transparent",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  width: "100%",
                  color: tab === `tab-${index}` ? "white" : "text.main",
                  fontSize: { md: "16px !important", xs: "13px !important" },
                }}
              >
                {item?.title}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
      <Box sx={{ pr: { md: 3, xs: 0 } }}>
        <Box
          sx={{
            width: "100%",
            borderRadius: "12px",
            bgcolor: "background.element",
            py: 3,
            px: { lg: 6, md: 4, xs: 1 },
            overflow: "hidden",
          }}
        >
          {links?.map(
            (item: LinksType, index: number) =>
              tab === `tab-${index}` && (
                <Grid key={index} container rowSpacing={3} columnSpacing={2}>
                  {item?.links?.map((link) => (
                    <Grid item md={3} xs={6}>
                      <Link href={link?.link}>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            textAlign: "center",
                            width: "100%",
                            fontSize: { lg: "16px", md: "14px", xs: "12px" },
                            animation: `${
                              prevTabIndex.current > index
                                ? "slideToLeft"
                                : "slideToRight"
                            } 0.25s linear`,
                          }}
                        >
                          {link?.title}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              )
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default NonsOffers;
