"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Namad from "./namad";
import SocialModel from "@/models/social";
import { fetChSocials } from "@/api/data";
import { useEffect, useState } from "react";

const links = [
  { title: "مجوز‌ها", link: "/" },
  { title: "فروشنده شوید", link: "/" },
  { title: "تماس باما", link: "/contact-us" },
  { title: "محصولات ما", link: "/products" },
  { title: "پشتیبانی", link: "/profile/support" },
];

const Footer = () => {
  const [socials, setSocials] = useState<SocialModel[]>([]);

  useEffect(() => {
    fetChSocials()
      .then((data) => {
        setSocials(data);
      })
      .catch((error) => {
        console.error("Error fetching socials:", error);
      });
  }, []);

  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black.main",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
          pt: { md: 6, xs: 2 },
          pb: { md: 4.5, xs: 16 },
        }}
      >
        <Container>
          <Box
            sx={{
              width: "100%",
              minHeight: "200px",
              display: "flex",
              flexWrap: { md: "nowrap", xs: "wrap" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Link href={"/"}>
                <Box sx={{ display: "flex" }}>
                  <Image
                    loading="lazy"
                    src="/images/logo.png"
                    width={157}
                    height={38}
                    alt="logo"
                  />
                </Box>
              </Link>
              <Typography
                sx={{
                  color: "#D9D9D9",
                  maxWidth: "471px",
                  mt: 4,
                  fontSize: "14px",
                  lineHeight: 2,
                }}
              >
                نونز یک بازار تجارت گیمینگ است که به شما امکان خرید و فروش سکه
                ها ، آیتم ها و اکانت های بازی های ویدئویی را بدون هیچ کارمزدی
                میدهد.
              </Typography>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  flexWrap: { md: "nowrap", xs: "wrap" },
                  alignItems: "center",
                  gap: 3,
                  mt: 4,
                }}
              >
                {links?.map((item, index) => (
                  <Box key={index}>
                    <Link href={item?.link}>
                      <Typography sx={{ color: "white", fontWeight: "500" }}>
                        {item?.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                alignItems: "center",
                gap: 3,
                py: 3,
                px: 2,
              }}
            >
              <Namad
                height="47px"
                width="140px"
                namad={{
                  title: "پرداخت امن زیبال",
                  image: "/images/icons/zibal.png",
                }}
              />
              <Namad
                height="80px"
                width="100px"
                namad={{
                  title: "نماد اعتماد الکترونیک",
                  image: "/images/icons/enamad.png",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: { md: "none", xs: "block" },
                mt: 4,
              }}
            >
              <Grid container rowGap={3}>
                {links?.map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Box>
                      <Link href={item?.link}>
                        <Typography
                          sx={{
                            color: "white",
                            fontWeight: "500",
                            fontSize: "13px",
                          }}
                        >
                          {item?.title}
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Namad
                    width="113px"
                    height="38px"
                    namad={{
                      title: "پرداخت امن زیبال",
                      image: "/images/icons/zibal.png",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Namad
                    width="70px"
                    height="70px"
                    namad={{
                      title: "نماد اعتماد الکترونیک",
                      image: "/images/icons/enamad.png",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: { md: "68px", xs: "fit-content" },
              display: "flex",
              flexWrap: { md: "nowrap", xs: "wrap" },
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #98A2B3",

              mt: { md: 6, xs: "10px" },
            }}
          >
            <Typography
              sx={{
                color: "white",
                order: { md: 1, xs: 2 },
                mr: { lg: 6, xs: 0 },
                fontSize: { md: "16px", xs: "12px" },
                textAlign: { md: "start", xs: "center" },
                width: { md: "fit-content", xs: "100%" },
                mt: { md: 0, xs: "10px" },
              }}
            >
              © 1403 تجارت الکترونیک نوین پردازان.کلیه حقوق محفوظ است
            </Typography>
            <Box
              sx={{
                height: { md: "fit-content", xs: "68px" },
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "start", xs: "center" },
                order: { md: 2, xs: 1 },
                ml: { lg: 18, xs: 0 },
                width: { md: "fit-content", xs: "100%" },
                gap: 4,
              }}
            >
              {socials?.reverse()?.map((social: SocialModel) => (
                <Box key={social?.id}>
                  <Link href={social?.link}>
                    <Box sx={{ display: "flex" }}>
                      <Image
                        loading="lazy"
                        src={
                          process.env.NEXT_PUBLIC_SERVER + "/" + social?.image
                        }
                        width={24}
                        height={24}
                        alt={social?.title}
                      />
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center",mt:{md:"0px",xs:2}}}>
            <Link href="https://rubysa.ir/" target="_blank" rel="follow">
          <Box sx={{ display: "flex", gap:1, alignItems:"center" }}>
            <Image src="/images/rubysa.png" width={24.35} height={18} alt="rubysa" />
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", color: "white" }}
            >
              توسعه داده شده توسط روبیسا
            </Typography>
          </Box>
          </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
